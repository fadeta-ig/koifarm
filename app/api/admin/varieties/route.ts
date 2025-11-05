import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import { revalidatePath } from "next/cache";

const dataPath = path.join(
  process.cwd(),
  "app/admin/data/content.json"
);

async function readData() {
  const fileContents = await fs.readFile(dataPath, "utf8");
  return JSON.parse(fileContents);
}

async function writeData(data: any) {
  await fs.writeFile(dataPath, JSON.stringify(data, null, 2));
  // Trigger revalidation of landing page immediately
  revalidatePath("/", "page");
}

export async function GET() {
  try {
    const data = await readData();
    return NextResponse.json(data.varieties);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to read varieties" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const newVariety = await request.json();
    const data = await readData();

    const id = Date.now().toString();
    const variety = { id, ...newVariety };

    data.varieties.push(variety);
    await writeData(data);

    return NextResponse.json(variety, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create variety" },
      { status: 500 }
    );
  }
}

export async function PUT(request: NextRequest) {
  try {
    const updatedVariety = await request.json();
    const data = await readData();

    const index = data.varieties.findIndex(
      (v: any) => v.id === updatedVariety.id
    );
    if (index === -1) {
      return NextResponse.json(
        { error: "Variety not found" },
        { status: 404 }
      );
    }

    data.varieties[index] = updatedVariety;
    await writeData(data);

    return NextResponse.json(updatedVariety);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to update variety" },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { error: "ID is required" },
        { status: 400 }
      );
    }

    const data = await readData();
    data.varieties = data.varieties.filter((v: any) => v.id !== id);
    await writeData(data);

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to delete variety" },
      { status: 500 }
    );
  }
}

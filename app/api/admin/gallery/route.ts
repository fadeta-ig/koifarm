import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

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
}

export async function GET() {
  try {
    const data = await readData();
    return NextResponse.json(data.gallery);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to read gallery" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const newItem = await request.json();
    const data = await readData();

    const id = Date.now().toString();
    const item = { id, ...newItem };

    data.gallery.push(item);
    await writeData(data);

    return NextResponse.json(item, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create gallery item" },
      { status: 500 }
    );
  }
}

export async function PUT(request: NextRequest) {
  try {
    const updatedItem = await request.json();
    const data = await readData();

    const index = data.gallery.findIndex(
      (g: any) => g.id === updatedItem.id
    );
    if (index === -1) {
      return NextResponse.json(
        { error: "Gallery item not found" },
        { status: 404 }
      );
    }

    data.gallery[index] = updatedItem;
    await writeData(data);

    return NextResponse.json(updatedItem);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to update gallery item" },
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
    data.gallery = data.gallery.filter((g: any) => g.id !== id);
    await writeData(data);

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to delete gallery item" },
      { status: 500 }
    );
  }
}

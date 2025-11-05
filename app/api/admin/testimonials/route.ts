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
    return NextResponse.json(data.testimonials);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to read testimonials" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const newTestimonial = await request.json();
    const data = await readData();

    const id = Date.now().toString();
    const testimonial = { id, ...newTestimonial };

    data.testimonials.push(testimonial);
    await writeData(data);

    return NextResponse.json(testimonial, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create testimonial" },
      { status: 500 }
    );
  }
}

export async function PUT(request: NextRequest) {
  try {
    const updatedTestimonial = await request.json();
    const data = await readData();

    const index = data.testimonials.findIndex(
      (t: any) => t.id === updatedTestimonial.id
    );
    if (index === -1) {
      return NextResponse.json(
        { error: "Testimonial not found" },
        { status: 404 }
      );
    }

    data.testimonials[index] = updatedTestimonial;
    await writeData(data);

    return NextResponse.json(updatedTestimonial);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to update testimonial" },
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
    data.testimonials = data.testimonials.filter(
      (t: any) => t.id !== id
    );
    await writeData(data);

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to delete testimonial" },
      { status: 500 }
    );
  }
}

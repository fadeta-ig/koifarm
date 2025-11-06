import { NextRequest, NextResponse } from "next/server";
import { readFile, writeFile } from "fs/promises";
import path from "path";
import { revalidatePath } from "next/cache";

const contentPath = path.join(process.cwd(), "app/admin/data/content.json");

export async function GET() {
  try {
    const content = await readFile(contentPath, "utf-8");
    const data = JSON.parse(content);
    return NextResponse.json(data.contact || {});
  } catch (error) {
    console.error("Error reading contact data:", error);
    return NextResponse.json(
      { error: "Failed to read contact data" },
      { status: 500 }
    );
  }
}

export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const content = await readFile(contentPath, "utf-8");
    const data = JSON.parse(content);

    data.contact = {
      whatsappNumber: body.whatsappNumber,
      whatsappTemplate: body.whatsappTemplate,
      address: body.address,
      schedule: body.schedule,
      latitude: body.latitude,
      longitude: body.longitude,
      mapUrl: body.mapUrl,
    };

    await writeFile(contentPath, JSON.stringify(data, null, 2));

    // Revalidate the home page to show updated contact info
    revalidatePath("/");

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error updating contact data:", error);
    return NextResponse.json(
      { error: "Failed to update contact data" },
      { status: 500 }
    );
  }
}

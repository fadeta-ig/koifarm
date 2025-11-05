import { NextRequest, NextResponse } from "next/server";
import { readFile, writeFile } from "fs/promises";
import path from "path";
import { revalidatePath } from "next/cache";

const contentPath = path.join(process.cwd(), "app/admin/data/content.json");

export async function GET() {
  try {
    const content = await readFile(contentPath, "utf-8");
    const data = JSON.parse(content);
    return NextResponse.json(data.hero || {});
  } catch (error) {
    console.error("Error reading hero data:", error);
    return NextResponse.json(
      { error: "Failed to read hero data" },
      { status: 500 }
    );
  }
}

export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const content = await readFile(contentPath, "utf-8");
    const data = JSON.parse(content);

    data.hero = {
      mediaSrc: body.mediaSrc,
      mediaAlt: body.mediaAlt,
      badge: body.badge,
      badgeSubtext: body.badgeSubtext,
    };

    await writeFile(contentPath, JSON.stringify(data, null, 2));

    // Revalidate the home page to show updated hero
    revalidatePath("/");

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error updating hero data:", error);
    return NextResponse.json(
      { error: "Failed to update hero data" },
      { status: 500 }
    );
  }
}

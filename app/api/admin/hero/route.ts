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
      title: body.title || "Koi Premium Terbaik",
      description: body.description || "Temukan koi unggulan dari bloodline juara dengan pendampingan ahli end-to-end. Data kesehatan lengkap dan garansi kualitas terjamin.",
      stats: body.stats || [
        { label: "Koi Siap Kirim", value: "120+" },
        { label: "Bloodline Juara", value: "18" },
        { label: "Tingkat Survival", value: "99%" },
      ],
      featureCards: body.featureCards || [
        { title: "Tersertifikasi Bloodline Juara", description: "Kemitraan langsung dengan breeder Jepang" },
        { title: "Garansi Kualitas", description: "Data kesehatan lengkap dan jaminan kualitas terbaik" },
        { title: "Pendampingan Ahli", description: "Konsultasi gratis dari expert koi berpengalaman" },
        { title: "Pengiriman Aman", description: "Sistem packing professional ke seluruh Indonesia" },
      ],
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

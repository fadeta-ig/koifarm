import { revalidatePath } from "next/cache";

export async function triggerRevalidation() {
  try {
    // Revalidate landing page
    revalidatePath("/", "page");
    console.log("✅ Landing page revalidated");
  } catch (error) {
    console.error("Failed to revalidate:", error);
  }
}

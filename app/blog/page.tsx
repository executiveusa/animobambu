import { redirect } from "next/navigation";

// Keep the original Webflow /blog destination while reusing the existing journal page.
export default function BlogPage() {
  redirect("/bitacora");
}

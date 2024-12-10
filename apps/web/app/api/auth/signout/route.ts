//import { authFetch } from "@/lib/authFetch";
import { BACKEND_URL } from "@/lib/constants";
import { deleteSession } from "@/lib/session";
import { revalidatePath } from "next/cache";
import { redirect, RedirectType } from "next/navigation";

import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  //   const respone = await authFetch(`${BACKEND_URL}/auth/signout`, {
  //     method: "POST",
  //   });
  //   if (respone.ok) {
  //   }
  await deleteSession();
  revalidatePath("/");
  return NextResponse.redirect(new URL("/", req.nextUrl));
  // redirect("/", RedirectType.push);
}

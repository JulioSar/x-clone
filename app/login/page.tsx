import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import AuthButtonClient from "../auth-button-client";

export default async function Login() {
  const supabase = createServerComponentClient<Database>({ cookies });

  const {
    data: { session },
  } = await supabase.auth.getSession();
  if (session) {
    console.log("session activated");
    redirect("/");
  }

  return (
    <div className="flex1 flex items-center justify-center min-w-full">
      <AuthButtonClient session={session} />
    </div>
  );
}

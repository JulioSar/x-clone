"use client";

import {
  Session,
  createClientComponentClient,
} from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import GitHubButton from "./login/github-button";

export default function AuthButtonClient<Database>({
  session,
}: {
  session: Session | null;
}) {
  const router = useRouter();
  const supabase = createClientComponentClient<Database>();
  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.refresh();
  };

  return session ? (
    <button className="txt-xs text-gray-400" onClick={handleSignOut}>
      Log Out
    </button>
  ) : (
    <div className="flex items-center align-middle">
      <GitHubButton />
    </div>
  );
}

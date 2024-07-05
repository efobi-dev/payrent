"use client";

import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import ComingSoon from "@/components/CominSoon";

export default function UserDashboard() {
  const { isSignedIn } = useAuth();
  const router = useRouter();

  if (!isSignedIn) {
    router.push("/sign-up");
  }

  return (
    <section>
      <ComingSoon />
    </section>
  );
}

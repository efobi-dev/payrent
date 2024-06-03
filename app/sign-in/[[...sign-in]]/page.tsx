import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <section className="items-center justify-center">
      <SignIn />
    </section>
  );
}

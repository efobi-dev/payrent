import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <section className="flex flex-col">
      <SignUp
        appearance={{
          elements: {
            rootBox: "flex place-self-center",
            formButtonPrimary: "bg-orange-500",
          },
        }}
      />
    </section>
  );
}

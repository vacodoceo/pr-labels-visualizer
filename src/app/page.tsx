import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/auth-options";
import { redirect } from "next/navigation";
import { SignOutButton } from "@/components/buttons/sign-out-button";

const Home = async () => {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/api/auth/signin");

  console.log({ session });

  return (
    <main className="flex flex-col items-center p-8 space-y-8">
      PR Label Visualizer
      <SignOutButton />
    </main>
  );
};

export default Home;

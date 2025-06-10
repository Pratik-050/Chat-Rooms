import Navbar from "@/components/base/Navbar";
import { getServerSession } from "next-auth";
import { authOptions, CustomSession } from "./api/auth/[...nextauth]/options";

export default async function Home() {
  const session: CustomSession | null = await getServerSession(authOptions);

  return (
    <>
      <Navbar user={session?.user ?? null} />
    </>
  );
}

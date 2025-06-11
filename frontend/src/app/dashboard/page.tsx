import DashNav from "@/components/dashboard/DashNav";
import { getServerSession } from "next-auth";
import React from "react";
import { authOptions, CustomSession } from "../api/auth/[...nextauth]/options";

const dashboard = async () => {
  const session: CustomSession | null = await getServerSession(authOptions);
  return (
    <>
      <DashNav
        name={session?.user?.name!}
        image={session?.user?.image! ?? undefined}
      />
    </>
  );
};

export default dashboard;

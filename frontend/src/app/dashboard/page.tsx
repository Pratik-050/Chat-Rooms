import DashNav from "@/components/dashboard/DashNav";
import { getServerSession } from "next-auth";
import React from "react";
import { authOptions, CustomSession } from "../api/auth/[...nextauth]/options";
import CreateChat from "@/components/groupChat/CreateChat";
import { fetchChatGroups } from "@/fetch/groupFetch";
import GroupChatCard from "@/components/groupChat/GroupChatCard";

const dashboard = async () => {
  const session: CustomSession | null = await getServerSession(authOptions);
  const groups: Array<ChatGroupType> | [] = await fetchChatGroups(
    session?.user?.token!
  );

  return (
    <>
      <DashNav
        name={session?.user?.name!}
        image={session?.user?.image! ?? undefined}
      />
      <div className="mt-10 justify-end flex px-12">
        <CreateChat user={session?.user!} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6 px-12">
        {groups.length > 0 ? (
          groups.map((item, index) => (
            <GroupChatCard group={item} key={index} user={session?.user!} />
          ))
        ) : (
          <p className="font-bold text-xl text-center">No groups found...</p>
        )}
      </div>
    </>
  );
};

export default dashboard;

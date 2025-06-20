import ChatBase from "@/components/chat/ChatBase";
import { fetchChats } from "@/fetch/chatsFetch";
import { fetchChatGroup } from "@/fetch/groupFetch";
import { fetchChatGroupUsers } from "@/fetch/usersFetch";
import React from "react";

const chat = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  if (id.length !== 36) {
    throw new Error("Invalid chat group ID");
  }
  const group: ChatGroupType | null = await fetchChatGroup(id);
  if (!group) {
    throw new Error("Chat group not found");
  }
  const users: Array<GroupChatUserType> | null = await fetchChatGroupUsers(id);
  const chats: Array<MessageType> | null = await fetchChats(id);
  return (
    <>
      <ChatBase group={group} users={users!} oldMessages={chats!} />
    </>
  );
};

export default chat;

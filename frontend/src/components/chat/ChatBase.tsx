"use client";
import { getSocket } from "@/lib/socket.config";
import React, { useEffect, useMemo, useState } from "react";
import { Button } from "../ui/button";
import ChatNav from "./ChatNav";
import ChatSidebar from "./ChatSidebar";
import ChatUserDialog from "./ChatUserDialog";
import { fetchChats } from "@/fetch/chatsFetch";
import Chats from "./Chats";

const ChatBase = ({
  group,
  users,
  oldMessages,
}: {
  group: ChatGroupType;
  users: Array<GroupChatUserType> | [];
  oldMessages: Array<MessageType> | [];
}) => {
  const [open, setOpen] = useState(true);
  const [chatUser, setChatUser] = useState<GroupChatUserType>();
  useEffect(() => {
    const data = localStorage.getItem(group.id);
    if (data) {
      const jsonData = JSON.parse(data);
      if (jsonData) {
        setChatUser(jsonData);
      }
    }
  }, [group.id]);

  return (
    <div className="flex">
      <ChatSidebar users={users} />
      <div className="md:w-full w-4/5 bg-gradient-to-b from-gray-50 to-white">
        {open ? (
          <ChatUserDialog open={open} setOpen={setOpen} group={group} />
        ) : (
          <ChatNav users={users} chatGroup={group} />
        )}
        <Chats group={group} oldMessages={oldMessages} chatUser={chatUser} />
      </div>
    </div>
  );
};

export default ChatBase;

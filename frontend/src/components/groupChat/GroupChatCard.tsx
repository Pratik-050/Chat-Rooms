"use client";
import React from "react";
import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import DeleteChat from "./DeleteChat";
import { CustomUser } from "@/app/api/auth/[...nextauth]/options";
import Env from "@/lib/env";
import EditChat from "./EditChat";
import { Button } from "../ui/button";
import { toast } from "sonner";

const GroupChatCard = ({
  user,
  group,
}: {
  user: CustomUser;
  group: ChatGroupType;
}) => {
  const handleCopy = () => {
    navigator.clipboard?.writeText(`${Env.APP_URL}/chat/${group.id}`);
    toast.success("Link copied successfully!");
  };
  return (
    <>
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle>{group?.title}</CardTitle>
            <div className="flex items-center gap-4">
              <DeleteChat id={group?.id!} token={user?.token!} />
              <EditChat user={user} group={group} />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <p>Link to the room (click to copy): </p>
        </CardContent>
        <CardFooter>
          <Button variant="ghost" className="w-full" onClick={handleCopy}>
            <p>{`${Env.APP_URL}/chat/${group?.id}`}</p>
          </Button>
        </CardFooter>
      </Card>
    </>
  );
};

export default GroupChatCard;

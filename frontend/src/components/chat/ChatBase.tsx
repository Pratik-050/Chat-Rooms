"use client";
import { getSocket } from "@/lib/socket.config";
import React, { useEffect, useMemo } from "react";
import { Button } from "../ui/button";

const ChatBase = () => {
  let socket = useMemo(() => {
    const socket = getSocket();
    socket.connect();
    return socket;
  }, []);

  useEffect(() => {
    socket.on("message", (data: any) => {
      console.log("Message received from server:", data);
    });

    return () => {
      socket.close();
    };
  }, []);

  const handleClick = () => {
    socket.emit("message", {
      message: "Hello from client",
    });
  };

  return (
    <>
      <Button onClick={handleClick}>Send message</Button>
    </>
  );
};

export default ChatBase;

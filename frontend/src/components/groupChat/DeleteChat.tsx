"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { TrashIcon } from "lucide-react";
import { Button } from "../ui/button";
import axios from "axios";
import { CHAT_GROUP_URL } from "@/lib/apiEndPoints";
import { toast } from "sonner";
import { clearCache } from "@/actions/common";

const DeleteChat = ({ id, token }: { id: string; token: string }) => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleDelete = async () => {
    try {
      const { data } = await axios.delete(`${CHAT_GROUP_URL}/${id}`, {
        headers: {
          Authorization: token,
        },
      });
      if (data?.message) {
        clearCache("dashboard");
        toast.success(data.message);
        setOpen(false);
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      if (axios.isAxiosError(error)) {
        toast.error(error.message);
      } else {
        toast.error("An unexpected error occurred");
      }
    }
  };
  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="ghost">
            <TrashIcon className="h-4 w-4" />
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Delete Chat Room</DialogTitle>
            <DialogDescription>
              Are you sure? This can't be undone!
            </DialogDescription>
          </DialogHeader>
          <Button
            onClick={handleDelete}
            disabled={loading}
            variant="destructive"
          >
            {loading ? "Deleting..." : "Delete"}
          </Button>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default DeleteChat;

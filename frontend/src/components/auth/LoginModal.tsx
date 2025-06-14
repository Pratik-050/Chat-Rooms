"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import React from "react";
import { Button } from "../ui/button";
import { signIn } from "next-auth/react";

const propTypes = {};

const defaultProps = {};

const LoginModal = () => {
  const handleLogin = () => {
    signIn("google", {
      callbackUrl: "/dashboard",
      redirect: true,
    });
  };

  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button>Get Started</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Welcome to Quick Chat</DialogTitle>
            <DialogDescription>
              Create rooms with passwords to chat with friends. No need to
              register for everyone; only the host needs to register.
            </DialogDescription>
          </DialogHeader>
          <Button variant="outline" onClick={handleLogin}>
            Continue with Google
          </Button>
        </DialogContent>
      </Dialog>
    </>
  );
};

LoginModal.propTypes = propTypes;
LoginModal.defaultProps = defaultProps;

export default LoginModal;

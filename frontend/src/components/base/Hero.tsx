import React from "react";
import { Button } from "@/components/ui/button";
import { MessageSquare, Send } from "lucide-react";
import LoginModal from "../auth/LoginModal";

const Hero: React.FC = () => {
  return (
    <section className="w-full h-[90vh] bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-6">
      <div className="max-w-5xl text-center">
        {/* App Logo & Heading */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <MessageSquare className="text-blue-500 w-10 h-10" />
          <h1 className="text-8xl sm:text-5xl font-extrabold text-gray-800">
            Chat-Rooms
          </h1>
        </div>

        <p className="text-lg sm:text-xl text-gray-600 max-w-xl mx-auto mb-8">
          Connect instantly. Collaborate in real-time. Create meaningful
          conversations.
        </p>

        <LoginModal />

        {/* Decorative Chat Bubbles */}
        <div className="flex flex-col gap-4">
          <div className="mt-12 flex justify-center gap-4 opacity-80">
            <div className="bg-blue-500 text-white rounded-2xl px-4 py-2 shadow">
              👋 Hey there!
            </div>
            <div className="bg-white text-gray-700 border rounded-2xl px-4 py-2 shadow">
              Welcome to Chat-Rooms!
            </div>
          </div>
          <div className="bg-white text-gray-500 border rounded-2xl px-4 py-2 shadow">
            Create Room link and share the passcode with your friends to start
            chatting!
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

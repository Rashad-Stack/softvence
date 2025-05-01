"use client";
import { useEffect, useRef, useState } from "react";
import Analysis from "./Analysis";
import ChatbotButtons from "./ChatbotButtons";
import CoachingForm from "./CoachingForm";
import Message from "./Message";
import QuickActions from "./QuickActions";

interface IMessages {
  picture: string;
  message: string;
  ai: boolean;
}

export default function LiveAICoach() {
  const [messages, setMessages] = useState<IMessages[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  // Ref for the scrollable chat container
  const chatContainerRef = useRef<HTMLDivElement>(null);

  // Function to scroll to the bottom
  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  };

  // useEffect to scroll when messages change
  useEffect(() => {
    scrollToBottom();
  }, [messages]); // Dependency array includes messages

  return (
    <section className="bg-gradient-to-r from-[#0f3572] to-[#014fcd] px-4">
      <div className="container mx-auto max-w-7xl py-6">
        <span className="text-lg text-[#FCE38A]">Live Ai Coach</span>
        <h1 className="my-4 text-4xl text-white">Take a Suggestion Coaching</h1>
        <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-center">
          <div className="w-full flex-1">
            <div className="rounded-t-lg bg-[#fefeff] p-2">
              <h1 className="text-lg font-semibold">AI Sales Coach</h1>
            </div>
            {/* Scrollable container */}
            <div
              ref={chatContainerRef} // Assign the ref here
              className="h-96 space-y-5 overflow-y-auto bg-[#f2f3f3] px-4 py-3"
              style={{ scrollBehavior: "smooth" }} // Add smooth scrolling via CSS
            >
              <Message
                message="Hello! I'm your AI sales coach. How can I help you improve your sales performance today?"
                picture="https://github.com/shadcn.png"
                ai={true}
              />

              {messages.map((message, index) => (
                <Message key={index} {...message} />
              ))}
              {isLoading && <p>Loading...</p>}
            </div>
            <div className="rounded-b-lg bg-[#fefeff] px-2 py-4">
              <CoachingForm
                setIsLoading={setIsLoading}
                setMessages={setMessages}
              />
            </div>
          </div>
          <div className="flex flex-1 flex-col items-center justify-between gap-4 lg:flex-row">
            <ChatbotButtons />
            <div className="w-full flex-1 space-y-5">
              <Analysis />
              <QuickActions />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

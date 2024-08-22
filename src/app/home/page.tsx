"use client";

import { useRef, useEffect } from "react";
import { useChat } from "ai/react";
import { Chat } from "@/components/chat";
import { ChatBar } from "@/components/chat/chat-bar";
import { GenerateBasic } from "@/components/chat/generate-basic";

export default function Home() {
  const containerRef = useRef<any>(null);
  const { messages, ...rest } = useChat({});

  useEffect(() => {
    if (containerRef.current && messages) {
      containerRef.current.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    }
  }, [messages]);

  return (
    <div
      className="flex flex-grow items-center flex-col p-4 overflow-y-auto"
      ref={containerRef}
    >
      <Chat messages={messages} isLoading={rest.isLoading} />
      {messages.length === 0 && (
        <div className="fixed bottom-24 p-4 w-5/12">
          <GenerateBasic append={rest.append} />
        </div>
      )}
      {/* TODO: Disabled if no documents uploaded */}
      <ChatBar {...rest} containerRef={containerRef} />
    </div>
  );
};

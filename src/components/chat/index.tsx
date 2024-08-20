import React, { Fragment } from "react";
import { type Message } from "ai/react";
import { MarkdownRender } from "../markdown-render";
import { SourceDocumentLoader } from "../document-loader";

export function Chat({
  messages,
  isLoading
}: {
  messages: Message[];
  isLoading: boolean;
}) {
  return (
    <div className="flex flex-col mb-32 w-full">
      {messages.map((message) => (
        <Fragment key={message.id} >
          <div className="my-4" >
            {
              message.role === "user" && (
                <div className="first-letter:uppercase text-3xl leading-relaxed text-sky-800">
                  {message.content}
                </div>
              )
            }

            {
              message.role === "assistant" && (
                <div
                  className={
                    `text-wrap ${isLoading ? "" : "border-b"
                    } pb-16 mb-4 w-full overflow-x-hidden`
                  }
                >
                  <MarkdownRender markdownContent={message.content} />
                </div>
              )}
          </div>

          {
            message.role === "user" && (
              <SourceDocumentLoader
                title="Sources"
                key={message.id}
                query={message.content}
              />
            )
          }
        </Fragment>
      ))}
    </div>
  );
};
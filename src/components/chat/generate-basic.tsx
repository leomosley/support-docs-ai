"use client"

import useGenerate from "@/hooks/use-generate";
import { TriangleAlert } from "lucide-react";

export function GenerateBasic({ append }: { append: any }) {
  const { data, loading } = useGenerate<Array<string>>({ count: 4 });

  const handleOnClick = (content: string) => {
    content && append({ id: "", role: "user", content });
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-row mx-auto flex-wrap justify-center">
        {loading && (
          <div className="bg-gray-100 py-4 px-4 rounded-lg w-full animate-pulse">
            Generating quick questions...
          </div>
        )}

        {data?.map((value: string) => (
          <div
            key={value}
            className="cursor-pointer mx-2 rounded-lg border my-2 border-gray-400 p-2 text-sm flex items-center"
            onClick={() => handleOnClick(value)}
          >
            <span>{value}</span>
          </div>
        ))}

        {(!loading && data?.length) === 0 && (
          <div className="flex gap-2 bg-gray-100 p-4 w-full rounded-lg">
            <TriangleAlert />
            <span>{"You haven't uploaded any documents yet. Head to the documents manager to add some in order to use the chat."}</span>
          </div>
        )}
      </div>
    </div>
  );
};

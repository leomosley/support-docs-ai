import { memo } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { components } from "./markdown-components";

/**
 * A React component that renders Markdown content
 *
 * @component
 * @param {Props} props - The component props.
 * @returns {JSX.Element} The rendered Markdown content.
 */
export const MarkdownRender = memo(({ markdownContent }: { markdownContent: string; }) => {
  return (
    <div>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        components={components}
      >
        {markdownContent}
      </ReactMarkdown>
    </div>
  );
});

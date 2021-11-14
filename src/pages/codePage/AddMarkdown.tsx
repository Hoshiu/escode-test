import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { duotoneLight } from "react-syntax-highlighter/dist/esm/styles/prism";
import '../../styles/markdown.css'
import ReactMarkdown from "react-markdown";

const AddMarkdown = (props: { descrption: any; }) => {
  return (
		<>
			<ReactMarkdown
      children={props.descrption}
      components={{
        code({ node, inline, className, children, ...props }: any) {
          const match = /language-(\w+)/.exec(className || "");
          return !inline && match ? (
            <SyntaxHighlighter
              children={String(children).replace(/\n$/, "")}
              style={duotoneLight}
              language={match[1]}
              PreTag="div"
              {...props}
            />
          ) : (
            <code className={className} {...props}>
              {children}
            </code>
          );
        },
      }}
      remarkPlugins={[remarkGfm]}
    />
		</>
	)
};

export default AddMarkdown;

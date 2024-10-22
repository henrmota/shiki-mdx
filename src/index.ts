import { visit } from "unist-util-visit";
import { Node } from "unist";
import { Code, Html } from "mdast";
import { getSingletonHighlighter } from "shiki";
// Custom plugin with `unist-util-visit`
export function remarkShikiMdx({ theme }: { theme: string }) {
  return async (tree: Node) => {
    const highlighter = await getSingletonHighlighter({
      themes: [theme],
      langs: ["js", "jsx", "ts", "tsx", "glsl"],
    });

    visit(tree, "code", (node: Code | Html) => {
      const lang = (node as Code).lang || "text";

      // Generate the highlighted code HTML
      const highlightedCode = highlighter.codeToHtml(node.value, {
        lang,
        theme,
      });

      node.type = "html";
      node.value = highlightedCode;
    });
  };
}

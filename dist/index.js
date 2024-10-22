var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { visit } from "unist-util-visit";
import { getSingletonHighlighter } from "shiki";
// Custom plugin with `unist-util-visit`
export function remarkShikiMdx({ theme }) {
    return (tree) => __awaiter(this, void 0, void 0, function* () {
        const highlighter = yield getSingletonHighlighter({
            themes: [theme],
            langs: ["js", "jsx", "ts", "tsx", "glsl"],
        });
        visit(tree, "code", (node) => {
            const lang = node.lang || "text";
            // Generate the highlighted code HTML
            const highlightedCode = highlighter.codeToHtml(node.value, {
                lang,
                theme,
            });
            node.type = "html";
            node.value = highlightedCode;
        });
    });
}

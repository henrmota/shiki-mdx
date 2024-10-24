# @henmota/shiki-mdx

A plugin for MDX that utilizes Shiki for syntax highlighting. This package is designed to be used in conjunction with Next.js and the `remote-mdx` library.

## Installation

To install the package, you can use npm or yarn. Make sure to also install Shiki as a peer dependency.

```bash
npm install @henmota/shiki-mdx shiki rehype-raw
```

## Usage

```js
import { compileMDX } from "remote-mdx";
import { remarkShikiMdx } from "@henmota/shiki-mdx";
import remarkMath from "remark-math";
import remarkGfm from "remark-gfm";
import rehypeKatex from "rehype-katex";
import rehypeRaw from "rehype-raw";

const content = `
# Your MDX Content Here

\`\`\`js
console.log('Hello, world!');
\`\`\`
`;

const components = {}; // Your custom components

const { frontmatter, mdxContent } = await compileMDX({
  source: content,
  components: { ...defaultComponents, ...components },
  options: {
    mdxOptions: {
      remarkPlugins: [
        remarkMath,
        remarkGfm,
        [remarkShikiMdx, { theme: "vitesse-dark" }],
      ],
      rehypePlugins: [rehypeRaw],
      format: "mdx",
    },
    parseFrontmatter: true,
  },
});
```

## Peer Dependencies

This package requires shiki as a peer dependency. Ensure that it is installed in your project.

## Supported Themes

Shiki supports a variety of themes. For a full list of available themes, check the Shiki documentation.


www.lerp.dev

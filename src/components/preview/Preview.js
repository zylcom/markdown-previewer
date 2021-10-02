import React from "react";
import marked from "marked";
// import Prism from "prismjs";
import "./Preview.css";
import "prismjs/themes/prism-tomorrow.css";

const Preview = ({ body, size }) => {
  marked.setOptions({
    gfm: true,
    breaks: true,
    // highlight: function (code) {
    //   return Prism.highlight(code, Prism.languages.javascript, "javascript");
    // },
  });

  const renderer = {
    heading(text, level) {
      const escapedText = text.toLowerCase().replace(/[^\w]+/g, "-");
      let border = 0;
      switch (level) {
        case 1:
          border = 3;
          break;
        case 2:
          border = 2;
          break;
        case 3:
          border = 1;
          break;
        default:
          border = 0;
          break;
      }

      return `<h${level} id="${escapedText}" class="border-bottom border-secondary border-${border} pb-1">${text}</h${level}>`;
    },
    blockquote(text) {
      return `<blockquote class="border-start border-primary border-3 ps-2 ms-3"><p>${text}</p></blockquote>
      `;
    },
    code(code, infostring, escaped) {
      return `<pre class="language-${infostring}"><code class="language-${infostring}">${code}</code></pre>`;
      // return Prism.highlight(code, Prism.languages.javascript, "javascript");
    },
    codespan(code) {
      return `<code><kbd>${code}</kbd></code>`;
    },
    table(header, body) {
      return `<table class="table table-bordered border-info"><thead>${header}</thead><tbody>${body}</tbody></table>`;
    },
  };
  marked.use({ renderer });

  return (
    <div
      className={`preview-wrapper ${size} p-2`}
      id="preview"
      dangerouslySetInnerHTML={{ __html: marked(body) }}
    />
  );
};

export default Preview;

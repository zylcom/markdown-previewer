import { useState } from "react";
import Editor from "./components/editor/Editor";
import Preview from "./components/preview/Preview";
import Toolbar from "./components/toolbar/Toolbar";

function App() {
  const [markdown, setMarkdown] = useState(`# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`js
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
      - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)`);
  const [editorMaximized, setEditorMaximized] = useState([false, "", "6"]);
  const [previewMaximized, setPreviewMaximized] = useState([false, "", "6", ""]);

  const handleEditorMaximized = (value) => {
    if (!editorMaximized[0]) {
      setPreviewMaximized(["", "hide", ""]);
      return setEditorMaximized([value, "", "10"]);
    }

    setTimeout(() => {
      setPreviewMaximized([false, "", "6"]);
    }, 1000);

    setEditorMaximized([value, "", "6"]);
  };

  const handlePreviewMaximized = (value) => {
    if (!previewMaximized[0]) {
      setEditorMaximized(["", "hide", ""]);
      return setPreviewMaximized([value, "", "10", "maximized"]);
    }

    setTimeout(() => {
      setEditorMaximized([false, "", "6"]);
    }, 1000);

    setPreviewMaximized([value, "", "6"]);
  };

  const handleMarkdownInput = (value) => {
    setMarkdown(value);
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div
          className={`col-md-${editorMaximized[2]} ${editorMaximized[1]}`}
          style={{ transition: "width 1s" }}
        >
          <Toolbar
            title="Editor"
            maximized={editorMaximized[0]}
            onClickMaximized={(value) => handleEditorMaximized(value)}
          />
          <Editor placeholder={markdown} onMarkdownInput={(value) => handleMarkdownInput(value)} />
        </div>
        <div
          className={`col-md-${previewMaximized[2]} ${previewMaximized[1]}`}
          style={{ transition: "width 1s" }}
        >
          <Toolbar
            title="Preview"
            maximized={previewMaximized[0]}
            onClickMaximized={(value) => handlePreviewMaximized(value)}
          />
          <Preview size={previewMaximized[3]} body={markdown} />
        </div>
      </div>
    </div>
  );
}

export default App;

import React from "react";
import "./Editor.css";

const Editor = ({ onMarkdownInput, placeholder }) => {
  const handleChange = (e) => {
    onMarkdownInput(e.target.value);
  };

  return (
    <div className="editor-wrapper">
      <div className="shadow-lg mb-3">
        <textarea
          className="form-control text-input"
          id="editor"
          rows="20"
          value={placeholder}
          onChange={handleChange}
        ></textarea>
      </div>
    </div>
  );
};

export default Editor;

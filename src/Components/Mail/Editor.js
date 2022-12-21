import React from "react";
import { Editor } from "react-draft-wysiwyg";

const EditorStyledToolbar = () => (
  <Editor
    toolbarClassName="demo-toolbar-custom"
    wrapperClassName="demo-wrapper"
    editorClassName="demo-editor-custom"
    toolbar={{
      emoji: {
        className: "demo-option-custom",
        popupClassName: "demo-popup-custom",
      },
    }}
  />
);
export default EditorStyledToolbar;

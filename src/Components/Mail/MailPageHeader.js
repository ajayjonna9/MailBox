import React, { useState } from "react";
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const MailPageHeader = () => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  return (
    <div className="Ap">
      <header className="App-header">Rich Text Editor Example</header>

      <Editor editorState={editorState} onEditorStateChange={setEditorState} />
    </div>
  );
};
export default MailPageHeader;

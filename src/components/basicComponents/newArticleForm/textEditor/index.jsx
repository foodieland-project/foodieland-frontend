import { useEffect, useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "./text-editor.css";
function TextEditor() {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  useEffect(() => {
    console.log(editorState);
  }, [editorState]);
  return (
    <div>
      <h1 className="mb-3 ml-2">Description</h1>
      <div className="h-[400px] border border-black rounded-xl overflow-hidden ">
        <Editor
          editorState={editorState}
          onEditorStateChange={setEditorState}
        />
      </div>
    </div>
  );
}
export default TextEditor;

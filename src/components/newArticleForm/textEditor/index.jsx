import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import "./text-editor.css";

function TextEditor({ textHandler }) {
  return (
    <div>
      <h1 className="mb-3 ml-2">Description</h1>
      <div className=" border border-black rounded-xl overflow-hidden ">
        <CKEditor
          editor={ClassicEditor}
          data="<p></p>"
          onReady={(editor) => {
            console.log("Editor is ready to use!", editor);
          }}
          onChange={(event, editor) => {
            const data = editor.getData();
            textHandler(data);
          }}
        />
      </div>
    </div>
  );
}
export default TextEditor;

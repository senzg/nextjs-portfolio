import { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";

function Texteditor() {
  const editorRef = useRef(null);

  const logContent = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };

  return (
    <div className="App">
      <h1>React + TinyMCE Demo</h1>
      <Editor
        apiKey="hmu2ykirzfni8oo5x93hpuloxirw9w960gxqns7h2su6nt3t"
        // using free API key
        onInit={(evt, editor) => (editorRef.current = editor)}
        initialValue="<p>Start creating something amazing...</p>"
        init={{
          height: 500,
          menubar: true,
          plugins: [
            // Core editing features
            'anchor', 'autolink', 'charmap', 'codesample', 'emoticons', 'image', 'link', 'lists', 'media', 'searchreplace', 'table', 'visualblocks', 'wordcount',
            // Your account includes a free trial of TinyMCE premium features
            // Try the most popular premium features until Jan 1, 2025:
            
            // 'checklist', 'mediaembed', 'casechange', 'export', 'formatpainter', 'pageembed', 'a11ychecker', 'tinymcespellchecker', 'permanentpen', 'powerpaste', 'advtable', 'advcode', 'editimage', 'advtemplate', 'ai', 'mentions', 'tinycomments', 'tableofcontents', 'footnotes', 'mergetags', 'autocorrect', 'typography', 'inlinecss', 'markdown','importword', 'exportword', 'exportpdf'
          ],
          toolbar:
            "undo redo | formatselect | bold italic backcolor | \
            alignleft aligncenter alignright alignjustify | \
            bullist numlist outdent indent | removeformat | help",
        }}
      />
      <button 
        className="flex items-center mt-4 px-3 py-2 bg-green-400 border rounded text-white hover:text-slate hover:border-white"
        onClick={logContent}>
            Log Content
      </button>
    </div>
  );
}

export default Texteditor;
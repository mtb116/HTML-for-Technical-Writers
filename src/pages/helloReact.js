import React, { useRef, useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';

export default function App() {

  const [value, setValue] = useState('The quick brown fox jumps over the lazy dog');
  const [text, setText] = useState('');

  return (
    <>
      <Editor
        tinymceScriptSrc={'/tinymce/tinymce.min.js'}
        value={value}
        init={{
          height: 500,
          menubar: true,
          plugins: [
            'advlist', 'autolink', 'lists', 'link', 'image', 'charmap',
            'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
            'insertdatetime', 'media', 'table', 'preview', 'help', 'wordcount'
          ],
          toolbar: 'undo redo | blocks | ' +
            'bold italic forecolor | alignleft aligncenter ' +
            'alignright alignjustify | bullist numlist outdent indent | ' +
            'removeformat | help',
          content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
        }}
        onEditorChange={(newValue, editor) => {
          setValue(newValue);
          setText(editor.getContent());
        }}
      />
      <pre>{text}</pre>
    </>
  );
}
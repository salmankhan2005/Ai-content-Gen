import React, { useEffect, useRef } from 'react';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import { Button } from '@/components/ui/button';
import { Copy } from 'lucide-react';

interface props {
  aiOutput: string;
}

function OutputSection({ aiOutput }: props) {
  const editorRef = useRef<any>(null);

  useEffect(() => {
    if (editorRef.current && aiOutput) {
      const editorInstance = editorRef.current.getInstance();
      editorInstance.setMarkdown(aiOutput); // Set markdown value to editor
    }
  }, [aiOutput]); // Trigger useEffect when aiOutput changes

  const handleCopy = () => {
    if (editorRef.current) {
      const editorInstance = editorRef.current.getInstance();
      const content = editorInstance.getMarkdown(); // Get the markdown content

      // Use navigator.clipboard to copy the content
      navigator.clipboard.writeText(content).then(() => {
        alert('Content copied to clipboard!');
      }).catch((err) => {
        console.error('Failed to copy: ', err);
      });
    }
  };

  return (
    <div className="bg-white p-5 mr-4 rounded-md">
      <div className="flex justify-between items-center p-5 text-black">
        <h2>Your Result</h2>
        <Button onClick={handleCopy}>
          <Copy /> Copy
        </Button>
      </div>

      {/* Force white text for editor content */}
      <div className="toastui-editor-content text-white">
        <Editor
          ref={editorRef}
          initialValue=""
          previewStyle="vertical"
          height="500px"
          initialEditType="markdown"
          useCommandShortcut={true}
          onChange={() => {
            if (editorRef.current) {
              console.log(editorRef.current.getInstance().getMarkdown());
            }
          }}
        />
      </div>
    </div>
  );
}

export default OutputSection;

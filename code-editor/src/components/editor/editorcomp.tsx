import React from "react";
import Editor from "@monaco-editor/react";
const EditorComp = () => {
  return (
    <>
      <Editor
        height="75vh"
        width={"70%"}
        defaultLanguage="javascript"
        defaultValue="// some comment"
      />
      ;
    </>
  );
};

export default EditorComp;

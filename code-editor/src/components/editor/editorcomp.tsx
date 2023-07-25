import React from "react";
import Editor from "@monaco-editor/react";
type EditorProps = {
  handleEditor: Function;
};
const EditorComp = (props: EditorProps) => {

  const [value, setValue] = React.useState("")

  

  const handleEditorChange=(value:any)=>{
    setValue(value);
    props.handleEditor(value);
  }
  return (
    <>
      <Editor
        height="75vh"
        width={"70%"}
        defaultLanguage="javascript"
        defaultValue="// some comment"
        value={value}
        onChange={handleEditorChange}
      />
      ;
    </>
  );
};

export default EditorComp;

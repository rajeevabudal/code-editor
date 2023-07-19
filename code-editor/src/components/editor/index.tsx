import * as React from "react";
import Select from "../core/select";
import { api } from "../fetch/api";
import { url } from "../fetch/config";
import Editor from "./editorcomp";
import Button from "@mui/material/Button";

const languageUrl = `${url}/languages`;

export default function MainContainer() {
  const [langauges, setLangauges] = React.useState([]);

  React.useEffect(() => {
    const result = api("GET", languageUrl);
    result
      .then((res: any) => {
        setLangauges(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div>
        <Select
          options={langauges}
          label="Select langauges"
          className="code-editor-select"
        />
        <Button variant="contained">Compile And Execute</Button>
      </div>

      <Editor />
    </div>
  );
}

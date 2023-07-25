import * as React from "react";
import Select from "../core/select";
import { api } from "../fetch/api";
import { url } from "../fetch/config";
import Editor from "./editorcomp";
import Button from "@mui/material/Button";

const languageUrl = `${url}/languages`;
const submissionUrl = `${url}/submissions`;
export default function MainContainer() {
  const [langauges, setLangauges] = React.useState([]);
  const [code, setCode] = React.useState("");
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

  const handleExecute = async () => {
    let base64Code = btoa(code);
    alert(base64Code);
    const params = {
      base64_encoded: "true",
      fields: "*",
    };
    const data = {
      language_id: 93,
      source_code: base64Code,
    };
    const result = await api("POST", submissionUrl, params, data);

    let getSubmission = `${url}/submissions/${result.token}`;

    let submissionsParams = {
      base64_encoded: "true",
      fields: "*",
    };

    let submissionResult = await api("GET", getSubmission, submissionsParams);
    setTimeout(async ()=>{
      submissionResult = await api("GET", getSubmission, submissionsParams);
      console.log(atob(submissionResult.stdout))
    }, 2000)

    console.log(submissionResult.stdout);
  };

  const handleEditor = (code: any) => {
    setCode(code);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div>
        <Select
          options={langauges}
          label="Select langauges"
          className="code-editor-select"
        />
        <Button variant="contained" onClick={handleExecute}>
          Compile And Execute
        </Button>
      </div>

      <Editor handleEditor={handleEditor} />
    </div>
  );
}

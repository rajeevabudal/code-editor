import * as React from "react";
import Select from "../core/select";
import { api } from "../fetch/api";
import { url } from "../fetch/config";
import Editor from "./editorcomp";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { getValue } from "../redux/editor";
import "./style.css";

const languageUrl = `${url}/languages`;
const submissionUrl = `${url}/submissions`;
export default function MainContainer() {
  const dispatch = useDispatch();

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
    setTimeout(async () => {
      submissionResult = await api("GET", getSubmission, submissionsParams);
      if(submissionResult.stdout!== null){
        console.log(atob(submissionResult.stdout));
      dispatch(getValue(atob(submissionResult.stdout)));
      }else{
        console.log(atob(submissionResult.stderr));
      dispatch(getValue(atob(submissionResult.stderr)));
      }
      
    }, 2000);

    console.log(submissionResult.stdout);
  };

  const handleEditor = (code: any) => {
    setCode(code);
  };

  return (
    <div>
      <div>
        <div>
          <Select
            options={langauges}
            label="Select langauges"
            className="code-editor-select"
          />

          <Button
            variant="contained"
            onClick={handleExecute}
            className="btn-compile"
          >
            Compile And Execute
          </Button>
        </div>
      </div>
      <Editor handleEditor={handleEditor} />
    </div>
  );
}

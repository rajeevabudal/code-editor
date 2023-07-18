import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import "./style.css"
export default function Header() {
  return (
    <>
      <AppBar position="static" className="code-editor-header">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Code Editor
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
}

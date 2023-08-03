import * as React from "react";
import Container from "@mui/material/Container";
import { useSelector } from "react-redux";
import Sheet from "@mui/joy/Sheet";
import Header from "./header";
import MainContainer from "../editor";
export default function Landing() {
  return (
    <React.Fragment>
      <Container maxWidth="xl" className="container-code-editor">
        <Header />

        <MainContainer />
      </Container>
    </React.Fragment>
  );
}

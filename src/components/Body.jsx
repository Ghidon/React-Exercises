import React from "react";
import CentralText from "./CentralText";
import CardHolder from "./Card";

function Body(props) {
  return <div className="bodyBackground">{props.children}</div>;
}

function MainContent() {
  return (
    <Body>
      <CentralText></CentralText>
      <CardHolder></CardHolder>
    </Body>
  );
}

export default MainContent;

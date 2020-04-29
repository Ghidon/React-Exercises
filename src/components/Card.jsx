import React from "react";
import "./cards.css";
import { GiBrutalHelm, GiPoliceBadge, GiFlame } from "react-icons/gi";

function CardHolder() {
  return (
    <div className="card-holder">
      <Card
        title={"USER INTERFACE DESIGN"}
        imageUrl={
          <img src="https://img.icons8.com/officel/280/000000/rgb-circle-1.png" />
        }
        bullet1={"Wireframing"}
        bullet2={"Prototyping"}
        bullet3={"Usability Testing"}
      ></Card>
      <Card
        title={"CONCEPT AND IDEAS"}
        imageUrl={
          <img src="https://img.icons8.com/officel/280/000000/full-moon.png" />
        }
        bullet1={"Conceptualization"}
        bullet2={"Digital Branding"}
        bullet3={"Product Strategy"}
      ></Card>
      <Card
        title={"DESIGN AND BRANDING"}
        imageUrl={
          <img src="https://img.icons8.com/officel/335/000000/cheap-2.png" />
        }
        bullet1={"Interaction Design"}
        bullet2={"Graphic Design"}
        bullet3={"Identity Design"}
      ></Card>
    </div>
  );
}

function Card(props) {
  const { imageBg, imageUrl, title, bullet1, bullet2, bullet3 } = props;
  return (
    <div className="card">
      <div className="image-frame ">{imageUrl}</div>
      <h4>{title}</h4>
      <span>{bullet1}</span>
      <span>{bullet2}</span>
      <span>{bullet3}</span>
    </div>
  );
}

export default CardHolder;

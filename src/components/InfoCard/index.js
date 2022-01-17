import React from "react";
import { Card, Img, Title, Desc } from "./InfoCardElements";

const InfoCard = (props) => {
  return (
    <Card>
      <Img src={props.img} />
      <Title>{props.title}</Title>
      <Desc>{props.desc}</Desc>
    </Card>
  );
};

export default InfoCard;

import React from "react";
import {
  Card,
  Review,
  Writer,
  Img,
  Info,
  Name,
  Position,
} from "./TestimonialCardElements";

const TestimonialCard = (props) => {
  return (
    <Card>
      <Review>{props.review}</Review>
      <Writer>
        <Img src={props.img} />
        <Info>
          <Name>{props.name}</Name>
          <Position>{props.position}</Position>
        </Info>
      </Writer>
    </Card>
  );
};

export default TestimonialCard;

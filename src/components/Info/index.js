import React from "react";
import InfoCard from "../InfoCard";
import { InfoContainer } from "./InfoElements";
import { objFour, objOne, objThree, objTwo } from "./data";

const Info = () => {
  return (
    <InfoContainer>
      <InfoCard {...objOne} />
      <InfoCard {...objTwo} />
      <InfoCard {...objThree} />
      <InfoCard {...objFour} />
    </InfoContainer>
  );
};

export default Info;

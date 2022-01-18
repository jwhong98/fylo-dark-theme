import React from "react";
import {
  EarlyContainer,
  Topic,
  Text,
  EmailInput,
  StartedButton,
} from "./EarlyAccessElements";

const EarlyAccess = () => {
  return (
    <EarlyContainer>
      <Topic>Get early access today</Topic>
      <Text>
        It only takes a minute to sign up and our free starter tier is extremely
        generous. If you have any questions, our support team would be happy to
        help you.
      </Text>
      <EmailInput type="email" placeholder="email@example.com" />
      <StartedButton>get started for free</StartedButton>
    </EarlyContainer>
  );
};

export default EarlyAccess;

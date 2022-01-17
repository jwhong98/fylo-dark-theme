import React from "react";
import { Desc, Subject, Content, Button } from "./DescriptionElements";

const Description = () => {
  return (
    <Desc>
      <Subject>
        All your files in one secure location, accessible anywhere.
      </Subject>
      <Content>
        Fylo stores all your most important files in one secure location. Access
        them wherever you need, share and collaborate with friends family, and
        co-workers.
      </Content>
      <Button>get started</Button>
    </Desc>
  );
};

export default Description;

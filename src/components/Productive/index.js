import React from "react";
import {
  Container,
  Img,
  Title,
  Desc,
  Link,
  Span,
  Icon,
} from "./ProductiveElements";
import img from "../../images/illustration-stay-productive.png";
import arrow from "../../images/icon-arrow.svg";

const Productive = () => {
  return (
    <Container>
      <Img src={img} />
      <Title>Stay productive, wherever you are</Title>
      <Desc>
        Never let location be an issue when accessing your files. Fylo has you
        covered for all of your file storage needs.
      </Desc>
      <Desc>
        Securely share files and folders with friends, family and colleagues for
        live collaboration. No email attachments required.
      </Desc>
      <Link>
        <Span>See how Fylo works </Span>
        <Icon src={arrow} />
      </Link>
    </Container>
  );
};

export default Productive;

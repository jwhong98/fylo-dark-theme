import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5rem;
  color: #fff;
`;

export const Img = styled.img`
  width: 100%;
  margin-bottom: 4rem;
`;

export const Title = styled.h2`
  font-family: "Raleway", sans-serif;
  font-size: 1.4rem;
  margin-bottom: 1rem;
`;

export const Desc = styled.p`
  margin-bottom: 1rem;
  line-height: 1.5;
`;

export const Link = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem 0;
  border-bottom: 1px solid hsl(176, 68%, 64%);
  align-self: flex-start;
  color: hsl(176, 68%, 64%);
`;

export const Span = styled.span`
  margin-right: 0.5rem;
`;

export const Icon = styled.img``;

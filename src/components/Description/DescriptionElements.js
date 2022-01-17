import styled from "styled-components";

export const Desc = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
`;

export const Subject = styled.h2`
  text-align: center;
  font-family: "Raleway", sans-serif;
  font-size: 1.75rem;
  line-height: 1.5;
  margin-bottom: 1rem;
`;

export const Content = styled.p`
  text-align: center;
  font-size: 1.12rem;
  margin-bottom: 2rem;
`;

export const Button = styled.button`
  text-transform: capitalize;
  padding: 1rem 6rem;
  border-radius: 25px;
  border: none;
  background: linear-gradient(to right, hsl(176, 68%, 64%), hsl(198, 60%, 50%));
  color: #fff;
  font-family: "Raleway", sans-serif;
  font-weight: 700;
`;

import styled from "styled-components";

export const EarlyContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 7rem;
  z-index: 10;
  position: relative;
  background-color: hsl(217, 28%, 15%);
  color: #fff;
  padding: 2rem;
  border-radius: 10px;
`;

export const Topic = styled.h2`
  font-family: "Raleway", sans-serif;
  font-size: 1.25rem;
  margin-bottom: 1rem;
`;

export const Text = styled.p`
  text-align: center;
  line-height: 1.5;
  margin-bottom: 2rem;
`;

export const EmailInput = styled.input`
  width: 100%;
  margin-bottom: 1.5rem;
  padding: 1rem 1.75rem;
  border-radius: 25px;
  border: none;
`;

export const StartedButton = styled.button`
  width: 100%;
  padding: 1rem 3rem;
  border-radius: 25px;
  text-transform: capitalize;
  color: #fff;
  border: none;
  background: linear-gradient(to right, hsl(176, 68%, 64%), hsl(198, 60%, 50%));
  font-family: "Raleway", sans-serif;
  font-weight: 700;
`;

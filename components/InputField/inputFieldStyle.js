import styled from "styled-components";

export const FormControl = styled.div`
  margin: 0.3rem 0;
  width: 100%;
  position: relative;
  display: flex;
  border-radius: 10px;
  align-items: center;
`;

export const Input = styled.input`
  width: 100%;
  border: ${({ border }) => (border ? border : "none")};
  background-color: ${({ bgColor }) => (bgColor ? bgColor : "transparent")};
  outline: none;
  color: ${({ color }) => (color ? color : "#ACACAC")};
  padding: 0.5rem;
  font-size: 12px;
`;

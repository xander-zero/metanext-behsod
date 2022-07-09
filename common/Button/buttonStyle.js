import styled from "styled-components";

export const ButtonStyle = styled.button`
  width: ${({ width }) => (width ? width : "content-fit")};
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  border: ${({ border }) => (border ? `1px solid ${border}` : "none")};
  background-color: ${({ bgColor }) => (bgColor ? bgColor : "transparent")};
  outline: none;
  font-size: ${({ size }) => (size ? size : "14px")};
  border-radius: 10px;
  color: ${({ color }) => (color ? color : "#71828B")};
  font-weight: ${({ weight }) => (weight ? weight : "none")};
  box-shadow: 0px 7px 25px rgba(33, 118, 255, 0.1), inset 0px -2px 2px #cce1ff;
`;

const { default: styled } = require("styled-components");

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
`;

export const Right = styled.div`
  display: flex;
  width: 70%;
  background-color: red;
`;

export const Left = styled.div`
  width: 30%;
  background-color: blue;
  display: flex;
`;

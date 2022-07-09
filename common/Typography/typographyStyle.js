import styled from "styled-components";

export const Text = styled.p`
  color: ${({ color }) => (color ? color : "#46494C")};
  font-size: ${({ size }) => (size ? size : "16px")};
  font-weight: ${({ weight }) => weight};
  text-align: ${({ align }) => align};
  line-height: ${({ lineHeight }) => lineHeight};
`;

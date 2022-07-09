import styled from "styled-components";

export const FooterStyle = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ecf4ff;
  width: 100%;
  padding: 2rem 0;
  margin-top: 6rem !important;
`;

export const MainFooter = styled.div``;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const Column1 = styled.div``;
export const Column2 = styled.div`
  margin: 0 2rem;
`;
export const WrapperLogo = styled.div`
  display: flex;
  align-items: center;
`;
export const FooterList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
`;

export const FooterListItem = styled.li`
  margin: 0.5rem 1rem;
  font-size: 13px;
`;

export const WrapperInput = styled.div`
  margin: 1rem 0;
  display: flex;
`;

export const Input = styled.input`
  width: 100%;
  border: none;
  outline: none;
  background-color: #fff;
  padding: 0.5rem;
  border-radius: 10px;
  color: ${({ theme }) => theme.text};
  font-size: 10px;
  box-shadow: 0px 7px 25px rgba(5, 62, 255, 0.08);
  width: 200px;
`;

export const WrapperText = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0.5rem;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 1.5rem 0;
`;

export const SocialMediaFooter = styled.div`
  padding: 2rem 0;
`;

export const SocialMediaIcon = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 37px;
  height: 36px;
  background: #ecf4ff;
  box-shadow: 0px 7px 25px rgba(33, 118, 255, 0.1), inset 0px -2px 2px #cce1ff;
  border-radius: 10px;
  cursor: pointer;
  margin: 0 0.2rem;
  /* transform: rotate(-90deg); */
`;

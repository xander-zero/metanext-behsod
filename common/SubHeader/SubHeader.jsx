import styled from "styled-components";
const SubHeader = ({ title, icon }) => {
  return (
    <Wrapper>
      {icon}
      <Title>{title}</Title>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  span {
    width: 24px !important;
    height: 24px !important;
  }
`;

const Title = styled.h1`
  font-size: 24px;
  color: ${({ theme }) => theme.title_color};
  font-weight: bold;
  margin: 0 0.5rem;

  @media (max-width: 576px) {
    font-size: 18px;
  }
`;

export default SubHeader;

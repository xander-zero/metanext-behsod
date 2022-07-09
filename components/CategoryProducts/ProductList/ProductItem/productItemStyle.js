import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  box-shadow: 0px 7px 25px rgba(5, 62, 255, 0.08);
  margin: 2rem 1rem;
  border-bottom: 1px solid #ccd3e8;
  padding-bottom: 1.5rem;
  position: relative;
  cursor: pointer;
  transition: 0.4s all ease-in-out;
  &:hover {
    border-bottom: 1px solid ${({ theme }) => theme.main_color};
  }
`;

export const CardImg = styled.div`
  width: 100%;
  height: 200px;
  position: relative;
  border-radius: 10px;
  img {
    border-radius: 10px;
  }
  .gradiant {
    position: absolute;
    width: 100%;
    height: 70px;
    bottom: 0;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 0%,
      #ffffff 91.67%
    );
  }
`;

export const CardTitle = styled.div`
  margin: 0.5rem 0;
  display: flex;
  justify-content: center;
`;

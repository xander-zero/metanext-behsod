import styled from "styled-components";

export const BannerStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 576px) {
    .row {
      .col-lg-3 {
        padding: 3px;
      }
    }
  }
`;
export const BannerCard = styled.div`
  background: url(${(props) => props.image.src});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  margin: 0.5rem 0;
  height: 250px;
  border-radius: 10px;

  img {
    height: 100%;
  }
`;

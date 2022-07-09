import Image from "next/image";
import styled from "styled-components";
import Typography from "../../../common/Typography/Typography";

const ServiceItem = ({ image, alt, title, desc }) => {
  return (
    <ServiceStyle>
      <Image src={image} alt={alt} layout="fixed" />
      <WrapperText>
        <Typography size="15px" weight="bold">
          {title}
        </Typography>
        <Typography size="13px" color="#5C6B73">
          {desc}
        </Typography>
      </WrapperText>
    </ServiceStyle>
  );
};

const ServiceStyle = styled.div`
  display: flex;
  align-items: center;
`;

const WrapperText = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 1rem;
`;

export default ServiceItem;

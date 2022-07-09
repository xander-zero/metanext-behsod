import Image from "next/image";
import styled from "styled-components";
import SliderProduct from "../../common/SliderProduct/SliderProduct";
import SubHeader from "../../common/SubHeader/SubHeader";
import Typography from "../../common/Typography/Typography";
import otherImg from "../../public/assets/images/other.png";
const OtherProducts = () => {
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <div className="mt-5">
      <Wrapper>
        <SubHeader
          title="سایر محصولات"
          icon={<Image src={otherImg} alt="wonder" layout="fixed" />}
        />
        <Typography size="15px">مشاهده همه {">"}</Typography>
      </Wrapper>
      {/* <div className="mt-3"> */}
      <SliderProduct products={items} />
      {/* </div> */}
    </div>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default OtherProducts;

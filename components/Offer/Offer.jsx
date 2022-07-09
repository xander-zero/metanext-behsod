import Image from "next/image";
import SliderProduct from "../../common/SliderProduct/SliderProduct";
import SubHeader from "../../common/SubHeader/SubHeader";
import Typography from "../../common/Typography/Typography";
import offerImg from "../../public/assets/images/offer.png";
import styled from "styled-components";

const Offer = () => {
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <div className="mt-5">
      <Wrapper>
        <SubHeader
          title="پیشنهادی به سود"
          icon={<Image src={offerImg} alt="wonder" layout="fixed" />}
        />
        <Typography>مشاهده همه {">"}</Typography>
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
  margin-top: 2rem !important;
`;
export default Offer;

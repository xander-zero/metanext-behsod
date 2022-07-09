import Image from "next/image";
import styled from "styled-components";
import SliderProduct from "../../common/SliderProduct/SliderProduct";
import SubHeader from "../../common/SubHeader/SubHeader";
import Typography from "../../common/Typography/Typography";
import wonderImg from "../../public/assets/images/wondering.png";
const WonderProducts = () => {
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <div className="mt-5">
      <Wrapper>
        <SubHeader
          title="شگفت انگیزها"
          icon={<Image src={wonderImg} alt="wonder" layout="fixed" />}
        />
        <div className="show-all">
          <Typography size="15px">مشاهده همه {">"}</Typography>
        </div>
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
  background: #ecf4ff;
  .show-all p {
    @media (max-width: 567px) {
      font-size: 14px;
    }
  }
`;

export default WonderProducts;

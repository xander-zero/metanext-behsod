import Image from "next/image";
import styled from "styled-components";
import SubHeader from "../../common/SubHeader/SubHeader";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import brandImg from "../../public/assets/images/brands.png";
import brand from "../../public/assets/images/brandImg.png";

const BestBrands = () => {
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <BransStyle>
      <Wrapper>
        <SubHeader
          title="برترین برندها در به سود"
          icon={<Image src={brandImg} alt="wonder" layout="fixed" />}
        />
      </Wrapper>
      <div className="mt-5">
        <Swiper
          slidesPerView={5}
          spaceBetween={30}
          modules={[Pagination]}
          pagination={{ clickable: true }}
          className="mySwiper"
        >
          {items.map((product, index) => (
            <SwiperSlide key={index}>
              <Card>
                <CardImg>
                  <Image src={brand} alt="brandImg" layout="fixed" />
                </CardImg>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <CardShadow></CardShadow>
    </BransStyle>
  );
};

const BransStyle = styled.div`
  margin-top: 2rem;
  box-shadow: 0px 7px 25px rgba(5, 62, 255, 0.08);
  position: relative;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;
const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const CardShadow = styled.div`
  position: absolute;
  width: 80%;
  height: 10px;
  bottom: -30px;
  background-color: #ecf4ff;
  z-index: 10;
  left: 0;
  right: 0;
  margin: auto;
  border-radius: 10px;
`;

const CardImg = styled.div`
  width: 100%;
  /* height: 370px; */
`;
export default BestBrands;

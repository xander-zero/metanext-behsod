import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import Image from "next/image";
import rosariImg from "../../public/assets/images/rosari.png";
import styled from "styled-components";
import Typography from "../Typography/Typography";

const SliderProduct = ({ products }) => {
  return (
    <Wrapper>
      <Swiper
        slidesPerView={5}
        spaceBetween={20}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        navigation={true}
        breakpoints={{
          "@0.00": {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          "@1.50": {
            slidesPerView: 5,
            spaceBetween: 10,
          },
        }}
      >
        {products.map((product, index) => (
          <SwiperSlide key={index}>
            <Card>
              <CardImg>
                <Image src={rosariImg} alt="rosari" layout="fixed" />
              </CardImg>
              <CardTitle>
                <Typography color="#FF6700" size="16px" weight="bold">
                  جوراب پاپیون دار دخترانه
                </Typography>
              </CardTitle>
              <CardFooter>
                <div className="mx-2">
                  <Typography color="#A3B2D8" size="13px">
                    ۷۰.۰۰۰
                  </Typography>
                </div>
                <Typography color="#0DDA46" size="16px">
                  ۳۰,۰۰۰ تومان
                </Typography>
              </CardFooter>
              <CardShadow></CardShadow>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 2rem;
`;
const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  filter: drop-shadow(0px 7px 25px rgba(5, 62, 255, 0.08));
  padding-bottom: 2rem;
  border-radius: 10px;

  @media (max-width: 567px) {
    width: 170px;
  }
`;

const CardImg = styled.div`
  width: 100%;
  display: flex;
  @media (max-width: 567px) {
    height: 200px !important;
    span {
      height: 100% !important;
    }
  }

  img {
    border-radius: 5px;
  }
  /* height: 370px; */
`;

const CardTitle = styled.div`
  margin: 0.5rem 0;
  display: flex;
  justify-content: center;

  p {
    @media (max-width: 567px) {
      font-size: 13px;
    }
  }
`;

const CardFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    @media (max-width: 567px) {
      font-size: 13px;
    }
  }
`;

const CardShadow = styled.div`
  position: absolute;
  width: 80%;
  background-color: red;
  height: 10px;
  bottom: 0px;
  background: #dfe9f5;
  border-radius: 10px;
`;

export default SliderProduct;

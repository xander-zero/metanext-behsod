import Image from "next/image";
import bannerImg from "../../public/assets/images/banner.png";
import { BannerStyle } from "./bannerStyle";

const Banner = () => {
  return (
    <div className="mt-5">
      <BannerStyle>
        <div className="row w-100 m-0 p-0">
          <div className="col-lg-3 col-6 d-flex">
            <Image src={bannerImg} layout="intrinsic" />
          </div>
          <div className="col-lg-3 col-6 py-0 d-flex">
            <Image src={bannerImg} layout="intrinsic" />
          </div>
          <div className="col-lg-3 col-6 d-flex">
            <Image src={bannerImg} layout="intrinsic" />
          </div>
          <div className="col-lg-3 col-6 d-flex">
            <Image src={bannerImg} layout="intrinsic" />
          </div>
        </div>
      </BannerStyle>
    </div>
  );
};

export default Banner;

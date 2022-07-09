import Image from "next/image";
import bannerImg from "../../../public/assets/images/banner2.png";
import { BannerStyle } from "./bigBannerStyle";

const BigBanner = () => {
  return (
    <div className="mt-5">
      <BannerStyle>
        <div className="row w-100 m-0 p-0">
          <div className="col-lg-4 col-6 d-flex">
            <Image src={bannerImg} objectFit="cover" layout="fixed" />
          </div>
          <div className="col-lg-4 col-6 py-0 d-flex">
            <Image src={bannerImg} objectFit="cover" layout="fixed" />
          </div>
          <div className="col-lg-4 col-12 d-flex">
            <Image src={bannerImg} objectFit="cover" layout="fixed" />
          </div>
        </div>
      </BannerStyle>
    </div>
  );
};

export default BigBanner;

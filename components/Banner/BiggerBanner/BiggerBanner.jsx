import Image from "next/image";
import { BannerStyle } from "../bannerStyle";
import banner3 from "../../../public/assets/images/banner3.png";
const BiggerBanner = () => {
  return (
    <div className="mt-5">
      <BannerStyle>
        <div className="row w-100 m-0 p-0">
          <div className="col-lg-6 col-12 d-flex">
            <Image src={banner3} layout="fixed" objectFit="cover" />
          </div>
          <div className="col-lg-6 col-12 py-0 d-flex">
            <Image src={banner3} layout="fixed" objectFit="cover" />
          </div>
        </div>
      </BannerStyle>
    </div>
  );
};
export default BiggerBanner;

import ServiceItem from "./ServiceItem/ServiceItem";
import backupImg from "../../public/assets/images/backup.png";
import busImg from "../../public/assets/images/bus.png";
import moneyImg from "../../public/assets/images/money.png";
import newBrandImg from "../../public/assets/images/newBrand.png";
import styled from "styled-components";
import { CardShadow } from "../BestBrands/BestBrands";
const Services = () => {
  return (
    <div className="my-5">
      <ServiceStyle>
        <ServiceItem
          image={backupImg}
          alt="backupImg"
          title="پشتیبانی و مشاوره آنلاین"
          desc="قبل و بعد از خرید مشاوره شما هستیم"
        />
        <ServiceItem
          image={busImg}
          alt="busImg"
          title="ارسال رایگان و سریع"
          desc="برای خرید های بیش از ۵ میلیون تومان"
        />
        <ServiceItem
          image={moneyImg}
          alt="moneyImg"
          title="قیمت مناسب"
          desc="قیمت رو مقایسه کن بعد بخر!"
        />
        <ServiceItem
          image={newBrandImg}
          alt="newBrandImg"
          title="همکاری با برند های مطرح"
          desc="بیش از ۴۰ برند مطرح"
        />
        <CardShadow></CardShadow>
      </ServiceStyle>
    </div>
  );
};

const ServiceStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 7rem;
  position: relative;
  padding-bottom: 2rem;
`;

export default Services;

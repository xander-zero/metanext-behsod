import Banner from "../components/Banner/Banner";
import BigBanner from "../components/Banner/BigBanner/BigBanner";
import BiggerBanner from "../components/Banner/BiggerBanner/BiggerBanner";
import BestBrands from "../components/BestBrands/BestBrands";
import Blogs from "../components/Blogs/Blogs";
import CategoryProducts from "../components/CategoryProducts/CategoryProducts";
import MostSaleProduct from "../components/MostSaleProduct/MostSaleProduct";
import NewProducts from "../components/NewProduct/NewProducts";
import Offer from "../components/Offer/Offer";
import OtherProducts from "../components/OtherProducts/OtherProducts";
import Services from "../components/Services/Services";
import Slider from "../components/Slider/Slider";
import WonderProducts from "../components/WonderProducts/WonderProducts";

export default function Home() {
  return (
    <div className="container mt-5">
      <Slider />
      <Banner />
      <CategoryProducts />
      <WonderProducts />
      <MostSaleProduct />
      <Offer />
      <BigBanner />
      <NewProducts />
      <OtherProducts />
      <BiggerBanner />
      <BestBrands />
      <Blogs />
      <Services />
    </div>
  );
}

import SubHeader from "../../common/SubHeader/SubHeader";
import ProductList from "./ProductList/ProductList";
import categoryImg from "../../public/assets/images/category.png";
import Image from "next/image";
import SliderProduct from "../../common/SliderProduct/SliderProduct";
import useWindowSize from "../../hooks/userViewportWidth";
import Slider from "react-slick";
const CategoryProducts = () => {
  const { width } = useWindowSize();
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  return (
    <div className="mt-3">
      <SubHeader
        title="دسته بندی کالاها"
        icon={<Image src={categoryImg} alt="category" layout="fixed" />}
      />
      {width >= 567 ? (
        <>
          <ProductList />
        </>
      ) : (
        <SliderProduct products={items} />
      )}
    </div>
  );
};

export default CategoryProducts;

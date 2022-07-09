import styled from "styled-components";
import SliderProduct from "../../../common/SliderProduct/SliderProduct";
import { useViewportWidth } from "../../../hooks/userViewportWidth";
import ProductItem from "./ProductItem/ProductItem";

const ProductList = () => {
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <Wrapper>
      {items.map((item, index) => (
        <ProductItem key={index} products={items} />
      ))}
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

export default ProductList;

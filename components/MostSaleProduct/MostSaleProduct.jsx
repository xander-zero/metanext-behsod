import Image from "next/image";
import styled from "styled-components";
import SliderProduct from "../../common/SliderProduct/SliderProduct";
import SubHeader from "../../common/SubHeader/SubHeader";
import mostSale from "../../public/assets/images/mostSale.png";
import { ListSort, SortItem } from "./mostSaleStyle";

const MostSaleProduct = () => {
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <div className="mt-5" style={{ backgroundColor: "##ECF4FF" }}>
      <Wrapper>
        <SubHeader
          title="پرفروش ترین ها"
          icon={<Image src={mostSale} alt="wonder" layout="fixed" />}
        />
        <ListSort>
          <SortItem active>روسری</SortItem>
          <SortItem>شال</SortItem>
          <SortItem>لباس زیر</SortItem>
          <SortItem>جوراب</SortItem>
          <SortItem>لباس بچگانه</SortItem>
        </ListSort>
      </Wrapper>
      <div className="mt-3">
        <SliderProduct products={items} />
      </div>
    </div>
  );
};
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 3rem;
`;

export default MostSaleProduct;

import Image from "next/image";
import Typography from "../../../../common/Typography/Typography";
import girlImg from "../../../../public/assets/images/girl.png";
import { Card, CardImg, CardShadow, CardTitle } from "./productItemStyle";

const ProductItem = ({ products }) => {
  return (
    <Card>
      <CardImg>
        <Image src={girlImg} alt="girl" layout="fixed" />
        <div className="gradiant"></div>
      </CardImg>
      <CardTitle>
        <Typography color="#FF6700" size="16px" weight="bold">
          روسری
        </Typography>
      </CardTitle>
      <Typography color="#A3B2D8" size="15px">
        +100 محصول
      </Typography>
    </Card>
  );
};
export default ProductItem;

import Image from "next/image";
import Button from "../../../common/Button/Button";
import Typography from "../../../common/Typography/Typography";
import blogImage from "../../../public/assets/images/blogImage.png";
import { Card, CardDesc, CardImg, CardTitle } from "./blogCardStyle";
const BlogsCard = () => {
  return (
    <Card>
      <CardImg>
        <Image src={blogImage} alt="blog-image" layout="fixed" />
      </CardImg>
      <CardTitle>
        <Typography size="16px" color="#46494C">
          ترند ترین ترکیب رنگ مو
        </Typography>
        <CardDesc>
          <Typography lineHeight="30px" size="13px" color="#5C6B73">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ می باشد
            لورم ایپسوم متن ساختگی با می باشد
          </Typography>
        </CardDesc>
      </CardTitle>
      <Button bgColor="#2176FF" color="#fff">
        مشاهده {">"}
      </Button>
    </Card>
  );
};

export default BlogsCard;

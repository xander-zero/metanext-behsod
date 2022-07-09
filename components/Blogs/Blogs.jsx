import Image from "next/image";
import styled from "styled-components";
import SubHeader from "../../common/SubHeader/SubHeader";
import Typography from "../../common/Typography/Typography";
import blogImg from "../../public/assets/images/blog.png";
import BlogsCard from "./BlogCard/BlogsCard";
const Blogs = () => {
  const items = [1, 2, 3, 4];
  return (
    <div className="mt-5">
      <Wrapper>
        <SubHeader
          title="تازه های وبلاگ"
          icon={<Image src={blogImg} alt="blog" layout="fixed" />}
        />
        <Typography size="15px">مشاهده وبلاگ {">"}</Typography>
      </Wrapper>
      <BlogWrapper>
        {items.map((item, index) => (
          <BlogsCard key={index} />
        ))}
      </BlogWrapper>
    </div>
  );
};
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BlogWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 2rem;
`;

export default Blogs;

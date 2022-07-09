import Image from "next/image";
// components
import Typography from "../../Typography/Typography";
import Button from "../../Button/Button";
//styled component
import { Column, Container, Left, Middle, Right } from "./headerNavStyle";
// image logo
import logo from "../../../public/assets/images/logo.png";
import user from "../../../public/assets/images/user.png";
import cart from "../../../public/assets/images/cart.png";
import Search from "../../../components/Search/Search";

const HeaderNav = () => {
  return (
    <div className="container">
      <Container>
        <Right>
          <Image src={logo} alt="logo" />
          <Column>
            <Typography color="#FF6700" weight="bold">
              فروشگاه اینترنتی به سود
            </Typography>
            <Typography size="14px">خرید از به سود به سود شماست</Typography>
          </Column>
        </Right>
        <Middle>
          <Search />
        </Middle>
        <Left>
          <Button
            size="12px"
            border="rgba(255, 103, 0, 0.2)"
            icon={<Image src={user} alt="user" />}
          >
            ثبت نام/ ورود
          </Button>
          <Button
            size="12px"
            icon={<Image src={cart} alt="cart" />}
            className="mx-1"
            count={<Typography weight="bold">2</Typography>}
          >
            سبد خرید
          </Button>
        </Left>
      </Container>
    </div>
  );
};

export default HeaderNav;

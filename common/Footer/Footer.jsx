import Image from "next/image";
import Typography from "../Typography/Typography";
import Button from "../Button/Button";
import {
  Column1,
  Column2,
  FooterList,
  FooterListItem,
  FooterStyle,
  Icon,
  Input,
  MainFooter,
  Row,
  SocialMediaFooter,
  SocialMediaIcon,
  Wrapper,
  WrapperInput,
  WrapperLogo,
  WrapperText,
} from "./footerStyle";

import logo from "../../public/assets/images/logo.png";
import location from "../../public/assets/images/location.png";
import phone from "../../public/assets/images/phone.png";
import email from "../../public/assets/images/email.png";
import text from "../../public/assets/images/text.png";
import userFooter from "../../public/assets/images/userFooter.png";
import download from "../../public/assets/images/download.png";
import garanty from "../../public/assets/images/garanty.png";
import bazar from "../../public/assets/images/bazar.png";
import google from "../../public/assets/images/google.png";
import mojavez from "../../public/assets/images/mojavez.png";
import mojavez2 from "../../public/assets/images/mojavez2.png";
import linkdin from "../../public/assets/images/linkdin.png";
import telegram from "../../public/assets/images/telegrm.png";
import whatsapp from "../../public/assets/images/whatsapp.png";
import instagram from "../../public/assets/images/instagram.png";

const Footer = () => {
  return (
    <>
      <FooterStyle>
        <div className="container">
          <MainFooter>
            <Row>
              <Column1>
                <WrapperLogo>
                  <Image src={logo} alt="logo" layout="fixed" />
                  <WrapperText>
                    <Typography color="#FF6700" weight="700" size="13px">
                      فروشگاه اینترنتی به سود
                    </Typography>
                    <Typography color="#5C6B73" size="10px">
                      خرید از به سود به سود شماست
                    </Typography>
                  </WrapperText>
                </WrapperLogo>
                <div className="div my-3">
                  <Typography color="#2176FF" size="20px" weight="bold">
                    هفت روز هفته ۲۴ ساعته شبانه روز
                  </Typography>
                  <Typography color="#71828B" size="15px">
                    پاسخگوی شما هستیم
                  </Typography>
                </div>
                <div className="my-4">
                  <div className="div my-2">
                    <Wrapper>
                      <Image src={location} alt="location" layout="fixed" />
                      <div className="mx-2">
                        <Typography weight="bold" size="15px">
                          آدرس :{" "}
                          <span style={{ fontWeight: "300" }}>
                            مشهد، هفده شهریور
                          </span>
                        </Typography>
                      </div>
                    </Wrapper>
                    <Wrapper>
                      <Image src={phone} alt="location" layout="fixed" />
                      <div className="mx-2">
                        <Typography weight="bold" size="15px">
                          تلفن :{" "}
                          <span style={{ fontWeight: "300" }}>051-1234567</span>
                        </Typography>
                      </div>
                    </Wrapper>
                    <Wrapper>
                      <Image src={email} alt="location" layout="fixed" />
                      <div className="mx-2">
                        <Typography weight="bold" size="15px">
                          ایمیل :{" "}
                          <span style={{ fontWeight: "300" }}>
                            Info@example.com
                          </span>
                        </Typography>
                      </div>
                    </Wrapper>
                  </div>
                </div>
              </Column1>
              <Column2>
                <WrapperLogo>
                  <Image src={text} alt="text" layout="fixed" />
                  <div className="mx-2">
                    <Typography size="16px" color="#46494C" weight="bold">
                      خدمات مشتریان
                    </Typography>
                  </div>
                </WrapperLogo>
                <FooterList>
                  <FooterListItem>سوالات متداول</FooterListItem>
                  <FooterListItem>سوالات متداول</FooterListItem>
                  <FooterListItem>سوالات متداول</FooterListItem>
                  <FooterListItem>سوالات متداول</FooterListItem>
                </FooterList>
              </Column2>
              <Column2>
                <WrapperLogo>
                  <Image src={text} alt="text" layout="fixed" />
                  <div className="mx-2">
                    <Typography size="16px" color="#46494C" weight="bold">
                      دسترسی سریع
                    </Typography>
                  </div>
                </WrapperLogo>
                <FooterList>
                  <FooterListItem>سوالات متداول</FooterListItem>
                  <FooterListItem>سوالات متداول</FooterListItem>
                  <FooterListItem>سوالات متداول</FooterListItem>
                  <FooterListItem>سوالات متداول</FooterListItem>
                </FooterList>
              </Column2>
              <Column2>
                <WrapperLogo>
                  <Image src={text} alt="text" layout="fixed" />
                  <div className="mx-2">
                    <Typography size="16px" color="#46494C" weight="bold">
                      راهنمای مشتریان
                    </Typography>
                  </div>
                </WrapperLogo>
                <FooterList>
                  <FooterListItem>سوالات متداول</FooterListItem>
                  <FooterListItem>سوالات متداول</FooterListItem>
                  <FooterListItem>سوالات متداول</FooterListItem>
                  <FooterListItem>سوالات متداول</FooterListItem>
                </FooterList>
              </Column2>
              <Column2>
                <WrapperLogo>
                  <Image src={text} alt="text" layout="fixed" />
                  <div className="mx-2">
                    <Typography size="16px" color="#46494C" weight="bold">
                      خبرنامه به سود
                    </Typography>
                  </div>
                </WrapperLogo>
                <div className="my-3">
                  <Typography size="13px">
                    از تخفیف های به سود باخبر شوید
                  </Typography>
                  <WrapperInput>
                    <Input type="email" placeholder="شماره موبایلت رو بنویس" />
                    <div className="mx-2">
                      <Button
                        color="#FF6700"
                        bgColor="#fff"
                        size="10px"
                        weight="bold"
                      >
                        عضویت
                      </Button>
                    </div>
                  </WrapperInput>
                </div>
                <div className="my-4">
                  <Typography size="16px" weight="bold">
                    با <span style={{ color: "#FF6700" }}>به سود</span> همراه
                    باشید
                  </Typography>
                  <div className="my-3">
                    <SocialMediaIcon>
                      <Icon>
                        <Image src={linkdin} alt="linkdin" layout="fixed" />
                      </Icon>
                      <Icon>
                        <Image src={telegram} alt="linkdin" layout="fixed" />
                      </Icon>
                      <Icon>
                        <Image src={whatsapp} alt="linkdin" layout="fixed" />
                      </Icon>
                      <Icon>
                        <Image src={instagram} alt="linkdin" layout="fixed" />
                      </Icon>
                    </SocialMediaIcon>
                  </div>
                </div>
              </Column2>
            </Row>
          </MainFooter>
        </div>
      </FooterStyle>
      <div className="container">
        <SocialMediaFooter>
          <Row>
            <div className="row">
              <div className="col-4">
                <Column1>
                  <WrapperLogo>
                    <Image src={userFooter} alt="text" layout="fixed" />
                    <div className="mx-2">
                      <Typography size="16px" color="#2176FF" weight="bold">
                        درباره به سود
                      </Typography>
                    </div>
                  </WrapperLogo>
                  <div className="w-40 d-flex my-3">
                    <Typography size="13px">
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                      می باشد لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
                      صنعت چاپ می باشد لورم ایپسوم متن ساختگی با تولید سادگی
                      نامفهوم از صنعت چاپ می باشد لورم ایپسوم متن ساختگی با
                      تولید سادگی نامفهوم از می باشد لورم ایپسوم متن ساختگی با
                      تولید سادگی نامفهوم از می باشد می باشد. سادگی نامفهوم از
                      می باشد
                    </Typography>
                  </div>
                </Column1>
              </div>
              <div className="col-4">
                <Column2>
                  <WrapperLogo>
                    <Image src={download} alt="text" layout="fixed" />
                    <div className="mx-2">
                      <Typography size="16px" color="#2176FF" weight="bold">
                        اپلیکیشن به سود
                      </Typography>
                    </div>
                  </WrapperLogo>
                  <div className="w-40 d-flex my-3">
                    <Typography size="13px">
                      تجربه لذت بخش تر را با اپلیکیشن به سود تجربه کنید
                    </Typography>
                  </div>
                  <Wrapper>
                    <div className="mx-1">
                      <Button weight="bold" size="13px" color="#46494C">
                        دریافت از
                        <Image src={google} alt="google" layout="fixed" />
                      </Button>
                    </div>
                    <Button weight="bold" size="13px" color="#46494C">
                      دریافت از
                      <Image src={bazar} alt="bazar" layout="fixed" />
                    </Button>
                  </Wrapper>
                </Column2>
              </div>
              <div className="col-4">
                <Column2>
                  <WrapperLogo>
                    <Image src={garanty} alt="text" layout="fixed" />
                    <div className="mx-2">
                      <Typography size="16px" color="#2176FF" weight="bold">
                        درباره به سود
                      </Typography>
                    </div>
                  </WrapperLogo>
                  <div className="w-40 d-flex">
                    <Typography size="13px">
                      با اطمینان از به سود خرید کن
                    </Typography>
                  </div>
                  <Wrapper>
                    <Image src={mojavez} alt="mojavez" layout="fixed" />
                    <div className="mx-5">
                      <Image src={mojavez2} alt="mojavez2" layout="fixed" />
                    </div>
                  </Wrapper>
                </Column2>
              </div>
            </div>
          </Row>
        </SocialMediaFooter>
      </div>
    </>
  );
};

export default Footer;

import Image from "next/image";

import MenuItems from "./MenuItem/MenuItem";
import Typography from "../Typography/Typography";

import {
  NavStyles,
  Option,
  Profile,
  Select,
  WrapperProfile,
  WrapperTet,
  WrapperLanguage,
} from "./navbarStyle";
import userProfile from "../../public/assets/images/userProfile.png";
import language from "../../public/assets/images/language.png";
import arrow from "../../public/assets/images/arrow-down.png";

const Navbar = () => {
  const menuItems = [
    {
      id: "1",
      title: "شال و روسری",
      image: "./public/assets/images/shal.png",
      submenu: [
        {
          id: "1",
          title: "پوشاک پسرانه",
          image: "../public/assets/images/shal-child.png",
        },
        {
          id: "2",
          title: "ست کیف و روسری",
          image: "../public/assets/images/bag-rosari.png.png",
        },
        {
          id: "3",
          title: "چادر",
          image: "../public/assets/images/chador.png",
        },
        {
          id: "4",
          title: "مقنعه",
          image: "../public/assets/images/maghnae.png",
        },
      ],
    },
    {
      id: "2",
      title: "شال و روسری",
      image: "./public/assets/images/shal.png",
      submenu: [
        {
          id: "1",
          title: "پوشاک پسرانه",
          image: "../public/assets/images/shal-child.png",
        },
        {
          id: "2",
          title: "ست کیف و روسری",
          image: "../public/assets/images/bag-rosari.png.png",
        },
        {
          id: "3",
          title: "چادر",
          image: "../public/assets/images/chador.png",
        },
        {
          id: "4",
          title: "مقنعه",
          image: "../public/assets/images/maghnae.png",
        },
      ],
    },
    {
      id: "3",
      title: "شال و روسری",
      image: "./public/assets/images/shal.png",
      submenu: [
        {
          id: "1",
          title: "پوشاک پسرانه",
          image: "../public/assets/images/shal-child.png",
        },
        {
          id: "2",
          title: "ست کیف و روسری",
          image: "../public/assets/images/bag-rosari.png.png",
        },
        {
          id: "3",
          title: "چادر",
          image: "../public/assets/images/chador.png",
        },
        {
          id: "4",
          title: "مقنعه",
          image: "../public/assets/images/maghnae.png",
        },
      ],
    },
    {
      id: "4",
      title: "شال و روسری",
      image: "./public/assets/images/shal.png",
      submenu: [
        {
          id: "1",
          title: "پوشاک پسرانه",
          image: "../public/assets/images/shal-child.png",
        },
        {
          id: "2",
          title: "ست کیف و روسری",
          image: "../public/assets/images/bag-rosari.png.png",
        },
        {
          id: "3",
          title: "چادر",
          image: "../public/assets/images/chador.png",
        },
        {
          id: "4",
          title: "مقنعه",
          image: "../public/assets/images/maghnae.png",
        },
      ],
    },
  ];

  return (
    <NavStyles>
      <div className="container">
        <nav>
          <ul className="menus">
            {menuItems.map((menu, index) => {
              const depthLevel = 0;
              return (
                <MenuItems
                  type="menu"
                  items={menu}
                  key={index}
                  depthLevel={depthLevel}
                />
              );
            })}
          </ul>
          <Profile>
            <WrapperProfile>
              <WrapperTet>
                <Typography size="10px">محمود انصاری</Typography>
                <Typography size="10px">
                  051-
                  <span style={{ color: "#FF6700", fontWeight: "bold" }}>
                    9335948491
                  </span>
                </Typography>
              </WrapperTet>
              <Image src={userProfile} alt="profile-image" layout="fixed" />
            </WrapperProfile>
            <WrapperLanguage>
              <Image src={language} alt="language" layout="fixed" />
              <div className="mx-1">
                <Image src={arrow} alt="language" layout="fixed" />
              </div>
            </WrapperLanguage>
          </Profile>
        </nav>
      </div>
    </NavStyles>
  );
};

export default Navbar;

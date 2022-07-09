import MenuItems from "../MenuItem/MenuItem";
import Image from "next/image";
import styled from "styled-components";

import image from "../../../public/assets/images/photo_۲۰۲۲-۰۵-۰۱_۱۱-۲۹-۱۱ 1.png";
import clothes from "../../../public/assets/images/clothes.png";
const Dropdown = ({ submenus, dropdown, depthLevel }) => {
  depthLevel = depthLevel + 1;
  const dropdownClass = depthLevel > 1 ? "dropdown-submenu" : "";
  return (
    <ul className={`dropdown ${dropdownClass} ${dropdown ? "show" : ""}`}>
      <Wrapper>
        <Column>
          {submenus.map((submenu, index) => (
            <Row key={index}>
              <Image src={clothes} alt="clothes" layout="fixed" />
              <MenuItems
                type="submenu"
                items={submenu}
                depthLevel={depthLevel}
              />
            </Row>
          ))}
        </Column>
        <Image src={image} alt="image" layout="fixed" />
      </Wrapper>
    </ul>
  );
};

const Row = styled.div`
  display: flex;
  align-items: center;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0.5rem;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: right;
  padding: 0.5rem;
`;

export default Dropdown;

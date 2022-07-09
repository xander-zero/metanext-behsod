import { SubMenu } from "../navbarStyle";

const SubMenuItem = ({ list }) => {
  return <SubMenu>{list.name}</SubMenu>;
};

export default SubMenuItem;

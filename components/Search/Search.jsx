import InputField from "../InputField/InputField";
import { SearchInput } from "./searchStyle";
import search from "../../public/assets/images/search.png";
import Image from "next/image";

const Search = () => {
  return (
    <SearchInput>
      <InputField
        bgColor="#EFF3FD"
        type="text"
        placeholder="دنبال چی میگردی"
        icon={<Image layout="fixed" src={search} alt="search" />}
      />
    </SearchInput>
  );
};

export default Search;

import Search from "../ui/search/search";
import Link from "next/link";

const SearchPage = () => {
  return (
    <div>
      <Search />
      <div className=" ml-[9%] mt-5">
        <Link href={"/search/item"}>
          <p>Item number after search</p>
        </Link>
      </div>
    </div>
  );
};

export default SearchPage;

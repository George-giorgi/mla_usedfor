import Search from "../ui/search/search";
import Link from "next/link";
import { fetchItems } from "../lib/data";

const SearchPage = async () => {
  const data = await fetchItems();
  console.log(data);

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

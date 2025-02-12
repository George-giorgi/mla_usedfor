import Link from "next/link";
import { fetchFilteredItems } from "@/app/lib/data";

const SearchedItems = async ({ query }: { query: string }) => {
  const searcheditems = await fetchFilteredItems(query);
  console.log(searcheditems);

  return (
    <div>
      <Link href={"/search/item"}>
        <p>Item number after search</p>
        {searcheditems.map((itemnum) => {
          return <p>{itemnum.uuid}</p>;
        })}
      </Link>
    </div>
  );
};

export default SearchedItems;

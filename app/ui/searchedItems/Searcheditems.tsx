import Link from "next/link";

const SearchedItems = ({ query }: { query: string }) => {
  console.log(query);

  return (
    <div>
      <Link href={"/search/item"}>
        <p>Item number after search</p>
      </Link>
    </div>
  );
};

export default SearchedItems;

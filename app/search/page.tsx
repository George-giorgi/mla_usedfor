import Search from "../ui/search/search";
import Link from "next/link";
import { fetchItems } from "../lib/data";
import SearchedItems from "../ui/searchedItems/Searcheditems";
import { Suspense } from "react";

const SearchPage = async (props: {
  searchParams: Promise<{
    query: string;
  }>;
}) => {
  // const data = await fetchItems();

  const searchParams = await props.searchParams;
  const query = searchParams.query;

  return (
    <div>
      <Search placeholder="Enter your part number..." />
      <div className=" ml-[9%] mt-5">
        <Suspense>
          <SearchedItems query={query} />
        </Suspense>
      </div>
    </div>
  );
};

export default SearchPage;

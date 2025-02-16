import Link from "next/link";
import { fetchFilteredItems } from "@/app/lib/data";
import { Downloading } from "@mui/icons-material";
import { CircularProgress } from "@mui/material";

const SearchedItems = async ({ query }: { query: string }) => {
  const searcheditems = await fetchFilteredItems(query);

  return (
    <div>
      <h3 className="  text-lg font-medium">
        {/* {searcheditems.length == 0 && <Downloading />} */}
        {searcheditems.length == 0 && (
          <CircularProgress sx={{ color: "#fff" }} size={16} />
        )}
      </h3>
      <div className=" mt-5">
        {searcheditems.map((itemnum) => {
          return (
            <div key={itemnum.id} className=" group w-max">
              <Link href={`/search/${itemnum.id}/item`}>
                <div className=" text-black flex items-center mt-4">
                  <span className=" p-1 rounded-sm bg-white ">
                    {itemnum.uuid}
                  </span>
                  <span className=" group-hover:bg-red-500 transition w-5 h-1 bg-white"></span>
                  <span className=" pl-3 pr-3 rounded-md bg-white">
                    {itemnum.name}
                  </span>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SearchedItems;

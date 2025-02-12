import { fetchItems, fetchItems2, fetchItems3 } from "../lib/data";
import Testfetches from "../ui/testfetches/testfetches";
import { Item1 } from "../lib/definitions";
import SuspenceDelayFetch from "../ui/suspencedelayfetch/SuspenceDelayFetch";
import { Suspense } from "react";
import TestSkeletons from "../ui/Skeletons/TestSkeleton";

const FetchesPage = async () => {
  const datas = await fetchItems();
  // const data1 = await fetchItems1();
  // const data2 = await fetchItems2();
  // const data3 = await fetchItems3();
  const data: Item1[][] = await Promise.all([
    fetchItems(),
    // fetchItems1(),
    fetchItems2(),
    fetchItems3(),
  ]);
  // console.log(data);

  return (
    <div className=" flex gap-5">
      <Testfetches data={data[0]} />

      {/* <Testfetches data={data[1]} /> */}
      <Suspense fallback={<TestSkeletons />}>
        <SuspenceDelayFetch />
      </Suspense>

      <Testfetches data={data[1]} />
      <Testfetches data={data[2]} />
    </div>
  );
};

export default FetchesPage;

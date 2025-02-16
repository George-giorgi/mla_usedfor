"use client";
import {
  TipsAndUpdates,
  NotificationImportant,
  Done,
} from "@mui/icons-material";
import Image from "next/image";
import { useState } from "react";

const Bigimage = ({ src }: { src: any }) => {
  return (
    <div className=" w-auto h-auto flex rounded-lg  ">
      <Image
        className=" rounded-lg"
        src={src}
        width={900}
        height={900}
        alt="big image"
      />
    </div>
  );
};

const Item = ({ item }: { item: any }) => {
  const [bigImage, setBigImage] = useState(false);
  const [url, setUrl] = useState("");
  console.log(item);

  const handlecklick = (url: any) => {
    setBigImage(true);
    setUrl(url);
    window.scrollTo({ top: 0, behavior: "smooth" });
    console.log("screen size image");
  };

  return (
    <div className=" ml-[9%] mt-20">
      {bigImage && (
        <div onClick={() => setBigImage(false)}>
          <Bigimage src={url} />
        </div>
      )}

      <div>
        <div>{item.name}</div>
        <h2>{item.uuid}</h2>
      </div>
      <div className=" flex flex-wrap mt-5">
        <div className="  flex flex-col gap-5 pr-5 flex-[50%] ">
          <p className=" font-semibold">
            Used For <Done className=" text-green-400" />
          </p>
          <p>{item.usedfor}</p>
          <div className=" flex items-center justify-center text-lg font-bold w-96 h-96 rounded-md   bg-red-300">
            <Image
              className=""
              src={item?.usedphoto_url}
              width={500}
              height={800}
              alt="usedforphotos"
              onClick={() => handlecklick(item?.usedphoto_url)}
            />
            {!item?.usedphoto_url && "Ptoto Here"}
          </div>
        </div>
        <div className=" flex flex-col gap-5 pl-5 flex-[50%] ">
          <p className=" font-semibold">
            Common mistakes <NotificationImportant className=" text-red-400" />
          </p>
          <p>{item.mistakes}</p>
          <p className=" flex items-center justify-center text-lg font-bold w-96 h-96 rounded-md bg-red-300 pr-5 ">
            <Image
              src={item?.mistakesphoto_url}
              width={300}
              height={200}
              alt="mistakesPhoto"
              onClick={() => handlecklick(item.mistakesphoto_url)}
            />
            {!item?.mistakesphoto_url && "Ptoto Here"}
          </p>
        </div>
        <div className=" w-[50%] mt-5">
          <p className="font-semibold">
            Tips and Triks <TipsAndUpdates className=" text-yellow-500" />
          </p>
          <p className="mt-3">{item.tipstriks}</p>
        </div>
      </div>
    </div>
  );
};

export default Item;

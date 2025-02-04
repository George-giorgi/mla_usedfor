import {
  TipsAndUpdates,
  NotificationImportant,
  Done,
} from "@mui/icons-material";

const Item = () => {
  return (
    <div className=" ml-[9%] mt-20">
      <div>
        <div>Item Name</div>
        <h2>item ID</h2>
      </div>
      <div className=" flex flex-wrap mt-5">
        <div className="  flex flex-col gap-5 pr-5 flex-[50%] ">
          <p className=" font-semibold">
            Used For <Done className=" text-green-400" />
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis a
            fugit tempora in non ducimus, amet, corporis accusamus voluptatibus
            iure aliquam deserunt sed id veniam consequuntur, omnis nesciunt
            ipsa voluptate. Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Debitis voluptatem dicta magnam corporis id voluptate
            asperiores excepturi, maxime quos sint quaerat nesciunt earum
            commodi fugit? Molestias animi blanditiis dolorem dignissimos?
          </p>
          <div className=" flex items-center justify-center text-lg font-bold w-96 h-96 rounded-md   bg-red-300">
            Ptoto Here
          </div>
        </div>
        <div className=" flex flex-col gap-5 pl-5 flex-[50%] ">
          <p className=" font-semibold">
            Common mistakes <NotificationImportant className=" text-red-400" />
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis
            voluptatem dicta magnam corporis id voluptate asperiores excepturi,
            maxime quos sint quaerat nesciunt earum commodi fugit? Molestias
            animi blanditiis dolorem dignissimos?
          </p>
          <p className=" flex items-center justify-center text-lg font-bold w-96 h-96 rounded-md bg-red-300 pr-5 ">
            Ptoto Here
          </p>
        </div>
        <div className=" w-[50%] mt-5">
          <p className="font-semibold">
            Tips and Triks <TipsAndUpdates className=" text-yellow-500" />
          </p>
          <p className="mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            aspernatur minima necessitatibus fugit quos, sunt delectus dolorum
            aut? Porro minima nostrum, similique aperiam deleniti amet rem
            sapient aspernatur unde voluptas.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Item;

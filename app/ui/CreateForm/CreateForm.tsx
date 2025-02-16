import { createItem } from "@/app/lib/actions";
import Button from "../Button/Button";
import {
  TipsAndUpdates,
  NotificationImportant,
  UploadFile,
} from "@mui/icons-material";

const CreateForm = () => {
  return (
    <div>
      <form action={createItem} className="flex-1 flex flex-col mt-10 gap-10">
        <div className="relative">
          <input
            name="uuid"
            type={"text"}
            id={"UUID"}
            className=" tracking-wide text-black bg-white block px-2.5 pb-2.5 pt-4 w-full text-sm bg-transparent rounded-lg border-1 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
          />
          <label
            htmlFor={"UUID"}
            className=" z-20 absolute text-sm text-black  duration-300 transform -translate-y-4 scale-75 top-2  origin-[0] bg-yellow-50 rounded-lg px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
          >
            {"Enter item's UID"}
          </label>
        </div>
        <div className="relative">
          <input
            name="itemname"
            type={"text"}
            id={"ItemName"}
            className=" tracking-wide text-black bg-white block px-2.5 pb-2.5 pt-4 w-full text-sm bg-transparent rounded-lg border-1 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
          />
          <label
            htmlFor={"ItemName"}
            className=" z-20 absolute text-sm text-black  duration-300 transform -translate-y-4 scale-75 top-2  origin-[0] bg-yellow-50 rounded-lg px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
          >
            {"Enter item's Name"}
          </label>
        </div>
        <div>
          <div className=" flex flex-col">
            <div className=" flex items-center">
              <label
                htmlFor={"usedfor"}
                className=" cursor-pointer
         w-max  p-1 mb-2 text-sm font-medium text-black bg-yellow-50 rounded-lg"
              >
                {"Used For?"}
              </label>
            </div>

            <textarea
              name="usefor"
              id={"usedfor"}
              rows={2}
              className=" tracking-wide block p-2.5 w-full text-sm text-black rounded-lg  dark:placeholder-gray-700 border-none focus:outline-none "
              placeholder="Write your thoughts here..."
            ></textarea>
            <div className="  mt-2 cursor-pointer ">
              <label
                className=" w-max cursor-pointer  mb-2 text-sm font-medium text-gray-900 dark:text-white"
                htmlFor="file_input_used"
              >
                <UploadFile fontSize="medium" />
                <span className=" text-sm">Upload Photos</span>
              </label>
              <input
                className=" hidden  w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                id="file_input_used"
                type="file"
                name="usedphoto"
              ></input>
            </div>
          </div>
        </div>
        <div className=" flex flex-col">
          <div className=" flex items-center">
            <label
              htmlFor={"tipsandtriks"}
              className=" cursor-pointer
         w-max  p-1 mb-2 text-sm font-medium text-black bg-yellow-50 rounded-lg"
            >
              {"Tips and Triks"}
              &nbsp;
              <TipsAndUpdates className=" text-yellow-500" fontSize="small" />
            </label>
          </div>

          <textarea
            id={"tipsandtriks"}
            rows={2}
            className=" tracking-wide block p-2.5 w-full text-sm text-black rounded-lg  dark:placeholder-gray-700 border-none focus:outline-none "
            placeholder="Write your thoughts here..."
            name="tipsandtriks"
          ></textarea>
        </div>
        <div className=" flex flex-col">
          <div className=" flex items-center">
            <label
              htmlFor={"mistakes"}
              className=" cursor-pointer
         w-max  p-1 mb-2 text-sm font-medium text-black bg-yellow-50 rounded-lg"
            >
              {"Common Mistakes"}
              &nbsp;
              <NotificationImportant
                className=" text-red-400"
                fontSize="small"
              />
            </label>
          </div>

          <textarea
            id={"mistakes"}
            rows={2}
            className=" tracking-wide block p-2.5 w-full text-sm text-black rounded-lg  dark:placeholder-gray-700 border-none focus:outline-none "
            placeholder="Write your thoughts here..."
            name="mistakes"
          ></textarea>
          <div className="  mt-2 cursor-pointer ">
            <label
              className=" w-max cursor-pointer  mb-2 text-sm font-medium text-gray-900 dark:text-white"
              htmlFor="file_input_mistakes"
            >
              <UploadFile fontSize="medium" />
              <span className=" text-sm">Upload Photos</span>
            </label>
            <input
              multiple
              className=" hidden  w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              id="file_input_mistakes"
              type="file"
              name="mistakesphoto"
            ></input>
          </div>
        </div>
        <Button />
      </form>
    </div>
  );
};

export default CreateForm;

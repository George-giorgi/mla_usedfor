import CreateForm from "../ui/CreateForm/CreateForm";

const AdminPage = () => {
  return (
    <div className="pl-[9%] mt-20">
      <h1 className=" font-semibold">Hello Admin, Please add Item.</h1>
      <div className=" flex items-center justify-center gap-10">
        <div className="  flex-1 flex flex-col gap-10">
          {/* <form
            action={createItem}
            className="flex-1 flex flex-col mt-10 gap-10"
          >
            <div>
              <Textarea label="Used For?" htmfor="usedfor" />
              <div className="  mt-2 cursor-pointer ">
                <label
                  className=" w-max cursor-pointer  mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  htmlFor="file_input_used"
                >
                  <UploadFile fontSize="medium" />
                  <span className=" text-sm">Upload Photos</span>
                </label>
                <input
                  multiple
                  className=" hidden  w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                  id="file_input_used"
                  type="file"
                ></input>
              </div>
            </div>

            <Textarea label="Tips and Triks" htmfor="tipsandtriks" />

            <div>
              <Textarea label="Common mistakes" htmfor="mistakes" />
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
                ></input>
              </div>
            </div>

            <Button />
          </form> */}
          <CreateForm />
        </div>

        <div className=" flex-1 p-20 italic">
          <p className="">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint
            quisquam porro, quam laudantium quis iusto inventore ratione,
            reprehenderit non, dolorem vitae. Veniam magnam saepe iure!
            Voluptatibus molestiae cumque tempore similique...
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;

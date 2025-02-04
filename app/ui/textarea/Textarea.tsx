import { TipsAndUpdates, NotificationImportant } from "@mui/icons-material";
type label = {
  label: string;
  htmfor: string;
};

const Textarea = ({ label, htmfor }: label) => {
  return (
    <div className=" flex flex-col">
      <div className=" flex items-center">
        <label
          htmlFor={htmfor}
          className=" cursor-pointer
         w-max  p-1 mb-2 text-sm font-medium text-black bg-yellow-50 rounded-lg"
        >
          {label}
          &nbsp;
          {htmfor == "tipsandtriks" && (
            <TipsAndUpdates className=" text-yellow-500" fontSize="small" />
          )}
          {htmfor == "mistakes" && (
            <NotificationImportant className=" text-red-400" fontSize="small" />
          )}
        </label>
      </div>

      <textarea
        id={htmfor}
        rows={2}
        className=" tracking-wide block p-2.5 w-full text-sm text-black rounded-lg  dark:placeholder-gray-700 border-none focus:outline-none "
        placeholder="Write your thoughts here..."
      ></textarea>
    </div>
  );
};

export default Textarea;

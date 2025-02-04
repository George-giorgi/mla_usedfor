type props = {
  label: string;
  InputId: string;
  type: string;
};

const ModernInput = ({ label, InputId, type }: props) => {
  return (
    <div className="relative">
      <input
        type={type}
        id={InputId}
        className=" tracking-wide text-black bg-white block px-2.5 pb-2.5 pt-4 w-full text-sm bg-transparent rounded-lg border-1 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        placeholder=" "
      />
      <label
        htmlFor={InputId}
        className=" z-20 absolute text-sm text-black  duration-300 transform -translate-y-4 scale-75 top-2  origin-[0] bg-yellow-50 rounded-lg px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
      >
        {label}
      </label>
    </div>
  );
};

export default ModernInput;

import { AdminPanelSettings, Search } from "@mui/icons-material";
import style from "./page.module.css";
import Link from "next/link";

const AdminUserLinks = () => {
  return (
    <div className={`${style.fadein} mt-24 self-start flex flex-col gap-6`}>
      <p className=" text-lg font-semibold">Who are you ?</p>
      <div className=" cursor-pointer ">
        <Link href={"/search"}>
          <p className=" hover:text-[#E20816] transition-all duration-200 ">
            <Search />
            Enthusiast welder looking for items.
          </p>
        </Link>
        <Link href={"/admin"}>
          <p className="hover:text-[#E20816] transition-all duration-200">
            <AdminPanelSettings />
            Admin for add and update info.
          </p>
        </Link>
      </div>
    </div>
  );
};

export default AdminUserLinks;

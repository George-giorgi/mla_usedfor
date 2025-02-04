"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, AdminPanelSettings } from "@mui/icons-material";

const Links = [
  {
    name: "Dashboard",
    href: "/",
    icon: "",
  },
  {
    name: "Search",
    href: "/search",
    icon: <Search />,
  },
  {
    name: "Admin",
    href: "/admin",
    icon: <AdminPanelSettings />,
  },
];

const Nav = () => {
  const pathname = usePathname();
  return (
    <div className=" flex gap-5 pl-[9%] pt-5">
      {Links.map((link) => {
        const icon = link.icon;
        return (
          <Link
            className={` ${
              pathname == link.href && "underline underline-offset-4"
            } cursor-default`}
            key={link.name}
            href={link.href}
          >
            <div className=" flex cursor-pointer hover:text-[#E20816]">
              <span>{icon}</span>
              <span>{link.name}</span>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Nav;

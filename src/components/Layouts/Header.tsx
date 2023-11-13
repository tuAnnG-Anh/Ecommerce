import {
  UsersProfileCircleOutline,
  ShopBag2Outline,
  SearchSearchNormal1Outline,
  EssetionalMenuOutline,
} from "react-icons-sax";
import { Layout } from "antd";
import { useState } from "react";
import { Logo } from "@components/Logo";
import { MenuMobile } from "@/components/Layouts/MenuMobile";
const Header = () => {
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);

  const showDrawer = () => {
    setOpenDrawer(true);
  };

  const onCloseDrawer = () => {
    setOpenDrawer(false);
  };
  return (
    <Layout.Header className="bg-white sticky z-50 top-0  px-0 py-0 h-auto">
      <MenuMobile onClose={onCloseDrawer} open={openDrawer} />
      <div className="container px-8 lg:w-9/12 py-4  mx-auto flex justify-between ">
        {/* Logo */}
        <Logo>
          <button className="md:hidden mr-1 flex">
            <EssetionalMenuOutline
              className="text-neutral-700"
              onClick={showDrawer}
            />
          </button>
        </Logo>

        {/* nav-bar */}
        <ul className="text-sm leading-6 font-Space_Grotesk font-medium hidden md:flex gap-10 items-center text-neutral-400 ">
          <li
            className="cursor-pointer hover:text-black before:content-[attr(title)] before:block before:font-bold before:text-neutral-700 placeholder:inline-block before:h-0  before:invisible overflow-hidden hover:font-bold"
            title="Menu"
          >
            Menu
          </li>
          <li
            className=" cursor-pointer before:content-[attr(title)] before:block before:font-bold before:text-neutral-700 placeholder:inline-block before:h-0 before:invisible overflow-hidden hover:font-bold hover:text-black"
            title="Shop"
          >
            Shop
          </li>
          <li
            className=" cursor-pointer before:content-[attr(title)] before:block before:font-bold before:text-neutral-700 placeholder:inline-block before:h-0 before:invisible overflow-hidden hover:font-bold hover:text-black"
            title="Product"
          >
            Product
          </li>
          <li
            className=" cursor-pointer before:content-[attr(title)] before:block before:font-bold before:text-neutral-700 placeholder:inline-block before:h-0 before:invisible overflow-hidden hover:font-bold hover:text-black"
            title="Contact Us"
          >
            Contact Us
          </li>
        </ul>

        {/* user */}
        <div className="flex justify-center items-center ">
          <div className="text-xl text-neutral-700 flex gap-4">
            {/* <Input
              placeholder="Basic usage"
              className={`w-0 ${!isShowInput ? "  hidden" : "block"} w-10 h-full`}
            /> */}

            <div className="hidden md:flex justify-center">
              <SearchSearchNormal1Outline className="cursor-pointer " />
            </div>
            <div className="hidden md:flex justify-center">
              <UsersProfileCircleOutline className="cursor-pointer  " />
            </div>
            <div className=" flex justify-center">
              <ShopBag2Outline className="mr-[0.31rem] cursor-pointer" />
            </div>
          </div>
          <div className="noti text-xs w-5 h-5 rounded-full  bg-[#141718] flex justify-center items-center cursor-pointer">
            <span className="text-white">2</span>
          </div>
        </div>
      </div>
    </Layout.Header>
  );
};

export default Header;

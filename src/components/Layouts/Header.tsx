import {
  UsersProfileCircleOutline,
  ShopBag2Outline,
  SearchSearchNormal1Outline,
  EssetionalMenuOutline,
} from "react-icons-sax";
import { Avatar, Dropdown, Layout, MenuProps } from "antd";
import { useState } from "react";
import { Logo } from "@components/Logo";
import { MenuMobile } from "@/components/Layouts/MenuMobile";
import { useAuthStore } from "@/store/auth";

import { useNavigate } from "react-router-dom";
import {
  LogoutOutlined,
  UserOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { logoutApi } from "@/api/auth";
const menuItem = [
  { title: "Home", key: "1" },
  { title: "Shop", key: "2" },
  { title: "Product", key: "3" },
  { title: "Contact Us", key: "4" },
];
const Header: React.FC = () => {
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  const [itemActive, setItemActive] = useState("1");
  const { removeAuth } = useAuthStore();
  const navigate = useNavigate();
  const userLogged = useAuthStore((state) => state.userLogged);
  const showDrawer = () => {
    setOpenDrawer(true);
  };
  const handleLogout = async () => {
    await logoutApi();
    console.log("fdsa");
    localStorage.removeItem("accessToken");
    removeAuth();
    window.location.reload();
  };
  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          Your account
        </a>
      ),
      icon: <UserOutlined />,
    },
    {
      key: "2",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.aliyun.com"
        >
          Setting
        </a>
      ),
      icon: <SettingOutlined />,
    },
    {
      key: "3",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.preventDefault()}
        >
          Logout
        </a>
      ),
      icon: <LogoutOutlined />,
      onClick: handleLogout,
    },
  ];

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
        <ul className="text-sm leading-6 font-Space_Grotesk font-medium hidden md:flex gap-10 items-center text-neutral-400 relative ">
          {menuItem.map((item) => (
            <li
              className={`${
                itemActive === item.key ? "font-bold text-black" : "font-normal"
              } cursor-pointer hover:text-black before:content-[attr(title)] before:block before:font-bold before:text-neutral-700 placeholder:inline-block before:h-0  before:invisible overflow-hidden hover:font-bold`}
              title={item.title}
              onClick={() => setItemActive(item.key)}
              key={item.key}
            >
              {item.title}
            </li>
          ))}
          <div
            className="w-1/6 absolute h-0.5 bg-black bottom-0 transition-all ease-in-out duration-300"
            style={{
              marginLeft: `${(+itemActive - 1) * 25}%`,
            }}
          ></div>
        </ul>

        {/* user */}
        <div className="flex justify-center items-center ">
          <div className="text-xl text-neutral-700 flex gap-4">
            <div className="hidden md:flex justify-center">
              <SearchSearchNormal1Outline className="cursor-pointer " />
            </div>
            <div className="hidden md:flex justify-center">
              {userLogged ? (
                <Dropdown menu={{ items }}>
                  <Avatar
                    size="large"
                    style={{
                      backgroundColor: "#f56a00",
                      verticalAlign: "middle",
                      width: "1.5rem",
                      height: "1.5rem",
                      display: "flex",
                      alignItems: "center",
                      cursor: "pointer",
                    }}
                  >
                    {userLogged.name}
                  </Avatar>
                </Dropdown>
              ) : (
                <UsersProfileCircleOutline
                  className="cursor-pointer"
                  onClick={() => navigate("login")}
                />
              )}
            </div>
            <div className=" flex justify-center">
              <ShopBag2Outline className="mr-[0.31rem] cursor-pointer" />
            </div>
          </div>
          <div className="noti text-xs w-5 h-5 rounded-full bg-[#141718] flex justify-center items-center cursor-pointer">
            <span className="text-white">2</span>
          </div>
        </div>
      </div>
    </Layout.Header>
  );
};

export default Header;

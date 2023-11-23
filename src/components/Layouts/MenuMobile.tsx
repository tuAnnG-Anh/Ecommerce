import { Drawer, Input } from "antd";
import {
  CloseOutlined,
  SearchOutlined,
  YoutubeOutlined,
  InstagramOutlined,
  FacebookOutlined,
} from "@ant-design/icons";
import { Logo } from "@components/Logo";
import React, { useState } from "react";
import { Menu } from "antd";
import type { MenuProps } from "antd";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "@/store/auth";
import { logoutApi } from "@/api/auth";
interface Props {
  onClose: () => void;
  open?: boolean;
}
type MenuItem = Required<MenuProps>["items"][number];
function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  style?: React.CSSProperties
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    style,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("Home", "home", null, undefined, {}),
  getItem(
    "Shop",
    "shop",
    null,
    [getItem("Item 1", "item1", null, undefined, { borderRadius: 0 })],
    {}
  ),
  getItem(
    "Product",
    "product",
    null,
    [getItem("Item 3", "item3", null, undefined, { borderRadius: 0 })],
    {}
  ),
  getItem("Contact Us", "contact us", null, undefined, {}),
];

const rootSubmenuKeys = ["home", "shop", "product", "contact"];
export const MenuMobile: React.FC<Props> = ({ onClose, open }: Props) => {
  const { userLogged, removeAuth } = useAuthStore();
  const navigate = useNavigate();
  const [openKeys, setOpenKeys] = useState(["home"]);
  const onOpenChange: MenuProps["onOpenChange"] = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (latestOpenKey && rootSubmenuKeys.indexOf(latestOpenKey!) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };
  const handleLogout = async () => {
    await logoutApi();
    localStorage.removeItem("accessToken");
    removeAuth();
    console.log("day la ham", onClose);
    onClose();
    navigate("/");
  };
  return (
    <Drawer
      title="Basic Drawer"
      placement="left"
      onClose={onClose}
      open={open}
      contentWrapperStyle={{
        boxShadow: "none",
        paddingRight: "2rem",
      }}
      styles={{
        header: { display: "none" },
        content: {
          boxShadow:
            "6px 0 16px 0 rgba(0, 0, 0, 0.08), 3px 0 6px -4px rgba(0, 0, 0, 0.12), 9px 0 28px 8px rgba(0, 0, 0, 0.05)",
        },
      }}
    >
      <div className="flex flex-col justify-between h-full">
        <div className="drawer__top">
          <div className="header-drawer flex justify-between">
            <Logo />
            <CloseOutlined
              onClick={onClose}
              className="text-neutral-400 text-2xl"
            />
          </div>
          <Input
            placeholder="Search"
            prefix={<SearchOutlined />}
            allowClear={true}
            className="!border-neutral-400 mt-4 rounded-lg  px-4 text-sm text-neutral-400 leading-[1.375rem] py-2"
          />

          <Menu
            mode="inline"
            openKeys={openKeys}
            onOpenChange={onOpenChange}
            items={items}
            className="drawer-item"
          />
        </div>
        <div className="drawer__bottom h-[13.125rem] justify-between flex flex-col">
          <Menu
            mode="inline"
            openKeys={openKeys}
            onOpenChange={onOpenChange}
            items={[
              getItem("Cart", "cart", null, undefined, {}),
              getItem("Wishlist", "wishlist", null, undefined, {}),
            ]}
            className="drawer-item"
          />
          {!userLogged ? (
            <button
              className="w-full bg-neutral-700 text-white py-[0.62rem] h-auto rounded-md text-lg font-medium leading-8 -tracking-[0.025rem]"
              onClick={() => navigate("login")}
            >
              Sign In
            </button>
          ) : (
            <div>
              <p>{userLogged.name}</p>
              <button onClick={handleLogout}>Logout</button>
            </div>
          )}
          <div className="socical flex gap-6">
            <a href="">
              <FacebookOutlined className="text-2xl" />
            </a>
            <a>
              <YoutubeOutlined className="text-2xl" />
            </a>
            <a>
              <InstagramOutlined className="text-2xl" />
            </a>
          </div>
        </div>
      </div>
    </Drawer>
  );
};

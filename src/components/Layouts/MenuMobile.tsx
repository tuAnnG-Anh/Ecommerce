import { Drawer, Input } from "antd";
import {
  CloseOutlined,
  SearchOutlined,
  YoutubeOutlined,
  InstagramOutlined,
  FacebookOutlined,
} from "@ant-design/icons";
import { Logo } from "@components/Logo";
import React from "react";

import { Menu } from "antd";

import SubMenu from "antd/es/menu/SubMenu";
import { useNavigate } from "react-router-dom";
interface Props {
  onClose?: (e: React.MouseEvent | React.KeyboardEvent) => void;
  open?: boolean;
}

export const MenuMobile: React.FC<Props> = ({ onClose, open }: Props) => {
  const navigate = useNavigate();
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
            className="border-neutral-400 mt-4 hover:border-neutral-400 px-4 text-sm text-neutral-400 leading-[1.375rem] py-2"
          />
          <Menu
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            mode="inline"
            theme="light"
            className="!border-none"
          >
            <Menu.Item key="Home">
              <span>Home</span>
            </Menu.Item>
            <SubMenu
              key="Shop"
              title={
                <span>
                  <span>Shop</span>
                </span>
              }
            >
              <Menu.Item key="1">Option 5</Menu.Item>
              <Menu.Item key="2">Option 6</Menu.Item>
              <Menu.Item key="3">Option 7</Menu.Item>
              <Menu.Item key="4">Option 8</Menu.Item>
            </SubMenu>
            <SubMenu
              key="product"
              title={
                <span>
                  <span>Product</span>
                </span>
              }
            >
              <Menu.Item key="5">Option 5</Menu.Item>
              <Menu.Item key="6">Option 6</Menu.Item>
              <Menu.Item key="7">Option 7</Menu.Item>
              <Menu.Item key="8">Option 8</Menu.Item>
            </SubMenu>
            <Menu.Item key="contact">
              <span>Contact Us</span>
            </Menu.Item>
          </Menu>
        </div>
        <div className="drawer__bottom h-[13.125rem] justify-between flex flex-col">
          <Menu
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            mode="inline"
            theme="light"
            className="!border-none"
          >
            <Menu.Item key="cart">
              <span>Cart</span>
            </Menu.Item>

            <Menu.Item key="wishlist">
              <span>Wishlist</span>
            </Menu.Item>
          </Menu>
          <button
            className="w-full bg-neutral-700 text-white py-[0.62rem] h-auto rounded-md text-lg font-medium leading-8 -tracking-[0.025rem]"
            onClick={() => navigate("login")}
          >
            Sign In
          </button>
          <div className="socical flex gap-6">
            <FacebookOutlined className="text-2xl" />
            <YoutubeOutlined className="text-2xl" />
            <InstagramOutlined className="text-2xl" />
          </div>
        </div>
      </div>
    </Drawer>
  );
};

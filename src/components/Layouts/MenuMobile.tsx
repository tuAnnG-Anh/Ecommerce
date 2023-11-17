import { ConfigProvider, Drawer, Input } from "antd";
import { CloseOutlined, SearchOutlined } from "@ant-design/icons";
import { Logo } from "@components/Logo";
import React, { useState } from "react";

import type { MenuProps } from "antd";
import { Menu } from "antd";
interface Props {
  onClose?: (e: React.MouseEvent | React.KeyboardEvent) => void;
  open?: boolean;
}
type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group",
  danger?: boolean,
  className?: string
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
    danger,
    className,
  } as MenuItem;
}
const items: MenuItem[] = [
  getItem("Home", "home", null),
  getItem("Shop", "shop", null, [
    getItem("Living room", "livingroom"),
    getItem("Bed room", "bedroom"),
    getItem("Kitchen", "kitchen"),
    getItem("Bathroom", "bathroom"),
    getItem("Dinning", "dinning"),
    getItem("Outdoor", "outdoor"),
  ]),
  getItem("Product", "product", null, [
    getItem("Table", "table"),
    getItem("Chair", "chair"),
    getItem("Cabinet", "cabinet"),
    getItem("Bed", "bed"),
  ]),
  getItem("Contact us", "contact", null),
];
const rootSubmenuKeys = ["home", "shop", "product", "contact"];
export const MenuMobile: React.FC<Props> = ({ onClose, open }: Props) => {
  const [openKeys, setOpenKeys] = useState(["home"]);

  const onOpenChange: MenuProps["onOpenChange"] = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (latestOpenKey && rootSubmenuKeys.indexOf(latestOpenKey!) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
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
      // classNames={{ content: "" }}
      styles={{
        header: { display: "none" },
        content: {
          boxShadow:
            "6px 0 16px 0 rgba(0, 0, 0, 0.08), 3px 0 6px -4px rgba(0, 0, 0, 0.12), 9px 0 28px 8px rgba(0, 0, 0, 0.05)",
        },
      }}
    >
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
      <ConfigProvider
        theme={{
          token: {
            // Seed Token
            colorPrimary: "#000000",
            borderRadius: 0,
            colorPrimaryBg: "#E8ECEF",
            // Alias Token
            colorBgContainer: "#fff",
          },
        }}
      >
        <Menu
          mode="inline"
          itemType="danger"
          openKeys={openKeys}
          onOpenChange={onOpenChange}
          style={{ border: "none" }}
          items={items}
          color="red"
          className="[&>li]:!p-0 [&>li]:!ms-0 [&>li]:border-b-[1px] [&>li]:!me-0 [&>li]:!w-full [&>li>*]:!p-0"
        />
      </ConfigProvider>
    </Drawer>
  );
};

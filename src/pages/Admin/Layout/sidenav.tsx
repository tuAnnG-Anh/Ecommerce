import {
  UploadOutlined,
  AppstoreOutlined,
  VideoCameraOutlined,
  HomeOutlined,
  OrderedListOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import { Link, useNavigate } from "react-router-dom";
const { Sider } = Layout;
interface Props {
  collapsed?: boolean;
}

export const Sidenav: React.FC<Props> = ({ collapsed }: Props) => {
  const navigate = useNavigate();

  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      theme="light"
      className="!fixed h-screen left-0 "
    >
      <div
        className="demo-logo-vertical "
        style={{
          height: "32px",
          borderRadius: "6px",
          margin: "16px",
          background: "rgba(255,255,255,.2)",
          transition: "width 0.3s cubic-bezier(0.2, 0, 0, 1) 0s",
        }}
      >
        <Link to={"/dashboard"}>
          <h1 className="text-xl font-bold font-Poppins text-center  overflow-hidden  flex justify-around">
            <HomeOutlined
              className={`${
                collapsed
                  ? "pe-[calc(50%-8px-4px)] ps-[calc(50%-8px-4px)] "
                  : ""
              }cursor-pointer`}
            />
            <span className={`${collapsed ? "hidden" : ""}`}>Dashboard</span>
          </h1>
        </Link>
      </div>
      <Menu
        theme="light"
        mode="inline"
        defaultSelectedKeys={["1"]}
        items={[
          {
            key: "1",
            icon: <AppstoreOutlined />,
            label: "Dashboard",
            onClick: () => {
              navigate("/dashboard");
            },
          },
          {
            key: "2",
            icon: <VideoCameraOutlined />,
            label: "Product",
            onClick: () => {
              navigate("/admin/product");
            },
          },
          {
            key: "3",
            icon: <UploadOutlined />,
            label: "Customer ",
            onClick: () => {
              navigate("/admin/user");
            },
          },
          {
            key: "4",
            icon: <OrderedListOutlined />,
            label: "Order ",
            onClick: () => {
              navigate("/admin/user");
            },
          },
        ]}
      />
    </Sider>
  );
};

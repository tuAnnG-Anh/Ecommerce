import React, { useState } from "react";
import { Button, Layout, Space } from "antd";
import { Sidenav } from "./sidenav";
import HeaderComponent from "./Header";
import Footer from "./footer";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";

const { Content } = Layout;

const contentStyle: React.CSSProperties = {
  padding: "1rem",
};
interface Props {
  children?: JSX.Element;
}
export const AdminLayout: React.FC<Props> = (props: Props) => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Space direction="vertical" style={{ width: "100%" }} size={[0, 48]}>
      <Layout>
        <Sidenav collapsed={collapsed} />
        <Layout
          className={`${
            collapsed ? "ml-20" : "ml-[200px]"
          } min-h-screen transition-all`}
        >
          <HeaderComponent>
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: "16px",
                width: 64,
                height: 64,
              }}
            />
          </HeaderComponent>
          <Content style={contentStyle}>{props.children}</Content>
          <Footer />
        </Layout>
      </Layout>
    </Space>
  );
};

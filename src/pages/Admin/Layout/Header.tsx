import { theme } from "antd";
import { Header } from "antd/es/layout/layout";

interface Props {
  children: JSX.Element;
}

const HeaderComponent: React.FC<Props> = (props: Props) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Header
      style={{
        backgroundColor: colorBgContainer,
        boxShadow: "10px 4px 10px #dddddd",
        padding: "0",
        position: "sticky",
        width: "100%",
        zIndex: "999",
        top: 0,
      }}
    >
      {props.children}
    </Header>
  );
};

export default HeaderComponent;

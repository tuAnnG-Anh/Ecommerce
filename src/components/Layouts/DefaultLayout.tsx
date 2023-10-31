import { Layout } from "antd";
import { PropsWithChildren } from "react";
import Header from "@components/Header";
const { Footer, Content } = Layout;
interface Props {
  children: JSX.Element;
}
// type Props = {
//   children: JSX.Element;
// };
interface Props extends PropsWithChildren<any> {
  loading?: boolean;
}

const DefaultLayout: React.FC<Props> = (props: Props) => {
  return (
    <Layout className="">
      <Header />
      <Content>{props.children}</Content>
      <Footer>Footer</Footer>
    </Layout>
  );
};

export default DefaultLayout;

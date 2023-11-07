import { PropsWithChildren } from "react";
import Header from "@components/Layouts/Header";
import Footer from "@components/Layouts/Footer";
import { NotificationBar } from "./NotificationBar";

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
    <div className="wrapper">
      <NotificationBar />
      <Header />
      <section id="content">{props.children}</section>
      <Footer />
    </div>
  );
};

export default DefaultLayout;

import { PropsWithChildren } from "react";
import Header from "@components/Layouts/Header";
import Footer from "@components/Layouts/Footer";
import { NotificationBar } from "./NotificationBar";

interface Props extends PropsWithChildren<any> {
  children?: JSX.Element;
  loading?: boolean;
}

const DefaultLayout: React.FC<Props> = (props: Props) => {
  return (
    <div className="wrapper">
      <NotificationBar />
      <Header />
      <section id="content" className="font-Inter relative bg-white ">
        {props.children}
      </section>
      <Footer />
    </div>
  );
};

export default DefaultLayout;

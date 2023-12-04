import {
  ArrowArrowRight1Outline,
  DeliveryTruckFastOutline,
  SecurityLockOutline,
  CarCallOutline,
  MoneyCardPosOutline,
  EmailsMessagesSmsOutline,
} from "react-icons-sax";

import bannerImg from "@resources/images/banner.jpeg";
import productImg from "@resources/images/product.jpeg";
import articleImg1 from "@resources/images/article1.jpeg";
import contactImg from "@resources/images/contactImg.png";
import { CardProduct } from "@/components/Products/CardProduct";
import { CartArticle } from "@/components/CardArticle";
import { FormInput } from "@/components/FormInput";
import { Slider } from "@/components/Slider";

const cardItem = [
  {
    key: "1",
    title: "Free Shipping",
    text: "Order above $200",
    icon: <DeliveryTruckFastOutline className="!w-12 !h-12" />,
  },
  {
    key: "2",
    title: "Money-back",
    text: "30 days guarantee",
    icon: <MoneyCardPosOutline className="!w-12 !h-12" />,
  },
  {
    key: "3",
    title: "Secure Payments",
    text: "Secured by Stripe",
    icon: <SecurityLockOutline className="!w-12 !h-12" />,
  },
  {
    key: "4",
    title: "24/7 Support",
    text: "Phone and Email support",
    icon: <CarCallOutline className="!w-12 !h-12" />,
  },
];
const HomePage: React.FC = () => {
  return (
    <div className="home w-5/6 container md:w-9/12 mx-auto ">
      <div className="slider flex gap-8 flex-col mb-8  ">
        <Slider
          dots={{
            className:
              "[&>li>button]:!h-2 [&>li>button]:!rounded-full !bottom-4 ",
          }}
          className="h-[19rem] md:h-[33.5rem]"
          classArrow="text-[2rem] bg-white  hidden md:flex"
        />
      </div>
      <div className=" ">
        <div className="grid md:grid-cols-2 md:gap-6 gap-4 ">
          <div className="mb-6 md:col-span-2 md:flex gap-x-6">
            <h1 className="text-neutral-700 font-Poppins text-[2.5rem] md:text-5xl  xl:text-7xl font-medium leading-[2.75rem]">
              Simply Unique<span className="text-neutral-400">/</span> Simply
              Better.
            </h1>
            <p className="text-neutral-400 mt-4 font-Inter leading-[1.375rem]  text-sm md:text-base">
              <span className="text-neutral-500">3legant</span> is a gift &
              decorations store based in HCMC, Vietnam. Est since 2019.
            </p>
          </div>
          <div
            className={`h-96 md:h-auto flex items-end relative md:row-span-2 bg-[#F3F5F7] bg-[url('/src/resources/images/livingroom.jpeg')] bg-bottom bg--img `}
          >
            <div className="absolute top-8 right-8 left-8 font-Poppins">
              <h3 className="font-medium text-[1.75rem] md:text-[2.125rem] md:leading-[2.375rem] leading-[2.125rem] -tracking-[0.0375rem]">
                Living Room
              </h3>
              <a
                href="#"
                className="text-neutral-700 md:text-base md:leading-7 mt-2 inline-block text-sm font-medium leading-6 border-b-[1px] border-neutral-700"
              >
                Shop now
                <ArrowArrowRight1Outline className="ml-1 w-4 h-4" />
              </a>
            </div>
          </div>
          <div className="banner--item__right">
            <div className="absolute bottom-8 right-8 left-8 font-Poppins ">
              <h3 className="font-medium text-[1.75rem] md:text-[2.125rem] md:leading-[2.375rem] leading-[2.125rem] -tracking-[0.0375rem]">
                Bedroom
              </h3>
              <a
                href="#"
                className="text-neutral-700 md:text-base md:leading-7 mt-2 inline-block text-sm font-medium leading-6 border-b-[1px] border-neutral-700"
              >
                Shop now
                <ArrowArrowRight1Outline className="ml-1 w-4 h-4" />
              </a>
            </div>
          </div>
          <div className="banner--item__right">
            <div className="absolute bottom-8 right-8 left-8 font-Poppins ">
              <h3 className="font-medium text-[1.75rem] leading-[2.125rem] md:text-[2.125rem] md:leading-[2.375rem] -tracking-[0.0375rem]">
                Bedroom
              </h3>
              <a
                href="#"
                className="text-neutral-700 md:text-base md:leading-7 mt-2 inline-block text-sm font-medium leading-6 border-b-[1px] border-neutral-700"
              >
                Shop now
                <ArrowArrowRight1Outline className="ml-1 w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* arrivals */}
      <div className="arrivals  ">
        <div className="py-8 md:pb-0 grid gap-10">
          <div className="flex justify-between items-end">
            <h1 className="font-Poppins text-primary  font-medium md:text-[2.5rem] leading-[2.375rem] md:leading-[2.75rem] text-[2.125rem] -tracking-[0.0375rem]  w-20">
              New Arrivals <span></span>
            </h1>
            <a
              href="#"
              className="text-neutral-700 mt-2 inline-block text-sm font-medium leading-6 border-b-[1px] border-neutral-700"
            >
              More Products
              <ArrowArrowRight1Outline className="ml-1 w-4 h-4" />
            </a>
          </div>
          <div className="flex gap-4 overflow-x-auto scroll-smooth snap-x scroller">
            <CardProduct img={productImg} id={1} />
            <CardProduct img={productImg} id={2} />
            <CardProduct img={productImg} id={3} />
            <CardProduct img={productImg} id={4} />
            <CardProduct img={productImg} id={5} />
            <CardProduct img={productImg} id={6} />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-2 md:gap-x-6 gap-y-10 py-8 md:py-12  ">
        {cardItem.map((item) => (
          <div
            className="px-4 py-8 bg-neutral-200 text-neutral-700 gap-4 flex flex-col lg:px-8 lg:py-12"
            key={item.key}
          >
            {item.icon}
            <div className="text-neutral-700 text-sm leading-[1.375rem]">
              <h4 className="font-semibold">{item.title}</h4>
              <p className="font-normal text-neutral-400">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
      {/* banner */}
      <div className="grid grid-cols-1 md:grid-cols-2 md:w-screen md:ml-[calc(50%)] md:-translate-x-1/2">
        <img
          src={bannerImg}
          alt=""
          className="w-screen -ml-[calc(100%/10)]  md:w-full md:ml-0 max-h-[33rem] max-w-none"
        />
        <div className="w-5/6  mx-auto py-14 text-neutral-700 flex justify-center flex-col items-start ">
          <h3 className="uppercase text-secondary-blue text-base leading-4 font-bold">
            SALE UP TO 35% OFF
          </h3>
          <h2 className="font-Poppins text-[2.125rem] md:text-[2.5rem] md:leading-[2.75rem] font-medium leading-[2.375rem] mt-4">
            HUNDREDS of New lower prices!
          </h2>
          <p className="text-base font-normal leading-[1.625rem] mt-4 md:text-base md:leading-8">
            It’s more affordable than ever to give every room in your home a
            stylish makeover
          </p>
          <a
            href="#"
            className="text-neutral-700 mt-6 inline-block text-sm font-medium leading-6 md:leading-7 md:text-base border-b-[1px] border-neutral-700"
          >
            Shop now
            <ArrowArrowRight1Outline className="ml-1 w-4 h-4" />
          </a>
        </div>
      </div>
      {/* articles */}

      <div className="py-10 md:py-20">
        <div className="flex justify-between">
          <h1 className="font-Poppins text-primary  font-medium md:text-[2.5rem] leading-[2.375rem] md:leading-[2.75rem] text-[2.125rem] -tracking-[0.0375rem] ">
            Articles
          </h1>
          <a
            href="#"
            className="text-neutral-700 mt-6 inline-block text-sm font-medium leading-6 border-b-[1px] border-neutral-700"
          >
            More articles
            <ArrowArrowRight1Outline className="ml-1 w-4 h-4" />
          </a>
        </div>
        <div className="articles mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          <CartArticle img={articleImg1} title="7 ways to decor your home" />
          <CartArticle img={articleImg1} title="Kitchen organization" />
          <CartArticle img={articleImg1} title="Decor your bedroom" />
        </div>
      </div>

      {/* subscribe */}

      <div
        className={`bg-[#F2F4F6] bg--img  bg-cover bg-[url(${contactImg})] bg-center w-screen ml-[calc(50%)] -translate-x-1/2`}
        style={{
          backgroundSize: "auto 100%",
        }}
      >
        <div className="py-24 h-[22.4rem] text-neutral-700 text-center flex justify-center flex-col items-center">
          <h1 className="font-Poppins text-[1.75rem] leading-[2.125rem] -tracking-[0.0375rem]  md:text-[2.5rem] md:leading-[2.75rem] font-medium ">
            Join Our Newsletter
          </h1>
          <p className="mt-2 text-sm leading-snug md:text-lg md:leading-[1.875rem]">
            Sign up for deals, new products and promotions
          </p>
          <FormInput
            type="email"
            placeHolder="Email address"
            textButton="Signup"
            icon={<EmailsMessagesSmsOutline />}
            // className="mt-8"
          />
        </div>
      </div>
    </div>
  );
};
export default HomePage;

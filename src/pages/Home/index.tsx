import {
  ArrowArrowRight1Outline,
  DeliveryTruckFastOutline,
  SecurityLockOutline,
  CarCallOutline,
  MoneyCardPosOutline,
  EmailsMessagesSmsOutline,
} from "react-icons-sax";
import bannerImg from "@resources/images/banner.jpeg";
// import livingRoomImg from "@resources/images/livingroom.jpeg";
import productImg from "@resources/images/product.jpeg";
import articleImg1 from "@resources/images/article1.jpeg";

import { CardProduct } from "@/components/Products/CardProduct";
import { CartArticle } from "@/components/CardArticle";
import { FormInput } from "@/components/FormInput";
import { Slider } from "@/components/Slider";
import { authStore } from "@/store/auth";

const HomePage: React.FC = () => {
  const { user } = authStore();
  console.log(user);

  return (
    <div className="home px-8 container lg:w-9/12 mx-auto">
      <div className="slider flex gap-8 flex-col mb-8  ">
        <Slider
          dots={{
            className:
              "[&>li>button]:!h-2 [&>li>button]:!rounded-full !bottom-4 ",
          }}
          className="h-[19rem]  md:h-[33.5rem]"
          classArrow="text-[2rem] bg-white  hidden md:flex"
          // classChildren="h-[19rem] w-full md:h-[33.5rem]"
        />
      </div>
      <div className=" ">
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6 gap-4 ">
          <div className="mb-6">
            <h1 className="text-neutral-700 font-Poppins text-[2.5rem] font-medium leading-[2.75rem]">
              Simply Unique<span className="text-neutral-400">/</span> Simply
              Better.
            </h1>
            <p className="text-neutral-400 mt-4 font-Inter leading-[1.375rem] text-sm">
              <span className="text-neutral-500">3legant</span> is a gift &
              decorations store based in HCMC, Vietnam. Est since 2019.
            </p>
          </div>
          <div
            className={`h-96 flex items-end relative bg-[#F3F5F7] bg-[url('/src/resources/images/livingroom.jpeg')] bg-bottom bg-contain bg-blend-multiply bg-no-repeat `}
          >
            <div className="absolute top-8 right-8 left-8 font-Poppins">
              <h3 className="font-medium text-[1.75rem] leading-[2.125rem] -tracking-[0.0375rem]">
                Living Room
              </h3>
              <a
                href="#"
                className="text-neutral-700 mt-2 inline-block text-sm font-medium leading-6 border-b-[1px] border-neutral-700"
              >
                Shop now
                <ArrowArrowRight1Outline className="ml-1 w-4 h-4" />
              </a>
            </div>
          </div>
          <div className="h-48 bg-[#F3F5F7] bg-[url('/src/resources/images/bedroom.jpeg')]  bg-42% bg-[center_right_0rem] bg-blend-multiply bg-no-repeat relative ">
            <div className="absolute bottom-8 right-8 left-8 font-Poppins ">
              <h3 className="font-medium text-[1.75rem] leading-[2.125rem] -tracking-[0.0375rem]">
                Bedroom
              </h3>
              <a
                href="#"
                className="text-neutral-700 mt-2 inline-block text-sm font-medium leading-6 border-b-[1px] border-neutral-700"
              >
                Shop now
                <ArrowArrowRight1Outline className="ml-1 w-4 h-4" />
              </a>
            </div>
          </div>
          <div className="h-48 bg-[#F3F5F7] bg-[url('/src/resources/images/kitchen.jpeg')]  bg-42% bg-[center_right_1rem] bg-blend-multiply bg-no-repeat relative ">
            <div className="absolute bottom-8 right-8 left-8 font-Poppins ">
              <h3 className="font-medium text-[1.75rem] leading-[2.125rem] -tracking-[0.0375rem]">
                Bedroom
              </h3>
              <a
                href="#"
                className="text-neutral-700 mt-2 inline-block text-sm font-medium leading-6 border-b-[1px] border-neutral-700"
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
        <div className="py-8 grid gap-10">
          <h1 className="font-Poppins text-primary font-medium leading-[2.375rem] text-[2.125rem] -tracking-[0.0375rem]">
            New Arrivals
          </h1>
          <div className="flex gap-4 overflow-x-auto scroll-smooth snap-x scroller">
            <CardProduct img={productImg} id={1} />
            <CardProduct img={productImg} id={2} />
            <CardProduct img={productImg} id={3} />
            <CardProduct img={productImg} id={4} />
            <CardProduct img={productImg} id={5} />
            <CardProduct img={productImg} id={6} />
          </div>
          <div>
            <a
              href="#"
              className="text-neutral-700 mt-2 inline-block text-sm font-medium leading-6 border-b-[1px] border-neutral-700"
            >
              More Products
              <ArrowArrowRight1Outline className="ml-1 w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-2 gap-y-10 py-8  ">
        <div className="px-4 py-8 bg-neutral-200 text-neutral-700 gap-4 flex flex-col">
          <DeliveryTruckFastOutline className="!w-12 !h-12" />
          <div className="text-neutral-700 text-sm leading-[1.375rem]">
            <h4 className="font-semibold">Free Shipping</h4>
            <p className="font-normal text-neutral-400">Order above $200</p>
          </div>
        </div>
        <div className="px-4 py-8 bg-neutral-200 text-neutral-700 gap-4 flex flex-col">
          <MoneyCardPosOutline className="!w-12 !h-12" />
          <div className="text-neutral-700 text-sm leading-[1.375rem]">
            <h4 className="font-semibold">Money-back</h4>
            <p className="font-normal text-neutral-400">30 days guarantee</p>
          </div>
        </div>
        <div className="px-4 py-8 bg-neutral-200 text-neutral-700 gap-4 flex flex-col">
          <SecurityLockOutline className="!w-12 !h-12" />
          <div className="text-neutral-700 text-sm leading-[1.375rem]">
            <h4 className="font-semibold">Secure Payments</h4>
            <p className="font-normal text-neutral-400">Secured by Stripe</p>
          </div>
        </div>
        <div className="px-4 py-8 bg-neutral-200 text-neutral-700 gap-4 flex flex-col">
          <CarCallOutline className="!w-12 !h-12" />
          <div className="text-neutral-700 text-sm leading-[1.375rem]">
            <h4 className="font-semibold">24/7 Support</h4>
            <p className="font-normal text-neutral-400">
              Phone and Email support
            </p>
          </div>
        </div>
      </div>
      {/* banner */}
      <div className="grid grid-cols-1 md:grid-cols-2 ">
        <img
          src={bannerImg}
          alt=""
          className="w-screen -ml-[calc(100%/10)]  md:w-full md:ml-0 max-h-[33rem] max-w-none"
        />
        <div className="w-5/6  mx-auto py-14 text-neutral-700 flex justify-center flex-col items-start ">
          <h3 className="uppercase text-secondary-blue text-base leading-4 font-bold">
            SALE UP TO 35% OFF
          </h3>
          <h2 className="font-Poppins text-[2.125rem] font-medium leading-[2.375rem] mt-4">
            HUNDREDS of New lower prices!
          </h2>
          <p className="text-base font-normal leading-[1.625rem] mt-4">
            It’s more affordable than ever to give every room in your home a
            stylish makeover
          </p>
          <a
            href="#"
            className="text-neutral-700 mt-6 inline-block text-sm font-medium leading-6 border-b-[1px] border-neutral-700"
          >
            Shop now
            <ArrowArrowRight1Outline className="ml-1 w-4 h-4" />
          </a>
        </div>
      </div>
      {/* articles */}

      <div className="py-10">
        <div className="flex justify-between">
          <h1 className="font-Poppins text-[2.125rem] font-medium leading-[2.375rem]">
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

      <div className="bg-[#F2F4F6] w-screen -ml-[calc(100%/10)] md:-ml-[calc(100%/6)]">
        <div className="py-24 text-neutral-700 text-center flex justify-center flex-col items-center">
          <h1 className="font-Poppins text-[1.75rem] leading-[2.125rem] -tracking-[0.0375rem] font-medium ">
            Join Our Newsletter
          </h1>
          <p className="mt-2">Sign up for deals, new products and promotions</p>
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

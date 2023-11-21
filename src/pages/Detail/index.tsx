import { Slider } from "@/components/Slider";
import { Breadcrumb, Rate } from "antd";
import { PlusOutlined, HeartOutlined, MinusOutlined } from "@ant-design/icons";
import { RightOutlined } from "@ant-design/icons";
import { ButtonCustom } from "@/components/Button";

import ProductCart from "@resources/images/ProductCart.jpeg";
import { useParams } from "react-router-dom";
interface Props {
  id?: string;
}
export const DetailPage: React.FC<Props> = () => {
  const { id } = useParams();
  console.log(id);

  return (
    <div className="detail container px-8 lg:w-9/12 mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
        <div className="header-detail py-4 flex flex-col gap-4">
          <Breadcrumb
            separator=">"
            className="text-xs font-medium leading-5 text-black-600"
            items={[
              {
                title: "Home",
              },
              {
                title: "Shop",
                href: "",
              },
              {
                title: "Living room",
                href: "",
              },
              {
                title: "Product",
              },
            ]}
          />
          <div className="slider relative">
            <Slider dots={false} className="h-[26rem] " classArrow="m" />
          </div>
        </div>

        <div className="pt-4 grid gap-6">
          <div className="pb-6 grid gap-4 border-b-[1px] border-neutral-300">
            <div className="rate flex gap-[0.62rem] items-center">
              <Rate
                disabled
                allowHalf
                defaultValue={3.5}
                className="text-neutral-500 text-base flex gap-[0.125rem] [&>li]:!me-0"
              />{" "}
              <span className="text-xs leading-[1.125rem]">11 Reviews</span>
            </div>
            <h1 className="font-Poppins text-[2.5rem] font-medium leading-[2.75rem] -tracking-[0.025rem]">
              Tray Table
            </h1>
            <p className="text-neutral-400 leading-[1.625rem]">
              Buy one or buy a few and make every space where you sit more
              convenient. Light and easy to move around with removable tray top,
              handy for serving snacks.
            </p>
            <div className="price text-sm font-Poppins items-center  font-semibold  flex gap-3">
              <p className="text-[#121212] text-[1.75rem] leading-[2.125rem] -tracking-[0.0375rem]">
                $<span>199.00</span>
              </p>
              <p className="text-neutral-400 text-xl ">
                $<span className="line-through">400.00</span>
              </p>
            </div>
          </div>

          {/* countdown */}
          <div className="pb-6 border-b-[1px] border-neutral-300">
            <p className="mb-3">Offer expires in:</p>
            <div className="flex gap-4 ">
              <div className="w-[3.75rem] text-center">
                <div className="bg-neutral-200 py-[0.69rem] text-center font-Poppins text-[2.125rem] font-medium leading-[2.375rem] aspect-square -tracking-[0.0375rem]">
                  02
                </div>
                <p className="leading-[1.125rem] text-xs text-neutral-400">
                  Days
                </p>
              </div>
              <div className="w-[3.75rem] text-center">
                <div className="bg-neutral-200 py-[0.69rem] text-center font-Poppins text-[2.125rem] font-medium leading-[2.375rem] aspect-square -tracking-[0.0375rem]">
                  12
                </div>
                <p className="leading-[1.125rem] text-xs text-neutral-400">
                  Hours
                </p>
              </div>
              <div className="w-[3.75rem] text-center">
                <div className="bg-neutral-200 py-[0.69rem] text-center font-Poppins text-[2.125rem] font-medium leading-[2.375rem] aspect-square -tracking-[0.0375rem]">
                  45
                </div>
                <p className="leading-[1.125rem] text-xs text-neutral-400">
                  Minutes
                </p>
              </div>
              <div className="w-[3.75rem] text-center">
                <div className="bg-neutral-200 py-[0.69rem] text-center font-Poppins text-[2.125rem] font-medium leading-[2.375rem] aspect-square -tracking-[0.0375rem]">
                  05
                </div>
                <p className="leading-[1.125rem] text-xs text-neutral-400">
                  Seconds
                </p>
              </div>
            </div>
          </div>
          {/* color */}
          <div className="pb-6">
            <div className="font-semibold leading-[1.625rem] text-neutral-400">
              Measurements
              <p className="mt-2 text-black text-xl leading-8 font-normal">
                17 1/2x20 5/8 "
              </p>
            </div>
            <div className="mt-6">
              <div className="font-semibold leading-[1.625rem] text-neutral-400">
                Choose Color <RightOutlined />
                <p className="mt-2 text-black text-xl leading-8 font-normal">
                  Black
                </p>
              </div>
              <div className="flex  mt-4 w-full lg:gap-4 [&>img]:cursor-pointer">
                <img
                  src={ProductCart}
                  alt=""
                  className=" h-[4.5rem] border border-neutral-700"
                />
                <img src={ProductCart} alt="" className=" h-[4.5rem] " />
                <img src={ProductCart} alt="" className=" h-[4.5rem] " />
                <img src={ProductCart} alt="" className=" h-[4.5rem] " />
              </div>
            </div>
          </div>
          {/* cart */}
          <div className="pb-6 flex flex-col gap-4">
            <div className="flex gap-2 ">
              {/* count */}
              <div className="flex items-center bg-black/10 rounded overflow-hidden w-20 justify-between">
                <MinusOutlined className="p-2 hover:bg-black/20 cursor-pointer" />
                <span className="text-xs leading-5 font-semibold">1</span>
                <PlusOutlined className="p-2 hover:bg-black/20 cursor-pointer" />
              </div>
              {/* add button */}
              <ButtonCustom
                text="Wishlist"
                icon={<HeartOutlined />}
                className="flex-1 bg-transparent text-primary  hover:!bg-neutral-700 hover:!text-white"
              />
            </div>
            <ButtonCustom text="Add to cart" />
          </div>
        </div>
      </div>
    </div>
  );
};

import { useState } from "react";
import {
  MoneyTicketDiscountOutline,
  EssetionalCloseCircleOutline,
  ArrowArrowRight1Outline,
} from "react-icons-sax";
import { CloseOutlined } from "@ant-design/icons";
export const NotificationBar = () => {
  const [isShowNotiBar, setIsShowNotiBar] = useState(true);
  return (
    isShowNotiBar && (
      <div className="bg-[#F3F5F7] font-Inter">
        <div className=" w-full relative px-8 py-2 md:px-4 flex justify-center items-center gap-2 md:gap-3">
          <MoneyTicketDiscountOutline className="!w-4 !h-4 md:!w-6 md:!h-6" />
          <div className="font-bold text-neutral-500 text-xs leading-5 not-italic md:text-sm">
            <span>30</span>% off storewide — Limited time!
          </div>
          <a
            href="#"
            className="hidden md:inline-block text-secondary-blue font-semibold text-sm leading-6 border-b-2 border-secondary-blue"
          >
            Shop now{" "}
            <ArrowArrowRight1Outline className="ml-1 w-[1.125rem] h-[1.125rem]" />
          </a>
          <div className="absolute right-4 ">
            <CloseOutlined
              className="text-base md:text-2xl"
              onClick={() => setIsShowNotiBar(!isShowNotiBar)}
            />
          </div>
        </div>
      </div>
    )
  );
};

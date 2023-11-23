import { Carousel } from "antd";
import { CarouselRef } from "antd/es/carousel";
import { useRef } from "react";
import {
  ArrowArrowLeftOutline,
  ArrowArrowRight1Outline,
} from "react-icons-sax";
import slide1 from "@resources/images/0db6128ab1993d65eae0e96498fbd94e.jpeg";

interface Props {
  dots?: boolean | { className?: string };
  imgs?: [];
  className?: string;
  classArrow?: string;
}
export const Slider = ({ dots, className = "", classArrow = "" }: Props) => {
  const ref = useRef<CarouselRef>(null);

  return (
    <div className="relative">
      <Carousel ref={ref} dots={dots} autoplay>
        <img src={slide1} alt="" className={className + " w-full"} />
        <img src={slide1} alt="" className={className + " w-full"} />
        <img src={slide1} alt="" className={className + " w-full"} />
      </Carousel>
      <div
        className={`flex absolute top-1/2 w-full justify-between -translate-y-[50%] px-6 md:px-8`}
      >
        <ArrowArrowLeftOutline
          className={
            classArrow +
            " bg-white rounded-full p-2.5 overflow-hidden cursor-pointer"
          }
          onClick={() => {
            ref.current?.prev();
          }}
          style={{ height: "auto", width: "auto" }}
        />
        <ArrowArrowRight1Outline
          className={
            classArrow +
            " bg-white rounded-full p-2.5 overflow-hidden cursor-pointer"
          }
          onClick={() => {
            ref.current?.next();
          }}
          style={{ height: "auto", width: "auto" }}
        />
      </div>
    </div>
  );
};

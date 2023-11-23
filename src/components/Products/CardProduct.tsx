import { Rate } from "antd";
import { SupportLikeQuestionHeartAddOutline } from "react-icons-sax";
import { useNavigate } from "react-router-dom";
import { ButtonCustom } from "../Button";

interface Props {
  id?: number;
  img?: string;
}
export const CardProduct: React.FC<Props> = (props: Props) => {
  const navigate = useNavigate();
  return (
    <div
      key={props?.id}
      className="snap-center min-w-[15rem] flex flex-col gap-3 shrink-0 self-stretch  mb-10 md:mb-12"
      onClick={() => navigate(`/product/${props.id}`)}
    >
      <div
        style={{ backgroundImage: `url('${props?.img}')` }}
        className={`group/edit h-80 flex bg-neutral-200 relative cursor-pointer  bg-center bg-blend-multiply bg-no-repeat bg-contain overflow-hidden`}
      >
        <ButtonCustom
          text="Add to cart"
          className=" md:group-hover/edit:bottom-4 absolute bottom-4 px-6 py-2 text-base font-medium leading-7 inset-x-4 md:-bottom-12"
        />

        <SupportLikeQuestionHeartAddOutline className="text-neutral-400 group-hover/edit:!inline-block  md:!hidden hover:bg-secondary-red hover:text-white cursor-pointer p-[0.38rem] absolute right-4 top-4 rounded-full !w-8 !h-8 bg-white text-center font-bold shadow-[0px_8px_16px_-8px_rgba(15,15,15,0.12)]" />
        <div className="flex flex-col gap-2 text-base font-bold absolute top-4 left-4 leading-4 [&>*]:rounded [&>*]:flex [&>*]:justify-center [&>*]:items-center ">
          <div className="tag uppercase py-[0.25rem] px-[0.875rem] bg-white ">
            NEW
          </div>
          <p className="tag uppercase text-neutral-100 py-1 px-[0.875rem] bg-secondary-green ">
            -<span>50</span>%
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <Rate
          disabled
          allowHalf
          defaultValue={3.5}
          className="text-neutral-500 text-base flex gap-[0.125rem] [&>li]:!me-0"
        />
        <h4 className="text-base leading-[1.625rem] font-semibold">
          Loveseat Sofa
        </h4>
        <div className="price text-sm  font-semibold leading-[1.375rem] flex gap-3">
          <p>
            $<span>199.00</span>
          </p>
          <p className="text-neutral-400 font-normal">
            $<span className="line-through">400.00</span>
          </p>
        </div>
      </div>
    </div>
  );
};

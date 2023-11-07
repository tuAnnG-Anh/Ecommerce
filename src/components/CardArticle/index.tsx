import { ArrowArrowRight1Outline } from "react-icons-sax";
interface Props {
  img?: string;
  title?: string;
}
export const CartArticle: React.FC<Props> = (props: Props) => {
  return (
    <div>
      <div>
        <img src={props.img} alt="" className="h-72 object-cover" />
      </div>
      <div className="mt-4">
        <h3 className="text-[#23262F] font-semibold leading-[1.625rem]">
          {props.title}
        </h3>
        <a
          href="#"
          className="text-neutral-700 mt-2 inline-block text-sm font-medium leading-6 border-b-[1px] border-neutral-700"
        >
          Read more
          <ArrowArrowRight1Outline className="ml-1 w-4 h-4" />
        </a>
      </div>
    </div>
  );
};

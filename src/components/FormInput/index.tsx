interface Props {
  placeHolder?: string;
  icon?: JSX.Element;
  textButton?: string;
  type?: string;
  className?: string;
}
export const FormInput: React.FC<Props> = (props: Props) => {
  return (
    <div className="flex gap-2 py-3 border-b-[1px] border-neutral-400/50  mt-8 items-center  ">
      {props.icon}
      {/* <form method="GET"> */}
      <input
        type={props.type}
        placeholder={props.placeHolder}
        name="email"
        className="focus:outline-none focus:border-primary bg-transparent focus:bg-transparent"
      />
      <button
        // type="submit"
        className={`${
          props.className ? props.className : ""
        } leading-7 font-medium text-neutral-400  -tracking-[0.025rem] focus:border-primary hover:text-neutral-700`}
      >
        {props.textButton}
      </button>
      {/* </form> */}
    </div>
  );
};

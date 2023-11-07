interface Props {
  placeHolder?: string;
  icon?: JSX.Element;
  textButton?: string;
  type?: string;
  className?: string;
}
export const FormInput: React.FC<Props> = (props: Props) => {
  return (
    <div className="flex gap-2 py-3 divide-y divide-y-reverse mt-8 items-center  ">
      {props.icon}
      <input
        type={props.type}
        placeholder={props.placeHolder}
        className="focus:outline-none focus:bg-white focus:border-primary"
      />
      <button
        className={`${
          props.className ? props.className : ""
        } leading-7 font-medium text-neutral-400  -tracking-[0.025rem] focus:border-primary`}
      >
        {props.textButton}
      </button>
    </div>
  );
};

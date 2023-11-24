import { Button } from "antd";
interface Props {
  className?: string;
  text?: string;
  loading?: boolean;
  icon?: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLElement>;
}
export const ButtonCustom: React.FC<Props> = ({
  className,
  text,
  loading,
  icon,
  onClick,
}: Props) => {
  return (
    <Button
      icon={icon}
      type="link"
      loading={loading}
      className={` transition-all h-auto duration-300 ease-in-out bg-neutral-700 border border-neutral-700 text-neutral-100 rounded-lg shadow-[0px_8px_16px_0px_rgba(0,0,0,0.04)] hover:!bg-neutral-100 hover:!text-neutral-700  ${className}`}
      onClick={onClick}
    >
      {text}
    </Button>
  );
};

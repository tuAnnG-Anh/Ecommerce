interface Props {
  children?: JSX.Element;
}
export const Logo = ({ children }: Props) => {
  return (
    <div className="logo font-Poppins flex justify-center items-center text-base md:text-2xl leading-6 font-medium text-center not-italic">
      {children}
      <h3 className="cursor-pointer text-primary">
        <a href="/"> 3legant</a>
        <span className="text-[#6C7275]">.</span>
      </h3>
    </div>
  );
};

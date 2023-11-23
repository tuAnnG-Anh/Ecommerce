import {
  EssetionalInstagramOutline,
  CryptoCompanyYoutubeLinear,
  CryptoCompanyFacebookLinear,
} from "react-icons-sax";

const Footer = () => {
  return (
    <footer className=" bg-neutral-600 ">
      <div className="py-12 w-5/6 mx-auto  md:pt-20 md:pb-8 md:gap-12 grid md:grid-cols-2 text-white gap-10 ">
        {/* logo */}
        <div className="logo  flex flex-col justify-start items-center gap-4 md:gap-8 md:flex-row">
          <h3 className="cursor-pointer font-Poppins relative text-2xl md:text-2xl leading-6 md:pb-0 font-medium pb-6 md:pr-8">
            3legant<span className="text-[#6C7275]">.</span>
            <div className="bg-neutral-400 w-[0.125rem] h-6 absolute right-0 top-2/4 -translate-y-1/2"></div>
          </h3>
          <p className="">Gift & Decoration Store</p>
        </div>

        <ul className="text-sm leading-[1.375rem] font-normal flex gap-8 flex-col md:flex-row justify-end items-center text-neutral-100">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">Shop</li>
          <li className="cursor-pointer">Product</li>
          <li className="cursor-pointer">Blog</li>
          <li className="cursor-pointer">Contact us</li>
        </ul>
        {/* socical */}
        <div className="py-6 md:p-4 md:col-span-2 flex flex-col items-center gap-8 md:flex-row-reverse justify-between w-full border-t-[0.5px] border-neutral-400 text-xs leading-5 font-Poppins text-neutral-100">
          <div className="socical flex gap-6">
            <EssetionalInstagramOutline className="cursor-pointer" />
            <CryptoCompanyFacebookLinear className="cursor-pointer" />
            <CryptoCompanyYoutubeLinear className="cursor-pointer" />
          </div>
          <div className="flex flex-col items-center md:flex-row-reverse gap-7">
            <div className="flex gap-7 font-semibold">
              <p>Privacy Policy</p>
              <p>Terms of Use</p>
            </div>
            <p>Copyright © 2023 3legant. All rights reserved </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

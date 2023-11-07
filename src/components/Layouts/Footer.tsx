import {
  EssetionalInstagramOutline,
  CryptoCompanyYoutubeLinear,
  CryptoCompanyFacebookLinear,
} from "react-icons-sax";

const Footer = () => {
  return (
    <footer className=" bg-neutral-600  ">
      <div className="py-12 w-5/6 mx-auto flex justify-center flex-col items-center text-white gap-10 ">
        {/* logo */}
        <div className="logo  flex flex-col justify-center items-center gap-4">
          <h3 className="cursor-pointer font-Poppins relative text-2xl md:text-2xl leading-6 font-medium pb-6 after:py-[0.125rem] after:px-4 after:bg-neutral-400 after:absolute after:bottom-0 after:inset-x-1/2 after:-translate-x-1/2">
            3legant<span className="text-[#6C7275]">.</span>
          </h3>
          <p className="">Gift & Decoration Store</p>
        </div>

        <ul className="text-xs leading-[1.375rem]  font-normal flex flex-col justify-center items-center text-neutral-100">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">Shop</li>
          <li className="cursor-pointer">Product</li>
          <li className="cursor-pointer">Blog</li>
          <li className="cursor-pointer">Contact us</li>
        </ul>
        {/* socical */}
        <div className="py-6 grid gap-8 justify-items-center w-full border-t-[0.5px] border-neutral-400 text-xs leading-5 font-Poppins text-neutral-100">
          <div className="socical flex gap-6">
            <EssetionalInstagramOutline className="cursor-pointer" />
            <CryptoCompanyFacebookLinear className="cursor-pointer" />
            <CryptoCompanyYoutubeLinear className="cursor-pointer" />
          </div>
          <div className="flex gap-7">
            <p>Privacy Policy</p>
            <p>Terms of Use</p>
          </div>
          <p>Copyright © 2023 3legant. All rights reserved </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

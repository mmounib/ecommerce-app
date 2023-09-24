import {
  AiFillTwitterCircle,
  AiFillGithub,
  AiFillLinkedin,
  AiFillFacebook,
} from "react-icons/ai";
import { footerLinks } from "../../Data";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="px-12 py-8 rounded-[5px] bg-green-200 mt-12 bg-opacity-30 h-[400px]">
      <div className="flex gap-24 flex-wrap">
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-4">
            <div className="flex items-center shadow-sm px-4 py-2 shadow-favorite rounded-[5px] gap-2">
              <img src="../../../src/assets/instagram-shop.svg" alt="logo" className="w-[50px] text-favorite h-[50px]"/>
              <h1 className=" text-black text-xl font-semibold">
                Shop With Us
              </h1>
            </div>
            <p className=" font-extralight text-lg">
              Shop the latest trends and brands
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <div>
              <h1 className="text-black font-semibold text-3xl">Contact</h1>
              <p className="text-black mt-1 font-light text-sm">
                Casablanca, Morocco
              </p>
              <p className="text-black font-light text-sm">
                ecommerce@website.co
              </p>
            </div>
            <div className="flex items-center gap-4">
              <AiFillFacebook size={25} />
              <AiFillGithub size={25} />
              <AiFillLinkedin size={25} />
              <AiFillTwitterCircle size={25} />
            </div>
          </div>
        </div>
        {footerLinks.map((link) => {
          return (
            <div
              key={link.title}
              className="flex flex-col items-center mx-auto gap-4"
            >
              <h1 className="text-black font-semibold text-3xl">
                {link.title}
              </h1>
              <div className="flex flex-col gap-3.5">
                {link.Links.map((lk) => (
                  <Link
                    to={lk.url}
                    key={lk.title}
                    className="font-light text-lg text-black"
                  >
                    {lk.title}
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
        <div className="flex flex-col gap-10">
          <h1 className="text-white bg-favorite rounded-[5px] py-3 px-8 text-4xl font-extrabold">
            Using Convenient Methods
          </h1>
          <div className="flex gap-8">
            <img
              src="../../../src/assets/stripe.svg"
              alt="Stripe"
              className="w-[100px] h-[50px] "
            />
            <img
              src="../../../src/assets/paypal.svg"
              alt="Paypal"
              className="w-[100px] h-[100px] "
            />
            <img
              src="../../../src/assets/mastercard.svg"
              alt="Mastercard"
              className="w-[100px] h-[70px] "
            />
            <img
              src="../../../src/assets/visa.svg"
              alt="Mastercard"
              className="w-[100px] h-[70px] "
            />
          </div>
        </div>
      </div>
      <div className=" mt-20 flex justify-between w-full items-center">
        <p className="text-base font-light text-black">
          @2023 Ecommerce all rights reserved
        </p>
        <p className="text-base font-light text-black">Privacy &Conditions</p>
      </div>
    </footer>
  );
};

export default Footer;

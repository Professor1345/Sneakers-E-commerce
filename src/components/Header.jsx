import { useEffect, useState } from "react";

import { avatar, cart, close, logo, menu, product01, remove } from "../assets";

const Header = () => {
  const [Toggle, setToggle] = useState(false);
  const [isActive, setIsActive] = useState("");
  const [isCart, setIsCart] = useState(false);
  const [addCart, setAddCart] = useState(0);
  useEffect(() => {
    document.body.style.overflow = Toggle ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [Toggle]);

  return (
    <div className="header">
      <div className="headerOne">
        <div className="flex flex-row-reverse items-center">
          <div className="header-logo">
            <img src={logo} alt="Sneakers" className="size-full" />
          </div>
          <button
            onClick={() => setToggle((open) => !open)}
            className="navbar-menu"
          >
            <img src={menu} alt="menu" className="size-full" />
          </button>
        </div>

        <div
          className={`flex sm:hidden duration-[10] fixed w-full h-screen top-0 -left-full z-[1] bg-black/60 ${
            Toggle ? "left-0" : "-left-full"
          }`}
        ></div>
        <div
          className={`navbar-container ${Toggle ? "left-0" : "-left-[60%]"}`}
        >
          <button
            onClick={() => setToggle((close) => !close)}
            className="navbar-close block sm:hidden"
          >
            <img src={close} alt="close" />
          </button>
          <div className="navbar">
            <a
              href="#"
              onClick={() => {
                setIsActive("Collections");
                setToggle(false);
              }}
              className={`navbar-child ${
                isActive == "Collections"
                  ? "sm:border-b-[hsl(26,_100%,_55%)] text-[hsl(219,9%,45%)] duration-150"
                  : "sm:border-transparent duration-150"
              }`}
            >
              Collections
            </a>
            <a
              href="#"
              onClick={() => {
                setIsActive("Men");
                setToggle(false);
              }}
              className={`navbar-child ${
                isActive == "Men"
                  ? "sm:border-b-[hsl(26,_100%,_55%)] text-[hsl(219,9%,45%)] duration-150"
                  : "sm:border-transparent duration-150"
              }`}
            >
              Men
            </a>
            <a
              href="#"
              onClick={() => {
                setIsActive("Women");
                setToggle(false);
              }}
              className={`navbar-child ${
                isActive == "Women"
                  ? "sm:border-b-[hsl(26,_100%,_55%)] text-[hsl(219,9%,45%)] duration-150"
                  : "sm:border-transparent duration-150"
              }`}
            >
              Women
            </a>
            <a
              href="#"
              onClick={() => {
                setIsActive("About");
                setToggle(false);
              }}
              className={`navbar-child ${
                isActive == "About"
                  ? "sm:border-b-[hsl(26,_100%,_55%)] text-[hsl(219,9%,45%)] duration-150"
                  : "sm:border-transparent duration-150"
              }`}
            >
              About
            </a>
            <a
              href="#"
              onClick={() => {
                setIsActive("Contact");
                setToggle(false);
              }}
              className={`navbar-child ${
                isActive == "Contact"
                  ? "sm:border-b-[hsl(26,_100%,_55%)] text-[hsl(219,9%,45%)] duration-150"
                  : "sm:border-transparent duration-150"
              }`}
            >
              Contact
            </a>
          </div>
        </div>
      </div>
      <div className="headerTwo">
        <div
          onClick={() => setIsCart((open) => !open)}
          className={`cart-button ${isCart ? "invert" : "invert-0"}`}
        >
          <img src={cart} className="hover:fill-transparent" alt="cart" />
        </div>
        <div className={`cart ${isCart? "block": "hidden"}`}>
          <div className="py-4 px-5 font-bold text-[hsl(220,_13%,_13%)]">Cart</div>
          <hr />
          {addCart >= 1 ? <div className="cart-content">
            <div className="flex flex-row items-center justify-between text-[15px] 2xs:text-base sm:text-sm md:text-base">
              <div className="overflow-hidden h-[3rem] w-[2.8rem]"><img src={product01} alt="product" className="size-full" /></div>
              <div className="mx-2">
                <div>Fall Limited Edition Sneakers</div>
                <div>$125.00 X <span>3</span> <span className="font-bold">$375.00</span></div>
              </div>
              <div className="self-center"><img src={remove} alt="delete" className="size-full" /></div>
            </div>
            <div className="checkout">Checkout</div>
          </div>
          :
          <div className="empty"><div className="text-[hsl(219,9%,45%)] font-bold">Your cart is empty.</div></div>}
        </div>

        <button className="user">
          <img src={avatar} className="w-full h-full object-cover" alt="user" />
        </button>
      </div>
    </div>
  );
};

export default Header;

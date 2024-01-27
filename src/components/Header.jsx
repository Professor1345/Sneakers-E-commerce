import { useEffect, useState } from "react";

import { avatar, cart, close, logo, menu } from "../assets";

const Header = () => {
  const [Toggle, setToggle] = useState(false);
  const [isActive, setIsActive] = useState("");
  const [isCart, setIsCart] = useState(false);
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
                  ? "sm:border-b-[hsl(26,_100%,_55%)] text-[hsl(219,9%,45%)]"
                  : "sm:border-transparent"
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
                  ? "sm:border-b-[hsl(26,_100%,_55%)] text-[hsl(219,9%,45%)]"
                  : "sm:border-transparent"
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
                  ? "sm:border-b-[hsl(26,_100%,_55%)] text-[hsl(219,9%,45%)]"
                  : "sm:border-transparent"
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
                  ? "sm:border-b-[hsl(26,_100%,_55%)] text-[hsl(219,9%,45%)]"
                  : "sm:border-transparent"
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
                  ? "sm:border-b-[hsl(26,_100%,_55%)] text-[hsl(219,9%,45%)]"
                  : "sm:border-transparent"
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
          className={`cart ${isCart ? "invert" : "invert-0"}`}
        >
          <img src={cart} className="hover:fill-transparent" alt="cart" />
        </div>
        <button className="user">
          <img src={avatar} className="w-full h-full object-cover" alt="user" />
        </button>
      </div>
    </div>
  );
};

export default Header;

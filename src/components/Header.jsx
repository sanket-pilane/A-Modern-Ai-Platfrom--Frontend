import { brainwave } from "../assets";
import { useLocation } from "react-router-dom";
import { navigation } from "../contants";
import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";
import { HambugerMenu } from "../design/Header";
import { useState } from "react";
import { disablePageScroll, enablePageScroll } from "scroll-lock";

const Header = () => {
  const pathName = useLocation();

  const [openNavigation, setOpenNavigation] = useState(false);

  const handleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;
    enablePageScroll();
    setOpenNavigation(false);
  };

  return (
    <div
      className={`fixed z-50 top-0 l-0 w-full  border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${
        openNavigation ? "bg-n-8 " : "bg-n-8/90 backdrop-blur-sm"
      }`}
    >
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-y py-1">
        <a href="#hero" className="block w-[12rem] xl:mr-8">
          <img src={brainwave} alt="Brainwave" width={170} height={40} />
        </a>
        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div className="relative items-center justify-center flex flex-col lg:flex-row z-2 m-auto">
            {navigation.map((item) => (
              <a
                href={item.url}
                key={item.key}
                onClick={handleClick}
                className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${
                  item.onlyMobile ? "lg:hidden" : ""
                } lg:text-xs lg:font-semibold px-6 py-6 md:py-8 lg:-smr-0.25 ${
                  item.url === pathName.hash ? "z-8 text-n-1" : "text-n-1/50"
                } leading-5 lg:hover:text-n-1 xl:px-12`}
              >
                {item.title}
              </a>
            ))}
          </div>
          <HambugerMenu />
        </nav>

        <a
          href="#signup"
          className="button hidden mr-8 text-n-1/50 transition-colors hover:text-n-1 lg:block"
        >
          New Account
        </a>

        <Button className="hidden lg:flex" href="#Login">
          Sign in
        </Button>
        <Button
          className="ml-auto lg:hidden "
          px="px-3"
          onClick={handleNavigation}
        >
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </div>
  );
};

export default Header;

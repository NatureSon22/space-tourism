import { Link } from "react-router-dom";
import logo from "../assets/shared/logo.svg";
import hamburger from "../assets/shared/icon-hamburger.svg";
import { navLinks } from "../constants";
import close from "../assets/shared/icon-close.svg";
import { useState } from "react";

const NavBar = ({ setBg, link, setLink }) => {
  const [open, setOpen] = useState(false);

  const handleSetOpen = () => {
    setOpen(!open);
  };

  const handleClick = (index, label) => {
    setLink(index);
    setBg(label);
    setOpen(false);
  };

  return (
    <header className="flex justify-between items-center p-7 sm:p-14 md:pr-0">
      <Link to="/">
        <img className="sm:w-16 sm:min-w-min" src={logo} alt="logo" />
      </Link>

      {/* Mobile Navigation */}
      <nav
        className={`w-[70%] max-w-[20em] py-10 px-7 h-full fixed right-0 top-0 custom-backdrop z-10 flex flex-col gap-10 sm:py-16 sm:px-12 md:hidden transition-transform duration-300 ${
          open ? "transform translate-x-0" : "transform translate-x-full"
        }`}
      >
        <img
          className="self-end sm:w-10 cursor-pointer"
          src={close}
          alt="close"
          onClick={handleSetOpen}
        />

        <ul className="ml-5 grid gap-14 text-white">
          {navLinks.map((item, index) => (
            <li
              key={index}
              className={`w-max relative link-chosen side ${
                link === index && "selected"
              }`}
              onClick={() => handleClick(index, item.label)}
            >
              <Link
                className="font-barlow-condensed text-xl uppercase"
                to={item.link}
              >
                <span className="hidden mr-3 font-bold lg:inline">
                  {item.index}
                </span>{" "}
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Desktop Navigation */}
      <nav className="hidden flex-1 justify-end items-center md:flex">
        <hr className="w-[50%] relative -right-10 z-10 border-neutral-100" />
        <ul className="max-w-[40em] px-10 pl-20 py-10 gap-10 flex justify-between text-white lg:min-w-[40em] xl:pr-52 xl:pl-32 xl:min-w-[65em] lg:gap-0 custom-backdrop">
          {navLinks.map((item, index) => (
            <li
              key={index}
              className={`relative link-chosen ${link === index && "selected"}`}
              onClick={() => handleClick(index, item.label)}
            >
              <Link
                className="font-barlow-condensed text-xl uppercase"
                to={item.link}
              >
                <span className="hidden mr-3 font-bold lg:inline">
                  {item.index}
                </span>{" "}
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Hamburger Icon */}
      <img
        className="cursor-pointer sm:w-10 md:hidden"
        src={hamburger}
        alt="hamburger"
        onClick={handleSetOpen}
      />
    </header>
  );
};

export default NavBar;

import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { RiCloseLine } from "react-icons/ri";
import { HiOutlineMenu } from "react-icons/hi";
import log from "./../assets/log.webp";
import { links } from "../assets/constants";

const NavLinks = ({ handleClick }) => {
  return (
    <div className="mt-10">
      {links.map((link) => {
        return (
          <NavLink
            key={link.name}
            to={link.to}
            className={`flex flex-row justify-start items-center my-4 p-2 text-sm font-bold text-[#ffffff] bg-[#3684b5] hover:bg-[#08466e] rounded-md [&.active]:text-[#fff] [&.active]:bg-[#08466e] `}
            onClick={() => {
              handleClick && handleClick(item.name);
            }}
          >
            <link.icon className=" w-6 h-6 mr-2" />
            {link.name}
          </NavLink>
        );
      })}
    </div>
  );
};

const Sidebar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <>
      <div className="md:flex hidden flex-col w-[240px]  px-4 bg-gradient-to-br from-[#ffffff]  to-[#eee]">
        <Link to="/">
          <img src={log} alt="logo" className="w-full object-contain" />
        </Link>
        <NavLinks />
      </div>

      <div className="absolute md:hidden block top-6 right-3">
        {mobileMenuOpen ? (
          <RiCloseLine
            className="w-6 h-6 mr-2 text-white"
            onClick={() => {
              setMobileMenuOpen(false);
            }}
          />
        ) : (
          <HiOutlineMenu
            className="w-6 h-6 mr-2 text-white"
            onClick={() => {
              setMobileMenuOpen(true);
            }}
          />
        )}
      </div>

      <div
        className={`absolute top-0 h-screen w-2/3 bg-gradient-to-tl from-[#ffffff]  to-[#eee] backdrop-blur-lg z-10 p-6 md:hidden transition-all ${
          mobileMenuOpen ? "left-0" : "-left-full"
        }`}
      >
        <img src={log} alt="logo" className="w-full object-contain h-24" />
        <NavLinks
          handleClick={() => {
            setMobileMenuOpen(false);
          }}
        />
      </div>
    </>
  );
};

export default Sidebar;

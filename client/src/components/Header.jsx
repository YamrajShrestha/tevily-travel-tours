import React from "react";
import { Link } from "react-router-dom";
import { PiPhoneCall } from "react-icons/pi";
import { RiSearch2Line } from "react-icons/ri";
import { MdOutlineAlternateEmail } from "react-icons/md";
import {
  FaXTwitter,
  FaInstagram,
  FaPinterestP,
  FaFacebookF,
  FaSearchengin,
  FaRegUser,
} from "react-icons/fa6";
import "../css/Header.css";

const Header = () => {
  return (
    <>
      <section className="header-top bg-[#313041]">
        <div className="container mx-auto">
          <div className="flex justify-between items-center leading-[50px]">
            <ul className="flex gap-8">
              <li className="flex items-center gap-2">
                <PiPhoneCall className="text-[#E8604C]" />
                <Link
                  to=""
                  className="text-[13px] text-[#787780] hover:text-white transition-all font-medium"
                >
                  + 92 666 999 0000
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <MdOutlineAlternateEmail className="text-[#e8604c]" />
                <Link
                  to=""
                  className="text-[13px] text-[#787780] hover:text-white transition-all font-medium"
                >
                  needhelp@company.com
                </Link>
              </li>
            </ul>
            <div className="flex gap-3 items-center text-sm">
              <FaFacebookF className="text-white hover:text-[#e8604c] transition-all" />
              <FaXTwitter className="text-white hover:text-[#e8604c] transition-all" />
              <FaInstagram className="text-white hover:text-[#e8604c] transition-all" />
              <FaPinterestP className="text-white hover:text-[#e8604c] transition-all" />
              <Link
                to=""
                className="text-white bg-[#e8604c] text-xs font-bold leading-[50px] px-8 hover:bg-white hover:text-black transition-all"
              >
                BECOME A LOCAL GUIDE
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="navbar py-5">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <Link to="/" className="logo">
              <img src="/images/logo.png" alt="" />
            </Link>
            <nav>
              <ul className="flex items-center gap-8">
                <li>
                  <Link to="" className="text-[#787780] hover:text-black">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="" className="text-[#787780] hover:text-black">
                    Destinations
                  </Link>
                </li>
                <li>
                  <Link to="" className="text-[#787780] hover:text-black">
                    Tours
                  </Link>
                </li>
                <li>
                  <Link to="" className="text-[#787780] hover:text-black">
                    Pages
                  </Link>
                </li>
                <li>
                  <Link to="" className="text-[#787780] hover:text-black">
                    News
                  </Link>
                </li>
                <li>
                  <Link to="" className="text-[#787780] hover:text-black">
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
            <div className="flex items-center text-xl gap-3">
              <div className="icon-box hover:bg-[#e8604c] hover:text-white transition-colors">
                <RiSearch2Line />
              </div>
              <div className="icon-box  hover:bg-[#e8604c] hover:text-white transition-colors">
                <FaRegUser />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;

import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { IoCloseOutline } from "react-icons/io5";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className=" shadow-lg bg-yellow-300  ">
      <div className=" max-sm:w-full">
        <div className="flex md:justify-center md:pt-8 md:items-center  clipPathOne  sm:h-28 xs:h-24  bg-black lg:mt-[-50px] sm:px-5 xs:px-5 md:mt-[-50px] xs:justify-between xs:items-center sm:justify-between sm:items-center sm:mt-[-40px] xs:mt-5 xs:w-full">
          <p className="text-2xl font-bold  md:hidden text-white ">logo</p>

          <div className="hidden md:flex flex-col md:flex-row md:items-center md:justify-center items-center justify-center ">
            <a
              href="#"
              className="text-white  hover:text-white px-3 py-2 rounded-md lg:text-2xl font-medium max-sm:block md:text-xl"
            >
              Best Sellers
            </a>
            <a
              href="#"
              className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md lg:text-2xl font-medium md:text-xl"
            >
              Git ideas
            </a>
            <a
              href="#"
              className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md lg:text-2xl font-medium md:text-xl"
            >
              New Releses
            </a>
            <a
              href="#"
              className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md lg:text-2xl font-medium md:text-xl"
            >
              New Releses
            </a>
            <a
              href="#"
              className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md lg:text-2xl font-medium md:text-xl"
            >
              New Releses
            </a>
          </div>

          <div className="md:hidden ">
            <button
              type="button"
              className="text-white hover:text-gray-300 focus:outline-none focus:text-gray-300"
              onClick={toggleNavbar}
            >
              {isOpen ? (
                <IoCloseOutline size={48} />
              ) : (
                <IoMenu size={48} className="" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`${
          isOpen ? " bg-blue-400 flex justify-center items-center" : "hidden "
        } md:hidden `}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex items-center flex-col justify-center ">
          <a
            href="#"
            className="text-white font-extrabold hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base "
          >
            Best Sellers
          </a>
          <a
            href="#"
            className="text-white font-extrabold hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base "
          >
            Git ideas
          </a>
          <a
            href="#"
            className="text-white font-extrabold hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base"
          >
            New Releses
          </a>
          <a
            href="#"
            className="text-white font-extrabold hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base"
          >
            Customer Service
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

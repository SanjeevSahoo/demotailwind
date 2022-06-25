import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

function Navbar() {
  const [mobileMenuToggle, setMobileMenuToggle] = useState(false);
  const handleMobileToggle = () => {
    setMobileMenuToggle((oldState) => !oldState);
  };
  return (
    <div className="flex justify-between items-center h-24 px-4 max-w-screen-xl mx-auto text-white">
      <h1 className="text-3xl font-bold text-green-400">REACT.</h1>
      <div
        className={`fixed w-[60%] h-full left-6 top-20  md:relative bg-black md:w-auto md:h-auto md:left-auto md:top-auto ease-in-out duration-300 ${
          !mobileMenuToggle ? "left-[-100%] " : " "
        } `}
      >
        <ul className="block uppercase md:flex md:pt-0 md:normal-case">
          <li className="p-4 border-b border-gray-700 md:border-green-600 md:border-b-2 ">
            Home
          </li>
          <li className="p-4 border-b border-gray-700 md:border-none">
            Company
          </li>
          <li className="p-4 border-b border-gray-700 md:border-none">
            Resources
          </li>
          <li className="p-4 border-b border-gray-700 md:border-none">About</li>
          <li className="p-4 ">Contact</li>
        </ul>
      </div>
      <div className="md:hidden cursor-pointer" onClick={handleMobileToggle}>
        {mobileMenuToggle ? (
          <AiOutlineClose size={20} />
        ) : (
          <AiOutlineMenu size={20} />
        )}
      </div>
    </div>
  );
}

export default Navbar;

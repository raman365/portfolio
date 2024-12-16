import React from "react";

const Header = () => {
  return (
    <header className="bg-[#20242d] text-white py-4 pl-[5%] pr-[5%] md:pl-[10%] md:pr-[10%] h-20 flex items-center justify-between">
      {/* Logo */}
      <div className="text-lg font-bold text-[#ffffff]">Raman's Portfolio</div>
      {/* Navigation Links */}
      <nav>
        <ul className="flex space-x-6">
          <li>
            <a
              href="#portfolio"
              className="text-[#ffffff] hover:text-[#07eeff] transition duration-300"
            >
              Portfolio
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="text-[#ffffff] hover:text-[#07eeff] transition duration-300"
            >
              About
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

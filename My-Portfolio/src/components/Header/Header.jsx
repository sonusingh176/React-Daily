import React, { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import { AiFillSun } from "react-icons/ai";
import { AiOutlineMoon } from "react-icons/ai";

import { ThemeContext } from "../../context/ThemeContext";

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const navLinks = [
    { name: "HOME", to: "/" },
    { name: "ABOUT", to: "/about" },
    { name: "WORK", to: "/works" },
    { name: "SKILLS", to: "/skills" },
    { name: "CONTACT", to: "/contact" },
    { name: "RESUME", to: "/resume" },
  ];

  return (
    <header className={theme === "dark" ? "dark-theme" : "light-theme"}>
      <nav className="w-full  shadow-md px-6 py-4 sticky top-0 z-50">
        <div className="flex items-center justify-between">
          {/* Left - Logo */}
          <h1
            className={`text-2xl font-bold  ${
              theme === "light" ? "text-red-600" : "text-red-500"
            }`}
          >
            SONU
          </h1>

          {/* Right - Menu + Icon */}
          <div className="flex items-center gap-6">
            <ul className="md:flex items-center gap-8  hidden text-xl font-semibold">
              {navLinks.map((link, index) => (
                <li key={index}>
                 <NavLink
                    to={link.to}
                    className={({ isActive }) =>
                        `${isActive 
                        ? "bg-red-600 text-white px-3 py-1 rounded"
                        : `${theme === 'light' ? 'text-black' : 'text-white'} hover:text-red-600`} no-underline`
                    }
                    >
                    {link.name}
                 </NavLink>
                </li>
              ))}
            </ul>

            {theme === "light" ? (
              <AiFillSun className="sunlight" onClick={toggleTheme} />
            ) : (
              <AiOutlineMoon className="moonlight" onClick={toggleTheme} />
            )}
          </div>
        </div>
        <div className="md:hidden">
          <a className="text-4xl font-semibold" href="#">
            &#8801;
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;

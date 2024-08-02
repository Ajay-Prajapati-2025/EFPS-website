import { useEffect, useState } from "react";
import logo from "../../src/assets/logo2.png";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        isScrolled ? "bg-white bg-opacity-60 shadow-md bl" : "bg-transparent"
      }`}
    >
      <nav className=" border-gray-200 px-4 lg:px-6 py-2">
        <div className="flex flex-wrap justify-between items-center text-xl">
          <Link to="/" className="flex items-center">
            <img src={logo} className="mr-3 h-16" alt="Logo" />
          </Link>
          <div className="flex items-center lg:order-2">
            <Link
              to="/login"
              className="text-gray-800 hover:bg-[#036570] hover:text-white font-medium rounded-lg text-lg px-4 py-2 lg:py-1.5 mr-2"
            >
              Log in
            </Link>
            <Link
              to="/sign-up"
              className="text-white bg-[#036570] hover:bg-[#02555e] font-medium rounded-lg text-lg px-4 py-2 lg:py-1.5 mr-2"
            >
              Get started
            </Link>
          </div>
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <NavLink
                  to="/home"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-[#036570]" : "text-gray-600"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#036570] lg:p-0`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-[#036570]" : "text-gray-600"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#036570] lg:p-0`
                  }
                >
                  Our story
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/product"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-[#036570]" : "text-gray-600"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#036570] lg:p-0`
                  }
                >
                  Products
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/journal"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-[#036570]" : "text-gray-600"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#036570] lg:p-0`
                  }
                >
                  Journal
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-[#103b4c]" : "text-gray-600"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#036570] lg:p-0`
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

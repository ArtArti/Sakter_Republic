import React from "react";
import { Link, NavLink } from "react-router-dom";
import { cilMenu } from "@coreui/icons";
import CIcon from "@coreui/icons-react";
import {faGlobe, faSearch, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CHeaderToggler } from "@coreui/react";
import logo from './../../assets/Logo/logo.svg'
export default function Header() {


  return (
    <>
      <header className="shadow z-50">
        <nav className=" bg-slate-950 bg-cover fixed z-20 w-[100vw] px-4 lg:x-14 h-16 justify-center items-center flex ">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl w-full">
            {/* section 1 */}
            <Link to="/" className=" font-extralight text-2xl font-serif text-white hidden lg:flex items-center">
              <img
                src={logo}
                className="bg-white p-1 mr-3 h-12 rounded-full"
                alt="Logo"
              />
              Skater Republic
            </Link>

            {/* section 2 */}
            <div className="flex items-center lg:order-2">
            <FontAwesomeIcon icon={faGlobe} size="lg" className="px-2 text-white"/>
            <FontAwesomeIcon icon={faSearch} size="lg" className="px-2 text-white"/>
              <Link
                to="#"
                className=" text-white font-lg text-lg px-4 lg:px-1 py-1 lg:py-1.5 mr-2 focus:outline-none"
              >
                <FontAwesomeIcon icon={faUser} size="lg" />
              </Link>
              <Link
                to="#"
                className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-2 lg:px-3 py-1 lg:py-1.5 mr-2 focus:outline-none"
              >
                Download
              </Link>
            </div>

            {/* section 3 */}
            <div
              className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
              id="mobile-menu-2"
            >
              <ul className=" font-extrabold flex flex-col mt-4  lg:flex-row lg:space-x-8 lg:mt-0">
                <li className="">
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 ${
                        isActive ? "text-orange-700" : "text-white"
                      } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
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
                        isActive ? "text-orange-700" : "text-white"
                      } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                    }
                  >
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 ${
                        isActive ? "text-orange-700" : "text-white"
                      } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                    }
                  >
                   Contact
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="#"
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 ${
                        isActive ? "text-orange-700" : "text-white"
                      } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                    }
                  >
                   News
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/purchase"
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 ${
                        isActive ? "text-orange-700" : "text-white"
                      } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                    }
                  >
                    Purchase
                  </NavLink>
                </li>
              </ul>
            </div>

            {/* section 4 */}
            <div>
              <CHeaderToggler
                className="lg:hidden"
                //  onClick={() => dispatch({ type: 'set', sidebarShow: !sidebarShow })}
                >
                <CIcon icon={cilMenu} size="lg" />
              </CHeaderToggler>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

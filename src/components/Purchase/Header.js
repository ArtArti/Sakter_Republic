import {
  CButton,
  CNav,
} from "@coreui/react";
import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
 
  return (
    <>
      {/* header section */}
        <CNav
          className="h-20 fixed z-20 w-[100vw] px-4 lg:x-14 bg-slate-800 justify-center items-center flex ">
          <div className="flex justify-between items-center w-full">
          <h1 className=" text-white font-extrabold display-6 "
           component={NavLink}
                to="/purchase">
          Skater Republic
            </h1>
            <ul className=" font-mono text-lg hidden md:flex font-extrabold text-white">
              <li className="md:mx-2 lg:mx-2 cursor-pointer">Home</li>
              <li className="md:mx-2 lg:mx-2 cursor-pointer">About</li>
              <li className="md:mx-2 lg:mx-2 cursor-pointer">Contact</li>
              <li className="md:mx-2 lg:mx-2 cursor-pointer">Resources</li>
              <li className="md:mx-2 lg:mx-2 cursor-p ointer">Services</li>
            </ul>
            
            <div className="hidden md:flex ">
              <CButton
                component={NavLink}
                to="/purchase/login"
                className="md:px-2 lg:px-4 py-1 bg-slate-200 text-[#12141D] rounded-2xl mr-2">
                Login
              </CButton>
              <CButton
                component={NavLink}
                to="/purchase/register"
                className="md:px-2 lg:px-4 py-1 bg-blue-600 text-[#12141D] rounded-2xl mr-2"ww>
                SingUp
              </CButton>
            </div>
          </div>
        </CNav>
      {/* </CHeader> */}
    </>
  );
}

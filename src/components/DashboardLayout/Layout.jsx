import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import {faBars,} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "react-modern-drawer/dist/index.css";
import SideBar from "../SIdeBar/SideBar";
import Notification from "../Notification/Notification";
import ResponsiveSlidebar from "../SIdeBar/ResponsiveSlidebar";

const Layout = () => {
  const [openLayout, setOpenLayout] = useState(true);
  const [isOpen2, setIsOpen2] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };


  return (
    <div className="">
      <Notification />
      <div className="flex h-full relative">

        {/* Sidebar */}
        <SideBar
          openLayout={openLayout}
          setOpenLayout={setOpenLayout}
          setIsOpen2={setIsOpen2}
          isOpen2={isOpen2}
        />

        {/* Main Content and responsive Sidebar */}
        <div
          className={`${openLayout ? "xl:w-[80%]" : "xl:w-[95%]"
            }  ml-auto h-full min-h-screen w-full  text-[#021526] transition-all duration-300`}
        >
          <div className="p-1 md:p-4">
            <div className="flex gap-5 items-center lg:hidden ">
              <button
                className="text-3xl text-[#0360D9]"
                onClick={toggleDrawer}
              >
                <FontAwesomeIcon icon={faBars} />
              </button>

              <ResponsiveSlidebar
                isOpen={isOpen}
                openLayout={openLayout}
                toggleDrawer={toggleDrawer}
                isOpen2={isOpen2}

              />

              <h1 className="text-xl font-semibold ">
                Dashboard
              </h1>
            </div>
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;

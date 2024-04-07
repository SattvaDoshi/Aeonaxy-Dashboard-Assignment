import React, { useState } from 'react';
import { faBell, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Notification = () => {
  const [isNavOpen, setIsNavOpen] = useState(true);

  const closeNav = () => {
    setIsNavOpen(false);
  }

  return (
    <div>
      <div className=" bg-[#4488ED] text-white flex-col md:flex-row items-center justify-end text-center p-2 flex">

        {
          isNavOpen ? (
            <div className="flex justify-between items-center md:gap-32 lg:gap-48">
              <h1 className="hidden md:block text-sm">
                Enable browser notifications to avoid missing out on important activity.
              </h1>
              <div className="flex gap-3 items-center">
                <div className="flex gap-3 items-center bg-[#1369E4] px-2 py-1 rounded-md">
                  <FontAwesomeIcon icon={faBell} />
                  <h3 className="text-sm">Enable notifications</h3>
                </div>
                <FontAwesomeIcon onClick={closeNav} className="hover:cursor-pointer hover:bg-white 
                hover:text-[#4488ED] text-2xl md:mr-3" icon={faTimes} />
              </div>
            </div>
          ) :
            (
              <></>
            )
        }
      </div>

    </div>
  );
}

export default Notification;

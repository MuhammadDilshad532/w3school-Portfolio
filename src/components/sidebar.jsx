import React, { useState, useEffect, useRef } from "react";
import avatar_g from "../assets/w3images/avatar_g.jpg";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div
        ref={sidebarRef}
        className={`fixed top-0 left-0 bottom-0 z-30 w-[300px] bg-white shadow-lg overflow-y-auto transition duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 `}
      >
        <br />
        <div className="px-4">
          <div
            className="absolute top-0 right-0 text-4xl p-4 hover:text-gray-700 block lg:hidden"
            title="Close menu"
            onClick={toggleSidebar}
          >
            <i className="fa fa-times"></i>
          </div>
          <div className="mt-0 mb-4">
            <img
              src={avatar_g}
              alt="Avatar"
              className="rounded-md w-[120px] h-[120px]"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "default-avatar.jpg";
              }}
            />
          </div>
          <h4 className="font-bold mt-10 font-sans,font-serif text-[20px] ">
            PORTFOLIO
          </h4>
          <p className="mt-5">Template by W3.CSS</p>
        </div>
        <div class="flex flex-col">
          <a
            href="#portfolioHeader"
            class="block py-2 px-4 text-teal-500 hover:bg-gray-200"
          >
            <i class="fa fa-th-large fa-fw mr-2"></i>PORTFOLIO
          </a>
          <a href="#about" class="block py-2 px-4 hover:bg-gray-200">
            <i class="fa fa-user fa-fw mr-2"></i>ABOUT
          </a>
          <a href="#contact" class="block py-2 px-4 hover:bg-gray-200">
            <i class="fa fa-envelope fa-fw mr-2"></i>CONTACT
          </a>
        </div>

        <div className="w-full p-4 ">
          <i className="fa fa-facebook-official w3-hover-opacity"></i>
          <i className="fa fa-instagram w3-hover-opacity mx-1"></i>
          <i className="fa fa-snapchat w3-hover-opacity mx-1"></i>
          <i className="fa fa-pinterest-p w3-hover-opacity mx-1"></i>
          <i className="fa fa-twitter w3-hover-opacity mx-1"></i>
          <i className="fa fa-linkedin w3-hover-opacity mx-1"></i>
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed top-0 left-0 bottom-0 right-0 bg-black opacity-50"
          onClick={closeSidebar}
        ></div>
      )}
      <p className="bars bg-gray-100">
        <button
          className=" top-0 left-0 p-4 block lg:hidden "
          onClick={toggleSidebar}
        >
          <i className="fa fa-bars text-4xl"></i>
        </button>
      </p>

      <style jsx>{`
        @media (min-width: 780px) {
          .xl\\:hidden {
            display: none;
          }
        }
      `}</style>
    </>
  );
};

export default Sidebar;

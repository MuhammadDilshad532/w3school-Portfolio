import React from "react";
import avatar_g from "../assets/w3images/avatar_g.jpg";

const Header = () => {
  return (
    <div className="bg-gray-100">
      <header className="portfolio">
        <a href="#">
          <img
            src={avatar_g}
            className="rounded-full float-right m-4 lg:hidden lg:hover:opacity-75 h-12 w-65"
            alt="Avatar"
          />
        </a>

        <div className="container mx-auto">
          <h1 id="portfolioHeader">
            <b className="text-4xl font-sans  ">My Portfolio</b>
          </h1>
          <div className="flex items-center border-b border-gray-300 py-4 mt-14">
            <span className="mr-4">Filter:</span>
            <button className="px-4 py-2 bg-black hover:bg-gray-300 text-white">
              ALL
            </button>
            <button className="px-4 py-2 bg-white text-black hover:bg-gray-300 ml-2">
              <i className="fa fa-diamond mr-1"></i>Design
            </button>
            <button className="px-4 py-2 bg-white text-black hover:bg-gray-300 ml-2">
              <i className="fa fa-photo mr-1"></i>Photos
            </button>
            <button className="px-4 py-2 bg-white text-black hover:bg-gray-300 ml-2">
              <i className="fa fa-map-pin mr-1"></i>Art
            </button>
          </div>
        </div>
        <div className="w-[99%] h-2 bg-gray-300"></div>
      </header>

      {/* CSS */}

      <style jsx>{`
        @media (min-width: 1024px) {
          .portfolio {
            margin-left: 320px;
          }
          .portfolio button {
            margin-left: 10px;
          }
        }
      `}</style>
    </div>
  );
};

export default Header;

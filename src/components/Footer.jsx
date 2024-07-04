import React from "react";
import gondol from "../assets/w3images/gondol.webp";
import ani from "../assets/w3images/ani.webp";

const Footer = () => {
  return (
    <>
      <style jsx>{`
        @media (min-width: 1024px) {
          .footer-container {
            margin-left: 300px;
          }
        }

        @media (max-width: 1023px) {
          .footer-container {
            margin-left: 0;
            width: 100%;
          }
        }
      `}</style>

      <footer className=" mx-auto px-4 py-12 bg-gray-800 text-white w-[80%] footer-container">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/3 px-4 mb-8">
            <h3 className="text-xl font-semibold">FOOTER</h3>
            <p className="mt-4">
              Praesent tincidunt sed tellus ut rutrum. Sed vitae justo
              condimentum, porta lectus vitae, ultricies congue gravida diam non
              fringilla.
            </p>
            <p className="mt-4">
              Powered by
              <a
                href="https://www.w3schools.com/w3css/default.asp"
                target="_blank"
                className="underline"
              >
                w3.css
              </a>
            </p>
          </div>

          <div className="w-full md:w-1/3 px-4 mb-8">
            <h3 className="text-xl font-semibold">BLOG POSTS</h3>
            <ul className="mt-4">
              <li className="flex items-center hover:bg-gray-300 mb-4">
                <img src={gondol} className="w-12 h-12 mr-4" alt="Gondol" />
                <div>
                  <span className="text-lg font-semibold">Lorem</span>
                  <br />
                  <span>Sed mattis nunc</span>
                </div>
              </li>
              <hr />
              <li className="flex items-center mb-4 hover:bg-gray-300">
                <img src={ani} className="w-12 h-12 mr-4" alt="Ani" />
                <div>
                  <span className="text-lg font-semibold ">Ipsum</span>
                  <br />
                  <span>Praes tinci sed</span>
                </div>
              </li>
            </ul>
          </div>

          <div className="w-full md:w-1/3 px-4 mb-8 ">
            <h3 className="text-xl font-semibold">POPULAR TAGS</h3>
            <p className="mt-4">
              <span className="bg-black text-white px-1 py-1 mr-1 mb-1 inline-block">
                Travel
              </span>
              <span className="bg-gray-400 text-gray-800 px-1 py-1 mr-1 mb-1 inline-block">
                New York
              </span>
              <span className="bg-gray-400 text-gray-800 px-1 py-1 mr-1 mb-1 inline-block">
                Games
              </span>
              <span className="bg-gray-400 text-gray-800 px-1 py-1 mr-1 mb-1 inline-block">
                Sports
              </span>
              <span className="bg-gray-400 text-gray-800 px-1 py-1 mr-1 mb-1 inline-block">
                Shopping
              </span>
              <span className="bg-gray-400 text-gray-800 px-1 py-1 mr-1 mb-1 inline-block">
                Clothing
              </span>
              <span className="bg-gray-400 text-gray-800 px-1 py-1 mr-1 mb-1 inline-block">
                News
              </span>
              <span className="bg-gray-400 text-gray-800 px-1 py-1 mr-1 mb-1 inline-block">
                Family
              </span>
              <span className="bg-gray-400 text-gray-800 px-1 py-1 mr-1 mb-1 inline-block">
                Baby
              </span>
              <span className="bg-gray-400 text-gray-800 px-1 py-1 mr-1 mb-1 inline-block">
                Ideas
              </span>
              <span className="bg-gray-400 text-gray-800 px-1 py-1 mr-1 mb-1 inline-block">
                DIY
              </span>
              <span className="bg-gray-400 text-gray-800 px-1 py-1 mr-1 mb-1 inline-block">
                NORWAY
              </span>
              <span className="bg-gray-400 text-gray-800 px-1 py-1 mr-1 mb-1 inline-block">
                London
              </span>
              <span className="bg-gray-400 text-gray-800 px-1 py-1 mr-1 mb-1 inline-block">
                IKEA
              </span>
            </p>
          </div>
        </div>
      </footer>
      <div className="bg-black text-white text-center py-6 footer-container">
        Powered by
        <a
          href="https://www.w3schools.com/w3css/default.asp"
          title="W3.CSS"
          target="_blank"
          className="underline hover:opacity-75"
        >
          w3.css
        </a>
      </div>
    </>
  );
};

export default Footer;

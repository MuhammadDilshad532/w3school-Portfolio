import React from "react";

const AboutMe = () => {
  return (
    <>
      <style jsx>{`
        @media (min-width: 1024px) {
          .about-me-container {
            margin-left: 300px;
          }
        }

        @media (max-width: 1023px) {
          .about-me-container {
            margin-left: 0;
            width: 100%;
          }
        }
      `}</style>

      <div className=" mx-auto px-4 py-12 bg-gray-100 w-[80%] about-me-container">
        <h4 className="text-2xl font-bold mb-4">About Me</h4>
        <p className="mb-4">
          Just me, myself and I, exploring the universe of unknownment. I have a
          heart of love and an interest of lorem ipsum and mauris neque quam
          blog. I want to share my world with you. Praesent tincidunt sed tellus
          ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies
          congue gravida diam non fringilla. Praesent tincidunt sed tellus ut
          rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies
          congue gravida diam non fringilla.
        </p>
        <hr className="my-4" />
        <h4 className="text-2xl font-bold mb-4">Technical Skills</h4>
        <p>Photography</p>
        <div className="bg-gray-300  h-8 mb-4">
          <div className="bg-gray-800 w-[95%] h-8 text-white text-center">
            95%
          </div>
        </div>
        <p>Web Design</p>
        <div className="bg-gray-300  h-8 mb-4">
          <div className="bg-gray-800 w-[85%]  h-8 text-white text-center">
            85%
          </div>
        </div>
        <p>Photoshop</p>
        <div className="bg-gray-300  h-8 mb-4">
          <div className="bg-gray-800 w-[80%]  h-8 text-white text-center">
            80%
          </div>
        </div>
        <p>
          <button className="bg-gray-800 text-white py-4 px-6 rounded hover:bg-gray-400">
            <i className="fa fa-download mr-2"></i>Download Resume
          </button>
        </p>
        <hr className="my-4" />
        <h4 className="text-2xl font-bold mb-4">How much I charge</h4>
        <div className="flex flex-wrap -mx-4">
          <div className="w-1/3 px-4 mb-8">
            <ul className="border border-gray-300 bg-white text-center opacity-75 hover:opacity-100">
              <li className="bg-black text-white text-xl py-8">Basic</li>
              <li className="py-4">Web Design</li>
              <li className="py-4">Photography</li>
              <li className="py-4">1GB Storage</li>
              <li className="py-4">Mail Support</li>
              <li className="py-4">
                <h2>$ 10</h2>
                <span className="opacity-75">per month</span>
              </li>
              <li className="bg-gray-200 py-6">
                <button className="bg-teal-500 text-white px-8 py-4 hover:bg-black">
                  Sign Up
                </button>
              </li>
            </ul>
          </div>

          <div className="w-1/3 px-4 mb-8">
            <ul className="border border-gray-300 bg-white text-center opacity-75 hover:opacity-100">
              <li className="bg-teal-500 text-white text-xl py-8">Pro</li>
              <li className="py-4">Web Design</li>
              <li className="py-4">Photography</li>
              <li className="py-4">50GB Storage</li>
              <li className="py-4">Endless Support</li>
              <li className="py-4">
                <h2>$ 25</h2>
                <span className="opacity-75">per month</span>
              </li>
              <li className="bg-gray-200 py-6">
                <button className="bg-teal-500 text-white px-8 py-4 hover:bg-black">
                  Sign Up
                </button>
              </li>
            </ul>
          </div>

          <div className="w-1/3 px-4 mb-8">
            <ul className="border border-gray-300 bg-white text-center opacity-75 hover:opacity-100">
              <li className="bg-black text-white text-xl py-8">Premium</li>
              <li className="py-4">Web Design</li>
              <li className="py-4">Photography</li>
              <li className="py-4">Unlimited Storage</li>
              <li className="py-4">Endless Support</li>
              <li className="py-4">
                <h2>$ 25</h2>
                <span className="opacity-75">per month</span>
              </li>
              <li className="bg-gray-200 py-6">
                <button className="bg-teal-500 text-white px-8 py-4 hover:bg-black">
                  Sign Up
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;

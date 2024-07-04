import React from "react";
import p1 from "../assets/w3images/p1.jpeg";
import p2 from "../assets/w3images/p2.jpeg";
import p3 from "../assets/w3images/p3.webp";
import mountains from "../assets/w3images/mountains.jpg";
import lights from "../assets/w3images/lights.jpg";
import nature from "../assets/w3images/nature.webp";
import avatar_g2 from "../assets/w3images/avatar_g2.jpg";
import me2 from "../assets/w3images/me2.jpg";

const PhotoGrid = () => {
  return (
    <>
      <style jsx>{`
        @media (min-width: 1024px) {
          .grid-margin {
            margin-left: 300px;
          }
        }

        @media (max-width: 1023px) {
          .grid-margin {
            margin-left: 0;
          }
        }
      `}</style>
      <div className=" grid-margin grid grid-cols-3 ml-[300px] bg-gray-100 gap-5 ">
        <div className="container mx-auto mb-8 ml-5 mt-4">
          <img
            src={p1}
            alt="Norway"
            className="hover:opacity-75 h-[200px] w-[95%]"
          />
          <div className="bg-white w-[95%] p-4">
            <p>
              <b>Lorem Ipsum</b>
            </p>
            <p>
              Praesent tincidunt sed tellus ut rutrum. Sed vitae justo
              condimentum, porta lectus vitae, ultricies congue gravida diam non
              fringilla.
            </p>
          </div>
        </div>
        <div className="container mx-auto mb-8 mt-4">
          <img
            src={p2}
            alt="Norway"
            className="hover:opacity-75 w-full h-[200px]"
          />
          <div className="bg-white p-4">
            <p>
              <b>Lorem Ipsum</b>
            </p>
            <p>
              Praesent tincidunt sed tellus ut rutrum. Sed vitae justo
              condimentum, porta lectus vitae, ultricies congue gravida diam non
              fringilla.
            </p>
          </div>
        </div>
        <div className="container mx-auto mb-8 mt-4">
          <img
            src={p3}
            alt="Norway"
            className="hover:opacity-75 w-full h-[200px]"
          />
          <div className="bg-white p-4">
            <p>
              <b>Lorem Ipsum</b>
            </p>
            <p>
              Praesent tincidunt sed tellus ut rutrum. Sed vitae justo
              condimentum, porta lectus vitae, ultricies congue gravida diam non
              fringilla.
            </p>
          </div>
        </div>
      </div>
      <div className="grid-margin grid grid-cols-3 ml-[300px] bg-gray-100 gap-5 ">
        <div className="container mx-auto mb-8 ml-5 max-w-auto">
          <img
            src={mountains}
            alt="Norway"
            className="hover:opacity-75 w-[95%] h-[200px]"
          />
          <div className="bg-white w-[95%] p-4">
            <p>
              <b>Lorem Ipsum</b>
            </p>
            <p>
              Praesent tincidunt sed tellus ut rutrum. Sed vitae justo
              condimentum, porta lectus vitae, ultricies congue gravida diam non
              fringilla.
            </p>
          </div>
        </div>
        <div className="container mx-auto mb-8">
          <img
            src={lights}
            alt="Norway"
            className="hover:opacity-75 w-full] h-[200px]"
          />
          <div className="bg-white p-4">
            <p>
              <b>Lorem Ipsum</b>
            </p>
            <p>
              Praesent tincidunt sed tellus ut rutrum. Sed vitae justo
              condimentum, porta lectus vitae, ultricies congue gravida diam non
              fringilla.
            </p>
          </div>
        </div>
        <div className="container mx-auto mb-8 ">
          <img
            src={nature}
            alt="Norway"
            className="hover:opacity-75 w-full h-[200px]"
          />
          <div className="bg-white p-4">
            <p>
              <b>Lorem Ipsum</b>
            </p>
            <p>
              Praesent tincidunt sed tellus ut rutrum. Sed vitae justo
              condimentum, porta lectus vitae, ultricies congue gravida diam non
              fringilla.
            </p>
          </div>
        </div>
      </div>
      <div class="flex justify-center bg-gray-100 py-8">
        <div class="flex space-x-4">
          <a
            href="#"
            class="px-4 py-2 text-black hover:bg-black hover:text-white"
          >
            &laquo;
          </a>
          <a href="#" class="px-4 py-2 bg-black text-white">
            1
          </a>
          <a
            href="#"
            class="px-4 py-2 text-black hover:bg-black hover:text-white"
          >
            2
          </a>
          <a
            href="#"
            class="px-4 py-2 text-black hover:bg-black hover:text-white"
          >
            3
          </a>
          <a
            href="#"
            class="px-4 py-2 text-black hover:bg-black hover:text-white"
          >
            4
          </a>
          <a
            href="#"
            class="px-4 py-2 text-black hover:bg-black hover:text-white"
          >
            &raquo;
          </a>
        </div>
      </div>

      <div
        className="grid-margin grid grid-cols-2 ml-[300px] gap-9 bg-gray-100 "
        id="about"
      >
        <div className="container mx-auto ml-5">
          <img src={avatar_g2} alt="Me" className="w-full] h-[300px]" />
        </div>
        <div className="container mx-auto">
          <img src={me2} alt="Me" className="w-full] h-[300px]" />
        </div>
      </div>
    </>
  );
};

export default PhotoGrid;

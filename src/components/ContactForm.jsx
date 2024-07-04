import React from "react";

const ContactForm = () => {
  return (
    <>
      <style jsx>{`
        @media (min-width: 1024px) {
          .contact-form-container {
            margin-left: 300px;
          }
        }

        @media (max-width: 1023px) {
          .contact-form-container {
            margin-left: 0;
            width: 100%;
          }
        }
      `}</style>

      <div className="bg-gray-300 p-8 w-[80%] contact-form-container">
        <h4 id="contact" className="text-lg font-bold">
          Contact Me
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div className="bg-gray-800 text-center text-gray-300 p-6">
            <p>
              <i className="fa fa-envelope text-3xl text-gray-400"></i>
            </p>
            <a href="mailto:email@email.com" className="text-gray-300">
              email@email.com
            </a>
          </div>
          <div className="bg-teal-500 text-center text-white">
            <p>
              <i className="fa fa-map-marker text-3xl text-gray-400"></i>
            </p>
            <p>Chicago, US</p>
          </div>
          <div className="bg-gray-800 text-center text-gray-300 p-6">
            <p>
              <i className="fa fa-phone text-3xl text-gray-400"></i>
            </p>
            <p>512312311</p>
          </div>
        </div>
        <hr className="opacity-50 my-8" />
        <form action="/action_page.php" target="_blank">
          <div className="mb-4">
            <label htmlFor="name" className="block">
              Name
            </label>
            <input
              id="name"
              className="border w-full py-2 px-3"
              type="text"
              name="Name"
              required
            />
          </div>
          <div className="mb-4 ">
            <label htmlFor="email" className="block">
              Email
            </label>
            <input
              id="email"
              className="border w-full py-2 px-3"
              type="email"
              name="Email"
              required
            />
          </div>
          <div className="mb-4 ">
            <label htmlFor="message" className="block">
              Message
            </label>
            <textarea
              id="message"
              className="border w-full py-2 px-3"
              name="Message"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-black text-white hover:bg-gray-500 hover:text-black py-2 px-4 rounded"
          >
            <i className="fa fa-paper-plane mr-4  text-white"></i>
            Send Message
          </button>
        </form>
      </div>
    </>
  );
};

export default ContactForm;

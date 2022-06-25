import React from "react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterSquare,
  AiFillGithub,
  AiFillDribbbleSquare,
} from "react-icons/ai";
import Solutions from "./Solutions";

function Footer() {
  return (
    <div className="px-4 py-8 text-white">
      <div className="max-w-screen-xl mx-auto grid md:grid-cols-3 gap-4">
        <div>
          <h1 className="text-2xl font-bold text-green-400">REACT.</h1>
          <p className="text-gray-400 py-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi
            harum nobis eos iure, minima vero, debitis odit similique, dolorum
            dolor quo quos soluta voluptas quaerat quae? Deserunt placeat dolore
            distinctio!
          </p>
          <div className="flex justify-between mt-4 px-24 md:justify-start md:px-0 md:mt-0 items-center gap-4">
            <AiFillFacebook
              className="hover:text-green-400 hover:scale-110 cursor-pointer"
              size={25}
            />
            <AiFillInstagram
              className="hover:text-green-400 hover:scale-110 cursor-pointer"
              size={25}
            />
            <AiFillTwitterSquare
              className="hover:text-green-400 hover:scale-110 cursor-pointer"
              size={25}
            />
            <AiFillGithub
              className="hover:text-green-400 hover:scale-110 cursor-pointer"
              size={25}
            />
            <AiFillDribbbleSquare
              className="hover:text-green-400 hover:scale-110 cursor-pointer"
              size={25}
            />
          </div>
        </div>
        <div className="col-span-2 p-4 grid grid-cols-3 justify-center">
          <Solutions
            title="Solutions"
            features={["Analytics", "Marketing", "Commerce", "Insights"]}
          />
          <Solutions
            title="Support"
            features={[
              "Pricing",
              "Guides",
              "Documentations",
              "API Status",
              "Contact Us",
            ]}
          />
          <Solutions
            title="Company"
            features={["About", "Blog", "Jobs", "Press", "Legal"]}
          />
        </div>
      </div>
    </div>
  );
}

export default Footer;

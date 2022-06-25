import React from "react";
import Laptop from "../assets/laptop.jpg";

function Analytics() {
  return (
    <div className="w-full py-16 px-4 bg-white">
      <div className="max-w-screen-xl mx-auto grid md:grid-cols-2">
        <img className="w-2/3 mx-auto my-4" src={Laptop} alt="Laptop" />
        <div className="flex flex-col justify-center ">
          <p className="text-green-400 font-bold">DATA ANALYTICS DASHBOARD</p>
          <h1 className="text-xl md:text-2xl font-bold py-2">
            Manage Data Analytics Centrally
          </h1>
          <p className="mb-2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci
            quibusdam nobis ducimus voluptatum doloribus quisquam, magnam
            suscipit quam dicta, veritatis ea. Veniam fugiat qui non, fuga
            commodi soluta corporis quas. Quasi pariatur, dolor dolorem,.
          </p>
          <button className="w-40 rounded-md my-6 py-3 px-4  mx-auto md:mx-0 font-medium bg-black text-green-400">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default Analytics;

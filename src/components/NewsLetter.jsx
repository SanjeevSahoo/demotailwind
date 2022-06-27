import React from "react";

function NewsLetter() {
  return (
    <div className="bg-black text-white">
      <div className="max-w-screen-xl mx-auto px-4 py-8 grid lg:grid-cols-3 items-center">
        <div className="lg:col-span-2">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">
            Want tips & tricks to optimize your flow?
          </h1>
          <p className="text-gray-600 font-medium">
            Sign up to our newsletter and stay up to date.
          </p>
        </div>
        <div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 py-6">
            <input
              className="w-full px-2 py-3 rounded-md font-medium text-black"
              type="email"
              placeholder="Enter Email"
            />
            <button className="w-full md:w-40 py-3 px-4 rounded-md font-medium text-black bg-green-400">
              Notify Me
            </button>
          </div>
          <p className="text-gray-400">
            we care about the protection of your data. Read our{" "}
            <span className="text-green-400">Privacy Policy</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default NewsLetter;

import React from "react";
import Typed from "typed.js";

function Hero() {
  const el = React.useRef(null);
  // Create reference to store the Typed instance itself
  const typed = React.useRef(null);

  React.useEffect(() => {
    const options = {
      strings: ["BTB", "BTC", "SASS"],
      typeSpeed: 120,
      backSpeed: 140,
      loop: true,
    };

    // elRef refers to the <span> rendered below
    typed.current = new Typed(el.current, options);

    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typed.current.destroy();
    };
  }, []);

  return (
    <div className="text-white  ">
      <div className="max-w-3xl w-full h-screen mt-[-96px] mx-auto flex flex-col justify-center items-center ">
        <p className="text-green-400 font-bold p-2">
          GROWING WITH DATA ANALYTICS
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold py-2 sm:py-4">
          Grow with Data.
        </h1>
        <div className="flex justify-center items-center">
          <p className="text-xl sm:text-2xl md:text-4xl font-bold">
            Fast, Flexible financing for{" "}
          </p>
          <span
            className="text-xl sm:text-2xl md:text-4xl font-bold pl-2 text-gray-600 "
            ref={el}
          />
        </div>
        <p className="text-xl md:text-2xl px-4 my-2 text-gray-600 text-center">
          Monitor your data analytics to increase revenue for BTB, BTC, & SASS
          platforms
        </p>
        <button className="bg-green-400 hover:bg-green-300 w-40 p-3 px-4 my-6 font-medium  rounded-md  text-black ">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Hero;

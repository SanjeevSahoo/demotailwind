import React from "react";

function Card(props) {
  const { image, title, features, plan, highlighted } = props;
  return (
    <div
      className={`w-[90%] sm:w-[80%] md:w-full flex flex-col p-4 my-4 mx-auto shadow-lg rounded-lg hover:scale-105  duration-300 mt-8 md:mt-2  ${
        highlighted ? " bg-gray-100 scale-105" : ""
      } `}
    >
      <img
        className="w-20 mx-auto mt-[-3rem] bg-transparent"
        src={image}
        alt={title}
      />
      <h2 className="py-4 text-2xl text-center font-bold">{title}</h2>
      <p className="text-4xl text-center font-bold">${plan}</p>
      <div className="text-center font-medium mt-2">
        {features.map((item) => (
          <p className="py-2 border-b" key={item}>
            {item}
          </p>
        ))}
      </div>
      <button
        className={`w-40 py-3 px-4 rounded-md mx-auto my-4 font-medium   ${
          highlighted ? " bg-black text-green-400" : " bg-green-400 text-black"
        }`}
      >
        Start Trial
      </button>
    </div>
  );
}

export default Card;

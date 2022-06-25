import React from "react";

function Solutions(props) {
  const { title, features } = props;
  return (
    <div className="text-gray-300">
      <h2 className="text-xl font-medium text-gray-400">{title}</h2>
      <ul className="mt-2">
        {features.map((item) => (
          <li className="py-1 hover:text-green-400 hover:font-medium cursor-pointer">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Solutions;

import React from "react";
import Single from "../assets/single.png";
import Double from "../assets/double.png";
import Triple from "../assets/triple.png";
import Card from "./Card";
function Cards() {
  return (
    <div className="px-4 py-20  bg-white">
      <div className="max-w-screen-xl  mx-auto grid md:grid-cols-3 gap-8">
        <Card
          image={Single}
          title="Single User"
          features={["500 GB Storage", "1 Granted User", "Send up to 2 GB"]}
          plan={149}
        />
        <Card
          image={Double}
          title="Double User"
          features={["2 TB Storage", "5 Granted User", "Send up to 10 GB"]}
          plan={499}
          highlighted
        />
        <Card
          image={Triple}
          title="Triple User"
          features={["10 TB Storage", "10 Granted User", "Send up to 30 GB"]}
          plan={1299}
        />
      </div>
    </div>
  );
}

export default Cards;

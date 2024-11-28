import React from "react";
import BackgroundImage from "../assets/bg.jpg";

export default function SoftwareDevLifeCycle() {
  return (
    <div 
      className="h-[100vh] bg-cover bg-center"
      style={{ backgroundImage: `url(${BackgroundImage})` }}
    >
    <div className="w-[100%]">
        <div className="w-[50%]">
          <h2 className="text-4xl font-bold text-[#ffffff]">SOFTWARE DEV LIFE CYCLE</h2>
        </div>
    </div>
    </div>
  );
}

import React from "react";
import BackgroundImage from "../assets/bg.jpg";

export default function SoftwareDevLifeCycle() {
  return (
    <div 
      className="h-[100vh] bg-cover bg-center"
      style={{ backgroundImage: `url(${BackgroundImage})` }}
    >
    <div className="w-[100%]">
        <div className="w-[50%] flex justify-center h-[100%] py-16 ">
          <div>
            <h2 className="text-4xl font-bold text-[#ffffff] ">
            <span className="bg-[#822d26]">SOFTWARE </span> DEV LIFE CYCLE
            </h2>
            <p className="justify-center">We use Agile / Scrum methodology</p></div>
          
        </div>


        <div className="w-[50%] flex justify-center py-16 border">
        <div className="relative w-full h-[50%] flex justify-center items-center ">
      <div className="absolute -rotate-45 bg-red-600 text-white font-bold text-lg px-6 py-3 rounded shadow-lg">
        SDLC
      </div>
      <div className="absolute top-20 left-30 text-gray-800 font-semibold text-lg">PLANNING</div>
      <div className="absolute top-10 right-20 text-gray-800 font-semibold text-lg">DESIGNING</div>
      <div className="absolute top-1/3 right-0 text-gray-800 font-semibold text-lg">DEFINING</div>
      <div className="absolute bottom-1/3 right-20 text-gray-800 font-semibold text-lg">BUILDING</div>
      <div className="absolute bottom-10 right-1/4 text-gray-800 font-semibold text-lg">PLANNING</div>
      <div className="absolute bottom-10 left-1/4 text-gray-800 font-semibold text-lg">DEPLOYMENT</div>
      <div className="absolute bottom-1/3 left-20 text-gray-800 font-semibold text-lg">MAINTENANCE</div>
    </div>
        </div>
    </div>
    </div>
  );
}

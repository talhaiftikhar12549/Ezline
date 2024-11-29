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


        <div className="w-[50%] h-[100%] flex justify-center py-40 ">
        <div className="relative w-full h-[50%] flex justify-center items-center ">
      <div className="absolute -rotate-45 bg-[#732620] text-white font-bold text-lg px-8 py-3 rounded shadow-lg">
        SDLC
      </div>
      <div className="absolute top-20 left-68 text-gray-800 font-semibold text-lg">DEPLOYMENT</div>
      <div className="absolute top-12 right-64 text-gray-800 font-semibold text-lg">TESTING</div>
      <div className="absolute top-12 left-56 text-gray-800 font-semibold text-lg">MAINTENANCE</div>
      <div className="absolute bottom-1/3 right-40 text-gray-800 font-semibold text-lg">BUILDING</div>
      <div className="absolute bottom-20 right-28 text-gray-800 font-semibold text-lg">DEFINING</div>
      <div className="absolute bottom-28 right-60 text-gray-800 font-semibold text-lg">DESIGNING</div>
      <div className="absolute bottom-24 left-56 text-gray-800 font-semibold text-lg">MAINTENANCE</div>
    </div>
        </div>
    </div>
    </div>
  );
}

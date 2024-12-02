import React, { useState } from "react";
import texture from "../assets/texture.jpg";
import searchpic from "../assets/search.svg";
import bluesearch from "../assets/blue search.svg";

export default function () {
  const [currentImage, setCurrentImage] = useState(searchpic);
  const [buttonBackgorund, setButtonBackground] = useState(texture);
  return (
    <>
      <div className="flex text-[#dbdbdb] cursor-pointer font-bold justify-center w-[100%] pt-4 sticky top-0">
        <div>
        <p className="text-4xl leading-tight">EZLINE</p>
        <p className="text-xl leading-tight">software house</p>
        </div>
        <div className="flex px-6 items-center justify-center">
          <p className="hover:text-[#00bcd4] px-4">HOME</p>
          <p className="hover:text-[#00bcd4] px-4">SERVICES</p>
          <p className="hover:text-[#00bcd4] px-4">PORTFOLIO</p>
          <p className="hover:text-[#00bcd4] px-4">EZI Updates</p>
          <p className="hover:text-[#00bcd4] px-4">SOFTWARES</p>
          <p className="hover:text-[#00bcd4] px-4">LOGIN</p>
          <p className="hover:text-[#00bcd4] px-4">CONTACT</p>
        </div>

        <div className="flex px-2 justify-around">
          <button
            className="border-[#ca981c] border-2 my-4 px-4 rounded-lg text-white text-lg"
            style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${buttonBackgorund})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            onMouseEnter={() => setButtonBackground("")} 
            onMouseLeave={() => setButtonBackground(texture)} 
          >
            16TH Anniversary
          </button>

       
          <img
          className="mx-4"
            src={currentImage}
            width="20px"
            height="20px"
            onMouseEnter={() => setCurrentImage(bluesearch)} 
            onMouseLeave={() => setCurrentImage(searchpic)}   
            alt="search icon"
          />
        </div>
      </div>
    </>
  );
}

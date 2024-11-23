import React from "react";
import locationpic from "../assets/location-pin-alt-1-svgrepo-com.svg" 
import phoneimage from "../assets/phone.svg"
import emailimage from "../assets/email.svg"
import linkedinpicture from "../assets/linkedin.svg"
import facebookpicture from "../assets/facebook.svg"
import youtubepicture from "../assets/youtube.svg"
export default function NavBar() {
  return (
    <div className="border-[#00bcd4] border-t-[5px] ">
     <div className="text-[#73848f] flex justify-center">
       <img src={locationpic}  width="20px" height="20px"/>
       <p className="p-2">304-B Amna Plaza Near Radio Pakistan Peshawar Road Rawalpindi</p>


       <img src={phoneimage}  width="20px" height="20px"/>
      <p className="p-2">+923212225212</p>

      <img src={emailimage}  width="20px" height="20px"/>
      <p className="p-2">info@eziline.com</p>
      <p className="border-[#73848f] border-x-[1px]"></p>
      <img className="mx-2" src={facebookpicture}  width="20px" height="20px"/>
      <img className="mx-2" src={linkedinpicture}  width="20px" height="20px"/>
      <img className="mx-2" src={emailimage}  width="20px" height="20px"/>
      <img className="mx-2" src={youtubepicture}  width="20px" height="20px"/>

     <p className="border-[#73848f] border-x-[1px]"> </p>

     </div>
    </div>
  );
}

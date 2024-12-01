
import AnimationSectionNavBar from "./AnimationSectionNavBar"
import React, { useState } from "react";
import texture from "../assets/texture.jpg";
import searchpic from "../assets/search.svg";
import bluesearch from "../assets/blue search.svg";

export default function AnimationSection()
{
    const [currentImage, setCurrentImage] = useState(searchpic);  // Add state here
    const [buttonBackgorund, setButtonBackground] = useState(texture);
    return (
    <>

        
        <div className="bg-[#181828] h-[95%] ">
        {/* <AnimationSectionNavBar/> */}
           
        </div>
        </>
        
        
    )
}
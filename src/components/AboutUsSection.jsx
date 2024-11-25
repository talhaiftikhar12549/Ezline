import React from "react";
import starPic from "../assets/star.svg"
import iMacPic from "../assets/thumbnail.svg"
export default function AboutUsSection() {

    return (
        <>
            <div className="bg-gradient-to-r from-[#330f3f] via-[#f7c97e] to-[#330f3f]  h-[100vh]">
                <div className=" h-[100vh] w-[100%] flex pt-24 px-16">

                    <div className="w-[50%] h-[100%] flex justify-center ">
                        <div>
                            <p className="font-extrabold text-[#f5edec] text-5xl pt-2">About <span className="text-[#27ffe3]">E</span><span className="text-[#4ecfb9]">Z</span><span className="text-[#00cde7]">I</span><span className="text-[#5393ff]">L</span><span className="text-[#0084bf]">I</span><span className="text-[#0084bf]">N</span><span className="text-[#0084bf]">E</span></p>
                            <div className="text-[#f5edec] text-xl pt-6">
                                <div className="flex py-2"><img src={starPic} width="12px" height="12px" /><p>&nbsp;Eziline is an independent Pakistan Based company</p></div>
                                <div className="flex py-2"><img src={starPic} width="12px" height="12px" /><p>&nbsp; Operating Since 2007 – Eziline has been in profit since the beginning</p></div>
                                <div className="flex py-2"><img src={starPic} width="12px" height="12px" /><p>&nbsp; We are website specialists (web design / dynamic web solution / graphics design / Multimedia development)</p></div>
                                <div className="flex py-2"><img src={starPic} width="12px" height="12px" /><p>&nbsp; A close-knit team of 350+ designers</p></div>
                                <div className="flex py-2"><img src={starPic} width="12px" height="12px" /><p>&nbsp; Programmers</p></div>
                                <div className="flex py-2"><img src={starPic} width="12px" height="12px" /><p>&nbsp; System Analytic and Marketing excutive</p></div>
                            </div>
                        </div>


                    </div>

                    {/* Image section */}


                    <div className="w-[50%] h-[50%] flex justify-center ">
                        <img
                            onClick={() => {
                                window.open('https://www.youtube.com/watch?v=PTqcbyRa9mU', '_blank', 'noopener,noreferrer');
                            }}
                            className="cursor-pointer"
                            src={iMacPic}
                            width="100%"
                            height="100%"
                            alt="Clickable Thumbnail"
                        />

                    </div>

                </div>
            </div>
        </>
    )
}
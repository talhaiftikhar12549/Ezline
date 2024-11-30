import React from "react";
import bulbPic from "../assets/bulb icon.svg"
import screenIcon from "../assets/screen icon.svg"
import trophyIcon from "../assets/trophy icon.svg"
export default function MotoSection() {
    return (
        <>
            <div className="h-[50vh] w-[100%] flex">

                <div className="w-[33%] bg-[#917bea] h-[100%]">
                    <div className="w-[100%] flex justify-center py-8">
                        <img src={screenIcon} width="25%" height="25%" />
                    </div>
                    <h2 className="text-[#fefeff] text-3xl font-bold text-center">FIXED PRICE</h2>
                    <p className="text-[#fefeff] text-xl text-center px-16">Our pricing plan is created by our client. Market compatitive</p>
                </div>


                <div className="w-[34%] bg-[#00bcd4] h-[100%]">
                    <div className="w-[100%] flex justify-center py-8">
                        <img src={bulbPic} width="25%" height="25%" />
                    </div>

                    <h2 className="text-[#fefeff] text-3xl font-bold text-center">FIXED PRICE</h2>
                    <p className="text-[#fefeff] text-xl text-center px-16">Our pricing plan is created by our client. Market compatitive</p>
                </div>


                <div className="w-[33%] bg-[#4ecfb9] h-[100%]">
                    <div className="w-[100%] flex justify-center py-8">
                        <img src={trophyIcon} width="25%" height="25%" />
                    </div>
                    <h2 className="text-[#fefeff] text-3xl font-bold text-center">FIXED PRICE</h2>
                    <p className="text-[#fefeff] text-xl text-center px-16">Our pricing plan is created by our client. Market compatitive</p>
                </div>

            </div>
        </>
    )
}
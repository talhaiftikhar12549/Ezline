import React from "react"
import iphonePic from "../assets/eziline-device-1365x2048.png"
export default function IphoneSection()
{
    return(
        <>
        <div className="h-[100vh] bg-gradient-to-b from-[#838995] to-[#4e7282] ">

            <div className="flex h-[100%] w-[100%] py-12">
                <div className="w-[40%]">
                    <div>website development</div>
                    <div>web development</div>
                    <div>Mobile app development</div>
                </div>
                <div className="w-[20%] py-8"><img src={iphonePic} width="100%" height="100%" /></div>
                <div className="w-[40%]">
                <div>website development</div>
                    <div>web development</div>
                    <div>Mobile app development</div>
                </div>
            </div>
        </div>
        </>
    )
}
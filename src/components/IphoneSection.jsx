import React from "react"
import iphonePic from "../assets/eziline-device-1365x2048.png"
export default function IphoneSection() {
    return (
        <>
            <div className="h-[100vh] bg-gradient-to-b from-[#838995] to-[#4e7282] flex justify content ">

                <div className="flex h-[100%] w-[100%] py-12 justify-center">
                    <div className="w-[20%]">


                        <div><div className="text-[#ffffff] text-3xl font-semibold"><h2>WEBSITE DEVELOPMENT</h2><p className="text-lg font-normal">Developing a website is fun and anyone can do this but very few understand how to build websites</p></div>
                            <div className="text-[#ffffff] text-3xl font-semibold"><h2>WEB APP DEVELOPMENT</h2><p className="text-lg font-normal">Web applicaion have been changing the way of business operates across the globe</p></div>
                            <div className="text-[#ffffff] text-3xl font-semibold"><h2>MOBILE APP DEVELOPMENT</h2><p className="text-lg font-normal">on this modren era, business should not ignore to have a business mobile app.</p></div></div>
                        <div></div>

                    </div>
                    <div className="w-[20%] py-8"><img src={iphonePic} width="100%" height="100%" /></div>
                    <div className="w-[20%]">


                        <div><div className="text-[#ffffff] text-3xl font-semibold"><h2>CLOUD SERVICES</h2><p className="text-lg font-normal">Modernize your workflow and improve your application's performance by migrating to the cloud</p></div>
                            <div className="text-[#ffffff] text-3xl font-semibold"><h2>DIGITAL MARKETING</h2><p className="text-lg font-normal">Are you looking for a ways to make your pitch inspirational to social media audience?</p></div>
                            <div className="text-[#ffffff] text-3xl font-semibold"><h2>STARTUP SOLUTIONS</h2><p className="text-lg font-normal">We help enterpreneurs turn their vision into reality and guide them throughout thier business life cycle.</p></div></div>
                        <div></div>
                    </div>
                </div>
            </div>
        </>
    )
}
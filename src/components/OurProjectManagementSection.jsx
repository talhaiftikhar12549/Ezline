import React from "react";
import starPic from "../assets/star.svg"
import iMacPic from "../assets/iMacScreen.svg"
export default function OurProjectManagement() {
    return (
        <>
            <div className=" h-[50vh] w-[100%] flex my-14">
                <div className="w-[60%] h-[100%] flex justify-center">
                <img src={iMacPic} width="100%" height="100%" />
                </div>
                <div className="w-[40%]">
                    <div>
                        <p className="font-extrabold text-3xl pt-2">Our Project Management</p>
                        <div className="text-[#8b99a2] pt-6">
                            <div className="flex py-2"><img src={starPic} width="12px" height="12px" /><p>&nbsp; Task management with SMS/email notification</p></div>
                            <div className="flex py-2"><img src={starPic} width="12px" height="12px" /><p>&nbsp; 24/7 online service & Support.</p></div>
                            <div className="flex py-2"><img src={starPic} width="12px" height="12px" /><p>&nbsp; Billing/invoicing transparent management.</p></div>
                            <div className="flex py-2"><img src={starPic} width="12px" height="12px" /><p>&nbsp; Discussion board for project management.</p></div>
                            <div className="flex py-2"><img src={starPic} width="12px" height="12px" /><p>&nbsp; HR/ Payroll & Complete office management.</p></div>
                            <div className="flex py-2"><img src={starPic} width="12px" height="12px" /><p>&nbsp; Cloud-Based & Robust technology</p></div>
                        </div>
                    </div>

                    <div className="pt-2">
                       <button className="border-2 py-[1px] px-4 border-[#fb4630] font-semibold text-[#fb4630] mx-4">STAFF</button>
                       <button className="border-2 py-[1px] px-4 border-[#1e73be] font-semibold text-[#1e73be] mx-4">INTERN</button>
                       <button className="border-2 py-[1px] px-4 border-[#5bd603] font-semibold text-[#5bd603] mx-4">CLIENT</button>
                    </div>
                </div>

            </div>
        </>
    )
}
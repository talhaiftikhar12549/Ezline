import facebookFooter from "../assets/facebookfooter.svg"
import linkedInFooter from "../assets/linkeinfooter.svg"
import youtubeFooter from "../assets/youtubefooter.svg"
import Xfooter from "../assets/x.svg"
export default function LowerNavBar() {
    return (
        <>
            <div className="bg-[#181828] text-[#8694a1] py-10 px-40">
                <div className="flex w-[100%] ">

                    <div>
                        <p>2022 © Copyrights Eziline Software House</p>
                    </div>


                    <div className="px-9 w-[] flex justify-between ">
                        <div className="flex">
                            <div className="px-6 ">Carrer</div>
                            <div className="px-6 border-l-[1px] border-[#8694a1]">Internships</div>
                            <div className="px-6 border-l-[1px] border-[#8694a1]">Ezi Products</div>
                            <div className="px-6 border-l-[1px] border-[#8694a1]">Terms and Conditions</div>
                            <div className="px-6 border-l-[1px] border-[#8694a1]">Bank</div>

                        </div>

                        

                    </div>

                    <div className="flex pl-16">
                        <img className="mx-1" src={facebookFooter} width="20px" height="20px" />
                        <img className="mx-1" src={linkedInFooter} width="20px" height="20px" />
                        <img className="mx-1" src={Xfooter} width="20px" height="20px" />
                        <img className="mx-1" src={youtubeFooter} width="20px" height="20px" />

                    </div>
                   

                </div>

            </div>
        </>
    )
}
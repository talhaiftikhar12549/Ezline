import pashaImages from "../assets/Pasha.png"
import rightAngleTriangle from "../assets/right-triangle.png"
import googleReview from "../assets/google-review.png"
export default function MainFooter() {
    return (
        <>
            <div className="h-[95vh] bg-[#212331]">


                <div className="flex px-40 py-40 w-[100%]">


                    <div className="w-[33%] px-3">
                        <h2 className="text-[#fcfeff] py-8 text-xl font-bold">ABOUT &nbsp;<img className="inline h-2 w-2" src={rightAngleTriangle} alt="pasha" /></h2>
                        <div>
                            <div><p className="text-[#839faf]">Tech House Having 100+ Quality Products and Innovations at national and international markets. Rated as Best Software House in Region</p></div>
                            <div className="py-8"><img src={pashaImages} alt="pasha" /></div>
                            <div className="py- h-28 w-28"><img src={googleReview} alt="googleReview" /></div>
                        </div>
                    </div>



                    <div className="w-[33%] px-3">
                        <h2 className="text-[#fcfeff] py-8 text-xl font-bold">RECENT POST &nbsp;<img className="inline h-2 w-2" src={rightAngleTriangle} alt="pasha" /></h2>
                        <div>
                            <div className="w-[100%] flex border-b py-4">
                                <div className="w-[30%]">
                                    <div className="rounded-full border p-4"></div>
                                    <img src="" alt="" />
                                </div>
                                <div className="w-[70%]">
                                    <p className="text-[#829aae] ">16th Anniversary</p>
                                    <p className="text-[#02b8cd]">Febrarury 4, 2024</p>
                                </div>
                            </div>

                            <div className="w-[100%] flex border-b border-[1px] py-4">
                                <div className="w-[30%]">
                                    <div className="rounded-full border p-4"></div>
                                    <img src="" alt="" />
                                </div>
                                <div className="w-[70%]">
                                    <p className="text-[#829aae] ">presendental award won by ezline Software House in IT sector</p>
                                    <p className="text-[#02b8cd]">Febrarury 4, 2024</p>
                                </div>
                            </div>

                            <div className="w-[100%] flex  py-4">
                                <div className="w-[30%]">
                                    <div className="rounded-full border p-4"></div>
                                    <img src="" alt="" />
                                </div>
                                <div className="w-[70%]">
                                    <p className="text-[#829aae] ">Ezline Exibition at LEAP 2023 Sudia Arabia</p>
                                    <p className="text-[#02b8cd]">Febrarury 4, 2024</p>
                                </div>
                            </div>

                        </div>
                    </div>


                    <div className="w-[33%] px-3">
                        <h2 className="text-[#fcfeff] py-8 text-xl font-bold">CONTACT US &nbsp;<img className="inline h-2 w-2" src={rightAngleTriangle} alt="pasha" /></h2>

                        <div><p className="text-[#839faf]"><span className="font-bold text-[#fefefd]">PK Office</span>:304-G, Amna Plaza Pesh Rd Rawalpindi</p></div>
                        <div><p className="text-[#839faf]"><span className="font-bold text-[#fefefd]">US Office</span>: 16192 Coastal Highway Lewes, DE</p></div>
                        <div><p className="text-[#839faf]"><span className="font-bold text-[#fefefd]">UK Office</span>: Intl. House, 776-778 Barking Rd London</p></div>
                        <div><p className="text-[#839faf]"><span className="font-bold text-[#fefefd]">FR Office</span>:5 avenue Pierre Salvi 95500 Gonesse Paris</p></div>
                        <div className="mt-4"><p className="text-[#839faf]">Ph : +92 51 5491184 / +92 51 8772888</p></div>
                        <div><p className="text-[#839faf]">Email : info[@]eziline.com</p></div>
                    </div>


                </div>

            </div>
        </>
    )
}
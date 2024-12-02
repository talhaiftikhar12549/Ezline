import pashaImages from "../assets/Pasha.png"
import rightAngleTriangle from "../assets/right-triangle.png"

export default function MainFooter() {
    return (
        <>
            <div className="h-[95vh] bg-[#212331]">


                <div className="flex px-40 py-40 w-[100%]">


                    <div className="w-[33%] px-4">
                        <h2 className="text-[#fcfeff] py-8 text-xl font-bold">ABOUT &nbsp;<img className="inline h-2 w-2" src={rightAngleTriangle} alt="pasha" /></h2>
                        <div>
                            <div><p className="text-[#839faf]">Tech House Having 100+ Quality Products and Innovations at national and international markets. Rated as Best Software House in Region</p></div>
                            <div className="py-8"><img src={pashaImages} alt="pasha" /></div>
                            <div></div>
                        </div>
                    </div>



                    <div className="w-[33%] px-4">
                        <h2 className="text-[#fcfeff] py-8 text-xl font-bold">RECENT POST &nbsp;<img className="inline h-2 w-2" src={rightAngleTriangle} alt="pasha" /></h2>
                    </div>


                    <div className="w-[33%] px-4">
                        <h2 className="text-[#fcfeff] py-8 text-xl font-bold">CONTACT US &nbsp;<img className="inline h-2 w-2" src={rightAngleTriangle} alt="pasha" /></h2>
                    </div>


                </div>

            </div>
        </>
    )
}
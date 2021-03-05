import React from "react";
import Img from "../../common/Img";
import Image from 'next/image';
import SearchIcon from '@material-ui/icons/Search';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import SlidingRectangle from "./SlidingRectangle";
import Accordion from "./Accordion";



function LandingPage(props) {
    const rectangle = [
      {"imageLink":'/assets/landing/Bitmap-20.png',"country":"Portugal","time":"5-6 working days"},
      {"imageLink":'/assets/landing/Bitmap-21.png',"country":"Russia","time":"7-8 working days"},
      {"imageLink":'/assets/landing/Bitmap-22.png',"country":"Srilanka","time":"5-6 working days"}
    ]

    const listsRectangle=[
      <SlidingRectangle rectangleLink={rectangle[0].imageLink} countryName={rectangle[0].country} time={rectangle[0].time}/>,
      <SlidingRectangle rectangleLink={rectangle[1].imageLink} countryName={rectangle[1].country} time={rectangle[1].time}/>,
      <SlidingRectangle rectangleLink={rectangle[2].imageLink} countryName={rectangle[2].country} time={rectangle[2].time}/>,
      <SlidingRectangle rectangleLink={rectangle[0].imageLink} countryName={rectangle[0].country} time={rectangle[0].time}/>
      ]

    return (
        <div className="bg-#FFFFFF flex-col items-center ">
            <section>
                <Image
                src={'/assets/landing/agustin-diaz-gargiulo-7F65HDP0-E0-unsplash@2x.png'}
                alt="Background Image"
                layout="responsive"
                height="478"
                width="375"
                />
                <div className="flex relative bottom-8 justify-between bg-white mx-16 rounded-2xl shadow ">
                    <input className="w-3/4 pl-10 py-5 text-sm rounded-3xl focus:outline-none
                    focus:placeholder-transparent font-light leading-6 placeholder-#4E4851"
                    type="text"
                    placeholder="I am looking for a visa to..."
                    />
                    <div className="bg-#1A181B w-10 h-10 my-2.5 mr-2.5 text-white rounded-2xl ">
                        <SearchIcon className="m-2"/>
                    </div>
                </div>
            </section>

            <section className="ml-5 mt-8">
                <div className="flex justify-between">
                    <div className="w-3/4 text-xl font-manrope-extra-bold text-#1A181B leading-8">
                        Countries to visit right now
                    </div>
                    <div className="bg-#F5F4F5 w-9 h-9 mr-5 rounded-xl">
                        <ArrowForwardIcon className="ml-2 mt-1" />
                    </div>
                </div>
                <div className="mt-5 -ml-3 flex overflow-x-auto">
                    {listsRectangle}
                </div>
            </section>

            <section className="ml-5 mt-14">
                <div className="flex justify-between mt-8">
                    <div className="w-3/4 text-xl font-manrope-extra-bold text-#1A181B leading-8">
                        Fastest visa process
                    </div>
                    <div className="bg-#F5F4F5 w-8 h-8 mr-5 rounded-xl">
                        <ArrowForwardIcon className="ml-2 mt-1" />
                    </div>
                </div>
                <div className="mt-5 -ml-3 flex overflow-x-auto">
                     {listsRectangle}
                </div>
            </section>


            <section className="relative mx-5 mt-14 ">
                <div className="w-3/4 text-xl font-manrope-extra-bold text-#1A181B leading-8">
                    Why stamp my visa?
                </div>
                <div className="relative bg-#3CC39A bg-opacity-20 rounded-3xl flex-col pt-6 mt-5 overflow-hidden">
                    <div className="flex text-2xl italic font-extrabold text-#3CC39A justify-center">
                        BOOKINGS FOR VISA
                    </div>
                    <div className="mx-5 mt-5 leading-7 text-sm text-center font-manrope-extra-light font-extrabold px-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et sed do F.A.S.T
                    </div>
                    <div className="flex justify-end mt-10">
                        <Image
                            className=""
                            src={'/assets/landing/Bitmap-23.png'}
                            alt="Background Image"
                            // layout="responsive"
                            layout="fixed"
                            height="300"
                            width="387"
                        />
                    </div>
                    <div className="absolute -right-32 top-44 ">
                        <Image
                        src={'/assets/landing/Bitmap-24.png'}
                        alt="Background Image"
                        // layout="responsive"
                        height="150"
                        width="181"
                        />
                    </div>
                </div>
                <div className="absolute -left-5 bottom-0 ">
                    <Image
                        src={'/assets/landing/Bitmap-25.png'}
                        alt="Background Image"
                        // layout="responsive"
                        height="228"
                        width="237"
                    />
                </div>
            </section>

            <section className="m-5">
              <Accordion
                question={"Once I apply, when I will receive my visa?"}
                answer={"An e-Visa is an official document permitting entry into and travel within a certain country. The e-Visa is an alternative to visas issued at the ports of entry or visiting an embassy/consulate to obtain traditional paper visas"}
              />
              <Accordion
                question={"What is an eVisa?"}
                answer={"An e-Visa is an official document permitting entry into and travel within a certain country. The e-Visa is an alternative to visas issued at the ports of entry or visiting an embassy/consulate to obtain traditional paper visas"}
              />
              <Accordion
                question={"How long is my visa valid for and how much does it cost how much does it cost?"}
                answer={"An e-Visa is an official document permitting entry into and travel within a certain country. The e-Visa is an alternative to visas issued at the ports of entry or visiting an embassy/consulate to obtain traditional paper visas"}
              />
            </section>
        </div>
    )
}



export default LandingPage

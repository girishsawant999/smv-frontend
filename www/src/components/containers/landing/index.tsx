import React from "react";
import Image from 'next/image';
import SearchIcon from '@material-ui/icons/Search';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ExploreOutlinedIcon from '@material-ui/icons/ExploreOutlined';
import ChatBubbleOutlineRoundedIcon from '@material-ui/icons/ChatBubbleOutlineRounded';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import SlidingRectangle from "./SlidingRectangle";
import Accordion from "./Accordion";
import SlidingRectangle2 from "./SlidingRectangle-2";



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

    const rectangle2 = [
      {"imageLink":'/assets/landing/kristian-egelund-uaQvRXa8izg-unsplash-2.png',"statement":"How to extend your visa if you are stranded due to COVID-19","date":"Jan 1,2021"},
      {"imageLink":'/assets/landing/kristian-egelund-uaQvRXa8izg-unsplash-3.png',"statement":"How to extend your visa if you are stranded due to COVID-19","date":"Jan 1,2021"}
      ]
    const listRectangle2=[
      <SlidingRectangle2 rectangleLink={rectangle2[0].imageLink} statement={rectangle2[0].statement} date={rectangle2[0].date}/>,
      <SlidingRectangle2 rectangleLink={rectangle2[1].imageLink} statement={rectangle2[1].statement} date={rectangle2[1].date}/>
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
                    <div className="bg-#F5F4F5 w-9 h-9 mr-5 rounded-xl">
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
                            layout="fixed"
                            height="300"
                            width="387"
                        />
                    </div>
                    <div className="absolute -right-28 top-44 ">
                        <Image
                        src={'/assets/landing/Bitmap-24.png'}
                        alt="Background Image"
                        height="150"
                        width="181"
                        />
                    </div>
                </div>
                <div className="absolute -left-8 -bottom-12 ">
                    <Image
                        src={'/assets/landing/Bitmap-25.png'}
                        alt="Background Image"
                        height="228"
                        width="237"
                    />
                </div>
            </section>


            <section>
              <div className="flex ml-5 mt-5">
                <div className="flex-col w-1/2">
                  <div className="bg-#74C2F1 w-11/12 h-64 pt-10 rounded-30px bg-opacity-20">
                    <div className="flex justify-center pl-8">
                      <Image
                        src={'/assets/landing/Give-1.png'}
                        alt="Background Image"
                        height="110"
                        width="140"
                      />
                    </div>
                    <div className="mt-8 flex text-3xl italic font-extrabold text-#74C2F1 justify-center">
                      FAST
                    </div>
                  </div>
                  <div className="bg-#FF8199 w-11/12 h-96 mt-4 pt-7 rounded-30px bg-opacity-20">
                    <div className="flex justify-center pl-3 pt-16">
                      <Image className=""
                             src={'/assets/landing/Heart Copy-1.png'}
                             alt="Background Image"
                             height="146"
                             width="160"
                      />
                    </div>
                    <div className="mt-16 flex text-3xl italic font-extrabold text-#FF8199 justify-center">
                      SIMPLE
                    </div>
                  </div>
                </div>
                <div className="flex-col w-1/2">
                  <div className="bg-#9977FF w-11/12 h-96 pt-7 rounded-30px bg-opacity-20">
                    <div className="mt-5 flex text-3xl italic font-extrabold text-#9977FF justify-center">
                      AWESOME
                    </div>
                    <div className="pl-3 mt-14 flex justify-center">
                      <Image className=""
                             src={'/assets/landing/I_love_you-1.png'}
                             alt="Background Image"
                             height="176"
                             width="144"
                      />
                    </div>
                  </div>
                  <div className="bg-#FFB600 w-11/12 h-64 mt-4 pt-6 rounded-30px bg-opacity-20 overflow-x-hidden">
                    <div className="mt-3 flex text-3xl italic font-extrabold text-#FFB600 justify-center">
                      TRUSTWORTHY
                    </div>
                    <div className="pl-8 mt-8 flex justify-center">
                      <Image
                        src={'/assets/landing/Thumb_up-1.png'}
                        alt="Background Image"
                        height="130"
                        width="160"
                      />
                    </div>

                  </div>
                </div>
              </div>
            </section>

            <section>
              <div className="ml-5 mt-14">
                <div className="flex justify-between mt-8">
                  <div className="w-3/4 text-xl font-manrope-extra-bold text-#1A181B leading-8">
                    Fresh from the blog
                  </div>
                  <div className="bg-#F5F4F5 w-9 h-9 mr-5 rounded-xl">
                    <ArrowForwardIcon className="ml-2 mt-1" />
                  </div>
                </div>
                <div className="flex -ml-5 overflow-auto">
                  {listRectangle2}
                </div>
              </div>
            </section>

            <section>
              <div className="mt-14 mx-5">
                <div className="text-xl font-manrope-extra-bold text-#1A181B leading-8">
                  Our process is simple as
                </div>
                <div className=" mt-11 flex justify-center">
                  <Image className=""
                         src={'/assets/landing/Group 7@2x-1.png'}
                         alt="Background Image"
                         height="200"
                         width="330"
                  />
                </div>
                <div className="mt-10 flex text-base text-#4E4851 leading-8 justify-center font-manrope-semibold font-extrabold tracking-wider">Add Co-Travellers & Upload Docs</div>
                <div className="flex justify-center mt-12">
                  <div className="bg-#1A181B ml-4 text-white font-manrope-extra-bold w-16 h-16 rounded-3xl py-5 px-7">1</div>
                  <div className="bg-#F5F4F5 ml-4 text-#1A181B font-manrope-extra-bold w-16 h-16 rounded-3xl py-5 px-7">2</div>
                  <div className="bg-#F5F4F5 ml-4 text-#1A181B font-manrope-extra-bold w-16 h-16 rounded-3xl py-5 px-7">3</div>
                </div>
              </div>
            </section>


            <section>
              <div className="mx-5 mt-14 ">
                <div className="text-xl font-manrope-extra-bold text-#1A181B leading-8 ">
                  People love us
                </div>
                <div className="bg-#3CC39A bg-opacity-50 p-5 mt-5 rounded-40px flex-col items-center">
                  <div className="flex">
                    <div className="relative bg-white rounded-20px p-5 w-3/5">
                      <div className="font-manrope-regular font-bold leading-7 text-#4E4851 text-sm">Impressive service, after trying and failing numerous time at the official site, i thought i'll have to go another way.
                      </div>
                      <div className="mt-3 font-manrope-regular text-xs leading-6 font-bold ">RICHARD LORYCH</div>
                      <div className="font-manrope-extra-light text-sm text-#9B939F">travelled to USA</div>
                      <div className="arrow-right"> </div>
                    </div>
                    <div className="flex align-baseline">
                      <div className="pl-3 mt-14 flex justify-center pt-7">
                        <Image className=""
                               src={'/assets/landing/image-removebg (3)-2.png'}
                               alt="Background Image"
                               height="164"
                               width="157"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex mt-10 justify-end">
                    <div className="flex align-baseline">
                      <div className="pl-9 mt-14 flex justify-center pt-7">
                        <Image className=""
                               src={'/assets/landing/image-removebg (4)-1.png'}
                               alt="Background Image"
                               height="156"
                               width="129"
                        />
                      </div>
                    </div>
                    <div className="relative bg-white rounded-20px p-5 w-3/5">
                      <div className="font-manrope-regular font-bold leading-7 text-#4E4851 text-sm">Impressive service, after trying and failing numerous time at the official site, i thought i'll have to go another way.
                      </div>
                      <div className="mt-3 font-manrope-regular text-xs leading-6 font-bold ">RICHARD LORYCH</div>
                      <div className="font-manrope-extra-light text-sm text-#9B939F">travelled to USA</div>
                      <div className="arrow-left"> </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>


            <section className="relative mt-20">
              <div className="absolute right-0 -top-10">
                <Image className=""
                       src={'/assets/landing/Bitmap@2x-6.png'}
                       alt="Background Image"
                       height="230"
                       width="164"
                />
              </div>
              <div className="bg-#9977FF bg-opacity-50 text-xl py-10 px-5 ">
                <div className="flex-col">
                  <h4 className="text-#1A181B font-manrope-extra-bold mb-5 leading-7">Join the club</h4>
                  <h5 className="text-#4E4851 font-manrope-regular text-base leading-7">Get your Visa Approved.</h5>
                  <h5 className="text-#4E4851 font-manrope-regular text-base leading-7">Seamless, Simple,</h5>
                  <h5 className="text-#4E4851  font-manrope-regular text-base leading-7">Reliable</h5>
                </div>
                <div className="start-process-btn flex justify-between mt-12">
                  <button className="bg-white py-5 px-10 rounded-20px text-sm w-1/2">Sign up</button>
                  <button className="bg-#1A181B py-5 px-10 rounded-20px text-sm text-white mx-2 w-1/2">Sign in</button>
                </div>
              </div>
            </section>


            <section>
              <div className="m-5 mt-12 mb-32">
                <div className="text-xl font-manrope-extra-bold text-#1A181B leading-8">
                  Frequently Asked Questions
                </div>
                <div className="mt-5">
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
                </div>
              </div>
            </section>

            <div className="flex fixed bottom-5 w-full justify-center">
              <div className="flex bg-#1A181B py-6 px-7 rounded-30px text-white text-xl">
                <ExploreOutlinedIcon style={{color:'white',background:"none" ,fontSize:"32px", marginRight:"40px",boxShadow:"0px 50px 25px 1px #FFFFFF"}}/>
                <PersonOutlineIcon style={{color:'white',fontSize:"32px",opacity:"40%"}}/>
              </div>
              <div className="flex bg-#1A181B py-6 px-7 ml-5 rounded-30px text-white">
                <ChatBubbleOutlineRoundedIcon style={{color:'white',fontSize:"32px"}}/>
              </div>
            </div>

        </div>
    )
}



export default LandingPage

import React from "react";
import ExploreOutlinedIcon from '@material-ui/icons/ExploreOutlined';
import ChatBubbleOutlineRoundedIcon from '@material-ui/icons/ChatBubbleOutlineRounded';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import Accordion from "./Accordion";
import CustomerReviewBox from "./CustomerReviewBox";
import ImageList from "./ProcessDisplay";
import DisplayBlogPost from "./BlogPost";
import CountriesVisaDetailSlider from "./DisplayCountryVisaDetail";
import { InferGetServerSidePropsType } from "next";
import { getServerSideProps } from "../../../pages";
import Typography from "../../common/Typography";
import Img from "../../common/Img";


function LandingPage({ data }:InferGetServerSidePropsType<typeof getServerSideProps>) {

    return (
        <div className="bg-#FFFFFF flex-col items-center">
            <section>
                <picture>
                    <source srcSet='/assets/landing/cover_images/cover1@3x.png 3x,
                                    /assets/landing/cover_images/cover1@2x.png 2x,
                                    /assets/landing/cover_images/cover1@1x.png 1x'
                    />
                    <img src="/assets/landing/cover_images/cover1@2x.png" alt="cover_images" width="100%" />
                </picture>
                <div className="relative bottom-8 flex justify-center">
                    <div className="flex justify-between bg-white mx-12 rounded-2xl shadow w-3/4">
                        <input className="ml-5 py-5 text-sm rounded-3xl focus:outline-none w-44 leading-5
                        focus:placeholder-transparent placeholder-#4E4851 font-manrope-regular font-bold"
                        type="text"
                        placeholder="I am looking for a visa to..."
                        />
                        <div className="bg-#1A181B w-10 h-10 my-2.5 ml-4 mr-2 text-white rounded-2xl flex justify-center items-center">
                            <Img
                              src="landing/search_icon_image/search-1@3x.png"
                              alt="submit"
                              width="14"
                              height="14"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="ml-5 mt-8">
                <div className="flex justify-between">
                    <Typography type="heading2" variant="h1">
                        Countries to visit right now
                    </Typography>
                    <div className="bg-#F5F4F5 w-8 h-8 mr-5 rounded-xl flex justify-center items-center">
                        <Img
                          src="landing/right_arrow_image/arrow-right_2@3x.png"
                          alt="right_arrow_image"
                          width="15"
                          height="11"
                        />
                    </div>
                </div>
                <div>
                    <CountriesVisaDetailSlider countryList = {data.data.CountryVisaDetailSlow} />
                </div>
            </section>

            <section className="ml-5 mt-14">
                <div className="flex justify-between mt-8">
                    <Typography type="heading2" variant="h1">
                        Fastest visa process
                    </Typography>
                    <div className="bg-#F5F4F5 w-8 h-8 mr-5 rounded-xl flex justify-center items-center">

                        <Img
                          src="landing/right_arrow_image/arrow-right_2@3x.png"
                          alt="right_arrow_image"
                          width="15"
                          height="11"
                        />
                        <span>
                            view fastest
                        </span>
                    </div>
                </div>
                <div>
                  <CountriesVisaDetailSlider countryList = {data.data.CountryVisaDetailFast}  />
                </div>
            </section>


            <section className="relative mx-5 mt-14 ">
                <Typography type="heading2" variant="h1">
                    Why stamp my visa?
                </Typography>
                <div className="relative bg-#3CC39A bg-opacity-20 rounded-3xl flex-col pt-6 mt-5">
                    <div className="flex text-2xl italic font-extrabold text-#3CC39A justify-center">
                        <marquee width="100%" direction="left">
                            BOOKINGS FOR VISA &#8226;
                        </marquee>
                    </div>
                    <Typography type="content12" variant="p" className="mt-5 text-center px-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et sed do F.A.S.T
                    </Typography>
                    <div className="flex justify-end mt-10">
                        <div className="w-76">
                            <picture>
                                <source srcSet='/assets/landing/plane_image/bitmap_5.png 1x,
                                                /assets/landing/plane_image/bitmap_5@2x.png 2x,
                                                /assets/landing/plane_image/bitmap_5@3x.png 3x'/>

                                <img src='/assets/landing/plane_image/bitmap_5@2x.png' alt="plane_image" width="100%"/>
                            </picture>
                        </div>
                    </div>
                    <div className="absolute right-0 bottom-14">
                        <div className="w-11 origin-right">
                            <picture>
                                <source srcSet='/assets/landing/right_cloud_image/bitmap_6.png 1x,
                                                /assets/landing/right_cloud_image/bitmap_6@2x.png 2x,
                                                /assets/landing/right_cloud_image/bitmap_6@3x.png 3x'/>

                                <img src='/assets/landing/right_cloud_image/bitmap_6@2x.png' alt="right_cloud_image" width="100%"/>
                            </picture>
                        </div>
                    </div>
                </div>
                <div className="absolute top-72 -left-5">
                    <div className="w-40">
                        <picture>
                            <source srcSet='/assets/landing/left_cloud_image/bitmap_7.png 1x,
                                                /assets/landing/left_cloud_image/bitmap_7@2x.png 2x,
                                                /assets/landing/left_cloud_image/bitmap_7@3x.png 3x'/>

                            <img src='/assets/landing/left_cloud_image/bitmap_7@2x.png' alt="left_cloud_image" width="100%"/>
                        </picture>
                    </div>
                </div>
            </section>


            <section>
                <div className="flex ml-5 mt-5">
                    <div className="flex-col w-1/2">
                        <div className="bg-#74C2F1 mr-4 h-48 pt-10 rounded-30px bg-opacity-20">
                            <div className="flex justify-center">
                                <div className="w-26">
                                    <picture>
                                        <source srcSet='/assets/landing/marquee_fast_image/give.png 1x,
                                                        /assets/landing/marquee_fast_image/give@2x.png 2x,
                                                        /assets/landing/marquee_fast_image/give@3x.png 3x'/>

                                        <img src='/assets/landing/marquee_fast_image/give@2x.png' alt="marquee_fast_image" width="100%"/>
                                    </picture>
                                </div>
                            </div>
                            <div className="mt-10 flex text-2xl italic font-extrabold text-#74C2F1">
                                <marquee width="100%" direction="left">
                                   FAST
                                </marquee>
                            </div>
                        </div>
                        <div className="bg-#FF8199 h-68 mr-4 mt-4 pt-17 rounded-30px bg-opacity-20">
                            <div className="px-5 flex justify-center">
                                <div className="w-30">
                                    <picture>
                                        <source srcSet='/assets/landing/marquee_simple_image/heart-copy.png 1x,
                                                        /assets/landing/marquee_simple_image/heart-copy@2x.png 2x,
                                                        /assets/landing/marquee_simple_image/heart-copy@3x.png 3x'/>

                                        <img src='/assets/landing/marquee_simple_image/heart-copy@2x.png' alt="marquee_simple_image" width="100%"/>
                                    </picture>
                                </div>
                            </div>
                            <div className="mt-12 text-2xl italic font-extrabold text-#FF8199">
                                <marquee width="100%" direction="left">
                                  SIMPLE
                                </marquee>
                            </div>
                        </div>
                    </div>
                    <div className="flex-col w-1/2">
                        <div className="bg-#9977FF mr-5 h-68 pt-6 rounded-30px bg-opacity-20">
                            <div className="text-2xl italic font-extrabold text-#9977FF">
                                <marquee width="100%" direction="left">
                                   AWESOME
                                </marquee>
                            </div>
                            <div className="mt-8 px-8 flex justify-center">
                                <div className="w-24">
                                    <picture>
                                        <source srcSet='/assets/landing/marquee_awesome_image/i-love-you.png 1x,
                                                        /assets/landing/marquee_awesome_image/i-love-you@2x.png 2x,
                                                        /assets/landing/marquee_awesome_image/i-love-you@3x.png 3x'/>

                                        <img src='/assets/landing/marquee_awesome_image/i-love-you@2x.png' alt="marquee_awesome_image" width="100%"/>
                                    </picture>
                                </div>
                            </div>
                        </div>
                        <div className="bg-#FFB600 h-48 mr-5  mt-4 pt-6 rounded-30px bg-opacity-20">
                            <div className="text-2xl italic font-extrabold text-#FFB600">
                                <marquee width="100%" direction="left">
                                    TRUSTWORTHY
                                </marquee>
                            </div>
                            <div className="pr-8 pl-7 flex justify-center">
                                <div className="w-25">
                                    <picture>
                                        <source srcSet='/assets/landing/marquee_trustworthy_image/thumb-up.png 1x,
                                                        /assets/landing/marquee_trustworthy_image/thumb-up@2x.png 2x,
                                                        /assets/landing/marquee_trustworthy_image/thumb-up@3x.png 3x'/>

                                        <img src='/assets/landing/marquee_trustworthy_image/thumb-up@2x.png' alt="marquee_trustworthy_image" width="100%"/>
                                    </picture>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="ml-5 mt-14">
                    <div className="flex justify-between mt-8">
                        <Typography type="heading2" variant="h1">
                            Fresh from the blog
                        </Typography>
                        <div className="bg-#F5F4F5 w-8 h-8 mr-5 rounded-xl flex justify-center items-center">
                            <Img
                              src="landing/right_arrow_image/arrow-right_2@3x.png"
                              alt="right_arrow_image"
                              width="15"
                              height="11"
                            />
                        </div>
                    </div>
                    <div>
                        <DisplayBlogPost blogList = {data.data.BlogArray} />
                    </div>
                </div>
            </section>


            <section>
                <div className="mt-14 mx-5">
                    <Typography type="heading2" variant="h1">
                        Our process is simple as
                    </Typography>
                    <ImageList/>
               </div>
            </section>


            <section>
                <div className="mx-5 mt-14 ">
                    <Typography type="heading2" variant="h1">
                        People love us
                    </Typography>
                    <div className="bg-#3CC39A bg-opacity-50 h-135 px-5 pb-5 mt-5 rounded-40px overflow-y-auto">
                        <div className="flex flex-col -mt-5">
                          <CustomerReviewBox customer_review_list = {data.data.Customer_review} />
                        </div>
                    </div>
                </div>
            </section>


            <section className="relative mt-20">
                <div className="absolute right-0 -top-10">
                    <div className="relative w-38.25 mb-4">
                        <picture>
                            <source srcSet='/assets/landing/earth_globe_image/bitmap_4.png 1x,
                                                        /assets/landing/earth_globe_image/bitmap_4@2x.png 2x,
                                                        /assets/landing/earth_globe_image/bitmap_4@3x.png 3x'/>

                            <img src='/assets/landing/earth_globe_image/bitmap_4@2x.png' alt="earth_globe_image" width="100%"/>
                        </picture>
                    </div>
                </div>
                <div className="bg-#9977FF bg-opacity-50 text-xl py-10 px-5">
                    <div className="flex-col">
                        <Typography type="heading2" variant="h2" className="mb-5">Join the club</Typography>
                        <Typography type="subHeading5" variant="h3">Get your Visa Approved.</Typography>
                        <Typography type="subHeading5" variant="h3">Seamless, Simple,</Typography>
                        <Typography type="subHeading5" variant="h3">Reliable</Typography>
                    </div>
                    <div className="start-process-btn flex justify-between mt-12">
                        <button className="bg-white py-5 px-10 rounded-20px text-sm w-40">Sign up</button>
                        <button className="bg-#1A181B py-5 px-10 rounded-20px text-sm text-white w-40">Sign in</button>
                    </div>
                </div>
            </section>


            <section>
                <div className="m-5 mt-12 mb-32">
                    <Typography type="heading2" variant="h2">
                        Frequently Asked Questions
                    </Typography>
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
                <div className="flex bg-#1A181B py-6 px-7 w-32 h-17.5 rounded-30px justify-between">
                    <div className="shadow-button">
                        <Img
                          src="landing/compass_icon _image/compass@3x.png"
                          alt="compass_icon _image"
                          width="20"
                          height="20"
                        />
                    </div>
                    <div>
                        <Img
                          src="landing/user_icon_image/user@3x.png"
                          alt="compass_icon _image"
                          width="16"
                          height="18"
                        />
                    </div>
                    {/*<ExploreOutlinedIcon style={{color:'white',background:"none" ,fontSize:"32px", marginRight:"40px",boxShadow:"0px 50px 25px 1px #FFFFFF"}}/>*/}
                    {/*<PersonOutlineIcon style={{color:'white',fontSize:"32px",opacity:"40%"}}/>*/}
                </div>
                <div className="flex bg-#1A181B p-6 ml-5 w-17.5 h-17.5 rounded-30px text-white">
                    <div>
                        <Img
                          src="landing/chat_icon_image/chat@3x.png"
                          alt="compass_icon _image"
                          width="20"
                          height="19"
                        />
                    </div>

                   {/*<ChatBubbleOutlineRoundedIcon style={{color:'white',fontSize:"32px"}}/>*/}
                </div>
            </div>

        </div>
    )
}


export default LandingPage

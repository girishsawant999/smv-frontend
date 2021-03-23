import React, { useEffect } from "react";
import Accordion from "./Components/Accordion";
import CustomerReviewBox from "./Components/CustomerReviewBox";
import ImageList from "./Components/ProcessDisplay";
import DisplayBlogPost from "./Components/BlogPost";
import CountriesVisaDetailSlider from "./Components/DisplayCountryVisaDetail";
import Typography from "../../common/Typography";
import Img from "../../common/Img";
import Icon from "../../common/Icon";
import WhyStampMyVisa from "./Components/WhyStampMyVisa";
import WhyStampMyVisaFAST from "./Components/WhyStampMyVisaFAST";
import JoinTheClub from "./Components/JoinTheClub";
import FixedBottomButton from "./Components/FixedBottomButton";
import { useRouter } from "next/router";
import ProcessSlider from "./Components/ProcessSlider/ProcessSlider";
import { IInputDataProps } from "./types";

type ILandingPageInfoProps={
  LandingPageInfo:IInputDataProps;
}


function LandingPage({LandingPageInfo}:ILandingPageInfoProps) {
    const QuestionAndAnswer=[
      {
      question: "Once I apply, when I will receive my visa?",
      answer: "An e-Visa is an official document permitting entry into and travel within a certain country. The e-Visa is an alternative to visas issued at the ports of entry or visiting an embassy/consulate to obtain traditional paper visas"
      },
      {
        question: "What is an eVisa?",
        answer: "An e-Visa is an official document permitting entry into and travel within a certain country. The e-Visa is an alternative to visas issued at the ports of entry or visiting an embassy/consulate to obtain traditional paper visas"
      },
      {
        question: "How long is my visa valid for and how much does it cost how much does it cost?",
        answer: "An e-Visa is an official document permitting entry into and travel within a certain country. The e-Visa is an alternative to visas issued at the ports of entry or visiting an embassy/consulate to obtain traditional paper visas"
      }
    ]
  const Customer_review = [{
      comment: "Impressive service, after trying and failing numerous time at the official site, i thought i'll have to go another way.",
      gender: 'male',
      country: 'travelled to USA',
      name: 'RICHARD LORYCH'
    },
    {
      comment: "Impressive service, after trying and failing numerous time at the official site, i thought i'll have to go another way.",
      gender: 'female',
      country: 'travelled to USA',
      name: 'RICHARD LORYCH'
    },
    {
      comment: "Impressive service, after trying and failing numerous time at the official site, i thought i'll have to go another way.",
      gender: 'female',
      country: 'travelled to USA',
      name: 'RICHARD LORYCH'
    },
    {
      comment: "Impressive service, after trying and failing numerous time at the official site, i thought i'll have to go another way.",
      gender: 'male',
      country: 'travelled to USA',
      name: 'RICHARD LORYCH'
    }]

    const router = useRouter()
    const handleClick = (e: { preventDefault: () => void; }) => {
      e.preventDefault()
      router.push( "/search")
    }

    useEffect(() => {
      router.prefetch('/search')
    }, [])

    return (
        <div className="bg-#FFFFFF flex-col items-center">
            <section>
                <Img alt="cover image"
                     srcSet={["landing/cover_images/cover1@1x.png 1x",
                              "landing/cover_images/cover1@2x.png 2x",
                              "landing/cover_images/cover1@3x.png 3x"]}
                     width="100%"
                 />
                <div onClick={handleClick} className="relative bottom-8 flex justify-center">
                    <div className="bg-white mx-12 rounded-2xl shadow w-10/12 xsm:w-3/4 xmd:w-2/3">
                        <form className="flex justify-between">
                          <input id="countryName" className="ml-8 xsm:ml-10 xmd:ml-20 xsm:py-5 text-sm xsm:text-sm xmd:text-base
                            rounded-3xl focus:outline-none w-44 xsm:w-44 xmd:w-48 leading-5
                            placeholder-#4E4851 font-manrope-regular font-bold"
                            type="text"
                            placeholder="I am looking for a visa to..."
                            name="searchCountryValue"
                            disabled
                            />
                            <button type="submit" className="bg-#1A181B w-10 h-10 my-2.5 ml-4 mr-2 text-white
                            rounded-2xl flex justify-center items-center">
                                <Icon
                                  src={"landing/search_icon_image/search-1@3x.png"}
                                  alt="Search for specific country"
                                  className="p-3"
                                />
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            <section className="ml-5 mt-8">
                <div className="flex justify-between">
                    <Typography type="heading" size="20" weight="extra-bold" variant="h1" className="">
                        Countries to visit right now
                    </Typography>
                    <div className="bg-#F5F4F5 w-8 h-8 mr-5 mt-5 xsm:mt-0  rounded-xl flex justify-center items-center">
                        <Icon src={"landing/right_arrow_image/arrow-right_2@3x.png"}
                              alt="right arrow navigation image"
                              className="p-2"
                        />
                    </div>
                </div>
                <div>
                    <CountriesVisaDetailSlider countryList = {LandingPageInfo.data.CountryVisaDetailSlow}/>
                </div>
            </section>

            <section className="ml-5 mt-14">
                <div className="flex justify-between mt-8">
                    <Typography type="heading" size="20" weight="extra-bold" variant="h1" className="">
                          Fastest visa process
                    </Typography>
                    <div className="bg-#F5F4F5 w-8 h-8 mr-5 rounded-xl flex justify-center items-center">
                        <Icon src={"landing/right_arrow_image/arrow-right_2@3x.png"}
                              alt="right arrow navigation image"
                              className="p-2"
                        />
                    </div>
                </div>

                <div>
                  <CountriesVisaDetailSlider countryList = {LandingPageInfo.data.CountryVisaDetailFast}/>

                </div>
            </section>


            <section>
                <Typography type="heading" size="20" weight="extra-bold" variant="h1" className="mx-5 mt-14">
                    Why stamp my visa?
                </Typography>

                <div className="flex flex-col xmd:flex-row xmd:h-120">
                    <div className="mx-5 xmd:w-1/2">
                      <WhyStampMyVisa/>
                    </div>
                    <div className="ml-5 mt-5 xmd:ml-0 xmd:w-1/2 ">
                      <WhyStampMyVisaFAST/>
                    </div>
                </div>
            </section>

            <section>
                <div className="ml-5 mt-14">
                    <div className="flex justify-between mt-8">
                      <Typography type="heading" size="20" weight="extra-bold" variant="h1" className="">
                            Fresh from the blog
                      </Typography>
                        <div className="bg-#F5F4F5 w-8 h-8 mr-5 rounded-xl flex justify-center items-center">
                          <Icon src={"landing/right_arrow_image/arrow-right_2@3x.png"}
                                alt="right arrow navigation image"
                                className="p-2" />
                        </div>
                    </div>
                    <div>
                        <DisplayBlogPost blogList = {LandingPageInfo.data.BlogArray} />
                    </div>
                </div>
            </section>


            <section>
                <div className="mt-14 mx-5">
                    <Typography type="heading" size="20" weight="extra-bold" variant="h1" className="">
                          Our process is simple as
                    </Typography>
                  {/*<div className="w-96 overflow-x-auto">*/}
                  {/*  <ProcessSlider/>*/}
                  {/*</div>*/}
               </div>
            </section>


            <section>
                <div className="mx-5 mt-14 ">
                  <Typography type="heading" size="20" weight="extra-bold" variant="h1">
                        People love us
                    </Typography>
                    <div className="bg-#3CC39A bg-opacity-50 h-135 px-5 pb-5 mt-5 rounded-40px overflow-y-auto">
                        <div className="flex flex-col -mt-5">
                          <CustomerReviewBox customer_review_list = {Customer_review} />
                        </div>
                    </div>
                </div>
            </section>


            <section className="relative mt-20">
                <JoinTheClub/>
            </section>


            <section>
                <div className="m-5 mt-12 mb-32">
                    <Typography type="heading" size="20" weight="extra-bold" variant="h1">
                        Frequently Asked Questions
                    </Typography>
                    <div className="mt-5">
                        {QuestionAndAnswer.map((item, index)=>{
                          return <Accordion question={item.question} answer={item.answer}/>
                        })}
                    </div>
                </div>
            </section>

            <div>
              <FixedBottomButton/>
            </div>
        </div>
    )
}


export default LandingPage

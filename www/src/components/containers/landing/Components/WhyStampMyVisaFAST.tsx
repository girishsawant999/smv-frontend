import React from "react";
import Img from "../../../common/Img";

function WhyStampmyVisaFAST(){
  return(
    <div className="flex">
      <div className="flex-col w-1/2">
        <div className="bg-#74C2F1 mr-4 h-48 pt-10 rounded-30px bg-opacity-20">
          <div className="flex justify-center">
            <div className="w-26">
              <Img srcSet={['landing/marquee_fast_image/give.png 1x',
                            'landing/marquee_fast_image/give@2x.png 2x',
                            'landing/marquee_fast_image/give@3x.png 3x']}
                   alt="Fast Operation"
                />

            </div>
          </div>
          <div className="mt-10 flex text-2xl italic font-sequel text-#74C2F1">
            <marquee width="100%" direction="left">
              FAST <span className="text-center text-2xl">&#8226;</span> FAST <span className="text-center text-2xl">&#8226;</span> FAST <span className="text-center text-2xl">&#8226;</span> FAST
            </marquee>
          </div>
        </div>
        <div className="bg-#FF8199 h-68 mr-4 mt-4 pt-17 rounded-30px bg-opacity-20">
          <div className="px-5 flex justify-center">
            <div className="w-30">
              <Img
                 srcSet={['landing/marquee_simple_image/heart-copy.png 1x',
                        'landing/marquee_simple_image/heart-copy@2x.png 2x',
                        'landing/marquee_simple_image/heart-copy@3x.png 3x']}
                 alt="Simple to do"
              />

            </div>
          </div>
          <div className="mt-12 text-2xl italic font-sequel text-#FF8199">
            <marquee width="100%" direction="left">
              SIMPLE <span className="text-center text-2xl">&#8226;</span> SIMPLE <span className="text-center text-2xl">&#8226;</span> SIMPLE <span className="text-center text-2xl">&#8226;</span> SIMPLE
            </marquee>
          </div>
        </div>
      </div>
      <div className="flex-col w-1/2">
        <div className="bg-#9977FF mr-5 h-68 pt-6 rounded-30px bg-opacity-20">
          <div className="text-2xl italic font-sequel text-#9977FF">
            <marquee width="100%" direction="left">
              AWESOME <span className="text-center text-2xl">&#8226;</span> AWESOME <span className="text-center text-2xl">&#8226;</span> AWESOME <span className="text-center text-2xl">&#8226;</span> AWESOME
            </marquee>
          </div>
          <div className="mt-8 px-8 flex justify-center">
            <div className="w-24">
              <Img
                srcSet={['landing/marquee_awesome_image/i-love-you.png 1x',
                          'landing/marquee_awesome_image/i-love-you@2x.png 2x',
                          'landing/marquee_awesome_image/i-love-you@3x.png 3x']}

                alt="Awesome operation"
              />
            </div>
          </div>
        </div>
        <div className="bg-#FFB600 h-48 mr-5 mt-4 pt-6 rounded-30px bg-opacity-20">
          <div className="text-2xl italic font-sequel text-#FFB600">
            <marquee width="100%" direction="left">
              TRUSTWORTHY <span className="text-center text-2xl">&#8226;</span> TRUSTWORTHY <span className="text-center text-2xl">&#8226;</span> TRUSTWORTHY <span className="text-center text-2xl">&#8226;</span> TRUSTWORTHY
            </marquee>
          </div>
          <div className="pr-8 pl-7 flex justify-center">
            <div className="w-25">
              <Img
                srcSet={['landing/marquee_trustworthy_image/thumb-up.png 1x',
                         'landing/marquee_trustworthy_image/thumb-up@2x.png 2x',
                         'landing/marquee_trustworthy_image/thumb-up@3x.png 3x']}
                alt="Trustworthy"
                />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhyStampmyVisaFAST
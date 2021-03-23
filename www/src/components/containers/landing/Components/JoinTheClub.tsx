import React from "react";
import Typography from "../../../common/Typography";
import Img from "../../../common/Img";


function JoinTheClub(){
  return(
    <div>
      <div className="relative">
        <div className="absolute right-0 -top-10 w-34 xsm:w-38.25 xmd:w-60 xmd:right-16 mb-4 ">
          <Img
            srcSet={['landing/earth_globe_image/bitmap_4.png 1x',
                     'landing/earth_globe_image/bitmap_4@2x.png 2x',
                     'landing/earth_globe_image/bitmap_4@3x.png 3x']}
            alt="Earth Globe image"
            className="absolute visible xmd:invisible"
          />
          <Img
            srcSet={['landing/earth_globe_image/bitmap.png 1x',
                     'landing/earth_globe_image/bitmap@2x.png 2x',
                     'landing/earth_globe_image/bitmap@3x.png 3x']}
            alt="Earth Globe image"
            className="absolute invisible xmd:visible"
          />
        </div>
      </div>
      <div className="bg-#9977FF bg-opacity-50 text-xl py-10 px-5">
        <div className="flex-col w-2/3">
          <Typography type="heading" size="20" weight="extra-bold" variant="h2" className="mb-5">Join the club</Typography>
          <Typography type="content" size="16" weight="semi-bold" variant="h3" className="mt-8 xsm:mt-0">Get your Visa Approved.</Typography>
          <Typography type="content" size="16" weight="semi-bold" variant="h3" className="">Seamless, Simple,</Typography>
          <Typography type="content" size="16" weight="semi-bold" variant="h3" className="">Reliable</Typography>
        </div>
        <div className="flex mt-12">
          <button className="bg-white py-5 px-10 rounded-20px text-xs font-bold w-40">Sign up</button>
          <button className="bg-#1A181B ml-4 py-5 px-10 rounded-20px font-bold text-xs text-white w-40">Sign in</button>
        </div>
      </div>
    </div>

  )

}

export default JoinTheClub
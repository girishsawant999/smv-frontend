import React from "react";
import Typography from "../../../common/Typography";
import Img from "../../../common/Img";


function WhyStampMyVisa(){
    return(
        <div className="relative">
            <div className="relative bg-#3CC39A bg-opacity-20 rounded-3xl flex-col pt-6 mt-5 xmd:h-120">
                <div className="flex text-2xl italic font-sequel text-#3CC39A justify-center">
                  <marquee width="100%" direction="left">
                    BOOKINGS FOR VISA <span className="text-center text-2xl">&#8226;</span> BOOKINGS FOR VISA
                    <span className="text-center text-2xl">&#8226;</span> BOOKINGS FOR VISA
                  </marquee>
                </div>
              <Typography type="heading" size="14" weight="semi-bold" variant="h3" className="mt-5 text-center px-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et sed do F.A.S.T
              </Typography>
              <div className="flex justify-end mt-10">
                <div className="">
                  <Img
                    srcSet={["landing/plane_image/bitmap_5.png 1x",
                      "landing/plane_image/bitmap_5@2x.png 2x",
                      "landing/plane_image/bitmap_5@3x.png 3x"]}
                    alt="Flying plane image"
                    className="w-76"
                  />
                </div>
              </div>
              <div className="absolute right-0 bottom-14 xmd:bottom-48">
                <div className="w-11 origin-right">
                  <Img
                    srcSet={["landing/right_cloud_image/bitmap_6.png 1x",
                      "landing/right_cloud_image/bitmap_6@2x.png 2x",
                      "landing/right_cloud_image/bitmap_6@3x.png 3x"]}
                    alt="Cloud image"
                  />
                </div>
              </div>
            </div>
            <div className="absolute top-56 -left-16 xsm:-left-5 xmd:top-80">
              <div className="">
                <Img
                  srcSet={["landing/left_cloud_image/bitmap_7.png 1x",
                    "landing/left_cloud_image/bitmap_7@2x.png 2x",
                    "landing/left_cloud_image/bitmap_7@3x.png 3x"]}
                  alt="Cloud image"
                  className="w-40"
                />
              </div>
            </div>
      </div>
  )
}

export default WhyStampMyVisa
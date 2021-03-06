import React from "react";
import Image from 'next/image';

function SlidingRectangle2(props){
  return(
    <div className="ml-5 mt-5 flex-col w-10/12">
      <div className="w-full flex justify-center">
        <Image
          src={props.rectangleLink}
          alt="Background Image"
          layout='fixed'
          height="234"
          width="390"
        />
      </div>
      <div className="flex-row justify-center mt-5 font-ma text-#4E4851 text-base">{props.statement}</div>
      <div className="mt-5 text-sm font-manrope-extra-light text-#9B939F ">{props.date}</div>
    </div>
  )
}

export default SlidingRectangle2
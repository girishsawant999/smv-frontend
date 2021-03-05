import React from "react";
import Image from 'next/image';

function SlidingRectangle(props){
  return(
    <div className="ml-3">
      <div>
        <Image
          src={props.rectangleLink}
          alt="Background Image"
          layout='fixed'
          height="225"
          width="179"
        />
      </div>
      <div className="mt-2 font-manrope-extra-light font-extrabold text-#4E4851 text-base">{props.countryName}</div>
      <div className="mt-1 text-sm font-manrope-extra-light text-#9B939F ">{props.time}</div>
    </div>
  )
}

export default SlidingRectangle
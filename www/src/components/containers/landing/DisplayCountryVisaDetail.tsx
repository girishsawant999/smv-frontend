import React, { useEffect, useState } from "react";
import Image from 'next/image';
import { uuid } from "uuidv4"



function countryLayout(item){
    return(
        <div key={uuid()} className="ml-3">
                <Image
                    src={item.imageLink}
                    alt="Background Image"
                    layout='fixed'
                    height="225"
                    width="179"
                />
        <div className="mt-2 font-manrope-extra-light font-extrabold text-#4E4851 text-base">{item.country}</div>
        <div className="mt-1 text-sm font-manrope-extra-light text-#9B939F ">{item.time}</div>
        </div>
    )
}

function CountriesVisaDetailSlider(props) {

    const [displayCountries, setDisplayCountries] = useState([])

    useEffect(()=>{
        let arr = props.countryList.map((item)=>{
            return(countryLayout(item))
        })
        setDisplayCountries(arr)
    },[])

    return(
        <div className="mt-5 -ml-3 flex overflow-x-auto">
            {displayCountries}
        </div>
    )

}


export default CountriesVisaDetailSlider


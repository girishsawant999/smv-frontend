import React, { useEffect, useState } from "react";
import Image from 'next/image';
import { uuid } from "uuidv4"


function countryLayout(item:any){
    console.log(item.imageLink.imageLink_1x + ' 1x, ' + item.imageLink.imageLink_2x + ' 2x, ' + item.imageLink.imageLink_3x + ' 3x')
    return(
        <div key={uuid()} className="ml-3">
            <picture>
                {/*<source srcSet="/assets/landing/country_greece_images/bitmap.png 1x,*/}
                {/*                /assets/landing/country_greece_images/bitmap@2x.png 2x,*/}
                {/*                /assets/landing/country_greece_images/bitmap@3x.png 3x"*/}
                {/*/>*/}
                <source srcSet={item.imageLink.imageLink_1x + ' 1x, ' + item.imageLink.imageLink_2x + ' 2x, ' + item.imageLink.imageLink_3x + ' 3x'}
                />
                <img src={item.imageLink.imageLink_3x} alt="Country"  width="300px"/>
            </picture>
            {/*<Image*/}
            {/*        src={item.imageLink.imageLink_1x}*/}
            {/*        alt="Background Image"*/}
            {/*        layout='fixed'*/}
            {/*        height="225"*/}
            {/*        width="179"*/}
            {/*    />*/}
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
        <div className="mt-5 -ml-3 flex h-72">
            {displayCountries}
        </div>
    )

}


export default CountriesVisaDetailSlider


import React from 'react';
import Icon from '../../../../common/Icon';
import Img from '../../../../common/Img';

function CountryImage(){
    return(
        <section className="relative">
            <div className=" z-10 ">
                <div className="absolute w-10 h-10 bg-white flex top-10 right-5 justify-center items-center bg-opacity-40 rounded-2xl cursor-pointer">
                    <Icon src={"share/share.svg"} alt={"share"}/>
                </div>
                <div className="absolute w-10 h-10 bg-white flex top-10 left-5 justify-center items-center bg-opacity-40 rounded-2xl cursor-pointer"  onClick={()=>history.back()}>
                    <Icon src={"chevron-left/chevron-left.svg"} alt={"go back"}/>
                </div>
            </div>
            <Img
                alt={"country image"}
                className={"w-full h-96"}
                srcSet={["country/country.png", "country/country@2x.png 2x", "country/country@3x.png 3x"]}
                placeHolderBg={'#f5f4f5'}
            />
        </section>
    )
}
export default CountryImage
import React from 'react';
import Icon from '../../../common/Icon';

function CountryImage(){
    return(

        <section className="relative">
            <div className=" z-10 ">
                <div className="absolute w-10 h-10 bg-white flex top-10 right-5 justify-center items-center bg-opacity-40 rounded-2xl cursor-pointer">
                    <Icon src={"share/share.svg"} alt={"share"}/>
                </div>
                <div className="absolute w-10 h-10 bg-white flex top-10 left-5 justify-center items-center bg-opacity-40 rounded-2xl cursor-pointer">
                    <Icon src={"chevron-left/chevron-left.svg"} alt={"go back"}/>
                </div>
            </div>
            <picture>
                <source
                    srcSet="/assets/images/country/country.png 1x,
                            /assets/images/country/country@2x.png 2x,
                            /assets/images/country/country@3x.png 3x"
                />
              <img src="/assets/images/country/country.png" alt="Country" width="100%"/>
            </picture>
        </section>
    )
}
export default CountryImage
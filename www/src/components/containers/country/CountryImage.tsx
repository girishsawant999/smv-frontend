import React from 'react';
import Image from 'next/image';

function CountryImage(){
    return(
        <div className="header-image-section relative">
            <div className="header-image-icon">
                {/*<SaveAltIcon className="header-image-right-icon"/>*/}
                {/*<ChevronLeftIcon className="header-image-left-icon"/>*/}
            </div>
            <Image
                src="/assets/images/country/country.png"
                alt="Picture of the author"
                width={ 375 }
                height={ 300 }
                layout="responsive"
            />
        </div>
    )
}
export default CountryImage
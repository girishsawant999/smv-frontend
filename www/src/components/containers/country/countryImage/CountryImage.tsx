import React from 'react';

function CountryImage(){
    return(
        <div className="relative">
            <div className=" z-10 ">
                <div className="absolute w-10 h-10 bg-white flex top-10 right-5 justify-center items-center bg-opacity-40 rounded-2xl cursor-pointer">
                    <picture>
                        <source
                            srcSet="/assets/images/share/share.png 1x,
                            /assets/images/share/share@2x.png 2x,
                            /assets/images/share/share@3x.png 3x"
                        />
                        <img src="/assets/images/share/share.png" alt="Share"/>
                    </picture>
                </div>
                <div className="absolute w-10 h-10 bg-white flex top-10 left-5 justify-center items-center bg-opacity-40 rounded-2xl cursor-pointer">
                    <picture>
                        <source
                            srcSet="/assets/images/chevron-left/chevron-left.png 1x,
                            /assets/images/chevron-left/chevron-left@2x.png 2x,
                            /assets/images/chevron-left/chevron-left@3x.png 3x"
                        />
                        <img src="/assets/images/chevron-left/chevron-left.png" alt="Left Arrow"/>
                    </picture>
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
        </div>
    )
}
export default CountryImage
import React from 'react';

function CountryImage(){
    return(
        <div className="header-image-section relative">
            <div className="header-image-icon">
                {/*<SaveAltIcon className="header-image-right-icon"/>*/}
                {/*<ChevronLeftIcon className="header-image-left-icon"/>*/}
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
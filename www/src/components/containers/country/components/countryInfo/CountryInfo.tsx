import React from 'react';
import Typography from '../../../../common/Typography';

type ICountryInfoProps = {
    countryInfo:{
        name: string;
        processingTime: string;
        description: string;
    }
}

function CountryInfo({countryInfo}:ICountryInfoProps){
    return(
        <>
            { countryInfo !== undefined ?
                <section className="m-5">
                    <Typography size="24" weight="extra-bold" variant="h1" className="mb-1">
                        {countryInfo.name}
                    </Typography>
                    <Typography size="16" type="content" weight="semi-bold" variant="h3" className="mb-2.5">
                        {countryInfo.processingTime}
                    </Typography>
                    <Typography type="content" size="14" weight="regular" variant="p">
                        {countryInfo.description}
                    </Typography>
                </section>
                :
                <section/>
            }
        </>
    )

}
export default CountryInfo
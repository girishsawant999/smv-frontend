import Typography from "../../common/Typography";

type ICountryListObjectProps = {
    imageLink:{
        imageLink_1x: string;
        imageLink_2x: string;
        imageLink_3x: string;
    }
    country: string;
    time: string;
}

type ICountryListArrayProps = {
    countryList: Array<ICountryListObjectProps>
}

function countryLayout(item:ICountryListObjectProps,index:number){

    return(
        <div key={index} className="ml-3">
            <div className="relative w-44 mb-4">
                <picture>
                    <source srcSet={item.imageLink.imageLink_1x + ' 1x, ' + item.imageLink.imageLink_2x + ' 2x, ' + item.imageLink.imageLink_3x + ' 3x'}/>
                    <img src={item.imageLink.imageLink_3x} alt="Country" width="300px"/>
                </picture>
            </div>
        <Typography type="subHeading5" variant="h2" className="mt-2">{item.country}</Typography>
        <Typography type="content7" variant="h3" className="mt-1 opacity-60">{item.time}</Typography>
        </div>
    )
}

function CountriesVisaDetailSlider(props:ICountryListArrayProps) {

    return (
          <div className="mt-5 -ml-3 flex overflow-x-auto">
              {props.countryList.map((item, index) => {
                  return (countryLayout(item, index))})}
          </div>
    )

}


export default CountriesVisaDetailSlider

import Typography from "../../../common/Typography";
import Img from "../../../common/Img";

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
    countryList: Array<ICountryListObjectProps>;
}

function countryLayout(item:ICountryListObjectProps, index:number){
    return(
        <div key={index} onClick={()=>{window.open("\home")}} className="mr-3">
            <div className="w-40 mb-4">
                <Img srcSet={[item.imageLink.imageLink_1x + ' 1x,',item.imageLink.imageLink_2x + ' 2x,',item.imageLink.imageLink_3x + ' 3x']}
                     alt="country image"
                />
            </div>
        <Typography type="heading" size="16" weight="semi-bold" variant="h2" className="mt-2">{item.country}</Typography>
        <Typography type="heading" size="14" weight="regular" variant="p" className="mt-1">{item.time}</Typography>
        </div>

    )
}

function CountriesVisaDetailSlider(props:ICountryListArrayProps) {

    return (
          <div className="mt-5 flex overflow-x-auto">
              {props.countryList.map((item, index) => {
                  return (countryLayout(item, index))})}
          </div>
    )

}


export default CountriesVisaDetailSlider

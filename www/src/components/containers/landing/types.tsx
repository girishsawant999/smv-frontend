export type ICountryListObjectProps = {
  imageLink:{
    imageLink_1x: string;
    imageLink_2x: string;
    imageLink_3x: string;
  }
  country: string;
  time: string;
}
export type IBlogArrayProps = {
  imageLink:{
    imageLink_1x: string;
    imageLink_2x: string;
    imageLink_3x: string;
  }
  statement:string;
  date:string;
}

export type IInputDataProps = {
  success: boolean;
  data: {
    CountryVisaDetailSlow:Array<ICountryListObjectProps>;
    CountryVisaDetailFast:Array<ICountryListObjectProps>;
    BlogArray:Array<IBlogArrayProps>
  }
}
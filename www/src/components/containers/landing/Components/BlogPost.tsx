import React from "react";
import Typography from "../../../common/Typography";
import Img from "../../../common/Img";

type IBlogArrayProps = {
    imageLink:{
      imageLink_1x: string;
      imageLink_2x: string;
      imageLink_3x: string;
    }
   statement:string;
   date:string;
}

type IBlogList = {
   blogList:Array<IBlogArrayProps>
}

function SlidingBlog(item:IBlogArrayProps,index:number){
    return(
        <div key={index} className="ml-4 mt-5 flex-col">
            <div className="w-64 xsm:w-84">
              <Img srcSet={[item.imageLink.imageLink_1x + ' 1x,',item.imageLink.imageLink_2x + ' 2x,',item.imageLink.imageLink_3x + ' 3x']}
                   alt="Blog Post Image"
              />
            </div>
            <Typography type="heading" size="16" weight="semi-bold" variant="h2" className="mt-4 xsm:w-84">{item.statement}</Typography>
            <Typography type="heading" size="14"  weight="regular" variant="p" className="mt-1">{item.date}</Typography>
        </div>
    )
}


function DisplayBlogPost(props:IBlogList){

    return(
        <div className="flex -ml-4 overflow-auto">
            {props.blogList.map((item:IBlogArrayProps, index)=>{
              return(SlidingBlog(item,index))})}
        </div>
    )
}


export default DisplayBlogPost
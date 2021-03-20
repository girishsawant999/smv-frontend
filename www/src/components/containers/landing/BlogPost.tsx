import React, { useEffect, useState } from "react";
import Image from "next/image";
import { uuid } from "uuidv4"
import { string } from "prop-types";
import Typography from "../../common/Typography";

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

function SlidingBlog(item:IBlogArrayProps){
    return(
        <div key={uuid()} className="ml-4 mt-5 flex-col">
            <div className="w-full flex justify-center">
                <div className="relative w-84">
                    <picture>
                      <source srcSet={item.imageLink.imageLink_1x + ' 1x, ' + item.imageLink.imageLink_2x + ' 2x, ' + item.imageLink.imageLink_3x + ' 3x'}/>
                      <img src={item.imageLink.imageLink_3x} alt="Country" width="100%"/>
                    </picture>
                </div>
            </div>
            <Typography type="subHeading5" variant="h2" className="flex-row justify-center mt-4">{item.statement}</Typography>
            <Typography type="content8" variant="h3" className="mt-1">{item.date}</Typography>
        </div>
    )
}


function DisplayBlogPost(props:IBlogList){

    const [displayBlogList, setDisplayBlogList] = useState<JSX.Element[]> ([])

    useEffect(()=>{
        let blogArray = props.blogList.map((item:IBlogArrayProps)=>{
            return(SlidingBlog(item))
        })
        setDisplayBlogList(blogArray)
    },[])

    return(
        <div className="flex -ml-5 overflow-auto">
            {displayBlogList}
        </div>
    )
}


export default DisplayBlogPost
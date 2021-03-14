import React, { useEffect, useState } from "react";
import Image from "next/image";
import { uuid } from "uuidv4"


function SlidingBlog(item){
    return(
        <div key={uuid()} className="ml-5 mt-5 flex-col w-10/12">
            <div className="w-full flex justify-center">
                <Image
                    src={item.imageLink}
                    alt="Background Image"
                    layout='fixed'
                    height="234"
                    width="390"
                />
            </div>
            <div className="flex-row justify-center mt-5 font-ma text-#4E4851 text-base">{item.statement}</div>
            <div className="mt-5 text-sm font-manrope-extra-light text-#9B939F ">{item.date}</div>
        </div>
    )
}


function DisplayBlogPost(props){

    const [displayBlogList, setDisplayBlogList] = useState([])

    useEffect(()=>{
        let blogArray = props.blogList.map((item)=>{
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
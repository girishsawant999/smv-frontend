import React from "react";
import Image from "next/image";

const displayBlogList = []

function SlidingBlog(blog){

    return(
        <div className="ml-5 mt-5 flex-col w-10/12">
            <div className="w-full flex justify-center">
                <Image
                    src={blog.rectangleLink}
                    alt="Background Image"
                    layout='fixed'
                    height="234"
                    width="390"
                />
            </div>
            <div className="flex-row justify-center mt-5 font-ma text-#4E4851 text-base">{blog.statement}</div>
            <div className="mt-5 text-sm font-manrope-extra-light text-#9B939F ">{blog.date}</div>
        </div>
    )
}


function DisplayBlogPost(props){
    console.log("hi")
    for(let i = 0; i<=props.blogList.length; i++){
        displayBlogList.push(SlidingBlog(props.blogList[i]))
    }
    return(
      <div>
        {displayBlogList}
      </div>
    )


}

export default DisplayBlogPost
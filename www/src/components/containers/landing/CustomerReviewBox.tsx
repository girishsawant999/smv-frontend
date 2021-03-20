import React, { useEffect, useState } from "react";
import { uuid } from "uuidv4"
import Typography from "../../common/Typography";
import Img from "../../common/Img";

type ICustomerReviewObjectProps = {
    comment: string;
    gender: string;
    country: string;
    name: string;
}

type ICustomerReviewBoxProps = {
    customer_review_list: Array<ICustomerReviewObjectProps>
}


function avatarImage(gender:string){
    if(gender == 'male'){
        return(
            <div className="w-20">
                <picture>
                    <source srcSet='/assets/landing/avatar_male_image/image-removebg-3.png 1x,
                                    /assets/landing/avatar_male_image/image-removebg-3@2x.png 2x,
                                    /assets/landing/avatar_male_image/image-removebg-3@3x.png 3x'/>

                    <img src='/assets/landing/avatar_male_image/image-removebg-3.png' alt="avatar_male_image" width="100%"/>
                </picture>
            </div>
        )
    }
    else {
        return(
            <div className="w-16">
                <picture>
                    <source srcSet='/assets/landing/avatar_female_image/image-removebg-4.png 1x,
                                          /assets/landing/avatar_female_image/image-removebg-4@2x.png 2x,
                                          /assets/landing/avatar_female_image/image-removebg-4@3x.png 3x'/>

                    <img src='/assets/landing/avatar_female_image/image-removebg-4.png' alt="avatar_female_image" width="100%"/>
                </picture>
            </div>
        )
    }
}


function right(item:ICustomerReviewObjectProps){
   return(
       <div key={uuid()} className="flex mt-10">
           <div className="relative flex">
               <div className="bg-white rounded-20px p-5 w-53.5">
                   <Typography type="content11" variant="p">{item.comment}</Typography>
                   <Typography type="content10" variant="p" className="mt-3">{item.name}</Typography>
                   <Typography type="content9" variant="p" >{item.country}</Typography>
               </div>
               <div className="absolute -right-5 bottom-5">
                   <Img
                     src="landing/right_path_chat/path-5@3x.png"
                     alt="right_path_chat"
                     width="20"
                     height="46"
                   />
               </div>
               <div className="absolute -bottom-4 -right-24">
                   <div className="pl-7 mt-14 w-26">
                     {avatarImage(item.gender)}
                   </div>
               </div>
           </div>
       </div>
   )
}


function left(item:ICustomerReviewObjectProps){
    return(
        <div key={uuid()} className="flex justify-end">
            <div className="relative flex mt-10 justify-between">
                <div className="flex flex-col justify-end">
                    <div className="pt-7">
                       {avatarImage(item.gender)}
                    </div>
                </div>
                <div className="flex relative flex ml-3">
                    <div className="absolute bottom-5 -left-5">
                        <Img
                          src="landing/left_path_chat/path-5@3x.png"
                          alt="right_path_chat"
                          width="20"
                          height="46"
                        />
                    </div>
                    <div className="bg-white rounded-20px p-5 w-53.5 justify-end">
                        <Typography type="content11" variant="p" className="">{item.comment}</Typography>
                         <Typography type="content10" variant="p" className="mt-3">{item.name}</Typography>
                        <Typography type="content9" variant="p" className="">{item.country}</Typography>
                    </div>
                </div>
            </div>
        </div>
    )
}



function CustomerReview(props:ICustomerReviewBoxProps){

    const [reviews, setReviews] = useState<JSX.Element[]>([])

    useEffect(()=>{
        let finalOutput = props.customer_review_list.map((item,index)=>{
            if(index % 2 === 0){
                return(right(item))
            }
            else{
               return(left(item))
            }
        })
        setReviews(finalOutput)
    },[])

    return(
        <div>
            {reviews}
        </div>
    )
}


export default CustomerReview
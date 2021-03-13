import React from "react";
import Image from "next/image";


const finalOutput= []


function avatarImage(gender){
    if(gender == 'male'){
        return(
            <Image className=""
                 src={'/assets/landing/image-removebg (3)-2.png'}
                 alt="Background Image"
                 height="164"
                 width="157"
            />
        )
    }
    else {
        return(
            <Image className=""
                 src={'/assets/landing/image-removebg (4)-1.png'}
                 alt="Background Image"
                 height="156"
                 width="129"
            />
        )
    }
}

function right(item, index){
   return(
       <div  key={index} className="flex mt-10">
           <div className="relative bg-white rounded-20px p-5 w-3/5">
               <p className="font-manrope-regular font-bold leading-7 text-#4E4851 text-sm">{item.comment}</p>
               <p className="mt-3 font-manrope-regular text-xs leading-6 font-bold ">{item.name}</p>
               <p className="font-manrope-extra-light text-sm text-#9B939F">{item.country}</p>
               <div className="arrow-right"> </div>
           </div>
           <div className="flex align-baseline">
               <p className="pl-3 mt-14 flex justify-center pt-7">
                 {avatarImage(item.gender)}
               </p>
           </div>
       </div>
   )
}

function left(item,index){
    return(
        <div key={index} className="flex mt-10 justify-end">
            <div className="flex align-baseline">
                <p className="pl-9 mt-14 flex justify-center pt-7">
                  {avatarImage(item.gender)}
                </p>
            </div>
            <div className="relative bg-white rounded-20px p-5 w-3/5">
                <p className="font-manrope-regular font-bold leading-7 text-#4E4851 text-sm">{item.comment}</p>
                <p className="mt-3 font-manrope-regular text-xs leading-6 font-bold ">{item.name}</p>
                <p className="font-manrope-extra-light text-sm text-#9B939F">{item.country}</p>
                <div className="arrow-left"> </div>
            </div>
        </div>
    )
}

function finalOutputArray(arr){
    arr.map((item,index)=>{
        if(index % 2 === 0){
           finalOutput.push(right(item,index))
        }
        else{
           finalOutput.push(left(item,index))
        }
    })
}



function CustomerReview(props){
    finalOutputArray(props.customer_review_list)
    return (
        <div>
            {finalOutput}
        </div>)
}

export default CustomerReview
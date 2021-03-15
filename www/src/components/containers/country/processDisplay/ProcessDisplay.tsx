import React, { useState } from "react";
import Image from "next/image";
import styles from "./processDisplay.module.css"

function getImage(buttonIndex:any){
    if(buttonIndex === 1){
        return(
            <Image className=""
                src={'/assets/landing/Group 7@2x-1.png'}
                alt="Background Image"
                height="206"
                width="330"
            />
        )
    }

    else if(buttonIndex === 3){
        return(
            <div className="flex">
                <div>
                    <Image className=""
                       src={'/assets/landing/slider.2.11/group-2@2x.png'}
                       alt="Background Image"
                       height="200"
                       width="175"
                    />
                </div>
                <div>
                    <Image className=""
                       src={'/assets/landing/slider.2.11/group@2x.png'}
                       alt="Background Image"
                       height="200"
                       width="175"
                    />
                </div>
            </div>
        )
    }

    else{
        return(
            <div className="flex">
                <div>
                    <Image className=""
                       src={'/assets/landing/slider.2.12/bitmap@2x.png'}
                       alt="Background Image"
                       height="200"
                       width="175"
                    />
                </div>
                <div>
                    <Image className=""
                       src={'/assets/landing/slider.2.12/bitmap_2@2x.png'}
                       alt="Background Image"
                       height="200"
                       width="175"
                    />
                </div>
          </div>
        )
    }
}

function getStatement(buttonIndex:any){
    if (buttonIndex == 1){
        return("Add Co-Travellers & Upload Docs")
    }
    if (buttonIndex == 2){
        return("Make a payment & Get reviewed by experts")
    }
    else{
        return("Submit your application & Relax")
    }
}


function ImageList(){

    const [buttonIndex, setButtonIndex] = useState(1)

    function nextButton(){
        let x = buttonIndex + 1;
        if(x === 4){
          x=1
        }
        setButtonIndex(x)
    }

  setTimeout(nextButton,3000)

  return(
      <div>
          <div className={styles.slider+ " " + styles.slider+buttonIndex + " mt-11 flex justify-center"}>
             {getImage(buttonIndex)}
           </div>
          <div className="mt-10 flex text-base text-#4E4851 leading-8 justify-center font-manrope-semibold font-extrabold tracking-wider">
             {getStatement(buttonIndex)}</div>
          <div className="flex justify-center mt-12">
             <div className={buttonIndex===1? "bg-#1A181B ml-4 text-white font-manrope-extra-bold w-16 h-16 rounded-3xl py-5 px-7": "bg-#F5F4F5 ml-4 text-#1A181B font-manrope-extra-bold w-16 h-16 rounded-3xl py-5 px-7"}>1</div>
             <div className={buttonIndex===2? "bg-#1A181B ml-4 text-white font-manrope-extra-bold w-16 h-16 rounded-3xl py-5 px-7": "bg-#F5F4F5 ml-4 text-#1A181B font-manrope-extra-bold w-16 h-16 rounded-3xl py-5 px-7"}>2</div>
             <div className={buttonIndex===3? "bg-#1A181B ml-4 text-white font-manrope-extra-bold w-16 h-16 rounded-3xl py-5 px-7": "bg-#F5F4F5 ml-4 text-#1A181B font-manrope-extra-bold w-16 h-16 rounded-3xl py-5 px-7"}>3</div>
          </div>
     </div>
   )
}

export default ImageList
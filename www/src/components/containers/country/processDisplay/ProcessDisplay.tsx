import React, { useEffect, useState } from 'react';
import Image from "next/image";
import styles from "./processDisplay.module.css"
import { searchParamsToUrlQuery } from 'next/dist/next-server/lib/router/utils/querystring';

function getImage(buttonIndex:any){
    if(buttonIndex === 1){
        return(
            <Image
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
  const [current, setCurrent] = useState(0);
  const [translate, setTranslate] = useState(150);
  const slides = [
    <div className={styles.sliderImage +" flex justify-center"}>
      <Image
        src={'/assets/landing/Group 7@2x-1.png'}
        alt="Background Image"
        height="206"
        width="330"
        layout="fixed"
      />
    </div>,
    <div className={styles.sliderImage + " flex justify-center"}>
      <div>
        <Image className=""
               src={'/assets/landing/slider.2.11/group-2@2x.png'}
               alt="Background Image"
               height="200"
               width="175"
               layout="fixed"
        />
      </div>
      <div>
        <Image className=""
               src={'/assets/landing/slider.2.11/group@2x.png'}
               alt="Background Image"
               height="200"
               width="175"
               layout="fixed"
        />
      </div>
    </div>,
    <div className={styles.sliderImage + " flex justify-center"}>
      <div>
        <Image className=""
               src={'/assets/landing/slider.2.12/bitmap@2x.png'}
               alt="Background Image"
               height="200"
               width="175"
               layout="fixed"
        />
      </div>
      <div>
        <Image className=""
               src={'/assets/landing/slider.2.12/bitmap_2@2x.png'}
               alt="Background Image"
               height="200"
               width="175"
               layout="fixed"
        />
      </div>
    </div>
  ]

  const prevSlide = () => {

  };
    // const [buttonIndex, setButtonIndex] = useState(1)
    //
    // function nextButton(){
    //     let x = buttonIndex + 1;
    //     if(x === 4){
    //       x=1
    //     }
    //     setButtonIndex(x)
    // }

  const nextSlide = () => {
    if(current > 2){
      setCurrent(0);
      return
    }
    setCurrent(current=>current+1)
    console.log(current)
  };

  useEffect(()=>{
    setTimeout(nextSlide,3000)
  },[current])
  return(
      // <div className={styles.slider}>
      //     <div className={ " " + `styles.slider${buttonIndex}`+ " " + " mt-11 flex justify-center transition-all"}>
      //       {console.log(styles.slider+ " " + `styles.slider${buttonIndex}`+ " " + " mt-11 flex justify-center")}
      //        {getImage(buttonIndex)}
      //      </div>
      //     <div className="mt-10 flex text-base text-#4E4851 leading-8 justify-center font-manrope-semibold font-extrabold tracking-wider">
          // {/*   {getStatement(buttonIndex)}*/}
          // {/*</div>*/}
          // {/*<div className="flex justify-center mt-12">*/}
          // {/*   <div className={buttonIndex===1? "bg-#1A181B ml-4 text-white font-manrope-extra-bold w-16 h-16 rounded-3xl py-5 px-7": "bg-#F5F4F5 ml-4 text-#1A181B font-manrope-extra-bold w-16 h-16 rounded-3xl py-5 px-7"}>1</div>*/}
          // {/*   <div className={buttonIndex===2? "bg-#1A181B ml-4 text-white font-manrope-extra-bold w-16 h-16 rounded-3xl py-5 px-7": "bg-#F5F4F5 ml-4 text-#1A181B font-manrope-extra-bold w-16 h-16 rounded-3xl py-5 px-7"}>2</div>*/}
          // {/*   <div className={buttonIndex===3? "bg-#1A181B ml-4 text-white font-manrope-extra-bold w-16 h-16 rounded-3xl py-5 px-7": "bg-#F5F4F5 ml-4 text-#1A181B font-manrope-extra-bold w-16 h-16 rounded-3xl py-5 px-7"}>3</div>*/}
          // {/*</div>*/}
     // </div>


    // <div className={styles.slider  +" flex"}>
    //   {
    //     slides.map((slide, index) => {
    //       return (
    //         <div className={current-index===0 ? styles.slider0 : current-index===1? styles.slider1: current-index ===2? styles.slider2 :styles.sliderout +" "+ styles.slider+"  w-full"} key={index}>
    //           {slide}
    //         </div>
    //       )
    //     })
    //   }
    // </div>
    <div className={styles.slider}>
      <figure className={styles.figure}>
        {/*<img src="/assets/landing/Group 7@2x-1.png" alt={""} className={styles.sliderImage}/>*/}
        {/*<img src="/assets/landing/slider.2.11/group-2@2x.png" alt={""} className={styles.sliderImage}/>*/}
        {/*<img src="/assets/landing/slider.2.11/group@2x.png" alt={""} className={styles.sliderImage}/>*/}
        {/*<img src="/assets/landing/slider.2.12/bitmap@2x.png" alt={""} className={styles.sliderImage}/>*/}
        {/*<img src="/assets/landing/slider.2.12/bitmap_2@2x.png" alt={""} className={styles.sliderImage}/>*/}
        {slides[0]}
        {slides[1]}
        {slides[2]}
      </figure>
    </div>
   )
}

export default ImageList
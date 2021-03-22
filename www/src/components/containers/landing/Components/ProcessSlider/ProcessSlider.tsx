import React from "react";
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import ImageList from "../ProcessDisplay";
import styles from "./processSlider.module.css"

function ProcessSlider(){
  const swiper = new Swiper('.swiper-container', {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    }
  });

  return(
    <div className={styles.swiper_container}>
      <div className="swiper-wrapper">
        <div className="swiper-slide"><ImageList buttonIndex={1}/></div>
        <div className="swiper-slide"><ImageList buttonIndex={2}/></div>
        <div className="swiper-slide"><ImageList buttonIndex={3}/></div>
      </div>
      <div className="swiper-scrollbar"></div>
    </div>

  )

}

export default ProcessSlider
import React from 'react'
import "./slider.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import images from '../../../assets/images';
import { t } from 'i18next';
const Slider = () => {

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };
  return (
    <>
      <section className='sliderPic'>
        <div className='container'>
          <h2 className="slider_title" data-aos="fade-up">{t("controlSecond.sliderTitle")}</h2>
        <div className="slider_container" data-aos="fade-up">
            <div className='slide_image'>
              <img src={images.slideOne} alt="deluxe_image" />
            </div>
            <div className='slide_image'>
              <img src={images.slideTwo} alt="deluxe_image" />
            </div>
            <div className='slide_image'>
              <img src={images.slideThree} alt="deluxe_image" />
            </div>
            <div className='slide_image'>
              <img src={images.slideFour} alt="deluxe_image" />
            </div>
         </div>

         <div className="sliderBtn" data-aos="fade-up"> 
            <a href="#contact"><button className='slider_btn'>{t("Home.buttonsText")}</button></a>
         </div>
        </div>
       </section>
    </>
  )
}

export default Slider

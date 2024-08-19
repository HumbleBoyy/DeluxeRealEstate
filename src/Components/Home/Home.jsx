import React, { useEffect } from 'react'
import Navbar from '../Navbar/Navbar'
import "./home.css"
import About from '../About/About'
import { useTranslation } from 'react-i18next'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Control from '../Control/Control'
import Contact from '../Contact/Contact'
import Blog from '../Blog/Blog'
import Footer from '../Footer/Footer'

const Home = () => {
    const {t, i18n} = useTranslation();
    useEffect(() => {
        AOS.init({
            duration: 2200, // Animation duration in ms
            offset: 100,    // Offset (in px) from the original trigger point
            easing: 'ease', 
            once: false,// Easing function   // Delay before animation starts
          });
      }, []);
  return (
    <>
      <Navbar/>
      <section className='HomePage' id='home'>
        <div className="container">
         <div className="homePage_Items">
         <div className='small_device_buttons right_side_item_small_device' >
               <button className='hompage_slide_btn'><IoIosArrowBack className='slide_arrow_icon'/></button>
               <button className='hompage_slide_btn'><IoIosArrowForward className='slide_arrow_icon'/></button>
             </div>
            <div className='left_side_item'>
               <h1 className='homePage_title'>{t("Home.homeText")}</h1>
               <p className='homePage_paragraph'>{t("Home.homeTextParagraph")}</p>

            <div className="buttons">
            <a href="#contact"><button className='homePage_btn'>{t("Home.buttonsText")}</button></a>
              <div className='right_side_item  right_side_item_large_screen' >
               <button className='hompage_slide_btn'><IoIosArrowBack className='slide_arrow_icon'/></button>
               <button className='hompage_slide_btn'><IoIosArrowForward className='slide_arrow_icon'/></button>
             </div>
            </div>
            </div>
         </div>
         </div>
      </section>

      {/* About Component */}
      <About/>

      {/* Control Component*/}
      <Control/>

      {/* Contact Component */}
      <Contact/>

      {/* Blog Component */}
      <Blog/>

      {/* Footer Component */}
      <Footer/>
    </>
  )
}

export default Home

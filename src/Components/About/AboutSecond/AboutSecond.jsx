import React from 'react'
import "./aboutSecond.css"
import { t } from 'i18next'
import images from '../../../assets/images'
const AboutSecond = () => {
  return (
    <>
      <section className='aboutSecond'>
         <div className="container">
           <div className="about_second_items_cover">
            <div className="paragraph_text_items" data-aos="fade-right">
                <h2 className='aboutSecond_title'>{t("aboutSecond.aboutText")}</h2>
                <p className='paragraph_text'>{t("aboutSecond.paragraph_one")}</p>
                <p className='paragraph_text'>{t("aboutSecond.paragraph_two")}</p>
                <p className='paragraph_text'>{t("aboutSecond.paragraph_three")}</p>
                <p className='paragraph_text'>{t("aboutSecond.paragraph_four")}</p>
                <div className="small_screen_devices" data-aos="fade-left">
                 <img src={images.aboutSecond} alt="Deluxe_building_image" className='small_scren_image'/>
                 <img src={images.aboutSecond_Small_device} alt="Deluxe_building_image" className='small_scren_image'/>
             </div>
                <a href="#contact"><button className='homePage_btn'>{t("Home.buttonsText")}</button></a>
            </div>

             <div className="about_second_image" data-aos="fade-left">
                 <img src={images.aboutSecond_image} alt="Deluxe_building_image" className='large_screen_image'/>
             </div>
            </div>
         </div>
      </section>
    </>
  )
}

export default AboutSecond

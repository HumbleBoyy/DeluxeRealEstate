import React from 'react'
import "./control.css"
import { t } from 'i18next'
import images from '../../../assets/images'
const ControlSecond = () => {
  return (
    <>
      <section className='controlSecond'>
        <div className="container">
            <h2 className='controlSecond_title' data-aos="fade-up" data-aos-anchor-placement="top-bottom">{t("controlSecond.title")}</h2>

            <div className="cards_container" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                <div className="card card_left">
                    <h2 className='card_title'>{t("controlSecond.firstCard")}</h2>
                    <p className='card_paragraph'>{t("controlSecond.firstCard_paragraph")}</p>
                </div>
                <div className="card card_image card_right"> 
                    <img src={images.Black_buliding}  alt="Delux_building_image" />  
                </div>
                <div className="card">
                <h2 className='card_title'>{t("controlSecond.secondCard")}</h2>
                <p className='card_paragraph'>{t("controlSecond.secondCard_paragraph")}</p>
                </div>
                <div className="card card_image"> 
                    <img src={images.control_imageSecond}  alt="Delux_building_image" />  
                </div>
                <div className="card">
                <h2 className='card_title'>{t("controlSecond.thirdCard")}</h2>
                <p className='card_paragraph'>{t("controlSecond.thirdCard_paragraph")}</p>
                </div>
                <div className="card card_image"> 
                    <img src={images.control_imageFourth}  alt="Delux_building_image" />  
                </div>

                <div className="card">
                    <h2 className='card_title'>{t("controlSecond.fourthCard")}</h2>
                    <p className='card_paragraph'>{t("controlSecond.fourthCard_paragraph")}</p>
                </div>
                <div className="card card_image"> 
                    <img src={images.control_imageThird} alt="Delux_building_image" />  
                </div>
                <div className="card">
                <h2 className='card_title'>{t("controlSecond.secondCard")}</h2>
                <p className='card_paragraph'>{t("controlSecond.secondCard_paragraph")}</p>
                </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default ControlSecond

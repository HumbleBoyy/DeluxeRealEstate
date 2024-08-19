import React from 'react'
import "./control.css"
import { t } from 'i18next'
import { FaCheck } from 'react-icons/fa'
import ControlSecond from './ControlSecond/Control'
import Slider from './Slider/Slider'
import Mortgage from './Mortgage/Mortgage'
const Control = () => {
  return (
    <>
      <section className='control' id='control'>
        <div className="container">
            <div className="Control_items">
                <h2 className='control_sec_title' data-aos="fade-up" data-aos-anchor-placement="top-bottom">{t('control.control_text')}</h2>

                <div className="control_tables" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                    <div className="table_right_side">
                    <div className="control_table">
                        <div className="control_check_icon_wrapper">
                           <FaCheck className='control_check_icon'/>
                        </div>
                        <p className='control_paragraph'>{t("control.control_paragraphOne")}</p>
                   </div>
                   <div className="control_table">
                        <div className="control_check_icon_wrapper">
                           <FaCheck className='control_check_icon'/>
                        </div>
                        <p className='control_paragraph'>{t("control.control_paragraphTwo")}</p>
                   </div>
                   <div className="control_table">
                        <div className="control_check_icon_wrapper">
                           <FaCheck className='control_check_icon'/>
                        </div>
                        <p className='control_paragraph'>{t("control.control_paragraphThree")}</p>
                   </div>
                   <div className="control_table">
                        <div className="control_check_icon_wrapper">
                           <FaCheck className='control_check_icon'/>
                        </div>
                        <p className='control_paragraph'>{t("control.control_paragraphFour")}</p>
                   </div>
                   <div className="control_table">
                        <div className="control_check_icon_wrapper">
                           <FaCheck className='control_check_icon'/>
                        </div>
                        <p className='control_paragraph'>{t("control.control_paragraphFive")}</p>
                   </div>
                    </div>

                    <div className="table_left_side">
                    <div className="control_table control_table_left_side">
                        <div className="control_check_icon_wrapper">
                           <FaCheck className='control_check_icon'/>
                        </div>
                        <p className='control_paragraph'>{t("control.control_paragraphSix")}</p>
                   </div>
                   <div className="control_table control_table_left_side">
                        <div className="control_check_icon_wrapper">
                           <FaCheck className='control_check_icon'/>
                        </div>
                        <p className='control_paragraph'>{t("control.control_paragraphSeven")}</p>
                   </div>
                   <div className="control_table control_table_left_side">
                        <div className="control_check_icon_wrapper">
                           <FaCheck className='control_check_icon'/>
                        </div>
                        <p className='control_paragraph'>{t("control.control_paragraphEight")}</p>
                   </div>
                   <div className="control_table control_table_left_side">
                   <div className="control_check_icon_wrapper">
                           <FaCheck className='control_check_icon'/>
                        </div>
                        <p className='control_paragraph'>{t("control.control_paragraphNine")}</p>
                   </div>
                   <div className="control_table control_table_left_side">
                   </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      <ControlSecond/>

      <Slider/>
      <Mortgage/>
    </>
  )
}

export default Control

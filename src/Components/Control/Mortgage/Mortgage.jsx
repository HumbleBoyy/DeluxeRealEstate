import React from 'react'
import "./mortgage.css"
import { t } from 'i18next'
import { Center, Divider } from '@chakra-ui/react'
const Mortgage = () => {
  return (
    <>
      <section className='mortgage_section'>
         <div className="container">
            <h2 className='mortgage_title' data-aos="fade-up">{t("mortgage.title")}</h2>

            <div className="mortgage_items" data-aos="fade-up">
                <div className="input_form">
                    <form action="#" className='form_itself'>
                        <div className='input_and_label'>
                          <label htmlFor="#" className='input_label'>{t("mortgage.inputLabelOne")}</label>
                          <input type="text" placeholder={t("mortgage.inputOne")} required className='calculate_input'/>
                          <label htmlFor="#" className='input_label'>{t("mortgage.inputLabelTwo")}</label>
                          <input type="text" placeholder={t("mortgage.inputTwo")} required className='calculate_input'/>
                        </div>
                        <div className='input_and_label'>
                          <label htmlFor="#" className='input_label'>{t("mortgage.inputLabelThree")}</label>
                          <input type="text" placeholder={t("mortgage.inputThree")} required className='calculate_input'/>
                          <label htmlFor="#" className='input_label'>{t("mortgage.inputLabelFour")}</label>
                          <input type="text" placeholder={t("mortgage.inputFour")} required className='calculate_input'/>
                        </div>
                        <div className='calculate_btn'>
                        <button className='calculatebtn' type='button'>{t("mortgage.calculate_btn")}</button>
                        </div>
                    </form>
                    </div>
                    <Center className='divider'>
                        <Divider orientation='vertical' />
                    </Center>
                    <div className='extra_data_money'>
                      <div className="labels_and_h3">
                         <label htmlFor="#" className='money_label'>{t("mortgage.monthly_payment")}</label>
                         <h3 className='money_h3'>4 410 у.е.</h3>
                      </div>
                      <div className="labels_and_h3">
                         <label htmlFor="#" className='money_label'>{t("mortgage.loan_amount")}</label>
                         <h3 className='money_h3'>200 000 у.е.</h3>
                      </div>
                      <div className="labels_and_h3">
                         <label htmlFor="#" className='money_label'>{t("mortgage.interset_rate")}</label>
                         <h3 className='money_h3'>24%</h3>
                      </div>
                      <div className="labels_and_h3">
                         <label htmlFor="#" className='money_label'>{t("mortgage.last_payment")}</label>
                         <h3 className='money_h3'>28 июля 2034 г</h3>
                      </div>
                    </div>
            </div>
         </div>
      </section>
    </>
  )
}

export default Mortgage

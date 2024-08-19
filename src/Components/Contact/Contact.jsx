import React from 'react'
import "./contact.css"
import { t } from 'i18next'
import images from '../../assets/images'
const Contact = () => {
  return (
    <>
      <section className='Contact' id='contact'>
        <div className="container contact_Form_wrapper">
            <div className="contact_items" data-aos="fade-down">
                <div className="conntact_item_left">
                  <div >
                    <h2 className='contact_title'>{t("contact.title")}</h2>
                  </div>
                    <form action="#" className='contact_form'>
                       <div className='contact_input_wraper'>
                       <label htmlFor="#" className='contact_label'>{t("contact.fullName")}<span className='redStar'>*</span></label>
                       <input type="text" className='contact_input'/>
                       </div>
                       <div className='contact_input_wraper'>
                       <label htmlFor="#" className='contact_label'>{t("contact.number")}<span className='redStar'>*</span></label>
                       <input type="text" className='contact_input'/>
                       </div>
                       <div className='contact_input_wraper'>
                       <label htmlFor="#" className='contact_label'>{t("contact.Email")}<span className='redStar'>*</span></label>
                       <input type="text" className='contact_input'/>
                       </div>
                       <div className='contact_input_wraper'>
                       <label htmlFor="#" className='contact_label'>{t("contact.question")}<span className='redStar'>*</span></label>
                       <input type="text" className='contact_input'/>
                       </div>
                       <div>
                        <button className='contact_btn' type='button'>{t("contact.send")}</button>
                       </div>
                    </form>
                </div>
                <div className="contact_item_right">
                  <img src={images.contactImage} alt="Deluxe_image" className='contact_sec_image'/>
                  <img src={images.contact_image_second} alt="Deluxe_image" className='contact_sec_image_second'/>
                </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default Contact

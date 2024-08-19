import React from 'react'
import "./footer.css"
import NavbarLogo from '../../assets/Logo/Logo'
import { IoLogoInstagram } from 'react-icons/io'
import { PiTelegramLogo } from 'react-icons/pi'
import { FaWhatsapp } from 'react-icons/fa'
import { CiFacebook } from 'react-icons/ci'
import { Center, Divider } from '@chakra-ui/react'
import { t } from 'i18next'
import images from '../../assets/images'
const Footer = () => {
  return (
    <>
      <section className='footer_section'>
        <div className="container">
            <div className="footer_items" data-aos="flip-up">
                <div className="footer_item_top">
                    <NavbarLogo/>
                    <div className="social_media_icons">
                      <IoLogoInstagram className='footer_icons'/>
                      <PiTelegramLogo className='footer_icons'/>
                      <FaWhatsapp className='footer_icons'/>
                      <CiFacebook className='footer_icons'/>
                    </div>
                </div>
                <Center height='50px'>
                    <Divider orientation='horizontal' />
                </Center>
                <div className="footer_item_center">
                    <div className="footer_links">
                        <h3 className='footer_link_title'>{t("NavbarMenu.services")}</h3>
                        <a href="#contact" className='footer_link'>{t("NavbarMenu.buy")}</a>
                        <a href="#contact" className='footer_link'>{t("NavbarMenu.rent")}</a>
                        <a href="#contact" className='footer_link'>{t("NavbarMenu.sell")}</a>
                        <a href="#contact" className='footer_link'>{t("footer.judge")}</a>
                    </div>
                    <div className="footer_links">
                        <h3 className='footer_link_title'>{t("footer.real_estate")}</h3>
                        <a href="#contact" className='footer_link'>{t("footer.apartment")}</a>
                        <a href="#contact" className='footer_link'>{t("footer.building")}</a>
                        <a href="#contact" className='footer_link'>{t("footer.houses")}</a>
                        <a href="#contact" className='footer_link'>{t("footer.comercial")}</a>
                    </div>
                    <div className="footer_links">
                        <h3 className='footer_link_title'>{t("footer.company")}</h3>
                        <a href="#contact" className='footer_link'>{t("NavbarMenu.about")}</a>
                        <a href="#contact" className='footer_link'>{t("NavbarMenu.blog")}</a>
                        <a href="#contact" className='footer_link'>{t("NavbarMenu.contact")}</a>
                        <a href="#contact" className='footer_link'>{t("footer.call")}</a>
                    </div>
                    <div className="footer_links">
                        <h3 className='footer_link_title'>{t("footer.other")}</h3>
                        <a href="#contact" className='footer_link'>{t("footer.mortgageCalculator")}</a>
                        <a href="#contact" className='footer_link'>{t("footer.famous_dubai")}</a>
                    </div>
                    {/* <div className="footer_links">
                    </div> */}
                </div>
                <Center height='50px'>
                    <Divider orientation='horizontal' />
                </Center>
                <div className="footer_item_left">
                    <p className='foooter_paragraph'>{t("footer.formal_word")}</p>
                    <a href="https://result-me.uz/ru"><img src={images.resultLogo} className='footer_logo' alt="Result_agency_logo" /></a>
                </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default Footer

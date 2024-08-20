import React, { useState } from 'react'
import "./about.css"
import { t } from 'i18next'
import images from '../../assets/images'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import AboutSecond from './AboutSecond/AboutSecond'
const About = () => {
  const [activeLink, setActiveLink] = useState('');
  return (
    <>
       <section className='aboutPage' id='about'>
        <div className="container">
          <div className="about_section_items">
             <div className="about_section_text_items">
             <div className="company_name_text" data-aos="flip-down">
                  <h2 className='about_page_left_item_title'>{t("aboutCompany.aboutText")} <br /> <span className='deluxe_text'>RMC DE LUXE</span></h2>
              </div>
              <div className="parapghraph_links" data-aos="flip-down">
                    <Tabs>
                      <TabList>
                        <Tab color={"#E1AF93"}><a href="#noinfo" className='tabs_link'>{t("NavbarMenu.rent")}</a></Tab>
                        <Tab color={"#E1AF93"}><a href="#noinfo" className='tabs_link'>{t("aboutCompany.purchase_Sale")}</a></Tab>
                        <Tab color={"#E1AF93"}><a href="#noinfo" className='tabs_link'>{t("aboutCompany.control")}</a></Tab>
                      </TabList>

                      <TabPanels>
                        <TabPanel>
                          <p className='about_page_parapraph'>{t("aboutCompany.aboutParagraph")}</p>
                          <p className='about_page_parapraph'>{t("aboutCompany.aboutParagraphSecond")}</p>
                        </TabPanel>
                        <TabPanel>
                          <p className='about_page_parapraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta laborum pariatur ipsam.</p>
                          <p className='about_page_parapraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta laborum pariatur ipsam. Sint possimus, ratione labore dolore neque dolorem fuga laudantium corrupti est nemo beatae atque ex adipisci pariatur odio.</p>
                        </TabPanel>
                        <TabPanel>
                          <p className='about_page_parapraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta laborum pariatur ipsam. Sint possimus, ratione labore dolore neque dolorem fuga laudantium corrupti est nemo beatae atque ex adipisci pariatur odio.</p>
                          <p className='about_page_parapraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta laborum pariatur ipsam.</p>
                        </TabPanel>
                      </TabPanels>
                    </Tabs>
               </div>
             </div>
             <div className='about_image' data-aos="flip-down">
                <img src={images.aboutImage} alt="Deluxe_About_Image" />
              </div>
          </div>
        </div>
       </section>
       <AboutSecond/>
    </>
  )
}

export default About

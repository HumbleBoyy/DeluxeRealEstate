import React from 'react'
import "./blog.css"
import { t } from 'i18next'
import images from '../../assets/images'
import { FaArrowRight, FaRegEye } from 'react-icons/fa'
const Blog = () => {
  return (
    <>
      <section className='blog' id='blog'>
         <div className="container">
            <h2 className='blog_title'>{t("blog.title")}</h2>
            <div className="blog_items" data-aos="fade-up">
               <div className="blog_item">
                  <div className="image_wrapper">
                     <img src={images.blogImage} alt="Deluxe_blog_image" className='blog_image'/>
                     <div className="image_text">
                       <p className='blog_paragraph'>31.07.2024</p>
                       <div className='blog_eye'>
                       <FaRegEye className='blog_paragraph'/>
                        <p className='blog_paragraph'>899</p>
                       </div>
                     </div>
                     <div className="blog_articleDescription">
                         <h3 className='article_name'>{t("blog.cardOne")}</h3>
                         <div className="blog_article_link_items">
                          <a href="#contact" className='blog_article_link'>{t("Home.buttonsText")}</a>
                          <FaArrowRight className='blog_article_link' />
                         </div>
                     </div>
                  </div>
               </div>
               <div className="blog_item">
                  <div className="image_wrapper">
                     <img src={images.blogImageSecond} alt="Deluxe_blog_image" className='blog_image'/>
                     <div className="image_text">
                       <p className='blog_paragraph'>31.07.2024</p>
                       <div className='blog_eye'>
                       <FaRegEye className='blog_paragraph'/>
                        <p className='blog_paragraph'>899</p>
                       </div>
                     </div>
                     <div className="blog_articleDescription">
                         <h3 className='article_name'>{t("blog.cardTwo")}</h3>
                         <div className="blog_article_link_items">
                          <a href="#contact" className='blog_article_link'>{t("Home.buttonsText")}</a>
                          <FaArrowRight className='blog_article_link' />
                         </div>
                     </div>
                  </div>
               </div>
               <div className="blog_item">
                  <div className="image_wrapper">
                     <img src={images.blogImageThird} alt="Deluxe_blog_image" className='blog_image'/>
                     <div className="image_text">
                       <p className='blog_paragraph'>31.07.2024</p>
                       <div className='blog_eye'>
                       <FaRegEye className='blog_paragraph'/>
                        <p className='blog_paragraph'>899</p>
                       </div>
                     </div>
                     <div className="blog_articleDescription">
                         <h3 className='article_name'>{t("blog.cardThree")}</h3>
                         <div className="blog_article_link_items">
                          <a href="#contact" className='blog_article_link'>{t("Home.buttonsText")}</a>
                          <FaArrowRight className='blog_article_link' />
                         </div>
                     </div>
                  </div>
               </div>
               <div className="blog_item">
                  <div className="image_wrapper">
                     <img src={images.blogImageFourth} alt="Deluxe_blog_image" className='blog_image'/>
                     <div className="image_text">
                       <p className='blog_paragraph'>31.07.2024</p>
                       <div className='blog_eye'>
                       <FaRegEye className='blog_paragraph'/>
                        <p className='blog_paragraph'>899</p>
                       </div>
                     </div>
                     <div className="blog_articleDescription">
                         <h3 className='article_name'>{t("blog.cardFour")}</h3>
                         <div className="blog_article_link_items">
                          <a href="#contact" className='blog_article_link'>{t("Home.buttonsText")}</a>
                          <FaArrowRight className='blog_article_link' />
                         </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="blog_btn_wrapper">
              <a href="#contact"><button className='blog_button'>{t("blog.blog_btn")}</button></a>
            </div>
         </div>
      </section>
    </>
  )
}

export default Blog

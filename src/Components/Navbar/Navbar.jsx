import React, { useState } from 'react'
import "./navbar.css"
import NavbarLogo from '../../assets/Logo/Logo'
import { useTranslation } from 'react-i18next'
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { Button, Input, Menu, MenuButton, MenuItem, MenuItemOption, MenuList, MenuOptionGroup, Portal, useDisclosure } from '@chakra-ui/react'
import { IoMdArrowDropdown, IoMdMenu } from 'react-icons/io'
import { AiOutlineClose } from "react-icons/ai";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'

const Navbar = () => {
    const {t, i18n} = useTranslation();
    const [toggle, setToggle] = useState(false)

    const currentlanguage = localStorage.getItem("i18nextLng");
    const [activeLink, setActiveLink] = useState('');


    const handleChange = (event) => {
        const selectedLanguage = event.target.value;
        i18n.changeLanguage(selectedLanguage);
   }
   const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
    <section className='navbar'>
        <div className='container'>
          <nav className='navbar_nav'>
             <div className='navbarLogo'>
                <a href="#home"><NavbarLogo alt="RMC DE LUXE"/></a>
             </div>

             <ul className='navbarMenu_wrapper navbarMenu_wrapper_main'>
                <li><a href='#' className={"navbar_menu_links"}>
                <Menu>
                      <div className='dropdown_icons'>
                            <MenuButton  style={activeLink === 'services' ? {color:'#E1AF93'} : null}
                            onClick={()=> setActiveLink('services')}
                        >{t("NavbarMenu.services")}</MenuButton>
                         <IoMdArrowDropdown />
                      </div>
                      <MenuList>
                        <MenuItem  style={activeLink === 'buy' ? {color:'#E1AF93'} : null} onClick={()=> setActiveLink('buy')} ><a href="#control" onClick={()=> setToggle(false)}>{t("NavbarMenu.buy")}</a></MenuItem>
                        <MenuItem  style={activeLink === 'rent' ? {color:'#E1AF93'} : null} onClick={()=> setActiveLink('rent')} ><a href="#control" onClick={()=> setToggle(false)}>{t("NavbarMenu.rent")}</a></MenuItem>
                        <MenuItem style={activeLink === 'sell' ? {color:'#E1AF93'} : null} onClick={()=> setActiveLink('sell')}><a href='#control' onClick={()=> setToggle(false)}>{t("NavbarMenu.sell")}</a></MenuItem>
                        <MenuItem style={activeLink === 'propertyValue' ? {color:'#E1AF93'} : null} onClick={()=> setActiveLink('propertyValue')}><a href='#control'onClick={()=> setToggle(false)}>{t("NavbarMenu.propertyValue")}</a></MenuItem>
                        </MenuList>
                    </Menu>
                    </a>
                    </li>
                <li><a href="#about" className={"navbar_menu_links"} style={activeLink === 'about' ? {color:'#E1AF93'} : null} onClick={()=> setActiveLink('about')}>{t("NavbarMenu.about")}</a></li>
                <li><a href='#blog' className={"navbar_menu_links"} style={activeLink === 'blog' ? {color:'#E1AF93'} : null} onClick={()=> setActiveLink('blog')}>{t("NavbarMenu.blog")}</a></li>
                <li><a href='#contact' className={"navbar_menu_links"}style={activeLink === 'contact' ? {color:'#E1AF93'} : null} onClick={()=> setActiveLink('contact')}>{t("NavbarMenu.contact")}</a></li>
             </ul>
             <div className='Navbar_Icons Navbar_Icons_large_screen'>
               <div className="search_icon circles_icon" onClick={onOpen}><CiSearch className='navbar_icons'/></div>
               <div className="heart_icon  circles_icon"><CiHeart className='navbar_icons'/></div>
               <div className="phone_icons"><a href="#contact"><FaPhoneAlt className='phone_color navbar_icons'/></a></div>
            

             <div className="language_drop_down language_drop_down_main_screen">
             <Menu>
              <div className='dropdown_icons'>
              <MenuButton>
                {currentlanguage.toUpperCase()}
             </MenuButton>
             <IoMdArrowDropdown />
              </div>
                <MenuList defaultValue={currentlanguage} onChange={currentlanguage} className='w-10'>
                    <MenuItem minH='40px' onClick={handleChange} value='ru'>
                    RU
                    </MenuItem>
                    <MenuItem minH='40px'  onClick={handleChange} value='en'>
                    EN
                    </MenuItem>
                    <MenuItem minH='40px' onClick={handleChange} value='uz'>
                    UZ
                    </MenuItem>
                </MenuList>
                </Menu>
             </div>
             </div>


             <div className="nav_navbar_smallScreen_devices">
              
              <div className="open_small_device_menu">
              <div className="search_icon circles_icon" onClick={onOpen}><CiSearch className='navbar_icons'/></div>
              <div className="heart_icon  circles_icon"><CiHeart className='navbar_icons'/></div>
              <div className="circle_icon">
                <IoMdMenu
                onClick={()=> setToggle(true)}
                cursor={"pointer"}
                color='#fff'
                fontSize={27}
                />
            </div>
          </div>


            {toggle && (
              <>
              <div className="small_device_menu_links">
              <div className="close_nav_menu">
              <div className="language_drop_down ">
             <Menu>
              <div className='dropdown_icons'>
              <MenuButton>
                {currentlanguage.toUpperCase()}
             </MenuButton>
             <IoMdArrowDropdown />
              </div>
                <MenuList defaultValue={currentlanguage} onChange={currentlanguage} className='w-10'>
                    <MenuItem minH='40px' onClick={handleChange} value='ru'>
                    RU
                    </MenuItem>
                    <MenuItem minH='40px'  onClick={handleChange} value='en'>
                    EN
                    </MenuItem>
                    <MenuItem minH='40px' onClick={handleChange} value='uz'>
                    UZ
                    </MenuItem>
                </MenuList>
                </Menu>
               </div>

                <div className="circle_icon">
                <AiOutlineClose
                onClick={()=> setToggle(false)}
                cursor={"pointer"}
                color='#fff'
                fontSize={27}
               />
                </div>
              </div>
              <hr />
              <ul className='navbarMenu_wrapper_small_device'>
                <li><a href='#' className={"navbar_menu_links"}>
                <Menu>
                      <div className='dropdown_icons'>
                            <MenuButton  style={activeLink === 'services' ? {color:'#E1AF93'} : null}
                            onClick={()=> setActiveLink('services')}
                        >{t("NavbarMenu.services")}</MenuButton>
                         <IoMdArrowDropdown />
                      </div>
                        <MenuList>
                        <MenuItem  style={activeLink === 'buy' ? {color:'#E1AF93'} : null} onClick={()=> setActiveLink('buy')} ><a href="#control">{t("NavbarMenu.buy")}</a></MenuItem>
                        <MenuItem  style={activeLink === 'rent' ? {color:'#E1AF93'} : null} onClick={()=> setActiveLink('rent')} ><a href="#control">{t("NavbarMenu.rent")}</a></MenuItem>
                        <MenuItem style={activeLink === 'sell' ? {color:'#E1AF93'} : null} onClick={()=> setActiveLink('sell')}><a href='#control'>{t("NavbarMenu.sell")}</a></MenuItem>
                        <MenuItem style={activeLink === 'propertyValue' ? {color:'#E1AF93'} : null} onClick={()=> setActiveLink('propertyValue')}><a href='#control'>{t("NavbarMenu.propertyValue")}</a></MenuItem>
                        </MenuList>
                    </Menu>
                    </a>
                    </li>
                <li  onClick={()=> setToggle(false)}><a href="#about" className={"navbar_menu_links"} style={activeLink === 'about' ? {color:'#E1AF93'} : null} onClick={()=> setActiveLink('about')}>{t("NavbarMenu.about")}</a></li>
                <li  onClick={()=> setToggle(false)}><a href='#blog' className={"navbar_menu_links"} style={activeLink === 'blog' ? {color:'#E1AF93'} : null} onClick={()=> setActiveLink('blog')}>{t("NavbarMenu.blog")}</a></li>
                <li  onClick={()=> setToggle(false)}><a href='#contact' className={"navbar_menu_links"}style={activeLink === 'contact' ? {color:'#E1AF93'} : null} onClick={()=> setActiveLink('contact')}>{t("NavbarMenu.contact")}</a></li>
             </ul>
            </div>
              </>
            )}
            </div>
          </nav>
        </div>
    </section>
    <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Search....</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input type='text' placeholder='Search....'/>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme='red' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Search
            </Button>
          </ModalFooter>
        </ModalContent>
    </Modal>
    </>
  )
  
}

export default Navbar

import React, {useState, useEffect} from "react";
import NavBar from "../NavBar/NavBar";
import ContactForm from "../ContactPage/ContactForm";
import { motion } from "framer-motion";
import ScrollArrow from "../NavBar/ScrollArrow";
import img01 from './image/07/01.jpg';
import img02 from './image/07/02.jpg';
import img03 from './image/07/03.jpg';
import img04 from './image/07/04.jpg';
import img05 from './image/07/05.jpg';
import img06 from './image/07/06.jpg';
import img07 from './image/07/07.jpg';
import img08 from './image/07/08.jpg';
import img09 from './image/07/09.jpg';
import img10 from './image/07/10.jpg';
import img11 from './image/07/11.jpg';

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import { Link } from "react-router-dom";
import NavSideBarGallery from "../NavBar/NavSideBarGallery";



const GallerySubPage07 = () => {

    const [isFooterVisible, setIsFooterVisible] = useState(false);

    useEffect(() => {
        const footerElement = document.getElementById("GS07footer");
        const observer = new IntersectionObserver(
          ([entry]) => {
            setIsFooterVisible(entry.isIntersecting);
          },
          { threshold: 0.3 }
        );
        observer.observe(footerElement);
        return () => {
          observer.disconnect();
        };
      }, []);


    return (
                
    <motion.div className="bg-dark-900 w-full mt-0 text-light relative top-0 left-0 z-4" 
        initial = {{opacity: 0}} animate = {{opacity:1}} transition={{ease: "easeInOut", duration:1, delay:0.1}}>
        <div className={`${isFooterVisible ? "bg-light text-dark-900" : "bg-dark-900 text-light"} min-h-screen transition-colors duration-500`}>
        <nav className="bg-inherit h-28 w-full z-10">
            <NavBar />
        </nav>
        <div className="md:ml-16 md:pl-28 md:mr-16"> 
            <h2 className="chapter m-20 text-2xl md:text-3xl">TREEO ART #7</h2>
                <div className="">
                  <div className="md:grid md:gap-12 md:grid-cols-3">
                    <img src={img01} alt="biurko w stylu loft" className="md:col-span-2 md:row-span-4" />
                    <img src={img02} alt="biurko w stylu loft i lamele" className="p-12 pb-0 md:p-0 md:row-span-5 md:col-start-3"/>
                  
                    <img src={img03} alt="kwietnik spawany z drewnianymi półkami" className="p-12 md:p-0 md:col-start-3 md:row-start-6 md:row-span-3"/> 
                    <div className="grid grid-cols-2 gap-4 pb-12 md:col-span-2 md:row-start-5 md:col-start-1 md:row-span-5">
                        <img src={img04} alt="kwietnik spawany z drewnianymi półkami" className=""/>
                        <img src={img05} alt="kwietnik spawany z drewnianymi półkami" className="" />
                    </div>
                    </div>
                    <div className="md:grid md:grid-cols-3 md:gap-12 md:mb-12">
                    <img src={img06} alt="stolik w stylu loft" className="md:col-span-2" />
                    <img src={img07} alt="stolik w stylu loft" className="p-12 md:p-0" />
                    </div>
                    <div className="md:grid md:gap-12 md:grid-cols-6">
                      <img src={img08} alt="wiszące blaty drewniane w łazience" className="md:col-span-2" />
                      <div className="grid grid-cols-2 gap-4 pt-12 md:p-0 md:col-span-4 md:row-span-2">
                        <img src={img09} alt="wiszące blaty drewniane w łazience" className="md:pr-6" />
                        <img src={img11} alt="wiszące blaty drewniane w łazience" className="md:pl-2" />
                      </div>
                      <img src={img10} alt="wiszące blaty drewniane w łazience" className="p-12 md:p-0 md:col-span-2 md:row-start-2" />
                    </div>
                    
                    

                    <div className={`${isFooterVisible ? "bg-light text-light" : "fixed bottom-0 left-0 w-full h-12 navGradient"} `}>
                      <div className="flex justify-between items-center h-full">
                        <Link to="/tworczosc/06" className="text-light focus:outline-none cursor-pointer">
                          <IoIosArrowBack size={28} /> 
                        </Link>
                        <IoIosArrowForward size={28} className="text-light opacity-20 focus:outline-none hover:text-gray-300 "/>
                      </div>
                    </div>

            </div>
        </div>

        <NavSideBarGallery/>
        <ScrollArrow />
        <footer id="GS07footer" className=''>
                <ContactForm />
        </footer>
        </div>
    </motion.div>
        
    )
}

export default GallerySubPage07;

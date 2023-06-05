import React, {useState, useEffect} from "react";
import NavBar from "../NavBar/NavBar";
import ContactForm from "../ContactPage/ContactForm";
import { motion } from "framer-motion";
import ScrollArrow from "../NavBar/ScrollArrow";
import img01 from './image/05/01.jpg';
import img02 from './image/05/02.jpg';
import img03 from './image/05/03.jpg';
import img04 from './image/05/04.jpg';
import img05 from './image/05/05.jpg';
import img06 from './image/05/06.jpg';

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import { Link } from "react-router-dom";
import NavSideBarGallery from "../NavBar/NavSideBarGallery";



const GallerySubPage05 = () => {

    const [isFooterVisible, setIsFooterVisible] = useState(false);

    useEffect(() => {
        const footerElement = document.getElementById("GS05footer");
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
            <h2 className="chapter m-20 text-2xl md:text-3xl">TREEO ART #5</h2>
                <div className="">
                <div className="md:grid md:grid-cols-2 md:gap-12 md:mb-12">
                    <img src={img01} alt="szafa na wymiar, Wiedeń" className="" />
                    <img src={img02} alt="drewniany regał" className="p-12 pb-0 md:p-0"/>
                </div>
                <div className="md:grid md:grid-cols-3 md:grid-rows-2 md:gap-12">
                    <img src={img03} alt="szuflady z frezowanymi frontami" className="p-12 pb-0 md:p-0 md:row-span-2"/>
                    <img src={img04} alt="szare frezowane fronty" className="p-12 md:p-0 md:row-span-2"/>
                
                    <img src={img05} alt="szare frezowane fronty" className="" />
                    <img src={img06} alt="szafa na wymiar" className="p-12 md:p-0 md:col-start-3 md:row-start-2 md:row-span-2" />
                </div>
                    

                    <div className={`${isFooterVisible ? "bg-light text-light" : "fixed bottom-0 left-0 w-full h-12 navGradient"} `}>
                      <div className="flex justify-between items-center h-full">
                        <Link to="/tworczosc/04" className="text-light focus:outline-none cursor-pointer">
                          <IoIosArrowBack size={28} /> 
                        </Link>
                        <Link to="/tworczosc/06" className="text-light focus:outline-none hover:text-gray-300 ">
                          <IoIosArrowForward size={28} />
                        </Link>
                      </div>
                    </div>
            </div>
        </div>

        <NavSideBarGallery/>
        <ScrollArrow />
        <footer id="GS05footer" className=''>
                <ContactForm />
        </footer>
        </div>
    </motion.div>
        
    )
}

export default GallerySubPage05;

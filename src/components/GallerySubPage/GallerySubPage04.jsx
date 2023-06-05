import React, {useState, useEffect} from "react";
import NavBar from "../NavBar/NavBar";
import ContactForm from "../ContactPage/ContactForm";
import { motion } from "framer-motion";
import ScrollArrow from "../NavBar/ScrollArrow";
import img01 from './image/04/01.jpg';
import img02 from './image/04/02.jpg';
import img03 from './image/04/03.jpg';
import img04 from './image/04/04.jpg';
import img05 from './image/04/05.jpg';
import img06 from './image/04/06.jpg';
import img07 from './image/04/07.jpg';
import img08 from './image/04/08.jpg';
import img09 from './image/04/09.jpg';
import img10 from './image/04/10.jpg';
import img11 from './image/04/11.jpg';
import img12 from './image/04/12.jpg';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import { Link } from "react-router-dom";
import NavSideBarGallery from "../NavBar/NavSideBarGallery";



const GallerySubPage04 = () => {

    const [isFooterVisible, setIsFooterVisible] = useState(false);

    useEffect(() => {
        const footerElement = document.getElementById("GS04footer");
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
            <h2 className="chapter m-20 text-2xl md:text-3xl">TREEO ART #4</h2>
                <div className="">
                  <div className="md:grid md:grid-cols-2 md:gap-12 md:mb-12">
                    <img src={img01} alt="komoda z frezowanymi frontami" className="" />
                    <img src={img02} alt="panele tapicerowane w sypialni" className="p-12 pb-0 md:p-0"/>
                  </div>
                  <div className="md:grid md:grid-cols-3 md:grid-rows-5 md:gap-12 md:mb-12">
                    <img src={img03} alt="zagłówek w formie paneli tapicerowanych" className="p-12 pb-0 md:p-0 md:col-span-2 md:row-span-3 md:col-start-1"/>
                    <img src={img04} alt="biurko na wymiar" className="p-12 md:p-0 md:row-start-4 md:row-span-2 md:col-span-2 md:col-start-1"/>
                  
                    <div className="grid grid-cols-2 gap-4 pb-12  md:grid-rows-5 md:grid-cols-1 md:col-start-3 md:row-start-1 md:col-span-1 md:row-span-5 md:p-0 md:gap-12">
                    <img src={img05} alt="szafa na wymiar z regałem" className="md:row-span-2" />
                    <img src={img06} alt="szafa na wymiar z regałeme" className="md:row-start-3 md:row-span-2" />
                    </div>
                  </div>
                  <div className="md:grid md:grid-cols-2 md:grid-rows-3 md:mb-12">
                    <img src={img07} alt="lamele i kominek w salonie" className="md:col-span-1 md:row-span-2 md:pb-12" />
                    <img src={img08} alt="czarne lamele" className="p-12 md:p-0 md:col-start-2 md:row-span-3 md:pl-12" />
                    <img src={img09} alt="szafa z winiarką" className="md:col-start-1 md:row-start-3" />
                  </div>
                  <div className="md:grid md:grid-cols-2 md:gap-12">
                    <img src={img10} alt="szafa na wymiar" className="p-12 md:p-0" />
                    <img src={img11} alt="szafa na wymiar" className="" />
                  </div>
                    <img src={img12} alt="salon z meblami na wymiar" className="p-12" />
                     
                    <div className={`${isFooterVisible ? "bg-light text-light" : "fixed bottom-0 left-0 w-full h-12 navGradient"} `}>
                      <div className="flex justify-between items-center h-full">
                        <Link to="/tworczosc/03" className="text-light focus:outline-none cursor-pointer">
                          <IoIosArrowBack size={28} /> 
                        </Link>
                        <Link to="/tworczosc/05" className="text-light focus:outline-none hover:text-gray-300 ">
                          <IoIosArrowForward size={28} />
                        </Link>
                      </div>
                    </div>

                   
                </div>
        </div>

        <NavSideBarGallery/>
        <ScrollArrow />
        <footer id="GS04footer" className=''>
                <ContactForm />
        </footer>
        </div>
    </motion.div>
        
    )
}

export default GallerySubPage04;

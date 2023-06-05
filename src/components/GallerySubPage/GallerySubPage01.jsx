import React, {useState, useEffect} from "react";
import NavBar from "../NavBar/NavBar";
import ContactForm from "../ContactPage/ContactForm";
import { motion } from "framer-motion";
import ScrollArrow from "../NavBar/ScrollArrow";
import img01 from './image/01/01.jpg';
import img02 from './image/01/02.jpg';
import img03 from './image/01/03.jpg';
import img04 from './image/01/04.jpg';
import img05 from './image/01/05.jpg';
import img06 from './image/01/06.jpg';
import img07 from './image/01/07.jpg';
import img08 from './image/01/08.jpg';
import img09 from './image/01/09.jpg';
import img10 from './image/01/10.jpg';
import img11 from './image/01/11.jpg';
import img12 from './image/01/12.jpg';
import img13 from './image/01/13.jpg';
import img14 from './image/01/14.jpg';
import img15 from './image/01/15.jpg';
import img16 from './image/01/16.jpg';
import img17 from './image/01/17.jpg';
import img18 from './image/01/18.jpg';

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import NavSideBarGallery from "../NavBar/NavSideBarGallery";



const GallerySubPage01 = () => {

    const [isFooterVisible, setIsFooterVisible] = useState(false);

    useEffect(() => {
        const footerElement = document.getElementById("GS01footer");
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
            <h2 className="chapter m-20 text-2xl md:text-3xl">TREEO ART #1</h2>
            <div>
                <div className="">
                    <img src={img01} alt="kuchnia" className="pb-12" />
                    <div className="md:grid md:grid-cols-2 md:gap-12 md:pb-12">
                      <img src={img02} alt="kuchnia" className="p-12 pb-0 md:p-0"/>
                      <img src={img03} alt="kuchnia" className="p-12 pb-0 md:p-0"/>
                    </div>
                    <div className="md:grid md:grid-cols-8 md:grid-rows-2 md:gap-12">
                    <img src={img04} alt="kuchnia" className="p-12 pb-0 md:p-0 md:col-span-3 md:col-start-6 md:row-start-1"/>
                    <img src={img05} alt="kuchnia" className="p-12 md:p-0 md:col-span-3 md:col-start-6 md:row-start-2" />
                    <img src={img06} alt="kuchnia" className="md:col-span-5 md:col-start-1 md:row-span-2 md:row-start-1 md:self-center" />
                    </div>
                    <img src={img07} alt="kuchnia" className="p-12" />
                    <div className="md:grid md:grid-cols-9 md:grid-rows-4 md:gap-12">
                    <img src={img08} alt="szafa z regałem" className="md:col-span-3 md:row-span-1" />
                    <img src={img09} alt="szafa z lustrem" className="p-12 pb-0 md:p-0 md:row-start-3 md:col-span-5 md:row-span-2 " />
                    <img src={img10} alt="szafa z siedziskiem" className="p-12 md:p-0 md:row-start-3 md:col-span-4 md:row-span-2 " />
                    <img src={img11} alt="szafa z regałem i lamele" className="md:col-start-4 md:row-start-1 md:col-span-6 md:row-span-2" />
                    <img src={img12} alt="lamele i kominek" className="p-12 md:p-0 md:col-span-3 md:row-span-1" />
                    </div>
                    <div className="md:grid md:grid-cols-9 md:grid-rows-4 md:gap-12 md:mb-12">
                      <img src={img13} alt="łazienka, zabudowa geberitu" className="pb-12 md:p-0 md:col-span-5 md:row-span-2" />
                      <img src={img14} alt="szafki na wymiar w łazience" className="md:row-start-3 md:col-span-4 md:row-span-2" />
                      <img src={img15} alt="szafki na wymiar w łazience" className="p-12 pb-0 md:p-0 md:row-start-3 md:col-span-5 md:row-span-2" />
                      <img src={img16} alt="szafka pod umywalkę" className="p-12 md:p-0 md:col-span-4 md:row-span-2 md:self-end" />
                    </div>
                    <div className="md:grid md:grid-cols-9 md:gap-12">
                      <img src={img17} alt="garderoba na wymiar" className="md:col-span-6" />
                      <img src={img18} alt="garderoba na wymiar" className="p-12 md:p-0 md:col-span-3 md:self-end" />
                    </div>
                    <div className={`${isFooterVisible ? "bg-light text-light" : "fixed bottom-0 left-0 w-full h-12 navGradient"} `}>
                      <div className="flex justify-between items-center h-full">
                        <Link to="/tworczosc" className="text-light focus:outline-none cursor-pointer">
                          <IoIosArrowBack size={28} /> 
                        </Link>
                        <Link to="/tworczosc/02" className="text-light focus:outline-none hover:text-gray-300 ">
                          <IoIosArrowForward size={28} />
                        </Link>
                      </div>
                    </div>

                </div>
            </div>
        </div>

        <div className="color-light">
          <NavSideBarGallery />
        </div>
        <div className="mb-20">
        <ScrollArrow />
        </div>
        <footer id="GS01footer" className=''>
                <ContactForm />
        </footer>
        </div>
    </motion.div>
        
    )
}

export default GallerySubPage01;

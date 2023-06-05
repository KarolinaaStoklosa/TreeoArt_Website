import React, {useState, useEffect} from "react";
import NavBar from "../NavBar/NavBar";
import ContactForm from "../ContactPage/ContactForm";
import { motion } from "framer-motion";
import ScrollArrow from "../NavBar/ScrollArrow";
import img01 from './image/03/01.jpg';
import img02 from './image/03/02.jpg';
import img02a from './image/03/02a.jpg';
import img03 from './image/03/03.jpg';
import img04 from './image/03/04.jpg';
import img05 from './image/03/05.jpg';
import img06 from './image/03/06.jpg';
import img07 from './image/03/07.jpg';
import img08 from './image/03/08.jpg';
import img09 from './image/03/09.jpg';
import img10 from './image/03/10.jpg';
import img11 from './image/03/11.jpg';
import img12 from './image/03/12.jpg';
import img13 from './image/03/13.jpg';
import img14 from './image/03/14.jpg';
import img15 from './image/03/15.jpg';
import img16 from './image/03/16.jpg';
import img17 from './image/03/17.jpg';
import img18 from './image/03/18.jpg';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import { Link } from "react-router-dom";
import NavSideBarGallery from "../NavBar/NavSideBarGallery";



const GallerySubPage03 = () => {

    const [isFooterVisible, setIsFooterVisible] = useState(false);

    useEffect(() => {
        const footerElement = document.getElementById("GS03footer");
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
            <h2 className="chapter m-20 text-2xl md:text-3xl">TREEO ART #3</h2>
                <div className="">
                    <img src={img01} alt="spawane stalowe regały z drewnianymi półkami" className="md:mb-12" />
                    <div className="md:grid md:grid-cols-3 md:gap-12 md:mb-12">
                      <img src={img02} alt="spawany stalowy regał z drewnianymi półkami" className="p-12 pb-0 md:p-0"/>
                      <img src={img02a} alt="witryna stalowa z drewnianymi elementami" className="p-12 pb-0 md:p-0"/>
                      <img src={img03} alt="spawane stalowe regały z drewnianymi półkami" className="p-12 pb-0 md:p-0"/> 
                    </div>
                    <div className="md:grid md:grid-cols-5 md:gap-12 md:mb-12">
                    <img src={img04} alt="wiszące stalowe regały z łukami" className="p-12 md:p-0 md:col-span-2"/>
                    <img src={img05} alt="wiszące stalowe regały z łukami" className="md:col-span-3" />
                    </div>
                    <div className="md:grid md:grid-cols-3 md:gap-12 md:mb-12">
                      <div className="grid grid-cols-2 gap-4 pt-12 md:col-span-2 md:gap-12 md:p-0">
                        <img src={img06} alt="wiszące stalowe regały z łukami" className="" />
                        <img src={img07} alt="wiszące stalowe regały z łukami i drabinką" className="" />
                      </div>
                      <img src={img08} alt="zabudowa" className="p-12 md:p-0" />
                    </div>
                    <div className="md:grid md:grid-cols-3 md:grid-rows-2 md:gap-12 md:mb-12">
                      <img src={img09} alt="spawany stalowy regał z półkami z drewna" className="p-12 pb-0 md:p-0 md:row-span-2 md:col-span-2" />
                      <img src={img10} alt="spawany stalowy regał z półkami z drewna" className="p-12 md:p-0 md:row-start-1" />
                      <img src={img11} alt="spawany stalowy regał z półkami z drewna" className="md:row-start-2" />
                    </div>
                    <div className="grid grid-cols-2 gap-4 pb-12 pt-12 md:gap-12 md:p-0 md:mb-12"> 
                      <img src={img12} alt="spawany stalowy regał z półkami z drewna" className="" />
                      <img src={img13} alt="spawany stalowy regał z półkami z drewna" className="" />
                    </div>
                    <div className="md:grid md:grid-cols-5 md:gap-12 md:mb-12">
                      <img src={img14} alt="spawany stalowy regał z półkami z drewna" className=" md:col-span-3" />
                      <img src={img15} alt="spawany stalowy regał z półkami z drewna" className="p-12 md:p-0 md:col-span-2 md:self-end" />
                    </div>
                    <div className="md:grid md:grid-cols-3 md:gap-12">
                      <div className="grid grid-cols-2 gap-4 md:gap-12 md:col-span-2"> 
                        <img src={img16} alt="kspawany stalowy regał z półkami z drewna" className="" />
                        <img src={img17} alt="spawany stalowy regał z półkami z drewna" className="" />
                      </div>
                      <img src={img18} alt="spawany stalowy regał z półkami z drewna" className="p-12 md:p-0" />
                    </div>


                    <div className={`${isFooterVisible ? "bg-light text-light" : "fixed bottom-0 left-0 w-full h-12 navGradient"} `}>
                      <div className="flex justify-between items-center h-full">
                        <Link to="/tworczosc/02" className="text-light focus:outline-none cursor-pointer">
                          <IoIosArrowBack size={28} /> 
                        </Link>
                        <Link to="/tworczosc/04" className="text-light focus:outline-none hover:text-gray-300 ">
                          <IoIosArrowForward size={28} />
                        </Link>
                      </div>
                    </div>

                   
                </div>
        </div>

        <div className="color-light">
          <NavSideBarGallery />
        </div>
        <ScrollArrow />
        <footer id="GS03footer" className=''>
                <ContactForm />
        </footer>
        </div>
    </motion.div>
        
    )
}

export default GallerySubPage03;

import React, {useState, useEffect} from "react";
import NavBar from "../NavBar/NavBar";
import ContactForm from "../ContactPage/ContactForm";
import { motion } from "framer-motion";
import ScrollArrow from "../NavBar/ScrollArrow";
import img01 from './image/02/01.jpg';
import img02 from './image/02/02.jpg';
import img03 from './image/02/03.jpg';
import img03a from './image/02/03a.jpg';
import img03b from './image/02/03b.jpg';
import img04 from './image/02/04.jpg';
import img05 from './image/02/05.jpg';
import img06 from './image/02/06.jpg';
import img07 from './image/02/07.jpg';
import img08 from './image/02/08.jpg';
import img09 from './image/02/09.jpg';
import img10 from './image/02/10.jpg';
import img11 from './image/02/11.jpg';
import img12 from './image/02/12.jpg';
import img13 from './image/02/13.jpg';
import img14 from './image/02/14.jpg';
import img15 from './image/02/15.jpg';
import img16 from './image/02/16.jpg';
import img17 from './image/02/17.jpg';
import img18 from './image/02/18.jpg';
import img19 from './image/02/19.jpg';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import NavSideBarGallery from "../NavBar/NavSideBarGallery";



const GallerySubPage02 = () => {

    const [isFooterVisible, setIsFooterVisible] = useState(false);

    useEffect(() => {
        const footerElement = document.getElementById("GS02footer");
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
      <div className={`${isFooterVisible ? "bg-light text-dark-900" : "bg-dark-900 text-light"} min-h-screen transition-colors duration-500 w-full`}>
          <nav className="bg-inherit h-28 w-full z-10">
            <NavBar />
          </nav>
          <div className="md:ml-16 md:pl-28 md:mr-16 w-full"> 
              <h2 className="chapter m-20 text-2xl md:text-3xl">TREEO ART #2</h2>
              <div>
                  <div className="">
                    <img src={img01} alt="kuchnia z lakierowanymi frontami" className="pb-12" />
                  
                    <div className="grid grid-cols-2 grid-rows-3 md:pb-12 md:grid md:grid-cols-4 md:grid-rows-3 md:gap-12">
                      <img src={img03a} alt="kuchnia" className="pl-12 md:ml-0 col-span-2 row-start-1 md:p-0 md:col-span-2 md:col-start-3 md:row-start-1"/>
                      <img src={img03b} alt="kuchnia" className="pb-12 md:p-0 col-span-2 row-start-2 md:col-span-2 md:col-start-1 md:row-start-3"/>
                      <img src={img02} alt="kuchnia" className="pr-6 col-span-1 row-start-3 md:visible md:p-0 md:col-start-1 md:row-start-1 md:col-span-2 md:row-span-2"/>
                      <img src={img03} alt="kuchnia" className="pl-6 col-start-2 row-start-3 md:visible md:p-0 md:col-span-2 md:row-span-2 md:col-start-3 md:row-start-2"/>
                    </div>
                    <div className="grid grid-cols-7 grid-rows-2 gap-4 mt-0 m-4 mb-0 md:m-0 md:mb-12  md:grid md:grid-cols-4 md:grid-rows-2 ">
                        <img src={img04} alt="zabudowa na wymiar gabinetu" className="col-span-4 md:col-span-2 md:row-span-2 md:col-start-1 md:row-start-1"/>
                        <img src={img06} alt="zabudowa na wymiar gabinetu" className="self-center col-span-3 md:col-span-1 md:row-span-1 md:col-start-3 md:row-start-1" />
                        <img src={img05} alt="zabudowa na wymiar gabinetu" className="col-span-7 row-start-2 md:self-end md:row-span-1 md:row-start-2 md:col-span-2 md:col-start-3" />
                    </div>
                    <div className="md:grid md:grid-cols-7 md:grid-rows-3 md:gap-12">
                      <img src={img07} alt="lustro z ledami i spawanym siedziskiem" className="md:col-span-4 md:row-span-3 md:col-start-1 md:row-start-1" />
                      <img src={img08} alt="lustro z ledami" className="p-12 pb-0 md:p-0 md:col-span-2 md:row-span-1 md:col-start-5 md:row-start-1" />
                      <img src={img09} alt="spawane siedzisko z tapicerką" className="p-12 md:p-0 md:row-span-2 md:row-start-2 md:col-span-4 md:col-start-5" />
                    </div>

                    <div className="grid grid-cols-9 grid-rows-2 gap-4 md:mb-12 md:grid md:grid-cols-7 md:grid-rows-1 ">
                      <img src={img10} alt="zabudowa geberitu i wisząca szafka z forniru" className="col-span-9 md:col-span-4  md:col-start-3 md:self-center" />
                      <img src={img11} alt="zabudowa geberitu i wisząca szafka z forniru" className="pl-4 md:p-0 row-start-2 col-span-5 pr-4 md:col-start-1 md:col-span-2 md:row-start-1  " />
                      <img src={img12} alt="zabudowa geberitu z forniru" className="pr-4 md:p-0 row-start-2 self-center col-span-4 md:col-start-7 md:col-span-1 md:row-start-1  " />
                    </div>
                    <div className="grid grid-cols-2 mb-12 md:grid md:grid-cols-7 md:grid-rows-4 md:mb-12 ">
                      <img src={img13} alt="pomieszczenie gospodarcze z szafą na wymiar" className="p-12 col-span-2 md:p-0 md:col-span-3 md:row-span-4 md:pr-6" />
                      <img src={img14} alt="szafa na wymiar z lakierowanymi frontami" className="pb-12 md:pl-6 md:p-0 col-span-2 md:col-span-4 md:row-span-2" />
                      <img src={img15} alt="szafa na wymiar z lakierowanymi frontami" className="pr-2 md:pr-0 md:pl-6 col-span-1 col-start-1 md:col-start-4 md:col-span-2 md:row-start-3 md:row-span-2" />
                      <img src={img16} alt="frezowane uchwyty" className="pl-2 md:pl-6 md:p-0 col-start-2 md:col-start-6 md:col-span-2 md:-row-start-3 md:row-span-2" />
                    </div>
                    <div className="md:grid md:grid-cols-5 md:grid-rows-3 md:gap-12">
                    <img src={img17} alt="toaletka i lamele" className=" md:col-span-3 md:row-span-3 md:col-start-1" />
                    <img src={img18} alt="szafa przesuwna na wymiar" className="p-12 md:p-0 md:col-span-2 md:row-start-1 md:row-span-2 md:col-start-4" />
                    <img src={img19} alt="komoda na wymiar" className="pb-12 md:p-0 md:col-span-2 md:row-start-3 md:col-start-4" />
                    </div>

                    <div className={`${isFooterVisible ? "bg-light text-light" : "fixed bottom-0 left-0 w-full h-12 navGradient"} `}>
                      <div className="flex justify-between items-center h-full">
                        <Link to="/tworczosc/01" className="text-light focus:outline-none cursor-pointer">
                          <IoIosArrowBack size={28} /> 
                        </Link>
                        <Link to="/tworczosc/03" className="text-light focus:outline-none hover:text-gray-300 ">
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
          <ScrollArrow />
          <footer id="GS02footer" className="">
            <ContactForm />
          </footer>
      </div>
    </motion.div>
        
    )
}

export default GallerySubPage02;

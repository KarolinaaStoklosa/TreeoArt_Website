import React, {useState, useEffect} from "react";
import NavBar from "../NavBar/NavBar";
import ContactForm from "../ContactPage/ContactForm";
import { motion } from "framer-motion";
import ScrollArrow from "../NavBar/ScrollArrow";
import img01 from './image/06/01.jpg';
import img02 from './image/06/02.jpg';
import img03 from './image/06/03.jpg';
import img04 from './image/06/04.jpg';
import img05 from './image/06/05.jpg';
import img06 from './image/06/06.jpg';
import img07 from './image/06/07.jpg';
import img08 from './image/06/08.jpg';
import img09 from './image/06/09.jpg';
import img10 from './image/06/10.jpg';
import img11 from './image/06/11.jpg';
import img12 from './image/06/12.jpg';
import img13 from './image/06/13.jpg';
import img14 from './image/06/14.jpg';
import img15 from './image/06/15.jpg';
import img16 from './image/06/16.jpg';
import img17 from './image/06/17.jpg';
import img18 from './image/06/18.jpg';
import img20 from './image/06/20.jpg';
import img21 from './image/06/21.jpg';
import img22 from './image/06/22.jpg';
import img23 from './image/06/23.jpg';
import img24 from './image/06/24.jpg';
import img25 from './image/06/25.jpg';
import img26 from './image/06/26.jpg';
import img27 from './image/06/27.jpg';
import img28 from './image/06/28.jpg';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import { Link } from "react-router-dom";
import NavSideBarGallery from "../NavBar/NavSideBarGallery";



const GallerySubPage06 = () => {

    const [isFooterVisible, setIsFooterVisible] = useState(false);

    useEffect(() => {
        const footerElement = document.getElementById("GS06footer");
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
            <h2 className="chapter m-20 text-2xl md:text-3xl">TREEO ART #6</h2>
                <div className="">
                  <div className="md:grid md:grid-cols-5 md:gap-12">
                    <img src={img01} alt="stół ze sklejki i czarnego laminatu" className="md:col-span-3 md:row-span-3" />
                    <img src={img02} alt="stół ze sklejki i czarnego laminatu" className="p-12 pb-0 md:p-0 md:col-span-2 md:row-span-2"/>
                  
                    <img src={img03} alt="zaokrąglony nowoczesny stół" className="p-12 pb-0 md:p-0 md:col-start-4 md:col-span-2 md:row-span-2"/>
                    <img src={img04} alt="frezowany stół ze sklejki" className="p-12 md:p-0 md:col-span-2 md:row-span-2"/>
                    <img src={img05} alt="frezowany stół ze sklejki" className="md:col-span-2 md:row-span-1" />
                
                    <div className="grid grid-cols-2 gap-4 pt-12 md:p-0 md:col-start-1 md:col-span-3 md:row-start-4 md:row-span-3 md:self-end">
                        <img src={img06} alt="stół ze stalowym regałem" className="" />
                        <img src={img07} alt="stół ze sklejki i czarnego laminatu" className="" />
                    </div>
                  
                    <img src={img08} alt="kuchnia na wymiar" className="pt-12 md:p-0 md:col-span-3 md:col-start-3 md:row-span-2" /> 
                    <img src={img09} alt="lakierowane fronty" className="p-12 md:p-0 md:col-span-2 md:col-start-1 md:row-span-2 md:self-end" /> 
                    <div className="grid grid-cols-2 gap-4 md:col-start-3 md:col-span-3"> 
                        <img src={img10} alt="frezowany blat" className="" />
                        <img src={img11} alt="szczegół łączenia blatu" className="" />
                    </div>
                    </div>
                    <div className="md:grid md:grid-cols-5 md:gap-12 md:mt-12 md:mb-12">
                    <img src={img12} alt="kuchnia" className="p-12 md:p-0 md:col-span-3 md:row-span-3" />
                    <img src={img13} alt="szafka RTV z frezowanej sklejki" className="md:p-0 md:col-span-3 md:row-span-3" />
                    <img src={img14} alt="szafka RTV z frezowanej sklejki" className="p-12 md:p-0 md:col-span-2 md:row-start-5 md:row-span-2 md:col-start-4 md:self-end" />
                    <img src={img15} alt="szafka RTV z frezowanej sklejki" className="p-12 pt-0 md:p-0 md:col-span-2 md:col-start-4 md:row-start-1 md:row-span-4" />
                    </div>
                    <div className="md:grid md:grid-cols-2 md:gap-12 md:mb-12">
                      <img src={img16} alt="schody ze sklejki" className="md:row-span-2" />
                      <div className="grid grid-cols-2 gap-4 pt-12 md:p-0"> 
                        <img src={img17} alt="schody ze sklejki" className="" />
                        <img src={img18} alt="schody ze sklejki" className="" />
                      </div>
                      {/* <img src={img19} alt="kuchnia" className="p-12" /> */}
                      <img src={img20} alt="schody ze sklejki" className="p-12 md:p-0 md:col-start-2 md:row-start-2 md:row-span-3" />
                      <img src={img21} alt="szafka pod umywalkę z alumioniowym stelażem i frezowanymi frontami" className="md:row-span-3" />
                      <img src={img22} alt="szafka pod umywalkę z alumioniowym stelażem i frezowanymi frontami" className="p-12 pb-0 md:p-0 md:row-span-3 md:col-start-1" />
                      <img src={img23} alt="szafka łazienkowa z frezowanymi frontami" className="p-12 md:p-0 md:col-start-2 md:row-span-4 md:row-start-5" />
                    </div>
                    <div className="md:grid md:grid-cols-5 md:gap-12 md:grid-rows-3">
                      <img src={img24} alt="szafa ze sklejki z frezowanymi frontami" className="md:col-span-3 md:row-span-2 md:row-start-1" />
                      <div className="grid grid-cols-2 gap-4 pt-12 md:p-0 md:col-span-3 md:row-span-1 md:row-start-3"> 
                        <img src={img25} alt="szafa ze sklejki z frezowanymi frontami" className="" />
                        <img src={img26} alt="szafa ze sklejki z frezowanymi frontami" className="" />
                      </div>
                      <div className="grid grid-cols-2 gap-4 pt-12 md:p-0 md:grid-rows-5 md:row-span-4 md:col-span-2 md:gap-12 md:row-start-1 md:col-start-4"> 
                        <img src={img27} alt="szafa ze sklejki z frezowanymi frontami" className="md:col-span-2 md:row-span-2 md:row-start-1" />
                        <img src={img28} alt="szafa ze sklejki z frezowanymi uchwytami" className="md:col-span-2 md:row-span-2 md:row-start-3" />
                      </div>
                    </div>


                    <div className={`${isFooterVisible ? "bg-light text-light" : "fixed bottom-0 left-0 w-full h-12 navGradient"} `}>
                      <div className="flex justify-between items-center h-full">
                        <Link to="/tworczosc/05" className="text-light focus:outline-none cursor-pointer">
                          <IoIosArrowBack size={28} /> 
                        </Link>
                        <Link to="/tworczosc/07" className="text-light focus:outline-none hover:text-gray-300 ">
                          <IoIosArrowForward size={28} />
                        </Link>
                      </div>
                    </div>
            </div>
        </div>

        <NavSideBarGallery/>
        <ScrollArrow />
        <footer id="GS06footer" className=''>
                <ContactForm />
        </footer>
        </div>
    </motion.div>
        
    )
}

export default GallerySubPage06;

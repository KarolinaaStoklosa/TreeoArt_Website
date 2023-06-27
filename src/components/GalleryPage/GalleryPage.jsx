import React, {useState, useEffect} from "react";
import NavBar from "../NavBar/NavBar";
import {motion} from 'framer-motion';
import { Link } from 'react-router-dom';
import ScrollArrow from "../NavBar/ScrollArrow";
import galeriaVlad01 from './/image/galeriaVlad01.jpg';
import galeriaVlad02 from './/image/galeriaVlad02.jpg';
import galeriaVlad03 from './image/galeriaVlad03.jpg';
import galeriaWisnicz01 from './image/galeriaWisnicz01.jpg';
import galeriaWisnicz02 from './image/galeriaWisnicz02.jpg';
import galeriaWisniczStol01 from './image/galeriaWisniczStol01.jpg';
import galeriaWisniczStol02 from './image/galeriaWisniczStol02.jpg';
import galeriaWisniczStol03 from './image/galeriaWisniczStol03.jpg';
import galeriaWisniczKuchnia01 from './image/galeriaWisniczKuchnia01.jpg';
import galeriaWisniczKuchnia02 from './image/galeriaWisniczKuchnia02.jpg';
import galeriaWisniczKuchnia03 from './image/galeriaWisniczKuchnia03.jpg';
import galeriaWisniczSalon01 from './image/galeriaWisniczSalon01.jpg';
import galeriaWisniczSalon02 from './image/galeriaWisniczSalon02.jpg';
import galeriaWisniczSzafa01 from './image/galeriaWisniczSzafa01.jpg';
import galeriaWisniczSzafa02 from './image/galeriaWisniczSzafa02.jpg';
import galeriaKrakowSzymon01 from './image/galeriaKrakowSzymon01.jpg';
import galeriaKrakowSzymon02 from './image/galeriaKrakowSzymon02.jpg';
import galeriaKrakowSzymon03 from './image/galeriaKrakowSzymon03.jpg';
import galeriaKrakowSzymon04 from './image/galeriaKrakowSzymon04.jpg';
import galeriaKrakowSzymon05 from './image/galeriaKrakowSzymon05.jpg';
import galeriaKrakowSzymon06 from './image/galeriaKrakowSzymon06.jpg';
import galeriaKrakowSzymon07 from './image/galeriaKrakowSzymon07.jpg';
import galeriaKrakowSzymon08 from './image/galeriaKrakowSzymon08.jpg';
import galeriaKrakowSzymon09 from './image/galeriaKrakowSzymon09.jpg';
import galeriaKrakowNorbert01 from './image/galeriaKrakowNorbert01.jpg';
import galeriaKrakowNorbert02 from './image/galeriaKrakowNorbert02.jpg';
import galeriaKrakowNorbert03 from './image/galeriaKrakowNorbert03.jpg';
import galeriaKrakowNorbert04 from './image/galeriaKrakowNorbert04.jpg';
import galeriaKrakowNorbert05 from './image/galeriaKrakowNorbert05.jpg';
import galeriaKrakowNorbert06 from './image/galeriaKrakowNorbert06.jpg';
import galeriaKrakowNorbert07 from './image/galeriaKrakowNorbert07.jpg';
import galeriaKrakowNorbert08 from './image/galeriaKrakowNorbert08.jpg';
import galeriaAustriaSzafa02 from './image/galeriaAustriaSzafa02.jpg';
import galeriaChantilly01 from './/image/galeriaChantilly01.jpg';
import galeriaChantilly02 from './/image/galeriaChantilly02.jpg';
import galeriaChantilly03 from './image/galeriaChantilly03.jpg';
import galeriaChantilly04 from './/image/galeriaChantilly04.jpg';
import galeriaChantilly05 from './/image/galeriaChantilly05.jpg';
import galeriaChantilly06 from './image/galeriaChantilly06.jpg';
import galeriaChantilly07 from './image/galeriaChantilly07.jpg';
import galeriaLoft01 from './/image/galeriaLoft01.jpg';
import galeriaLoft02 from './/image/galeriaLoft02.jpg';
import galeriaLoft03 from './image/galeriaLoft03.jpg';
import galeriaSzafkaŁazienka01 from './/image/galeriaSzafkaŁazienka01.jpg';
import galeriaSzafkaŁazienka02 from './/image/galeriaSzafkaŁazienka02.jpg';
import ContactForm from "../ContactPage/ContactForm";
import NavSideBarGallery from "../NavBar/NavSideBarGallery";

const GalleryPage = () => {
    const [isFooterVisible, setIsFooterVisible] = useState(false);

    useEffect(() => {
        const footerElement = document.getElementById("GPfooter");
        const observer = new IntersectionObserver(
          ([entry]) => {
            setIsFooterVisible(entry.isIntersecting);
          },
          { threshold: 0.5 }
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
        <div className="bg-inherit relative top-0 left-0 w-full h-screen z-10">
            <nav className="bg-inherit h-28 w-full z-10">
                <NavBar />
            </nav>
            <div className="font-[serif] md:font-[Roboto] mt-24 top-0 left-0 mb-5  md:ml-20 md:pl-6 md:mr-16 md:flex md:flex-row-reverse md:justify-between md:items-center">
                <h1 className="text-5xl tracking-tighter ml-6 pt-20 pb-20 mt-0 md:ml-0 md:mr-0">Unikalne. <br />Idealne.</h1>
                <h2 className="text-2xl tracking-tighter ml-6 pb-12 md:pt-0 md:ml-0">Dopasowane <br/>do Twojego stylu.</h2>
            </div>
        </div>

        <div className="ml-4 mr-4 md:mr-16 md:ml-20 md:pl-6"> 
            <div>
                <h4 className="chapter text-xl md:text-3xl md:m-8">TREEO ART #1</h4>
                <div className="grid grid-cols-2 grid-rows-3 gap-4 md:grid-cols-5 md:grid-rows-2 mb-4 md:gap-8 md:mb-8">
                    <img src={galeriaKrakowSzymon01} alt="regał i lamele Kraków"  className="col-start-1 row-start-3 md:col-start-4 md:col-span-2 md:row-start-1" />
                    <img src={galeriaKrakowSzymon02} alt="kuchnia na wymiar Kraków" className="col-start-1 row-start-1 col-span-2 row-span-2 md:col-start-1 md:col-span-3 md:row-start-1" />
                    <img src={galeriaKrakowSzymon04} alt="szafki wiszące przeszklone Kraków" className="col-start-2 row-start-3 md:col-start-4 md:col-span-2 md:row-start-2" />
                </div>
                <div className="grid grid-cols-2 grid-rows-3 gap-4 mb-4 md:gap-8 md:mb-8 md:grid md:grid-cols-6 md:grid-rows-2">
                    <img src={galeriaKrakowSzymon03} alt="salon Kraków" className="col-start-1 row-start-3 md:col-start-1 md:col-span-3 md:row-start-1" />
                    <img src={galeriaKrakowSzymon05} alt="kuchnia frezowane fronty Kraków" className="col-start-1 row-start-1 col-span-2 row-span-2 md:col-start-4 md:col-span-3 md:row-start-1 md:self-center" />
                    <img src={galeriaKrakowSzymon06} alt="szafa z lustrem i regałem Kraków" className="col-start-2 row-start-3 md:col-start-1 md:col-span-3 md:row-start-2" />
                </div>
                <div className="grid grid-cols-2 grid-rows-3 gap-4 mb-4 md:gap-8 md:mb-8 md:grid md:grid-cols-5 md:grid-rows-2">
                    <img src={galeriaKrakowSzymon07} alt="łazienka, zabudowa geberitu Kraków" className="col-start-1 row-start-1 md:col-start-4 md:col-span-2 md:row-start-1" />
                    <img src={galeriaKrakowSzymon08} alt="łazienka szafki na wymiar Kraków" className="col-start-2 row-start-1 md:col-start-4 md:col-span-2 md:row-start-2" />
                    <img src={galeriaKrakowSzymon09} alt="garderoba z ledami Kraków" className=" col-start-1 row-start-2 col-span-2 row-span-2 md:col-start-1 md:col-span-3 md:row-start-1 md:self-center" />
                </div>
                <Link to="/tworczosc/01">
                    <button className=" btn-92 md:mb-16">Odkryj więcej</button>
                </Link>
            </div>

            <div className="">
                <h4 className="chapter text-xl md:text-3xl md:m-8">TREEO ART #2</h4>
                <div className="md:grid md:gap-8 md:grid-cols-4 md:grid-rows-1 md:mb-8">
                    <img src={galeriaKrakowNorbert05} alt="salon z kuchnią na wymiar, Kraków" className="mb-4 md:col-start-1 md:col-span-2 md:mb-0" />
                    <div className="grid grid-cols-2 grid-rows-1 gap-4 mb-4 md:col-start-3 md:col-span-2 md:grid md:gap-8 md:mb-0">
                        <img src={galeriaKrakowNorbert04} alt="szafa wnękowa na wymiar, Kraków" className="col-start-1 row-start-1 " />
                        <img src={galeriaKrakowNorbert02} alt="zabudowa kuchenna na wymiar z winiarką Kraków" className="col-start-2 row-start-1" />
                    </div>
                </div>
                <div className="md:grid md:grid-cols-5 md:grid-rows-1 md:gap-8 md:mb-8">
                    <img src={galeriaKrakowNorbert08} alt="kuchnia na wymiar z lakierowanymi frontami, Kraków" className="mb-4 md:row-start-1 md:col-start-3 md:col-span-3 md:mb-0 md:self-center" />
                    <img src={galeriaKrakowNorbert07} alt="sypialnia lamele i toaletka, Kraków" className="mb-4 md:row-start-1 md:col-start-1 md:col-span-2 md:mb-0" />
                </div>
                <div className="md:grid md:grid-cols-5 md:grid-rows-2 md:gap-8">
                    <div className="grid grid-cols-2 grid-rows-1 gap-4 mb-4 md:row-start-1 md:col-start-4 md:col-span-2 md:row-span-2 md:flex md:flex-col">
                        <img src={galeriaKrakowNorbert03} alt="lustro z ledami i siedzisko Kraków" className="col-start-1" />
                        <img src={galeriaKrakowNorbert06} alt="szafa w gabinecie, Kraków" className="col-start-2" />
                    </div>
               
                    <img src={galeriaKrakowNorbert01} alt="łazienka, szafki fornirowane, Kraków" className="col-start-1 row-start-1 md:row-start-1 md:col-start-1 md:col-span-3 md:row-span-2 md:self-center" />
                </div>
                <Link to="/tworczosc/02">
                    <button className=" btn-92 md:mb-16">Odkryj więcej</button>
                </Link>
            </div>

            <div className="">
                <h4 className="chapter text-xl md:text-3xl md:m-8">TREEO ART #3</h4>
                <div className="md:grid md:grid-cols-4 md:grid-rows-2 md:gap-8 md:mb-8">
                    <img src={galeriaChantilly06} alt="regały stalowe wiszące, Chantilly Bochnia" className="mb-4 md:mb-0 md:col-start-1 md:col-span-3 md:row-span-2" />
                
                    <div className="grid grid-cols-2 grid-rows-1 gap-4 mb-4 md:mb-0 md:col-start-4 md:col-span-1 md:row-span-2 md:flex md:flex-col md:justify-between">
                        <img src={galeriaChantilly02} alt="regały stalowe wiszące, Chantilly Bochnia" className="col-start-1 row-start-1" />
                        <img src={galeriaChantilly03} alt="drabinka stalowa spawana, Chantilly Bochnia" className="col-start-2 row-start-1 md:row-start-2" />
                    </div>
                </div>
                
                <img src={galeriaChantilly01} alt="regały stalowe spawane, Chantilly Bochnia" className="mb-4 md:mb-8 md:col-span-3" />
                
                <div className="md:grid md:grid-cols-3 md:grid-rows-1 md:gap-8 md:mb-8">
                    <img src={galeriaChantilly05} alt="regały stalowe spawane, Chantilly Bochnia" className="mb-4 md:mb-0 md:col-span-2" />
                    <div className="grid grid-cols-2 grid-rows-1 gap-4 mb-4 md:mb-0 md:flex md:flex-col md:justify-between" >
                        <img src={galeriaChantilly04} alt="regały stalowe spawane, Chantilly Bochnia" className="col-start-1 row-start-1" />
                        <img src={galeriaChantilly07} alt="regały stalowe spawane, Chantilly Bochnia" className="col-start-2 row-start-1" />
                    </div>
                </div>
                <Link to="/tworczosc/03">
                    <button className=" btn-92 md:mb-16">Odkryj więcej</button>
                </Link>
            </div>

            

            <div  >
                <h4 className="chapter text-xl md:text-3xl md:m-8">TREEO ART #4</h4>
                <div className="grid grid-cols-2 grid-rows-2 gap-4 md:gap-8 md:grid-cols-8 md:grid-rows-1">
                    <img src={galeriaVlad01} alt="sypialnia, panele tapicerowane, Kraków" className="col-start-1 row-start-1 md:col-span-3 md:col-start-3 md:self-center" />
                    <img src={galeriaVlad02} alt="komoda Kraków" className="col-start-1 row-start-2 md:col-span-3 md:col-start-6 md:row-start-1 md:self-center" />
                    <img src={galeriaVlad03} alt="salon z lamelami i kominkiem Kraków" className="col-start-2 row-start-1 row-span-2 md:col-span-2 md:-col-start-1 md:self-center md:row-span-1" />
                </div>
                <Link to="/tworczosc/04">
                    <button className=" btn-92 md:mb-16">Odkryj więcej</button>
                </Link>
            </div>

            <div className="">
                <h4 className="chapter text-xl md:text-3xl md:m-8">TREEO ART #5</h4>
                <img src={galeriaAustriaSzafa02} alt="szafa wnękowa na wymiar, Wiedeń" className="mb-4 md:mb-8 md:mr-auto md:ml-auto md:w-[50%]" />
                
                <Link to="/tworczosc/05">
                    <button className=" btn-92 md:mb-16">Odkryj więcej</button>
                </Link>
            </div>
            
            <div className="">
                <h4 className="chapter text-xl md:text-3xl md:m-8">TREEO ART #6</h4>
               
                    <div className="grid grid-cols-3 grid-rows-2 gap-4 mb-4 md:gap-8 md:grid-cols-4 md:grid-rows-1">
                        <img src={galeriaWisniczStol03} alt="stół ze sklejki i czarnego laminatu Nowy Wiśnicz" className="col-start-1 col-span-2 row-start-1 row-span-2 md:col-start-1 md:col-span-1 md:row-start-1" />
                        <img src={galeriaWisniczStol01} alt="frezowany stół Wiśnicz" className="col-start-3 row-start-2 self-end md:col-span-2 md:col-start-2 md:row-start-1 md:self-start" />
                        <img src={galeriaWisniczStol02} alt="stół z czarnym laminatem Wiśnicz" className=" col-start-3 row-start-1 md:col-span-1 md:col-start-4 md:row-start-1" />
                    </div>

                <div className="md:grid md:grid-cols-7 md:grid-rows-4 md:gap-8 md:mb-8">
                    <img src={galeriaWisniczKuchnia01} alt="kuchnia na wymiar Wiśnicz" className="mb-4 md:mb-0 md:col-span-5 md:row-span-2" />
        
                    <div className="grid grid-cols-3 grid-rows-2 gap-4 mb-4 md:mb-0 md:col-start-6 md:row-span-4 md:col-span-2 md:flex md:flex-col">
                        <img src={galeriaWisniczKuchnia02} alt="blat frezowany Wiśnicz" className="col-start-1 row-start-1 col-span-2 row-span-2 " />
                        <img src={galeriaWisniczKuchnia03} alt="szczegół łączenia cokołów na 45 stopni Wiśnicz" className="col-start-3 row-start-1 md:col-start-1" />
                        <img src={galeriaWisniczSalon02} alt="szafka RTV frezowana ze sklejki Wiśnicz" className="row-start-2 col-start-3 self-end" />
                    </div>

                    <img src={galeriaWisniczSalon01} alt="salon, szafka RTV z lakierowanymi frontami Wiśnicz" className=" mb-4 md:mb-0 md:col-start-1 md:row-start-3 md:row-span-2 md:col-span-5" />
                </div>

                <div className="md:grid md:grid-cols-7 md:grid-rows-1 md:gap-8 md:mb-8">
                    <div className="grid grid-cols-2 grid-rows-1 gap-4 mb-4 md:mb-0 md:col-span-4 md:gap-8">
                        <img src={galeriaWisnicz01} alt="schody ze sklejki, Wiśnicz" className=" " />
                        <img src={galeriaWisnicz02} alt="schody ze sklejki, Wiśnicz" className="" />
                    </div>
                    <div className="grid grid-cols-2 grid-rows-1 gap-4 mb-4 md:mb-0 md:col-start-5 md:col-span-3 md:gap-8">
                        <img src={galeriaWisniczSzafa01} alt="szafa z frezowanymi frontami ze sklejki, Wiśnicz" className="" />
                        <img src={galeriaWisniczSzafa02} alt="szafa z frezowanymi frontami ze sklejki, Wiśnicz" className="" />

                    </div>
                </div>
                    
                <Link to="/tworczosc/06">
                    <button className=" btn-92 md:mb-16">Odkryj więcej</button>
                </Link>
            </div>

            <div >
                <h4 className="chapter text-xl md:text-3xl md:m-8">TREEO ART #7</h4>

                <div className="md:grid md:gap-8 md:grid-cols-9 md:grid-rows-1 md:mb-8">
                    <img src={galeriaLoft01} alt="stolik loftowy, Bochnia" className="mb-4 md:mb-0 md:col-span-4 " />
                    <div className="grid grid-cols-2 grid-rows-1 gap-4 md:gap-8 md:col-start-5 md:col-span-5">
                
                        <img src={galeriaLoft02} alt="biurko loftowe, Kraków" className="col-start-2 row-start-1 self-end md:self-center" />
                        <img src={galeriaLoft03} alt="kwietnik loftowy, Kraków" className="col-start-1 row-start-1" />
                    </div>
                </div>
                <Link to="/tworczosc/07">
                    <button className=" btn-92 md:mb-16">Odkryj więcej</button>
                </Link>
            </div>



        </div>


        <div className="color-light">
            <NavSideBarGallery />
        </div>
        
        <ScrollArrow bottomPosition="1rem" rightPosition="1rem" />

        <footer id="GPfooter" className=''>
                <ContactForm />
        </footer>

    </div>
    </motion.div>
        
    )
}

export default GalleryPage;
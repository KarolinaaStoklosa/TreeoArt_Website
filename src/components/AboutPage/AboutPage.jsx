import React, {useState, useEffect} from "react";
import NavBar from "../NavBar/NavBar";
import ContactForm from "../ContactPage/ContactForm";
import NavSideBar from "../NavBar/NavSideBar";
import {motion} from 'framer-motion';
import autoreklamaRealizacja1 from './../image/autoreklamaRealizacja1.jpg';
import autoreklamaDlaczegoMy1 from './../image/autoreklamaDlaczegoMy1.jpg';
import autoreklamaDlaczegoMy8 from './../image/autoreklamaDlaczegoMy8.png';
import autoreklamaDlaczegoMy10 from './../image/autoreklamaDlaczegoMy10.png';
import autoreklamaDlaczegoMy11 from './../image/autoreklamaDlaczegoMy11.png';
import projektSzuflada from './../image/projekt-szuflada-frezowane-fronty-uchwyt.png';

const AboutPage = () => {
    const [isFooterVisible, setIsFooterVisible] = useState(false);
    useEffect(() => {
        const footerElement = document.getElementById("APfooter");
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
       
        
        <motion.div className="z-4 relative top-0 left-0 mt-0 bg-light text-dark-900 w-full" 
        initial = {{opacity: 0}} animate = {{opacity:1}} transition={{ease: "easeInOut", duration:1, delay:0.1}} >
        <div className={`${isFooterVisible ? "bg-dark-900 text-light" : "bg-light text-dark-900"} min-h-screen transition-colors duration-500`}>
            <div className="bg-inherit z-10 relative top-0 left-0 w-full h-screen">
                <nav className="bg-inherit h-28 w-full z-10">
                    <NavBar />
                </nav>
            <div className='flex flex-col h-[calc(100vh-112px)] top-0 left-0 pb-12 md:ml-20 md:mr-16 md:flex md:flex-row-reverse md:justify-between md:items-center md:pb-28'> 
                <div className="md:mr-0 md:grow-0 grow flex flex-col justify-center md:flex-none">
                    <h1 className=" font-[serif] md:font-[Roboto] text-5xl tracking-tighter ml-6 pb-12 md:ml-0 ">Kreatywni <br />profesjonaliści</h1>
                    <h2 className="font-[serif] md:font-[Roboto] text-xl leading-6 tracking-tighter ml-6 pb-12 md:ml-0 md:pb-0">którzy z pasją i zaangażowaniem <br />tworzą wyjątkowe meble <br />dopasowane do Twoich potrzeb</h2>
                </div>
                <div className= "ml-6 md:grow grow-0">
                    <h2 className="mb-3 font-bold">Pokaż:</h2>
                    <ul className="pb-4 underline ">
                        <li className=" bold mb-3 ">
                            <a href="#kto">Wszystko</a>
                        </li>
                        <li className="opacity-50 mb-1">
                            <a href="#kto">Kto</a>
                        </li>
                        <li className="opacity-50 mb-1">
                            <a href="#co">Co</a>
                        </li>
                        <li className="opacity-50 mb-1">
                            <a href="#dlaczego">Dlaczego</a>
                        </li>
                    </ul>
                </div>
            </div>
            </div>

            <div className=" ml-4 mr-4 md:ml-20 md:pl-6 md:mr-16 md:text-lg  ">
                <img id="kto" src={autoreklamaDlaczegoMy1} alt="co robimy, realizacja kraków" className="w-[100%] mb-8" />
                <div  className="md:grid md:grid-cols-3 md:grid-rows-2 md:gap-4">
                    <h2 className="text-4xl font-semibold underline mb-12 md:row-start-1 md:col-start-1 ">kto</h2>
                    <div className="flex flex-wrap md:flex-none md:row-span-2 md:col-span-2 md:gap-8 md:grid md:grid-rows-2 md:grid-cols-2">
                        <div className="w-1/2 p-1 md:w-full md:p-0 ">
                            <h4 className="text-2xl font-semibold mb-1" >my</h4>
                            <p className="leading-snug md:leading-normal">Uosabiamy artystów, inżynierów, rzemieślników, każdego kto chce pomóc 
                                w kształtowaniu Twojej przestrzeni. Tworzymy nowe modele. Sposoby myślenia. 
                                Kierunki działania.
                            </p>
                        </div>
                        <div className="w-1/2 p-1 md:w-full md:p-0">
                            <h4 className="text-2xl font-semibold mb-1" >idea</h4>
                            <p className="leading-snug md:leading-normal">Wychodzimy z pomocną dłonią. Pokazujemy, że każde pomieszczenie może stać się
                                funkcjonalne, piękne i wyjątkowe. Chcemy, by miejsce, w którym żyjesz było unikatowe. 
                                Pełne charakteru. Maksymalnie dopasowane do Twoich potrzeb.
                            </p>
                        </div>
                        <div className="w-1/2 p-1 md:w-full md:p-0">
                            <h4 className="text-2xl font-semibold mb-1" >ty</h4>
                            <p className="leading-snug md:leading-normal">Nie musisz być ekspertem, by stworzyć piękne i funkcjonalne wnętrze. Wystarczy mieć 
                                odwagę, wiarę w siebie i TREEO. Wykorzystamy naszą wiedzę i wspólnie wprowadzimy 
                                zmiany w Twoim otoczeniu.
                            </p>
                        </div>
                    </div>
                </div>
            </div>


            <div id="co" className="mt-12 ml-4 mr-4 md:ml-20 md:pl-6 md:mr-16 md:text-lg  ">
                <div className="">
                    <h2 className="pb-3 text-4xl font-semibold underline mb-8 md:row-span-2 md:col-span-1 ">co</h2>
                    <img src={autoreklamaRealizacja1} alt="dlaczego my, realizacja kraków" className="w-[100%] pb-8" />
                    <p className="leading-snug md:leading-normal">Pomagamy każdemu z Was w realizacji pomysłu, 
                    który później staje się idealnym miejscem.<br/>Twoim miejscem.<br/>Nasze podejście i niebanalne meble wyróżniają się na tle standardowych rozwiązań.
                    </p>
                </div>
            </div>

            <div id="dlaczego" className="text-lg">
                <div className=" mt-12 mb-8 ml-4 mr-4 md:ml-20 md:pl-6 md:mr-16">
                    <h2 className=" text-4xl font-semibold underline md:row-span-2 md:col-span-1 ">dlaczego</h2>
                </div>
                <div className="md:grid md:grid-cols-2 md:grid-rows-4 md:gap-28 md:items-center">
                    <div className="gradient2 ">
                        <img src={autoreklamaDlaczegoMy10} alt="dlaczego my, realizacja kraków" className="w-[100%] p-4" />    
                    </div>
                
                    <div className=" mt-8 ml-4 mr-4 md:ml-0 md:mr-16 md:mt-0">      
                        <h4 className="text-xl bold font-semibold pb-8" >Przeszłość</h4>
                        <p className="leading-snug md:leading-normal pb-8">Przez wiele lat żyliśmy w świecie, który zdominowany był przez masowe produkcje.</p>
                        <p className="pb-8 md:pb-8">Standardowe wnętrza. Domy, które były po prostu takie same.</p>
                    </div>
                    
                    <div className="gradient2b md:col-start-2 md:row-start-2 ">
                        <img src={autoreklamaDlaczegoMy11} alt="dlaczego my, realizacja kraków" className=" w-[100%] p-4" />   
                    </div>
                    <div className=" mt-8 ml-4 mr-4 md:ml-20 md:pl-6 md:mr-16 md:col-start-1 md:row-start-2 md:mt-0">  
                        <h4 className="text-xl bold font-semibold pb-8" >Rewolucja</h4>
                        <p className="leading-snug md:leading-normal pb-8 md:pb-8">Zmieńmy to!</p>
                    </div>


                    <div className="gradient2d ">
                        <img src={projektSzuflada} alt="kosztorys" className="w-[100%] p-4" />
                    </div>
                    <div className="mt-8 ml-4 mr-4 md:ml-0 md:mr-16 md:mt-0">
                        <h4 className="text-xl bold font-semibold pb-8" >Przyszłość</h4>
                        <p className="leading-snug md:leading-normal pb-8">Razem możemy stworzyć wnętrze. Piękne. Kreatywne. Inspirujące.</p>
                        <p className="pb-8 md:pb-8">Razem możemy stworzyć miejsce, w którym będziesz chciał żyć.</p>
                    </div>

                    <div className="gradient2c md:col-start-2 md:row-start-4 mb-16 md:m-0">
                        <img src={autoreklamaDlaczegoMy8} alt="dlaczego my, realizacja kraków" className="w-[100%] p-4" />    
                    </div>
                    <div className="mb-16 mt-8 ml-4 mr-4 md:ml-20 md:pl-6 md:mt-0 md:mr-16 md:col-start-1 md:row-start-4">
                        <h4 className="text-xl bold font-semibold pb-8" >Zaczynajmy</h4>
                        <p className="leading-snug md:leading-normal pb-8 md:pb-8">Wychodzimy naprzeciw. Z pomocną dłonią. Dołączysz ?</p>
                    </div>
                </div>
            </div>

            <div className={`${isFooterVisible ? "hidden" : "visible"}`}>
                <NavSideBar />
            </div>

            <footer id="APfooter" className=''>
                <ContactForm />
            </footer>
        </div>
        </motion.div>

    )
}

export default AboutPage;


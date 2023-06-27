import React, {useState, useEffect} from "react";
import NavBar from '../NavBar/NavBar';
import ContactForm from '../ContactPage/ContactForm';
import NavSideBar from "../NavBar/NavSideBar";
import {motion} from 'framer-motion';
import konsultacjeWzornik from './../image/konsultacjeWzornik.jpg';
import konsultacjeGrafika from './../image/konsultacjeGrafika.jpg';
import kosztorysGrafika from './../image/kosztorysGrafika.jpg';
import kosztorysProjekt from './../image/kosztorysProjekt.jpg';
import autoreklamaDlaczegoMy6 from './../image/autoreklamaDlaczegoMy6.jpg';
import realizacjaRegał from './../image/realizacja-regał.jpg'
import realizacjaGarderoba from './../image/realizacja-garderoba-biała.jpg';
import autoreklamaDlaczegoMy2 from './../image/autoreklamaDlaczegoMy2.jpg';


const WorkPage = () => {

    const [isFooterVisible, setIsFooterVisible] = useState(false);

    useEffect(() => {
        const footerElement = document.getElementById("WPfooter");
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

            
            <motion.div className="bg-dark-900 text-light w-full mt-0 z-4 relative top-0 left-0  " 
            initial = {{opacity: 0}} animate = {{opacity:1}} transition={{ease: "easeInOut", duration:1, delay:0.1}}>
            <div className={`${isFooterVisible ? "bg-light text-dark-900" : "bg-dark-900 text-light"} min-h-screen transition-colors duration-500`}>
                <div className="bg-inherit z-10 relative top-0 left-0 w-full h-screen ">
                <nav className="bg-inherit h-28 w-full">
                    <NavBar />
                </nav>
                <div className='flex flex-col w full h-[calc(100vh-112px)] top-0 left-0 pb-6 md:ml-20 md:mr-16 md:flex md:flex-row-reverse md:justify-between md:items-center md:pb-28'> 
                    <div className='ml-6 mt-0 grow flex flex-col justify-center md:ml-0 md:mr-0 md:flex-none '>
                        <h1 className="font-[serif] md:font-[Roboto] text-5xl tracking-tighter ">Projekt, realizacja, <br />każdy <br />moment <br />pomiędzy</h1>
                    </div>
                    <div className='ml-6 grow-0'>
                        <nav className="text-light ">
                            <h2 className="mb-3 font-bold">Pokaż:</h2>
                            <ul className="pb-4 block">
                                <li className=" bold mb-3 text-light underline ">
                                    <a href="#konsultacje">Wszystko</a>
                                </li>
                                <li className="text-dark-200 underline mb-1 z-2 active:text-light">
                                    <a href="#konsultacje">Konsultacje</a>
                                </li>
                                <li  id="konsultacje"  className="text-dark-200 underline mb-1 active:text-light">
                                    <a href="#kosztorys">Kosztorys</a>
                                </li>
                                <li className="text-dark-200 underline mb-1 active:text-light">
                                    <a href="#projekt">Projekt</a>
                                </li>
                                <li className="text-dark-200 underline mb-1 active:text-light">
                                    <a href="#realizacja">Realizacja</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                </div>

            <div className='text-lg leading-tight md:ml-24 md:mr-16 mt-1 ml-4 mr-4 md:grid md:grid-cols-2 md:gap-24'>
                <div className="md:col-span-1 md:row-span-1 md:col-start-1 ">
                    <div className="md:col-span-1  ">
                        <h2  className="text-4xl font-semibold underline mb-1 pb-3 md:mb-12">konsultacje</h2>
                        <p className='pb-3'>Czy nie lepiej działać zapobiegawczo, niż leczyć skutki nieprzemyślanych 
                        decyzji w trakcie realizacji projektu?
                        </p>
                    </div>
                    <img src={konsultacjeWzornik} alt="konsultacje, wzornik" className="w-[100%] pt-9 md:pt-0 pb-12 md:col-span-2 md:col-start-2 md:mt-12" />
                </div>
                <div className=" pb-3 md:col-start-2 md:row-start-1 md:row-span-2 md:mt-24 md:pt-2 ">
                    <p className='pb-3'>Każdy projekt wymaga indywidualnego podejścia. Dogłębnego zrozumienia potrzeb i wymagań. 
                        <br/>Tylko w ten sposób możemy dostarczyć odpowiedni produkt, który spełni oczekiwania. 
                        Przewyższy je !
                    </p>
                    <img src={konsultacjeGrafika} alt="konsultacje, grafika, kontakt" className="w-[100%] pb-4 md:mt-12 pt-9 md:pt-0" />
                </div>
                <div className='md:col-start-1 md:row-start-2 ' >
                    
                    <p className='pb-3'>Dialog pozwala na wymianę pomysłów i doświadczeń. 
                        Pomaga lepiej zorganizować czas. Pamiętajcie !
                    </p>
                    <p className='pb-3'> Dzięki temu, wiedza ta przełoży się na jakość i zadowolenie z efektu końcowego. 
                        Niech to będzie Waszym nawykiem i priorytetem.
                    </p>
                </div>
            </div>


            <div id="kosztorys"  className='mt-24 ml-4 mr-4 text-lg leading-tight md:ml-24 md:mr-16 md:grid md:gap-24 md:gird-cols-2 md:grid-rows-4'>
                <div  className="md:row-span-4 md:cols-span-1">
                
                    <h2  className="text-4xl font-semibold underline mb-1 mt-1 pb-3 md:mb-12">kosztorys</h2>
                    <p className='pb-3 md:pb-8'>Czy nie warto poświęcić czas i energię na przygotowanie kosztorysu i szczegółowej wyceny?
                    </p>
                    <img src={kosztorysGrafika} alt="kosztorys" className="w-[100%] pb-12 md:mt-12 pt-9 md:pt-0" />
                </div>
                <div className="md:row-start-2 md:row-span-2 md:col-start-2">
                    <p className='pb-12'>Oczywiście, dla nas jest to etap pracy, której nie widać. Która wydaje się być błaha.
                    </p>
                    
                    <img src={kosztorysProjekt} alt="projekt" className="z-0 w-[100%] pb-12 [clip-path:circle(40%_at_45%_40%)]" />
                    
                </div>
                <div className="md:col-start-2 md:row-start-4">
                    <p className='pb-3'> Zadbajmy o to, by każdy projekt był dokładnie zaplanowany ! Oszacowany ! 
                        Nam takie podejście do pracy daje większą kontrolę nad projektem. 
                        Tobie pozwala uniknąć niepotrzebnego stresu.
                    </p>
                </div>
            </div>


            <div  id="projekt"  className='mt-24 ml-4 mr-4 text-lg leading-tight md:ml-24 md:mr-16 md:grid md:gap-24 md:gird-cols-2'>
                <div  className="md:row-span-4 md:col-span-1">
                    <h2  className="text-4xl font-semibold underline mb-1 mt-1 pb-3 md:mb-12">projekt</h2>
                    <p className='pb-3 md:pb-12'>Dlaczego musimy się ograniczać do szablonów i schematów?
                    </p>
                    <img src={autoreklamaDlaczegoMy6} alt="dlaczego my, realizacja kraków" className="w-[100%] pb-12 md:pb-3 pt-9 md:pt-0" />
                    {/* <img src={projektSzafa} alt="kosztorys" className="w-[100%] pb-12 " /> */}
                </div>
                <div className="md:row-span-3 md:col-start-2 md:row-start-2">
                    <p className='pb-3 md:pb-12'>Praca stolarza to nie tylko cięcie i wiercenie. To również, myślenie, projektowanie, 
                        wykorzystywanie materiałów. Projekt wymaga żmudnego i czasochłonnego zaangażowania.
                    </p>
                    <img src={autoreklamaDlaczegoMy2} alt="dlaczego my, realizacja kraków" className="w-[100%] pb-12 pt-9 md:pt-0" />    
                
                    <p className='pb-3'>Na końcu, chodzi nam o zadowolenie Klienta. Jego pełne zrozumienie procesu wykonania mebla. 
                        Chcemy przekazać mu wiedzę. Pokazać alternatywy.
                    </p>
                    <p className='pb-3'>Świat wymaga byśmy działali „szybko i tanio". Nie jest to właściwe podejście !
                    </p>
                </div>
            </div>

            <div id="realizacja" className='mt-24 ml-4 mr-4 text-lg leading-tight md:ml-24 md:mr-16 md:grid md:gap-24 md:gird-cols-2 md:grid-rows-3'>
                <div  className="md:row-span-4 md:cols-span-1 ">
                    <h2  className="text-4xl font-semibold underline mb-1 mt-1 pb-3 md:mb-12">realizacja</h2>
                    <p className='pb-3'>Odpowiedzialność za usługę wymaga precyzji !</p> 
                    <p className='pb-3 md:mb-12'>Nasza praca opiera się na realizacjach na wymiar. Dlaczego to takie ważne ? </p>
                    <img src={realizacjaRegał} alt="kosztorys" className="w-[100%] pb-12 md:pb-0 pt-9 md:pt-0" />
                </div>
                <div className="md:row-span-2 md:col-start-2 md:row-start-2 md:self-end">
                    <p className='pb-3'>Każdy Klient jest inny. Ma swoje indywidualne potrzeby i oczekiwania. 
                        My wykorzystujemy przestrzeń, materiał i wykończenie. Realizacja staje się personalna i unikatowa.
                    </p>
                    <img src={realizacjaGarderoba} alt="kosztorys" className="w-[100%] pb-12 md:pb-12 pt-9 md:pt-0" />
                   
                    <p className='pb-3 md:pb-0'>Inwestycja w trwałość, jakość i funkcjonalność.
                    </p>
                    </div>
                
            </div>
                <div className={`${isFooterVisible ? "hidden" : "visible color-light"}`}>
                    <NavSideBar />
                </div>
                <footer id='WPfooter'>
                    <ContactForm />
                </footer>
        </div>
        </motion.div>
    )
};

export default WorkPage;


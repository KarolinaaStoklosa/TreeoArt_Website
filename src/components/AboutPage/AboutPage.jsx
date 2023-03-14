import React from "react";
import NavBar from "../NavBar/NavBar";
import ContactForm from "../ContactPage/ContactForm";
import {motion} from 'framer-motion'

const AboutPage = () => {
    return (
       
        
        <motion.div className="z-4 relative top-0 left-0 mt-0 bg-light text-dark-900" 
        initial = {{opacity: 0}} animate = {{opacity:1}} transition={{ease: "easeIn", duration:0.5, delay:0.1, type:'spring'}} >
        <div className="z-4 relative top-0 left-0 w-full h-screen mt-0">
            <NavBar />
            <div className='md:ml-20 md:mr-16 md:flex md:flex-row-reverse md:justify-between md:items-center'> 
                <div className="md:mr-0">
                    <h1 className=" font-[Roboto] text-5xl tracking-tighter ml-6 pt-20 pb-12 mt-28 ">Kreatywni profesjonaliści</h1>
                    <h2 className="font-[Roboto] text-xl leading-6 tracking-tighter ml-6 pb-12">którzy z pasją i zaangażowaniem <br />tworzą wyjątkowe meble <br />dopasowane do Twoich potrzeb</h2>
                </div>
                <nav className= "ml-6 md:mt-28 md:pt-10">
                    <h2 className="mb-3 font-bold">Pokaż:</h2>
                    <ul className="pb-4 underline ">
                        <li className=" bold mb-3 ">
                            <a href="#konsultacje">Wszystko</a>
                        </li>
                        <li className="opacity-50 mb-1">
                            <a href="#konsultacje">Kto</a>
                        </li>
                        <li className="opacity-50 mb-1">
                            <a href="#kosztorys">Co</a>
                        </li>
                        <li className="opacity-50 mb-1">
                            <a name="#projekt">Dlaczego</a>
                        </li>
                 </ul>
                </nav>
            </div>
        </div>

            <div className="ml-4 mr-4 bg-red-800 md:ml-20 md:pl-6 md:mr-16  ">
                <div className="md: grid md:grid-cols-3 md:gap-4 md:grid-rows-2">
                    <h2 className="text-2xl font-semibold underline mb-1 mt-1 md:row-span-2 md:col-span-1 ">kto</h2>
                    <div className="flex flex-wrap md:ml-6 md:row-span-1 md:col-span-2">
                        <div className="w-1/2 p-1 md:p-0 md:col-span-1">
                            <h4 className="text-xl font-semibold mb-1 mt-1" >my</h4>
                            <p className="leading-snug md:leading-normal">Uosabiamy artystów, inżynierów, rzemieślników, każdego kto chce pomóc 
                                w kształtowaniu Twojej przestrzeni. Tworzymy nowe modele. Sposoby myślenia. 
                                Kierunki działania.
                            </p>
                        </div>
                        <div className="w-1/2 p-1">
                            <h4 className="text-xl font-semibold mb-1 mt-1" >idea</h4>
                            <p className="leading-snug md:leading-normal">Wychodzimy z pomocną dłonią. Pokazujemy, że każde pomieszczenie może stać się
                                funkcjonalne, piękne i wyjątkowe. Chcemy by miejsce, w którym żyjesz było unikatowe. 
                                Pełne charakteru. Maksymalnie dopasowane do Twoich potrzeb.
                            </p>
                        </div>
                        <div className="w-1/2 p-1">
                            <h4 className="text-xl font-semibold mb-1 mt-1" >ty</h4>
                            <p className="leading-snug md:leading-normal">Nie musisz być ekspertem, by stworzyć piękne i funkcjonalne wnętrze. Wystarczy mieć 
                                odwagę, wiarę w siebie i TREEO. Wykorzystamy naszą wiedzę i wspólnie wprowadzimy 
                                zmiany w Twoim otoczeniu.
                            </p>
                        </div>
                    </div>
                    </div>
                </div>

            <ContactForm />
        </motion.div>

    )
}

export default AboutPage;


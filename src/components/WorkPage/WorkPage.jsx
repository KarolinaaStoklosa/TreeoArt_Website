import React from 'react';
import NavBar from '../NavBar/NavBar';
import ContactForm from '../ContactPage/ContactForm';
import {motion} from 'framer-motion'

const WorkPage = () => {
    return (
        
            
            <motion.div className="bg-dark-900 text-light w-full mt-0 z-4 relative top-0 left-0  " 
            initial = {{opacity: 0}} animate = {{opacity:1}} transition={{ease: "easeIn", duration:0.5, delay:0.1, type:'spring'}}>
                <div className="bg-dark-900 text-light z-4 relative top-0 left-0 w-full h-screen ">
                <NavBar />
                <div className='md:ml-20 md:mr-16 md:flex md:flex-row-reverse md:justify-between md:items-center'> 
                <h1 className="font-[Roboto] text-5xl tracking-tighter text-light ml-6 pt-20 pb-20 mt-28 ">Projekt, realizacja, <br />każdy <br />moment <br />pomiędzy</h1>
                <nav className="text-light ml-6 md:mt-28">
                    <h2 className="mb-3 font-bold">Pokaż:</h2>
                    <ul className="pb-4 ">
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

                <div className="ml-4 mr-4 bg-red-800">
                    <h2  className="text-2xl font-semibold underline mb-1 mt-1">konsultacje</h2>
                    <p>Czy nie lepiej działać zapobiegawczo, niż leczyć skutki nieprzemyślanych 
                        decyzji w trakcie realizacji projektu?
                    </p>
                </div>
                <div className="ml-4 mr-4 bg-blue-800">
                    <p>Każdy projekt wymaga indywidualnego podejścia. Dogłębnego zrozumienia potrzeb i wymagań. 
                        Tylko w ten sposób możemy dostarczyć odpowiedni produkt. Produkt, który spełni oczekiwania. 
                        Przewyższy je !
                    </p>
                </div>
                <div id="kosztorys" className="ml-4 mr-4 bg-green-800">
                    
                    <p>Dialog pozwala na wymianę pomysłów i doświadczeń. 
                        Pozwala lepiej zorganizować czas. Pamiętajcie !
                    </p>
                    <p > Dzięki temu, wiedza ta przełoży się na jakość i zadowolenie z efektu końcowego. 
                        Niech to będzie Waszym nawykiem i priorytetem.
                    </p>
                </div>

                <div  className="ml-4 mr-4 bg-red-800">
                
                    <h2  className="text-2xl font-semibold underline mb-1 mt-1">kosztorys</h2>
                    <p>Czy nie warto poświęcić czas i energię na przygotowanie kosztorysu i szczegółowej wyceny?
                    </p>
                </div>
                <div id="projekt" className="ml-4 mr-4 bg-blue-800">
                    <p>Oczywiście, dla nas jest to etap pracy, której nie widać. Która wydaje się być błaha.
                    </p>
                </div>
                <div className="ml-4 mr-4 bg-green-800">
                    <p>Zadbajmy o to, by każdy projekt był dokładnie zaplanowany ! Oszacowany ! 
                        Nam takie podejście do pracy daje większą kontrolę nad projektem. 
                        Tobie pozwala uniknąć niepotrzebnego stresu.
                    </p>
                </div>

                <div  className="ml-4 mr-4 bg-red-800">
                    <h2  className="text-2xl font-semibold underline mb-1 mt-1">projekt</h2>
                    <p>Dlaczego musimy się ograniczać do szablonów i schematów?
                    </p>
                </div>
                <div className="ml-4 mr-4 bg-blue-800">
                    <p>Praca stolarza to nie tylko cięcie i wiercenie. To również, myślenie, projektowanie, 
                        wykorzystywanie materiałów. Projekt wymaga żmudnego i czasochłonnego zaangażowania.
                    </p>
                </div>
                <div id="realizacja" className="ml-4 mr-4 bg-green-800">
                    <p>Na końcu, chodzi nam o zadowolenie Klienta. Jego pełne zrozumienie procesu wykonania mebla. 
                        Chcemy przekazać mu wiedzę. Pokazać alternatywy.
                    </p>
                    <p>Świat wymaga byśmy działali „szybko i tanio. Nie jest to właściwe podejście !
                    </p>
                </div>

                <div  className="ml-4 mr-4 bg-red-800">
                    <h2  className="text-2xl font-semibold underline mb-1 mt-1">realizacja</h2>
                    <p>Odpowiedzialność za usługę wymaga precyzji !</p> 
                    <p>Nasza praca opiera się na realizacjach na wymiar. Dlaczego to takie ważne ? </p>
                </div>
                <div className="ml-4 mr-4 bg-blue-800">
                    <p>Każdy Klient jest inny. Ma swoje indywidualne potrzeby i oczekiwania. 
                        My wykorzystujemy przestrzeń, materiał i wykończenie. Realizacja staje się personalna i unikatowa.
                    </p>
                </div>
                <div className="ml-4 mr-4 bg-green-800">
                    <p>Inwestycja w trwałość, jakość i funkcjonalność.
                    </p>
                </div>

                <ContactForm />
            </motion.div>
    )
};

export default WorkPage;
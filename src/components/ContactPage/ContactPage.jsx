import React from "react";
import NavBar from "../NavBar/NavBar";
import NavSideBar from '../NavBar/NavSideBar';
import { motion } from "framer-motion";
import gradientLoop from '../HomePage/image/gradientLoop.mp4';

const ContactPage = () => {
    return (
      
        <motion.div initial =  {{opacity: 0}} animate = {{opacity:1}} transition={{ease: "easeInOut", duration:1, delay:0.1}}>
            <div className="bg-light text-dark-900 h-[calc(100vh-112px)] w-full relative">
                <NavBar />
            
                <div className="w-full mt-24 relative flex justify-center items-center z-0">
                    <div className="z-0 w-[500px] h-auto md:h-[500px] md:w-auto rounded-full overflow-hidden object-cover">
                        <video autoPlay muted loop className="h-full w-full object-cover">
                            <source src={gradientLoop} type="video/mp4" />
                        </video>
                    </div>
                    <div className="ml-6 md:ml-20 md:pl-6 absolute top-0 left-0 text-dark-900">
                        <div className="z-0 bg-inherit w-full h-[calc(100vh-80px)] text-inherit font-[serif] md:font-[Roboto]" >
                            <div className="z-0 md:pl-20 h-[calc(100vh-112px)] flex flex-col justify-center md:flex-row md:justify-between md:grid md:grid-cols-6 md:grid-rows-2 md:gap-10 w-full" >
                                <div className="w-full grow flex flex-col justify-center md:self-end md:col-span-6">
                                    <h1 className=" text-5xl tracking-tighter ml-6 md:col-span-3 md:row-start-1 md:ml-0">Jesteśmy gotowi. <br/>Twoja kolej.</h1>
                                </div>
                                <div className="w-full md:row-start-2 md:col-start-1  md:pt-20 md:items-end">
                                    <h3 className=" text-xl tracking-tighter ml-6 pb-2 md:ml-0">Napisz.</h3>
                                    <h2 className="text-2xl underline tracking-tighter ml-6 pb-2 md:ml-0">kontakt@treeoart.pl </h2>
                                </div>
                                <div className="md:row-start-2 md:pt-20 md:col-start-3 md:col-span-2">
                                    <h3 className=" text-xl tracking-tighter ml-6 pb-2 md:ml-0">Zadzwoń.</h3>
                                    <h2 className="text-2xl underline tracking-tighter ml-6 pb-2 md:ml-0">663 906 214 </h2>
                                </div>
                                <div className="md:row-start-2 md:pt-20 md:col-start-5">
                                    <h3 className=" text-xl tracking-tighter ml-6 pb-2 md:ml-0">Odwiedź.</h3>
                                    <a target="_blank" href="https://www.facebook.com/profile.php?id=100087606938742" alt="facebook" >
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 ml-6 inline md:ml-0" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                                        </svg>
                                    </a>
                                    <a target="_blank" href="https://www.instagram.com/treeo.art/?hl=en" alt="instagram" >
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 inline ml-6 md:ml-4" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    
                    </div>
                </div>

            </div>
            <NavSideBar />
            {/* <div className="fixed bottom-0 right-0 m-4">
                <button className="gradient2 hover:from-pink-500 hover:to-yellow-500 text-light rounded-full p-2 shadow-lg">
                    <FaGift size={24} color="#0E0906" />
                </button>
            </div> */}
        </motion.div>



      
    )
}

export default ContactPage;

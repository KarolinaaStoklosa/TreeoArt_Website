import React from "react";
import NavBar from "../NavBar/NavBar";
import {motion} from 'framer-motion'

const GalleryPage = () => {
    return (
                
        <motion.div className="bg-dark-900 w-full mt-0 text-light relative top-0 left-0 z-4" 
        initial = {{opacity: 0}} animate = {{opacity:1}} transition={{ease: "easeIn", duration:0.5, delay:0.1, type:'spring'}}>
            <NavBar/>
            <div className="md:ml-24 md:mr-16 md:flex md:flex-row-reverse md:justify-between">
                <h1 className="font-[Roboto] text-5xl tracking-tighter ml-6 pt-20 pb-20 mt-28 md:mt-28 md:pt-20 md:ml-0">Unikalne. <br />Idealne.</h1>
                <h2 className="font-[Roboto] text-2xl  tracking-tighter ml-6 pb-12 md:mt-28 md:pt-20 md:ml-0">Dopasowane <br/>do Twojego stylu.</h2>
            </div>
        </motion.div>
        
    )
}

export default GalleryPage;
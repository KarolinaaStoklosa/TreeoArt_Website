import React from 'react';
import ContactForm from '../ContactPage/ContactForm';
import NavBar from '../NavBar/NavBar';
import {motion} from 'framer-motion'

const HomePage = () => {

    return (
        <>
        
        <motion.div className="bg-light h-screen w-full text-dark-900 z-4 relative top-28 left-0"
        initial = {{opacity: 0}} animate = {{opacity:1}} transition={{ease: "easeIn", duration:0.5, delay:0.1, type:'spring'}}>
            <NavBar />
            <div className='mt-28'> HOME PAGE</div>
                       
            <ContactForm />
            </motion.div>
        </>
    )
}

export default HomePage;
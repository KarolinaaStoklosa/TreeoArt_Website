import React from "react";
import NavBar from "../NavBar/NavBar";
import ContactForm from "./ContactForm";
import { motion } from "framer-motion";
import { FaGift } from 'react-icons/fa';

const ContactPage = () => {
    return (
      
        <motion.div initial =  {{opacity: 0}} animate = {{opacity:1}} transition={{ease: "easeInOut", duration:1, delay:0.1}}>
            <div className="bg-light text-dark-900 h-screen">
                <NavBar />
                <ContactForm />
            </div>
            <div className="fixed bottom-0 left-0 m-4">
                <button className="gradient2 hover:from-pink-500 hover:to-yellow-500 text-light rounded-full p-2 shadow-lg">
                    <FaGift size={24} color="#0E0906" />
                </button>
            </div>
        </motion.div>

      
    )
}

export default ContactPage;
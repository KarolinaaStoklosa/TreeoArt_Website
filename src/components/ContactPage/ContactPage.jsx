import React from "react";
import NavBar from "../NavBar/NavBar";
import ContactForm from "./ContactForm";
import { motion } from "framer-motion";

const ContactPage = () => {
    return (
        <>
        <motion.div initial =  {{opacity: 0}} animate = {{opacity:1}} transition={{ease: "easeIn", duration:0.5, delay:0.1, type:'spring'}}>
            <NavBar />
                <ContactForm />
            </motion.div>

        </>
    )
}

export default ContactPage;
import React from 'react';
import { FaGift } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa'
import { FaPhoneAlt } from 'react-icons/fa'

const NavSideBar = () => {
 
  return (
    <>
        <div className="fixed bottom-0 right-0 m-4 mr-2 animate-div">
            <button className="gradient2 hover:from-pink-500 hover:to-yellow-500 text-inherit rounded-full p-2 shadow-lg">
                <FaGift size={24} color="text-inherit" />
            </button>
        </div>
        <div className="invisible md:visible fixed bottom-0 left-0 w-[6.5rem] md:flex md:flex-col md:items-center md:wrap">
            <button className="text-inherit p-4">
                <FaFacebook size={36} color="text-inherit" />
            </button>
            <button className="text-inherit p-4 pt-0">
                <FaInstagram size={36} color="text-inherit" />
            </button>
            <button className="text-inherit p-4 pt-0">
                <FaPhoneAlt size={28} color="text-inherit" />
            </button>
        </div>
    </>
  );
}

export default NavSideBar;

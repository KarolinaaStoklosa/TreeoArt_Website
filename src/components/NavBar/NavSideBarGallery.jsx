import React from 'react';
import { FaGift } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa'
import { FaPhoneAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NavSideBarGallery = () => {
 
  return (
    <>
        
        <div className="invisible md:visible fixed bottom-8 left-0 w-[6.5rem] md:flex md:flex-col md:items-center md:wrap">
            <div className="p-4 animate-div">
                <Link to="/game">
                    <button className="gradient2 hover:from-pink-500 hover:to-yellow-500 text-inherit rounded-full p-2 shadow-lg">
                        <FaGift size={24} color="text-inherit" />
                    </button>
                </Link>
            </div>
            <a target="_blank" href="https://www.facebook.com/profile.php?id=100087606938742" alt="facebook" >
                <button className="text-inherit p-4 pb-6">
                    <FaFacebook size={32} color="text-inherit" />
                </button>
            </a>
            <a target="_blank" href="https://www.instagram.com/treeo.art/?hl=en" alt="instagram" >
                <button className="text-inherit p-4 pb-6 pt-0">
                    <FaInstagram size={32} color="text-inherit" />
                </button>
            </a>
            <Link to="/wizytowka">
                <button className="text-inherit p-4 pb-6 pt-0">
                    <FaPhoneAlt size={26} color="text-inherit" />
                </button>
            </Link>
        </div>

        <div className="md:invisible visible fixed bottom-10 left-0 w-[6.5rem]">
            <div className="p-4 pb-6 animate-div">
                <Link to="/game">
                    <button className="gradient2 hover:from-pink-500 hover:to-yellow-500 text-inherit rounded-full p-2 shadow-lg">
                        <FaGift size={24} color="text-inherit" />
                    </button>
                </Link>
            </div>
        </div>
    </>
  );
}

export default NavSideBarGallery;

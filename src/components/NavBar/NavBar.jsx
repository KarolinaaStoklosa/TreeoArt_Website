import React from 'react';
import {useState} from 'react';
import { Link } from 'react-router-dom';
import logoTreeo from './../image/logoTreeoArt.png';


const NavBar = () => {

    const [isShown, setIsShown] = useState(false);
 
    const handleClick = event => {
        // toggle shown state
        setIsShown(current => !current);
    };


    return (
        <>    
            <div className={isShown?'fixed top-0 left-0 z-10 flex direction-column justify-between items-center w-full h-22 bg-inherit' 
                        : "fixed top-0 left-0 z-10 flex direction-column justify-between items-center w-full h-22 bg-inherit"}>
                <Link to='/'>
                    <img src={logoTreeo} alt="logo" className="h-20 ml-4 mt-2 z-20 md:ml-24 "/>
                </Link>
                <div >
                    <span className="z-20 text-inherit mr-6 font-serif tracking-tighter text-2xl cursor-pointer md:mr-16" onClick={handleClick}>menu</span> 
    
                </div>
            </div>
                           
        
            <div className={isShown?"fixed top-0 left-0 w-full h-screen z-20" 
                                    : "fixed top-0 left-0 z-10 w-0 h-0 invisible"}>
            <div className={isShown? "z-100 absolute top-0 left-0 w-full h-screen transition-[clip-path] duration-300 ease-in [clip-path:circle(190%_at_93%_5%)] bg-dark-900" 
                                    : "z-10 relative top-0 left-0 w-full h-22 transition-[clip-path] duration-300 ease-in [clip-path:circle(0%_at_93%_5%)]" } >
                <div className="relative z-100 flex direction-column justify-between items-center w-100 h-22 bg-dark-900 md:ml-24 md:mr-16">
                    <Link to='/'>
                        <img src={logoTreeo} alt="logo" className="h-20 ml-4 mt-2 md:ml-0"/>
                    </Link>
                    <div>
                        <span className="text-light mr-6 font-serif tracking-tighter text-2xl cursor-pointer" onClick={handleClick} >zamknij</span>    
                    </div>
                </div>
                <ul className="bg-dark-900 h-screen w-full flex flex-col wrap z-100 relative md:pl-24
                                font-[serif] md:font-[Roboto] text-bold text-6xl tracking-[-.075em] md:tracking-tighter text-light text-left md:ml-24">
                    <li className="mt-24 ml-6 cursor-pointer md:ml-0">
                        <Link to='/fundamenty'>Fundamenty</Link>
                    </li>
                    <li className="mt-6 ml-6 cursor-pointer md:ml-0">
                        <Link to='/autoreklama'>Autoreklama</Link>
                    </li>
                    <li className="mt-6 ml-6 cursor-pointer md:ml-0">
                        <Link to='/tworczosc'>Twórczość</Link>
                    </li>
                    <li className="mt-6 ml-6 cursor-pointer md:ml-0">
                        <Link to='/wizytowka'>Wizytówka</Link>
                    </li> 
                </ul>
        </div>
        </div>
        </>
    )
};

export default NavBar;



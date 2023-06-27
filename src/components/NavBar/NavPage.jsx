import React from 'react';
import { Link } from "react-router-dom";

const NavPage = () => {
    return (
        <>
            <ul className='bg-dark-900 w-full h-screen flex flex-col wrap
            font-[serif] md:font-[Roboto] text-bold text-6xl tracking-[-.075em] md:tracking-tighter text-light text-left'>
                <li className="mt-24 ml-6 cursor-pointer">
                    <Link to='/fundamenty'>Fundamenty</Link>
                </li>
                <li className="mt-6 ml-6 cursor-pointer">
                    <Link to='/autoreklama'>Autoreklama</Link>
                </li>
                <li className="mt-6 ml-6 cursor-pointer">
                    <Link to='/tworczosc'>Twórczość</Link>
                </li>
                <li className="mt-6 ml-6 cursor-pointer">
                    <Link to='/wizytowka'>Wizytówka</Link>
                </li>
            </ul>

        </>
    )
}
export default NavPage;
import {useState}from "react";

import levelCardAll from '../image/LevelCardAll.jpeg';
import levelExit from '../image/levelExit.jpeg';
import levelExitMD from '../image/levelExitMD.png';
import level01SM from '../image/POZIOM1TEL.jpeg';
import level01MD from '../image/POZIOM1PC.jpeg';
import level02SM from '../image/POZIOM2TEL.jpeg';
import level02MD from '../image/POZIOM2PC.jpeg';
import level03SM from '../image/POZIOM3TEL.jpeg';
import level03MD from '../image/POZIOM3PC.jpeg';
import level04SM from '../image/POZIOM4TEL.jpeg';
import level04MD from '../image/POZIOM4PC.jpeg';
import level05SM from '../image/POZIOM5TEL.jpeg';
import level05MD from '../image/POZIOM5PC.jpeg';



const LevelCard = () => {

    const [isOpenL01, setIsOpenL01] = useState(false);
    const openLevel01 = event => {
        // toggle shown state
        setIsOpenL01(current => !current);
    };
    const [isOpenL02, setIsOpenL02] = useState(false);
    const openLevel02 = event => {
        // toggle shown state
        setIsOpenL02(current => !current);
    };
    const [isOpenL03, setIsOpenL03] = useState(false);
    const openLevel03 = event => {
        // toggle shown state
        setIsOpenL03(current => !current);
    };
    const [isOpenL04, setIsOpenL04] = useState(false);
    const openLevel04 = event => {
        // toggle shown state
        setIsOpenL04(current => !current);
    };
    const [isOpenL05, setIsOpenL05] = useState(false);
    const openLevel05 = event => {
        // toggle shown state
        setIsOpenL05(current => !current);
    };
    
    
    return (
        <>
            <div className="relative m-0">
            <img src={levelCardAll} alt="exit" className="" />
            <div className="ml-[10%] mr-[10%] mt-[20%] mb-[12%] absolute inset-0 grid grid-cols-12  grid-rows-6">
                <button className="pointer-cursor row-start-1 row-span-3 col-start-1 col-span-2" onClick={openLevel01}></button>
                <button className="pointer-cursor row-start-4 row-span-2 col-start-1 col-span-3"onClick={openLevel01}></button>
                {isOpenL01 &&
                    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-20 bg-black md:bg-[#231f20]">
                        <div className="relative">
                            <img src={level01MD} alt="Nagrody dla 1 poziomu" className="hidden md:block h-[90vh] w-[90vw] object-contain md:inset-0 z-0 md:z-20 md:visible" />
                            <img src={level01SM} alt="Nagrody dla 1 poziomu" className="block md:hidden h-full w-full" />
    
                        </div>
                        <button onClick={openLevel01} className="pointer-cursor absolute right-0 top-0 md:top-5 md:right-5 md:flex md:justify-end ">
                            <img src={levelExitMD} alt="przycisk zamykania karty" className="w-[20%] self-end hidden md:block" />
                            <img src={levelExit} alt="przycisk zamykania karty" className="md:hidden block" />
                        </button>
                    </div> 
                }


                <button className="pointer-cursor row-start-1 row-span-3 col-start-3 col-span-3" onClick={openLevel02}></button>
                <button className="pointer-cursor row-start-4 row-span-2 col-start-4 col-span-1"onClick={openLevel02}></button>
                {isOpenL02 &&
                    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-20 bg-black md:bg-[#231f20]">
                        <div className="relative">
                            <img src={level02MD} alt="Nagrody dla 2 poziomu" className="hidden md:block h-[90vh] w-[90vw] object-contain md:inset-0 z-0 md:z-20 md:visible" />
                            <img src={level02SM} alt="Nagrody dla 2 poziomu" className="block md:hidden h-full w-full object-contain" />
    
                        </div>
                        <button onClick={openLevel02} className="pointer-cursor absolute right-0 top-0 md:top-5 md:right-5 md:flex md:justify-end ">
                            <img src={levelExitMD} alt="przycisk zamykania karty" className="w-[20%] self-end hidden md:block" />
                            <img src={levelExit} alt="przycisk zamykania karty" className="md:hidden block" />
                        </button>
                    </div> 
                }
            
                <button className="pointer-cursor row-start-1 row-span-1 col-start-6 col-span-1" onClick={openLevel03}></button>
                <button className="pointer-cursor row-start-2 row-span-2 col-start-6 col-span-2"onClick={openLevel03}></button>
                <button className="pointer-cursor row-start-4 row-span-2 col-start-5 col-span-3"onClick={openLevel03}></button>
                {isOpenL03 &&
                    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-20 bg-black md:bg-[#231f20]">
                        <div className="relative">
                            <img src={level03MD} alt="Nagrody dla 3 poziomu" className="hidden md:block h-[90vh] w-[90vw] object-contain md:inset-0 z-0 md:z-20 md:visible" />
                            <img src={level03SM} alt="Nagrody dla 3 poziomu" className="block md:hidden h-full w-full object-contain" />
                    
                        </div>
                        <button onClick={openLevel03} className="pointer-cursor absolute right-0 top-0 md:top-5 md:right-5 md:flex md:justify-end">
                            <img src={levelExitMD} alt="przycisk zamykania karty" className="w-[20%] self-end hidden md:block" />
                            <img src={levelExit} alt="przycisk zamykania karty" className="md:hidden block" />
                        </button>
                    </div> 
                }
            
                <button className="pointer-cursor row-start-1 row-span-1 col-start-7 col-span-4" onClick={openLevel04}></button>
                <button className="pointer-cursor row-start-2 row-span-4 col-start-8 col-span-2"onClick={openLevel04}></button>
                {isOpenL04 &&
                    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-20 bg-black md:bg-[#231f20]">
                        <div className="relative">
                            <img src={level04MD} alt="Nagrody dla 4 poziomu" className="hidden md:block h-[90vh] w-[90vw] object-contain md:inset-0 z-0 md:z-20 md:visible" />
                            <img src={level04SM} alt="Nagrody dla 4 poziomu" className="block md:hidden h-full w-full object-contain" />
                    
                        </div>
                        <button onClick={openLevel04} className="pointer-cursor absolute right-0 top-0 md:top-5 md:right-5 md:flex md:justify-end">
                            <img src={levelExitMD} alt="przycisk zamykania karty" className="w-[20%] self-end hidden md:block" />
                            <img src={levelExit} alt="przycisk zamykania karty" className="md:hidden block" />
                        </button>
                    </div> 
                }
                <button className="pointer-cursor row-start-1 row-span-1 col-start-11 col-span-1" onClick={openLevel05}></button>
                <button className="pointer-cursor row-start-2 row-span-2 col-start-10 col-span-2"onClick={openLevel05}></button>
                <button className="pointer-cursor row-start-4 row-span-2 col-start-10 col-span-3"onClick={openLevel05}></button>
                {isOpenL05 &&
                    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-20 bg-black md:bg-[#231f20]">
                        <div className="relative">
                            <img src={level05MD} alt="Nagrody dla 5 poziomu" className="hidden md:block h-[90vh] w-[90vw] object-contain md:inset-0 z-0 md:z-20 md:visible" />
                            <img src={level05SM} alt="Nagrody dla 5 poziomu" className="block md:hidden h-full w-full object-contain" />
                    
                        </div>
                        <button onClick={openLevel05} className="pointer-cursor absolute right-0 top-0 md:top-5 md:right-5 md:flex md:justify-end">
                            <img src={levelExitMD} alt="przycisk zamykania karty" className="w-[20%] self-end hidden md:block" />
                            <img src={levelExit} alt="przycisk zamykania karty" className="md:hidden block" />
                        </button>
                    </div> 
                }

            </div>    
            </div>
        </>
            
    )
}

export default LevelCard;

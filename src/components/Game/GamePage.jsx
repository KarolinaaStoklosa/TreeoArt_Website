import { useState, useRef, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";
import baner from '../image/baner.jpeg'
import zasadyGrySM from '../image/ZasadyGrySM.jpeg';
import zasadyGryMD from '../image/ZasadyGryMD.jpeg';
import zasadyGry from '../image/zasadyGry.mp4'
import exitButton from '../image/ExitButton.png'
import emotkaGif from '../image/emotka.mp4';
import emotkaStart from '../image/emotkaStart.mp4';
import startGry from '../image/startGry.mp4'
import LevelCard from "./LevelCard";

const GamePage = () => {
    const [isShown, setIsShown] = useState(false);
    const gameRulesRef = useRef(null);
    const gameStartRef = useRef(null);

    const handleClick = () => {
        setIsShown(current => !current);
      };

    useEffect(() => {
        if (isShown) {
            gameRulesRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [isShown]);
    
    const [isStart, setIsStart] = useState(false);
    
    const handleStart = () => {
        setIsStart(current => !current);
    };

    useEffect(() => {
        if (isStart) {
            gameStartRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [isStart]);


    const navigate = useNavigate();

    const handleExit = () => {
        navigate("/wizytowka");
    };

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ ease: "easeInOut", duration: 1, delay: 0.1 }}>
            <div className="bg-black text-light h-screen w-full relative flex flex-col custom-cursor">
                <button onClick={handleExit} className="relative pointer-cursor">
                    <img src={exitButton} alt="exit" className="absolute top-0 right-0 w-12 md:w-24 pointer-cursor" disablePictureInPicture onClick={handleExit} />
                </button>
                <img src={baner} alt="kosztorys" className="w-[100%]" />
                <div className={isShown ? "flex flex-row justify-center" : "flex flex-row justify-center flex-grow"}>
                    <div className="w-[150px] h-auto md:h-[200px] md:w-auto inline-block pointer-cursor" onClick={handleClick}>
                        <video autoPlay muted loop className="h-full w-full" controlsList="nodownload" disablePictureInPicture>
                            <source src={zasadyGry} type="video/mp4" />
                        </video>
                    </div>
                    <div className="w-[150px] h-auto md:h-[200px] md:w-auto inline-block" onClick={handleClick}>
                        <video autoPlay muted loop className="h-full w-full" controlsList="nodownload" disablePictureInPicture>
                            <source src={emotkaGif} type="video/mp4" />
                        </video>
                    </div>
                </div>
                <div ref={gameRulesRef} className="bg-black mt-8">
                    <div className={isShown ? "w-[100%] h-auto hidden md:block" : "hidden"}>
                        <img src={zasadyGryMD} alt="kosztorys" className="w-[100%]" disablePictureInPicture />
                    </div>
                    <div className={isShown ? "w-[100%] h-auto md:hidden" : "hidden"}>
                        <img src={zasadyGrySM} alt="kosztorys" className="w-[100%]" disablePictureInPicture />
                    </div>
                </div>

                <div className={isShown ? "flex items-center justify-evenly md:flex md:flex-row md:justify-center bg-black p-10" : "hidden"}>
                    <div className="w-[150px] h-auto md:h-[200px] md:w-auto inline-block" onClick={handleStart}>
                        <video autoPlay muted loop className="h-full w-full" controlsList="nodownload" disablePictureInPicture>
                            <source src={emotkaStart} type="video/mp4" />
                        </video>
                    </div>
                    <div className="w-[150px] h-auto md:h-[200px] md:w-auto inline-block pointer-cursor" onClick={handleStart}>
                        <video autoPlay muted loop className="h-full w-full" controlsList="nodownload" disablePictureInPicture>
                            <source src={startGry} type="video/mp4" />
                        </video>
                    </div>
                </div>

                <div className={isStart && isShown ? "" : "hidden"} ref={gameStartRef}>
                    <LevelCard />
                </div>
            </div>
        </motion.div>
    );
}

export default GamePage;

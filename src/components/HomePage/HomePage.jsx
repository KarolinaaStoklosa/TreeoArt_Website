import {useEffect, useState, useRef} from 'react';
import ContactForm from '../ContactPage/ContactForm';
import NavBar from '../NavBar/NavBar';
import {motion} from 'framer-motion'
import NavSideBar from '../NavBar/NavSideBar';
import homePageGif from './image/homePageGif.gif';
import homePageReel from './image/homePageReel.mp4'
import gradientLoop from './image/gradientLoop.mp4'
import { Link } from 'react-router-dom';

const HomePage = () => {

    const [isFooterVisible, setIsFooterVisible] = useState(false);

    useEffect(() => {
        const footerElement = document.getElementById("HPfooter");
        const observer = new IntersectionObserver(
          ([entry]) => {
            setIsFooterVisible(entry.isIntersecting);
          },
          { threshold: 0.1 }
        );
        observer.observe(footerElement);
        return () => {
          observer.disconnect();
        };
      }, []);

    const [isMuted, setIsMuted] = useState(true);
    const videoRef = useRef(null);
  
    function handleToggleMute() {
      const video = videoRef.current;
      video.muted = !video.muted;
      setIsMuted(video.muted);
    }


    return (
       
        <motion.div className="z-4 relative top-0 left-0 mt-0 bg-light text-dark-900 w-full" 
        initial = {{opacity: 0}} animate = {{opacity:1}} transition={{ease: "easeInOut", duration:1, delay:0.1}} >
        <div className={`${isFooterVisible ? "bg-dark-900 text-light" : "bg-light text-dark-900"} min-h-screen transition-colors duration-500`}>
           
        
            <nav className="bg-inherit h-28 w-full z-20">
                <NavBar />
            </nav>
            <div className="md:ml-20 md:pl-6 md:mr-16 mb:20">
                <div className="ml-20 mr-20 flex justify-center items-center relative aspect-video">
                    <video ref={videoRef} src={homePageReel} autoPlay muted={isMuted} loop
                            className="absolute inset-2 pb-10 w-full h-full object-cover"
                    ></video>
                    <button onClick={handleToggleMute} className="absolute top-2 right-2">
                        {isMuted ? 'Unmute' : 'Mute'}
                    </button>
                </div>
            </div>


            <div className='mt-20 relative flex justify-center items-center'>
                <div className="w-[500px] h-auto md:h-[500px] md:w-auto rounded-full overflow-hidden object-cover">
                    <video autoPlay muted loop className="h-full w-full object-cover">
                        <source src={gradientLoop} type="video/mp4" />
                    </video>
                    <div className="ml-6 md:ml-20 md:pl-6 md:mr-16 absolute top-0 left-0 text-dark-900">
                        <h1 className="mt-16 font-[Roboto] md:text-7xl text-5xl tracking-tighter font-medium">Niech Twoje wnętrze <br />mówi o Tobie</h1>
                        <div className=" text-lg md:text-xl leading-tight mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-3 md:grid-rows-1 grid-rows-2 gap-4 md:gap-16">
                            <p>zaprojektuj i zrealizuj <span class="underline">niepowtarzalne meble,</span> </p>
                            <p>a każdy moment pomiędzy, to czas na odkrywanie nowych <span class="underline">możliwości</span> i <span class="underline">kreatywności</span></p>
                            <p>zyskaj <span class="underline">jakość</span> i <span class="underline">profesjonalizm</span>, których oczekujesz od najlepszych w branży</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className=" mt-40 ml-6 md:ml-20 md:pl-6 md:mr-16 md:text-4xl text-3xl">
                <p className="font-[Roboto] tracking-tighter text-justify pr-20">Współpraca z najlepszymi w branży to gwarancja, że Twój remont będzie wykonany w stylu, który Cię wyróżni.</p>
                    
                <div className=" text-lg md:text-xl leading-tight mt-20 grid grid-cols-2 md:grid-cols-3 md:grid-rows-1 grid-rows-2 gap-4 md:gap-16">
                    <p>Firma  
                        <a href="https://banownetrza.pl/" target="_blank" class="underline"> Bano Wykończenia Wnętrz
                        </a> 
                        <span> i </span> 
                        <a href="https://www.domwell.pl/" target="_blank" class="underline">
                                domwell wykończenia wnętrz,
                        </a>
                    </p>
                        <p>to dwa silne filary, które stanowią fundament naszej profesjonalnej współpracy.</p>
                        <p>Zyskujesz pewność, że Twoje wymarzone wnętrze stanie się rzeczywistością.</p>
                </div>
            </div>

            <div className="mt-32" id="HPfooter">
                <ul className='w-full flex flex-col wrap font-[Roboto] text-bold text-6xl tracking-tighter text-left md:ml-24'>
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

                <div className={`${isFooterVisible ? "hidden" : "visible"}`}>
                    <NavSideBar />
                </div>

                <footer  className=''>
                    <ContactForm />
                </footer>
            </div>
        </div>
    </motion.div>
    
    )
}

export default HomePage;
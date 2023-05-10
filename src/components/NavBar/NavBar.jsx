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
            <div className={isShown?'fixed top-0 left-0 z-10 flex direction-column justify-between items-center w-full h-28 bg-inherit' 
                        : "fixed top-0 left-0 z-6 flex direction-column justify-between items-center w-full h-28 bg-inherit"}>
                <Link to='/'>
                    <img src={logoTreeo} alt="logo" className="h-20 ml-4 mt-2 z-6 md:ml-24 "/>
                </Link>
                <div >
                    <span className="z-10 text-inherit mr-6 font-serif tracking-tighter text-2xl cursor-pointer md:mr-16" onClick={handleClick}>menu</span> 
    
                </div>
            </div>
                           
        
            <div className={isShown?'fixed top-0 left-0 w-full h-screen z-20' 
                                    : 'fixed top-0 left-0 z-1 w-0 h-0 invisible'}>
            <div className={isShown? 'z-20 absolute top-0 left-0 w-full h-screen transition-[clip-path] duration-300 ease-in [clip-path:circle(190%_at_93%_5%)] bg-dark-900' 
                                    : ' z-1 relative top-0 left-0 w-full h-28 transition-[clip-path] duration-300 ease-in [clip-path:circle(0%_at_93%_5%)]' } >
                <div className="flex direction-column justify-between items-center w-100 h-28 bg-dark-900 md:ml-24 md:mr-16">
                    <Link to='/'>
                        <img src={logoTreeo} alt="logo" className="h-20 ml-4 mt-2 md:ml-0"/>
                    </Link>
                    <div>
                        <span className="text-light mr-6 font-serif tracking-tighter text-2xl cursor-pointer" onClick={handleClick} >zamknij</span>    
                    </div>
                </div>
                <ul className='bg-dark-900 h-screen w-full flex flex-col wrap z-6
                                font-[Roboto] text-bold text-6xl tracking-tighter text-light text-left md:ml-24'>
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




// with visible/invisible navbar


    // const [prevScrollPos, setPrevScrollPos] = useState(0);
    // const [visible, setVisible] = useState(true)

    // const handleScroll = debounce(() => {
    //     const currentScrollPos = window.scrollY

    //     if(currentScrollPos > prevScrollPos && currentScrollPos > (window.innerHeight-100)){
    //         setVisible(false)
    //     }else{
    //         setVisible(true)
    //     }

    //     setPrevScrollPos(currentScrollPos)
    // },10)

    // useEffect( () => {
    //     window.addEventListener('scroll', handleScroll);
    //     return () => window.removeEventListener('scroll', handleScroll)
    // },[visible, prevScrollPos])

/* <>    
<div className={` ${visible ? 'top-0 w-full h-28 bg-inherit transition-top ease-in-out duration-500' : 'top-[-100px] opacity-0 transition-top ease-linear duration-500'} `}>
            <div className={isShown?'fixed top-0 left-0 z-6 flex direction-column justify-between items-center w-full h-28 bg-inherit' 
                                    : "fixed top-0 left-0 z-6 flex direction-column justify-between items-center w-full h-28 bg-inherit"}>
                <Link to='/'>
                    <img src={logoTreeo} alt="logo" className={`${visible ? "h-20 ml-4 mt-2 z-6 md:ml-24 " : 'opacity-0'} `} />
                </Link>
                <div >
                    <span className={`${visible ? "z-6 text-inherit mr-6 font-serif tracking-tighter text-2xl cursor-pointer md:mr-16" : 'opacity-0 transition-all'} `} onClick={handleClick} >menu</span> 

                </div>
            </div>
            </div>
                   

    <div className={isShown?'fixed top-0 left-0 w-full h-screen z-1' 
                            : 'fixed top-0 left-0 z-1 w-0 h-0 invisible'}>
    <div className={isShown? 'z-6 absolute top-0 left-0 w-full h-screen transition-[clip-path] duration-300 ease-in [clip-path:circle(190%_at_93%_5%)] bg-dark-900' 
                            : ' z-1 relative top-0 left-0 w-full h-28 transition-[clip-path] duration-300 ease-in [clip-path:circle(0%_at_93%_5%)]' } >
        <div className="flex direction-column justify-between items-center w-100 h-28 bg-dark-900 md:ml-24 md:mr-16">
            <Link to='/'>
                <img src={logoTreeo} alt="logo" className="h-20 ml-4 mt-2 md:ml-0"/>
            </Link>
            <div>
                <span className="text-light mr-6 font-serif tracking-tighter text-2xl cursor-pointer"onClick={handleClick} >zamknij</span>    
            </div>
        </div>
        <ul className='bg-dark-900 h-screen w-full flex flex-col wrap z-6
                        font-[Roboto] text-bold text-6xl tracking-tighter text-light text-left md:ml-24'>
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
</> */





// <>
//         {isShown ? (
//             <>
//             <div className='transition-[clip-path] duration-300 ease-in  [clip-path:circle(130%_at_93%_5%)] bg-dark-900'>
//                 <div className="flex direction-column justify-between items-center w-100 h-28 bg-dark-900 ">
//                     <Link to='/'>
//                         <img src={logoTreeo} alt="logo" className="h-20 ml-4 mt-2 "/>
//                     </Link>
//                     <div>
//                         <span className="text-light mr-6 font-serif tracking-tighter text-2xl cursor-pointer"onClick={handleClick} >zamknij</span>    
//                     </div>
//                 </div>
//                 <ul className='bg-dark-900 h-[100vh] w-full flex flex-col wrap 
//                                 font-[Roboto] text-bold text-6xl tracking-tighter text-light text-left'>
//                 <li className="mt-24 ml-6 cursor-pointer">
//                     <Link to='/fundamenty'>Fundamenty</Link>
//                 </li>
//                 <li className="mt-6 ml-6 cursor-pointer">
//                     <Link to='/autoreklama'>Autoreklama</Link>
//                 </li>
//                 <li className="mt-6 ml-6 cursor-pointer">
//                     <Link to='/tworczosc'>Twórczość</Link>
//                 </li>
//                 <li className="mt-6 ml-6 cursor-pointer">
//                     <Link to='/wizytowka'>Wizytówka</Link>
//                 </li>
//             </ul>
//         </div>
                
//             </>
        
//         ) : (
//             <>
                    
//                     {/* <div className='bg-dark-100 text-dark-900 [clip-path:circle(10%_at_93%_5%)]  opacity-100'> */}
//                     <div className="flex direction-column justify-between items-center w-100 h-28 bg-transparent
//                     ">
//                         <Link to='/'>
//                             <img src={logoTreeo} alt="logo" className="h-20 ml-4 mt-2"/>
//                         </Link>
//                         <div className='' >
//                             <span className="text-dark-900 mr-6 font-serif tracking-tighter text-2xl cursor-pointer 
//                             " onClick={handleClick} >menu</span> 
//                             <div className='[ bg-dark-100 [clip-path:circle(10%_at_93%_5%)]'></div>
//                         </div>
//                     </div>
//                     {/* </div> */}
                
//             </>

//         ) }
       
//         </>

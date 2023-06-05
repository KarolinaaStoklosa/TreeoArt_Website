import { useEffect } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import HomePage from '../HomePage/HomePage';
import WorkPage from '../WorkPage/WorkPage';
import AboutPage from '../AboutPage/AboutPage';
import GalleryPage from '../GalleryPage/GalleryPage';
import ContactPage from '../ContactPage/ContactPage';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import GallerySubPage01 from '../GallerySubPage/GallerySubPage01';
import GallerySubPage02 from '../GallerySubPage/GallerySubPage02';
import GallerySubPage03 from '../GallerySubPage/GallerySubPage03';
import GallerySubPage04 from '../GallerySubPage/GallerySubPage04';
import GallerySubPage05 from '../GallerySubPage/GallerySubPage05';
import GallerySubPage06 from '../GallerySubPage/GallerySubPage06';
import GallerySubPage07 from '../GallerySubPage/GallerySubPage07';
import GamePage from '../Game/GamePage';
import PrivacyPolicy from '../PrivacyPolicy/PrivacyPolicy';

function AnimatedRoutes() {
  const location = useLocation();
  useEffect(() => {
    scroll.scrollToTop({
      duration: 100,
      smooth: true,
    });
  }, [location.pathname]);
  return (
    <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route path="/fundamenty" element={<WorkPage />} />
          <Route path="/autoreklama" element={<AboutPage />} />
          <Route path="/tworczosc" element={<GalleryPage />} />
          <Route path="/wizytowka" element={<ContactPage />} />
          <Route path="/game" element={<GamePage />} />
          <Route path="/tworczosc/01" element={<GallerySubPage01 />} />
          <Route path="/tworczosc/02" element={<GallerySubPage02 />} />
          <Route path="/tworczosc/03" element={<GallerySubPage03 />} />
          <Route path="/tworczosc/04" element={<GallerySubPage04 />} />
          <Route path="/tworczosc/05" element={<GallerySubPage05 />} />
          <Route path="/tworczosc/06" element={<GallerySubPage06 />} />
          <Route path="/tworczosc/07" element={<GallerySubPage07 />} />
          <Route path="/politykaPrywatnosci" element={<PrivacyPolicy />} />
        </Routes>
        </AnimatePresence>

 
  );
}

export default AnimatedRoutes;

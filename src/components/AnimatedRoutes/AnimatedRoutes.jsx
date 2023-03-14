import HomePage from '../HomePage/HomePage';
import WorkPage from '../WorkPage/WorkPage';
import AboutPage from '../AboutPage/AboutPage';
import GalleryPage from '../GalleryPage/GalleryPage';
import ContactPage from '../ContactPage/ContactPage';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route path="/fundamenty" element={<WorkPage />} />
          <Route path="/autoreklama" element={<AboutPage />} />
          <Route path="/tworczosc" element={<GalleryPage />} />
          <Route path="/wizytowka" element={<ContactPage />} />
        </Routes>
        </AnimatePresence>

 
  );
}

export default AnimatedRoutes;

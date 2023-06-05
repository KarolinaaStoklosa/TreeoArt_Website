import { useState, useRef, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import { useLocation } from "react-router-dom";

function ScrollArrow( {bottomPosition = '4rem', rightPosition = '0.25rem'} ) {
  const [showScroll, setShowScroll] = useState(false);
  const lastScrollPosition = useRef(window.pageYOffset);
  const { pathname } = useLocation();

  useEffect(() => {
    setShowScroll(false);
    lastScrollPosition.current = window.pageYOffset;
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const handleScroll = () => {
    const currentScrollPosition = window.pageYOffset;
    const isVisible = currentScrollPosition > 300;

    if (!isVisible) {
      setShowScroll(false);
      return;
    }

    const scrollDelta = currentScrollPosition - lastScrollPosition.current;
    lastScrollPosition.current = currentScrollPosition;

    if (scrollDelta < 0) {
      setShowScroll(true);
    } else {
      setShowScroll(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const buttonStyle = {
    background: "linear-gradient(rgba(241,240,236,0), rgba(241,240,236,1))",
  };

  const containerStyle = {
    position: 'fixed',
    bottom: bottomPosition,
    right: rightPosition,
    zIndex: '10',
  };



  return (
    <div >
      {showScroll && (
        <div style={containerStyle}>
          <button
            className="rounded-full p-3 focus:outline-none hover:bg-gray-700"
            style={buttonStyle}
            onClick={scrollToTop}
          >
            <FaArrowUp className="text-light" />
          </button>
        </div>
      )}
    </div>
  );
}

export default ScrollArrow;

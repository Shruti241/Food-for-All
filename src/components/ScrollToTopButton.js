import { useState, useEffect } from 'react';
import './ScrollToTopButton.css';
function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      setIsVisible(scrollTop > 0);
    };

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
   <>
      {isVisible && (
        <button
          className="scroll-to-top"
          onClick={handleScrollToTop}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <i className="fa fa-arrow-up" aria-hidden="true"></i>
          {isHovered && <span className="scroll-to-top-text">Scroll to top</span>}
        </button>
      )}
    </>
  );
}

export default ScrollToTopButton;

import React, { useState, useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";

export default function CustomScroll({ children }) {
  const [showButton, setShowButton] = useState(false);

  // Function to scroll to the top of the page
  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 1000, // Animation duration in milliseconds
      delay: 100, // Delay before animation starts in milliseconds
      smooth: "easeInOutQuint", // Type of easing used for animation
    });
  };

  // Show or hide the button based on the scroll position
  const handleScroll = () => {
    const scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;
    scrollTop > 100 ? setShowButton(true) : setShowButton(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Your app content goes here */}
      <div className="min-h-screen bg-gray-100">{children}</div>

      {/* Scroll to top button */}
      <div
        className={`fixed bottom-4 right-4 z-50 ${
          showButton ? "opacity-100" : "opacity-0"
        } transition-opacity`}
      >
        <button
          className="bg-gray-800 p-4 rounded-full text-white hover:bg-gray-600 transition-colors duration-300"
          onClick={scrollToTop}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            stroke="none"
            className="w-6 h-6"
          >
            <path d="M12 21.5l-1.43-1.47L4.7 14H9V8h6v6h4.3l-6.87 6.93z"></path>
            <path d="M0 0h24v24H0z" fill="none"></path>
          </svg>
        </button>
      </div>
    </>
  );
}

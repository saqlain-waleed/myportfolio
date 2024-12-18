import React, { useState, useEffect } from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { Link } from "react-scroll"; // For smooth scroll navigation

const Navbar = () => {
  // State to toggle sidebar visibility
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  // State to track scroll position
  const [showScrollButton, setShowScrollButton] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  // Function to show/hide the scroll-to-top button based on scroll position
  const handleScroll = () => {
    if (window.scrollY > 300) { // When scrolled more than 300px, show the button
      setShowScrollButton(true);
    } else {
      setShowScrollButton(false);
    }
  };

  // Add event listener to track scroll
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to the top when the button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <nav className="relative mb-10 py-5 px-8"> {/* Reduced margin-bottom and padding */}
      {/* Navbar - Keep SW on the left */}
      <div className="flex items-center justify-between">
        {/* Logo - Positioned on the left */}
        <div className="flex-shrink-0 items-center">
          <span className="mx-5 text-3xl">SW</span>
        </div>

        {/* Navbar Links - Right Side for larger screens */}
        <div className="hidden xl-custom:flex gap-8 items-center text-lg">
          <Link to="home" smooth={true} duration={500} className="hover:text-blue-600 cursor-pointer">Home</Link>
          <Link to="about" smooth={true} duration={500} className="hover:text-blue-600 cursor-pointer">About Me</Link>
          <Link to="technologies" smooth={true} duration={500} className="hover:text-blue-600 cursor-pointer">Technologies</Link>
          <Link to="certifications" smooth={true} duration={500} className="hover:text-blue-600 cursor-pointer">Certifications</Link>
          <Link to="projects" smooth={true} duration={500} className="hover:text-blue-600 cursor-pointer">Projects</Link>
          <Link to="education" smooth={true} duration={500} className="hover:text-blue-600 cursor-pointer">Education</Link>
          <Link to="contact" smooth={true} duration={500} className="hover:text-blue-600 cursor-pointer">Contact</Link>
        </div>

        {/* Hamburger Icon (visible on small screens <= 1311px) */}
        <div className="xl-custom:hidden flex items-center">
          <button 
            onClick={toggleSidebar} 
            className="relative z-20 w-6 h-6 flex flex-col justify-between items-center"
          >
            {/* Hamburger Icon - Shows when the sidebar is closed */}
            {!isSidebarOpen ? (
              <>
                <div className="w-full h-1 bg-white transition-transform duration-300 ease-in-out rounded"></div>
                <div className="w-full h-1 bg-white transition-transform duration-300 ease-in-out rounded"></div>
                <div className="w-full h-1 bg-white transition-transform duration-300 ease-in-out rounded"></div>
              </>
            ) : (
              <>
                {/* Cross Icon - Shows when the sidebar is open */}
                <div className="w-full h-1 bg-white transform rotate-45 transition-transform duration-300 ease-in-out rounded"></div>
                <div className="w-full h-1 bg-white opacity-0 transition-opacity duration-300 ease-in-out rounded"></div>
                <div className="w-full h-1 bg-white transform -rotate-45 transition-transform duration-300 ease-in-out rounded"></div>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Sidebar for Small Screens - Slide from the top and takes half the screen height */}
      <div
        className={`mt-8 bg-gray-800 bg-opacity-5 xl-custom:hidden transform ${
          isSidebarOpen ? "translate-y-0" : "-translate-y-full"
        } transition-transform duration-500 ease-in-out ${isSidebarOpen ? "" : "fixed inset-0"}`}
      >
        {/* Sidebar Links */}
        <div className="flex flex-col items-center space-y-1">
          <Link
            to="home"
            smooth={true}
            duration={1500}
            className="text-white text-lg py-2 transition duration-300 ease-in-out transform hover:scale-105 hover:text-blue-400"
            onClick={toggleSidebar}
          >
            Home
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={1500}
            className="text-white text-lg py-2 transition duration-300 ease-in-out transform hover:scale-105 hover:text-blue-400"
            onClick={toggleSidebar}
          >
            About Me
          </Link>
          <Link
            to="technologies"
            smooth={true}
            duration={500}
            className="text-white text-lg py-2 transition duration-300 ease-in-out transform hover:scale-105 hover:text-blue-400"
            onClick={toggleSidebar}
          >
            Technologies
          </Link>
          <Link
            to="certifications"
            smooth={true}
            duration={1500}
            className="text-white text-lg py-2 transition duration-300 ease-in-out transform hover:scale-105 hover:text-blue-400"
            onClick={toggleSidebar}
          >
            Certifications
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={1500}
            className="text-white text-lg py-2 transition duration-300 ease-in-out transform hover:scale-105 hover:text-blue-400"
            onClick={toggleSidebar}
          >
            Projects
          </Link>
          <Link
            to="education"
            smooth={true}
            duration={1500}
            className="text-white text-lg py-2 transition duration-300 ease-in-out transform hover:scale-105 hover:text-blue-400"
            onClick={toggleSidebar}
          >
            Education
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={1500}
            className="text-white text-lg py-2 transition duration-300 ease-in-out transform hover:scale-105 hover:text-blue-400"
            onClick={toggleSidebar}
          >
            Contact
          </Link>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 right-1 p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 ease-in-out transform hover:scale-105"
        >
          ↑
        </button>
      )}

      {/* Social Media Icons */}
      <div
        className={`mt-32 flex justify-center gap-4 text-2xl transition-all duration-500 ease-in-out ${
          isSidebarOpen ? "mt-32" : "mt-10"
        }`}
      >
        <a
          href="https://www.linkedin.com/in/saqlain-waleed-31bbbb247?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-600"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://github.com/saqlain-waleed"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-800"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.instagram.com/invites/contact/?igsh=1ll0a2oe29va7&utm_content=aj5ipbq"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-500"
        >
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

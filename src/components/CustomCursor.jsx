import React, { useEffect } from "react";

const CustomCursor = () => {
  useEffect(() => {
    const cursor = document.querySelector(".cursor");
    const cursorFollower = document.querySelector(".cursor-follower");

    const handleMouseMove = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      cursor.style.left = `${mouseX}px`;
      cursor.style.top = `${mouseY}px`;

      cursorFollower.style.left = `${mouseX}px`;
      cursorFollower.style.top = `${mouseY}px`;
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      {/* Custom Cursor Elements */}
      <div className="cursor"></div>
      <div className="cursor-follower"></div>

      {/* Styles for the Custom Cursor */}
      <style jsx>{`
        /* Reset and Body Styling */
        body {
          margin: 0;
          padding: 0;
          color: #333;
          cursor: none; /* Hide the default cursor */
          overflow-x: hidden;
        }

        /* Custom Cursor */
        .cursor, .cursor-follower {
          position: fixed;
          top: 0;
          left: 0;
          pointer-events: none;
          border-radius: 50%;
          transform: translate(-50%, -50%);
          transition: all 0.1s ease;
        }

        /* Outer Cursor */
        .cursor {
          width: 40px;
          height: 40px;
          border: 3px solid #FF6347; /* Tomato color */
        }

        /* Inner Cursor */
        .cursor-follower {
          width: 10px;
          height: 10px;
          background-color: rgb(227, 136, 120); /* Tomato color */
          transform: translate(-50%, -50%) scale(0.6);
        }

        /* Prevent cursor style change when hovering over links */
        a:hover {
          cursor: none; /* Keep the custom cursor even over links */
        }
      `}</style>
    </>
  );
};

export default CustomCursor;

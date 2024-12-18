// CustomCursor.js
import React, { useEffect } from "react";

const CustomCursor = () => {
  useEffect(() => {
    const cursor = document.querySelector(".custom-cursor");

    // Update cursor position
    document.addEventListener("mousemove", (e) => {
      cursor.style.left = `${e.pageX}px`;
      cursor.style.top = `${e.pageY}px`;
    });

    // Adding hover effect for links, buttons, and elements with "pointer" class
    const hoverElements = document.querySelectorAll("a, button, .pointer");
    hoverElements.forEach((element) => {
      element.addEventListener("mouseover", () => {
        cursor.classList.add("hovered");
      });
      element.addEventListener("mouseout", () => {
        cursor.classList.remove("hovered");
      });
    });

    return () => {
      document.removeEventListener("mousemove", () => {});
    };
  }, []);

  return (
    <>
      <div
        className="custom-cursor"
        style={{
          position: "fixed",
          width: "20px", 
          height: "20px", 
          backgroundColor: "#3498db", 
          borderRadius: "50%",
          pointerEvents: "none", 
          transform: "translate(-50%, -50%)", 
          transition: "transform 0.2s ease, background-color 0.3s ease",
          boxShadow: "0 0 8px rgba(0, 0, 0, 0.3)", 
          zIndex: "9999", 
        }}
      ></div>
      <style>
        {`
          * {
            cursor: none !important;
          }

          .custom-cursor.hovered {
            background-color: #9b59b6; 
            transform: translate(-50%, -50%) scale(2); 
            box-shadow: 0 0 12px rgba(0, 0, 0, 0.4); 
          }

          .pointer {
            cursor: none;
          }
        `}
      </style>
    </>
  );
};

export default CustomCursor;

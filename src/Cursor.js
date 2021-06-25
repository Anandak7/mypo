import React from 'react'
import './App.css';
import { useState, useEffect } from 'react';
import classNames from 'classnames';

export const Cursor = () => {
  const [position, setPosition] = useState({x: 0, y: 0});
  const [clicked, setClicked] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);

   useEffect(() => {
       addEventListeners();
       handleLinkHoverEvents();
       return () => removeEventListeners();
   }, []);
   
   const addEventListeners = () => {
       document.addEventListener("mousemove", onMouseMove);
       document.addEventListener("mousedown", onMouseDown);
       document.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mouseenter", onMouseEnter);
       document.addEventListener("mouseleave", onMouseLeave);
   };

   const removeEventListeners = () => {
       document.removeEventListener("mousemove", onMouseMove);
       document.removeEventListener("mousedown", onMouseDown);
       document.removeEventListener("mouseup", onMouseUp);
        document.removeEventListener("mouseenter", onMouseEnter);
       document.removeEventListener("mouseleave", onMouseLeave);
   };
   const handleLinkHoverEvents = () => {
           document.querySelectorAll("a").forEach(el => {
               el.addEventListener("mouseover", () => setLinkHovered(true));
               el.addEventListener("mouseout", () => setLinkHovered(false));
           });
       };
   const onMouseLeave = () => {
           setHidden(true);
       };
    
       const onMouseEnter = () => {
           setHidden(false);
       };
       const onMouseDown = () => {
               setClicked(true);
           };
        
           const onMouseUp = () => {
               setClicked(false);
           };
    
       const cursorClasses = classNames(
           'cursor',
           {
            'cursor--clicked': clicked,
               'cursor--hidden': hidden,
               'cursor--link-hovered': linkHovered
           }
       );             

   const onMouseMove = (e) => {
       setPosition({x: e.clientX, y: e.clientY});
   };          
                            
  return (
    
    <div className={cursorClasses}
           style={{
               left: `${position.x}px`,
               top: `${position.y}px`
           }}
    />
    
  )
}


// 'use client';

// import { useEffect, useState } from 'react';

// export default function CustomCursor() {
//   const [position, setPosition] = useState({ x: 0, y: 0 });
//   const [isHovering, setIsHovering] = useState(false);
//   const [isClicking, setIsClicking] = useState(false);

//   useEffect(() => {
//     // Update cursor position
//     const handleMouseMove = (e: MouseEvent) => {
//       setPosition({ x: e.clientX, y: e.clientY });
//     };

//     // Handle hover over interactive elements
//     const handleMouseOver = (e: MouseEvent) => {
//       const target = e.target as HTMLElement;
//       const isInteractive = target.matches('a, button, input, textarea, select, [role="button"], .cursor-pointer');
//       setIsHovering(isInteractive);
//     };

//     // Handle mouse down
//     const handleMouseDown = () => {
//       setIsClicking(true);
//     };

//     // Handle mouse up
//     const handleMouseUp = () => {
//       setIsClicking(false);
//     };

//     // Add event listeners
//     document.addEventListener('mousemove', handleMouseMove);
//     document.addEventListener('mouseover', handleMouseOver);
//     document.addEventListener('mousedown', handleMouseDown);
//     document.addEventListener('mouseup', handleMouseUp);

//     // Cleanup
//     return () => {
//       document.removeEventListener('mousemove', handleMouseMove);
//       document.removeEventListener('mouseover', handleMouseOver);
//       document.removeEventListener('mousedown', handleMouseDown);
//       document.removeEventListener('mouseup', handleMouseUp);
//     };
//   }, []);

//   return (
//     <>
//       {/* Main cursor */}
//       <div
//         className={`custom-cursor ${isHovering ? 'cursor-hover' : ''} ${isClicking ? 'cursor-click' : ''}`}
//         style={{
//           left: `${position.x}px`,
//           top: `${position.y}px`,
//         }}
//       />
      
//       {/* Optional: Inner dot for more detail */}
//       <div
//         className="cursor-dot"
//         style={{
//           left: `${position.x}px`,
//           top: `${position.y}px`,
//         }}
//       />
//     </>
//   );
// }


'use client';

import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [cursorLight, setCursorLight] = useState(false); // 👈 NEW STATE

  useEffect(() => {
    // Listen for a custom event fired by Hero section
    const enableLightCursor = () => setCursorLight(true);
    const disableLightCursor = () => setCursorLight(false);

    window.addEventListener("cursor-light", enableLightCursor);
    window.addEventListener("cursor-dark", disableLightCursor);

    return () => {
      window.removeEventListener("cursor-light", enableLightCursor);
      window.removeEventListener("cursor-dark", disableLightCursor);
    };
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = target.matches(
        'a, button, input, textarea, select, [role="button"], .cursor-pointer'
      );
      setIsHovering(isInteractive);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <>
      {/* Main cursor */}
      <div
        className={`custom-cursor 
          ${isHovering ? 'cursor-hover' : ''} 
          ${isClicking ? 'cursor-click' : ''}
        `}
      
      />

   
      <div
        className="cursor-dot"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          backgroundColor: cursorLight ? 'white' : 'black',      // 👈 MATCH DOT
        }}
      />
    </>
  );
}



// 'use client';

// import { useEffect, useState } from 'react';

// export default function CustomCursor() {
//   const [position, setPosition] = useState({ x: 0, y: 0 });
//   const [trail1Position, setTrail1Position] = useState({ x: 0, y: 0 });
//   const [trail2Position, setTrail2Position] = useState({ x: 0, y: 0 });
//   const [isHovering, setIsHovering] = useState(false);
//   const [isClicking, setIsClicking] = useState(false);

//   useEffect(() => {
//     // Update cursor position
//     const handleMouseMove = (e: MouseEvent) => {
//       setPosition({ x: e.clientX, y: e.clientY });
//     };

//     // Handle hover over interactive elements
//     const handleMouseOver = (e: MouseEvent) => {
//       const target = e.target as HTMLElement;
//       const isInteractive = target.matches('a, button, input, textarea, select, [role="button"], .cursor-pointer');
//       setIsHovering(isInteractive);
//     };

//     // Handle mouse down
//     const handleMouseDown = () => {
//       setIsClicking(true);
//     };

//     // Handle mouse up
//     const handleMouseUp = () => {
//       setIsClicking(false);
//     };

//     // Add event listeners
//     document.addEventListener('mousemove', handleMouseMove);
//     document.addEventListener('mouseover', handleMouseOver);
//     document.addEventListener('mousedown', handleMouseDown);
//     document.addEventListener('mouseup', handleMouseUp);

//     // Animate trailing circles with delayed following
//     let animationFrame: number;
//     const animateTrails = () => {
//       setTrail1Position(prev => ({
//         x: prev.x + (position.x - prev.x) * 0.15,
//         y: prev.y + (position.y - prev.y) * 0.15
//       }));
      
//       setTrail2Position(prev => ({
//         x: prev.x + (trail1Position.x - prev.x) * 0.15,
//         y: prev.y + (trail1Position.y - prev.y) * 0.15
//       }));
      
//       animationFrame = requestAnimationFrame(animateTrails);
//     };
    
//     animateTrails();

//     // Cleanup
//     return () => {
//       document.removeEventListener('mousemove', handleMouseMove);
//       document.removeEventListener('mouseover', handleMouseOver);
//       document.removeEventListener('mousedown', handleMouseDown);
//       document.removeEventListener('mouseup', handleMouseUp);
//       cancelAnimationFrame(animationFrame);
//     };
//   }, [position.x, position.y, trail1Position.x, trail1Position.y]);

//   return (
//     <>
//       {/* Second trailing circle (furthest back) */}
//       <div
//         className="cursor-trail cursor-trail-2"
//         style={{
//           left: `${trail2Position.x}px`,
//           top: `${trail2Position.y}px`,
//         }}
//       />
      
//       {/* First trailing circle */}
//       <div
//         className="cursor-trail cursor-trail-1"
//         style={{
//           left: `${trail1Position.x}px`,
//           top: `${trail1Position.y}px`,
//         }}
//       />
      
//       {/* Main cursor */}
//       <div
//         className={`custom-cursor ${isHovering ? 'cursor-hover' : ''} ${isClicking ? 'cursor-click' : ''}`}
//         style={{
//           left: `${position.x}px`,
//           top: `${position.y}px`,
//         }}
//       />
      
//       {/* Inner dot */}
//       <div
//         className="cursor-dot"
//         style={{
//           left: `${position.x}px`,
//           top: `${position.y}px`,
//         }}
//       />
//     </>
//   );
// }
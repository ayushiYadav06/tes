


// "use client";

// export default function FullPageLoader() {
//   return (
//     <div className="fixed inset-0 flex flex-col items-center justify-center bg-white z-[9999]">

//       {/* ELECTRIC LOADER */}
//       <div className="relative flex items-center justify-center w-32 h-32 mb-8">

//         {/* Tesla Orbit Ring */}
//         <div className="absolute w-28 h-28 border-[3px] border-gray-300 rounded-full 
//                         border-t-cyan-500 border-b-blue-600 animate-tesla-spin
//                         shadow-[0_0_25px_6px_rgba(0,200,255,0.25)]"></div>

//         {/* Electric Sparks */}
//         <div className="absolute w-full h-full animate-electric-spark pointer-events-none">
//           <svg className="w-full h-full" viewBox="0 0 100 100">
//             <polyline 
//               points="20,50 40,40 60,60 80,50" 
//               stroke="#00eaff" 
//               strokeWidth="2" 
//               fill="none" 
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               opacity="0.8"
//             />
//           </svg>
//         </div>

//         {/* Electric Pulse */}
//         <div className="absolute w-24 h-24 bg-blue-500/40 rounded-full animate-electric-pulse"></div>

//         {/* Power Core */}
//         <div className="absolute w-10 h-10 bg-cyan-500 rounded-full animate-core-pulse 
//                         shadow-[0_0_30px_12px_rgba(0,255,255,0.45)]"></div>
//       </div>

//       {/* TESLA ELECTRIFIED TEXT */}
//       <div className="flex space-x-2 text-4xl font-bold tracking-[0.25em] neon-electric">
//         {["T", "E", "S", "L", "A"].map((letter, i) => (
//           <span
//             key={i}
//             className="electric-letter"
//             style={{ animationDelay: `${i * 0.15}s` }}
//           >
//             {letter}
//           </span>
//         ))}
//       </div>

//       <style jsx>{`
//         /* Rotation */
//         @keyframes tesla-spin {
//           0% { transform: rotate(0deg); }
//           100% { transform: rotate(360deg); }
//         }
//         .animate-tesla-spin {
//           animation: tesla-spin 2s linear infinite;
//         }

//         /* Electric Pulse */
//         @keyframes electric-pulse {
//           0% { transform: scale(1); opacity: 0.5; }
//           50% { transform: scale(1.3); opacity: 0.25; }
//           100% { transform: scale(1); opacity: 0.5; }
//         }
//         .animate-electric-pulse {
//           animation: electric-pulse 1.8s infinite ease-in-out;
//         }

//         /* Core Energy Pulse */
//         @keyframes core-pulse {
//           0% { transform: scale(1); }
//           50% { transform: scale(1.15); }
//           100% { transform: scale(1); }
//         }
//         .animate-core-pulse {
//           animation: core-pulse 1.2s infinite ease-in-out;
//         }

//         /* Electric Sparks Animation */
//         @keyframes electric-spark {
//           0%, 100% { opacity: 0; }
//           50% { opacity: 1; filter: drop-shadow(0 0 12px #00eaff); }
//         }
//         .animate-electric-spark {
//           animation: electric-spark 1.4s infinite;
//         }

//         /* Neon Electric Text Glow */
//         .neon-electric {
//           color: #00eaff;
//           text-shadow: 
//             0 0 15px rgba(0,255,255,0.9),
//             0 0 25px rgba(0,200,255,0.7),
//             0 0 45px rgba(0,150,255,0.5);
//         }

//         /* Electric Dancing Letters */
//         @keyframes electric-dance {
//           0%   { transform: translateY(0) skewX(0deg); }
//           50%  { transform: translateY(-6px) skewX(3deg); }
//           100% { transform: translateY(0) skewX(0deg); }
//         }

//         /* Voltage Jitter (very subtle) */
//         @keyframes voltage-jitter {
//           0% { transform: translateX(0); }
//           50% { transform: translateX(1px); }
//           100% { transform: translateX(0); }
//         }

//         .electric-letter {
//           display: inline-block;
//           animation: 
//             electric-dance 1.6s ease-in-out infinite,
//             voltage-jitter 0.12s infinite linear alternate;
//         }
//       `}</style>

//     </div>
//   );
// }




"use client";

export default function FullPageLoader() {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center z-[9999] bg-electric">

      {/* ELECTRIC LOADER */}
      <div className="relative flex items-center justify-center w-32 h-32 mb-10">

        {/* Tesla Orbit */}
        <div className="absolute w-28 h-28 border-[3px] border-cyan-400/40 rounded-full 
                        border-t-cyan-300 border-b-blue-600 animate-tesla-spin
                        shadow-[0_0_35px_10px_rgba(0,200,255,0.35)]"></div>

        {/* Electric Sparks */}
        <div className="absolute w-full h-full animate-electric-spark pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <polyline 
              points="25,55 40,42 60,58 75,50" 
              stroke="#00eaff" 
              strokeWidth="2" 
              fill="none" 
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.9"
            />
          </svg>
        </div>

        {/* Electric Pulse */}
        <div className="absolute w-24 h-24 bg-blue-500/30 rounded-full animate-electric-pulse"></div>

        {/* Power Core */}
        <div className="absolute w-12 h-12 bg-cyan-400 rounded-full animate-core-pulse 
                        shadow-[0_0_40px_20px_rgba(0,255,255,0.5)]"></div>
      </div>

      {/* TESLA ELECTRIC TEXT */}
      <div className="flex space-x-2 text-4xl font-bold tracking-[0.25em] neon-electric">
        {["T", "E", "S", "L", "A"].map((letter, i) => (
          <span
            key={i}
            className="electric-letter"
            style={{ animationDelay: `${i * 0.15}s` }}
          >
            {letter}
          </span>
        ))}
      </div>

      <style jsx>{`
        /* BACKGROUND */
        .bg-electric {
          background: radial-gradient(circle at center, #001e2e 0%, #00010a 80%);
        }

        /* Rotation */
        @keyframes tesla-spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .animate-tesla-spin {
          animation: tesla-spin 2s linear infinite;
        }

        /* Electric Pulse */
        @keyframes electric-pulse {
          0% { transform: scale(1); opacity: 0.4; }
          50% { transform: scale(1.25); opacity: 0.2; }
          100% { transform: scale(1); opacity: 0.4; }
        }
        .animate-electric-pulse {
          animation: electric-pulse 1.8s infinite ease-in-out;
        }

        /* Core Pulse */
        @keyframes core-pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.18); }
          100% { transform: scale(1); }
        }
        .animate-core-pulse {
          animation: core-pulse 1.3s infinite ease-in-out;
        }

        /* Electric Sparks Flash */
        @keyframes electric-spark {
          0%, 100% { opacity: 0; }
          50% { opacity: 1; filter: drop-shadow(0 0 10px #0ff); }
        }
        .animate-electric-spark {
          animation: electric-spark 1.2s infinite;
        }

        /* Neon Electric Text */
        .neon-electric {
          color: #00eaff;
          text-shadow:
            0 0 12px rgba(0,255,255,0.9),
            0 0 26px rgba(0,200,255,0.7),
            0 0 50px rgba(0,150,255,0.6);
        }

        /* Letters Dancing + Voltage Jitter */
        @keyframes electric-dance {
          0%   { transform: translateY(0) skewX(0deg); }
          50%  { transform: translateY(-7px) skewX(4deg); }
          100% { transform: translateY(0) skewX(0deg); }
        }

        @keyframes voltage-jitter {
          0% { transform: translateX(0); }
          50% { transform: translateX(1px); }
          100% { transform: translateX(0); }
        }

        .electric-letter {
          display: inline-block;
          animation:
            electric-dance 1.6s ease-in-out infinite,
            voltage-jitter 0.12s infinite linear alternate;
        }
      `}</style>

    </div>
  );
}

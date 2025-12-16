

// "use client"

// import { useEffect, useRef, useState } from "react"
// import Image from "next/image"

// const logos: { src: string; name: string }[] = [
//   { src: "/assets/APDCL.jfif", name: "APDCL" },
//   { src: "/assets/BHEL.png", name: "BHEL" },
//   { src: "/assets/GETCO.jfif", name: "GETCO" },
//   { src: "/assets/HESCOM.png", name: "HESCOM" },
//   { src: "/assets/IISERB.png", name: "IISERB" },
//   { src: "/assets/download.jpg", name: "Partner" },
//   { src: "/assets/KPTCL.jfif", name: "KPTCL" },
//   { src: "/assets/mpmkvvcl.png", name: "MPMKVVCL" },
//   { src: "/assets/MPPTCL.png", name: "MPPTCL" },
//   { src: "/assets/MSEDCL.png", name: "MSEDCL" },
//   { src: "/assets/MSETCL.png", name: "MSETCL" },
//   { src: "/assets/nea-header-logo.png", name: "NEA" },
//   { src: "/assets/NTPC.png", name: "NTPC" },
//   { src: "/assets/OPTCL.png", name: "OPTCL" },
//   { src: "/assets/PAGE 6 LOGO CIDCO.png", name: "CIDCO" },
//   { src: "/assets/PAGE 6 LOGO MESCOM.avif", name: "MESCOM" },
//   { src: "/assets/PAGE 6 LOGO MP JAL NIGAM LTD.png", name: "MP Jal Nigam" },
//   { src: "/assets/PAGE 6 LOGO MPPKVVCL INDORE.png", name: "MPPKVVCL Indore" },
//   { src: "/assets/PAGE 6 LOGO shyama-power-india-limited-5100.jpg", name: "Shyama Power India" },
//   { src: "/assets/PGCIL.png", name: "PGCIL" },
//   { src: "/assets/TANGEDCO.png", name: "TANGEDCO" },
// ]

// export default function EsteemedPartnersCarousel() {
//   const containerRef = useRef<HTMLDivElement>(null)
//   const requestRef = useRef<number>()
//   const [isPaused, setIsPaused] = useState(false)
//   const speed = 1.0

//   useEffect(() => {
//     const container = containerRef.current
//     if (!container) return

//     let scrollPos = 0
//     const itemWidth = 240 + 32 // width + gap

//     const animate = () => {
//       if (!isPaused) {
//         scrollPos += speed
//         if (scrollPos >= itemWidth * logos.length) {
//           scrollPos = 0
//         }
//         container.style.transform = `translateX(-${scrollPos}px)`
//       }
//       requestRef.current = requestAnimationFrame(animate)
//     }

//     requestRef.current = requestAnimationFrame(animate)
//     return () => cancelAnimationFrame(requestRef.current!)
//   }, [isPaused])

//   return (
//     <div
//       className="relative w-full overflow-hidden"
//       onMouseEnter={() => setIsPaused(true)}
//       onMouseLeave={() => setIsPaused(false)}
//       aria-label="Our trusted partners carousel"
//     >
//       {/* Gradient fade edges */}
//       <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
//       <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

//       {/* Carousel */}
//       <div className="relative py-8">
//         <div
//           ref={containerRef}
//           className="flex items-center gap-8 will-change-transform"
//           role="list"
//           aria-label="Partner logos"
//         >
//           {[...logos, ...logos, ...logos].map((logo, idx) => (
//             <div
//               className="logo-item group"
//               key={`${logo.name}-${idx}`}
//               role="listitem"
//             >
//               <div className="w-full h-full flex items-center justify-center p-6">
//                 <Image
//                   src={logo.src}
//                   alt={`${logo.name} logo`}
//                   width={200}
//                   height={140}
//                   className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-300"
//                   loading="lazy"
//                   draggable={false}
//                 />
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Styles */}
//       <style jsx>{`
//         .logo-item {
//           flex: 0 0 auto;
//           width: 240px;
//           height: 160px;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           background: white;
//           border-radius: 16px;
//           border: 1px solid #e5e7eb;
//           box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
//           transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
//           overflow: hidden;
//         }
//         .logo-item:hover {
//           transform: translateY(-4px);
//           box-shadow: 0 12px 24px rgba(0, 0, 0, 0.08);
//           border-color: #3b82f6;
//         }
//       `}</style>
//     </div>
//   )
// }






















"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

const logos: { src: string; name: string }[] = [
  { src: "/assets/APDCL.jfif", name: "APDCL" },
  { src: "/assets/BHEL.png", name: "BHEL" },
  { src: "/assets/GETCO.jfif", name: "GETCO" },
  { src: "/assets/HESCOM.png", name: "HESCOM" },
  { src: "/assets/IISERB.png", name: "IISERB" },
  { src: "/assets/download.jpg", name: "Partner" },
  { src: "/assets/KPTCL.jfif", name: "KPTCL" },
  { src: "/assets/mpmkvvcl.png", name: "MPMKVVCL" },
  { src: "/assets/MPPTCL.png", name: "MPPTCL" },
  { src: "/assets/MSEDCL.png", name: "MSEDCL" },
  { src: "/assets/MSETCL.png", name: "MSETCL" },
  { src: "/assets/nea-header-logo.png", name: "NEA" },
  { src: "/assets/NTPC.png", name: "NTPC" },
  { src: "/assets/OPTCL.png", name: "OPTCL" },
  { src: "/assets/PAGE 6 LOGO CIDCO.png", name: "CIDCO" },
  { src: "/assets/PAGE 6 LOGO MESCOM.avif", name: "MESCOM" },
  { src: "/assets/PAGE 6 LOGO MP JAL NIGAM LTD.png", name: "MP Jal Nigam" },
  { src: "/assets/PAGE 6 LOGO MPPKVVCL INDORE.png", name: "MPPKVVCL Indore" },
  { src: "/assets/PAGE 6 LOGO shyama-power-india-limited-5100.jpg", name: "Shyama Power India" },
  { src: "/assets/PGCIL.png", name: "PGCIL" },
  { src: "/assets/TANGEDCO.png", name: "TANGEDCO" },
]

export default function EsteemedPartnersCarousel() {
  const containerRef = useRef<HTMLDivElement>(null)
  const requestRef = useRef<number>()
  const [isPaused, setIsPaused] = useState(false)
  const speed = 1.0

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    let scrollPos = 0
    const itemWidth = 240 + 32 // width + gap

    const animate = () => {
      if (!isPaused) {
        scrollPos += speed
        if (scrollPos >= itemWidth * logos.length) {
          scrollPos = 0
        }
        container.style.transform = `translateX(-${scrollPos}px)`
      }
      requestRef.current = requestAnimationFrame(animate)
    }

    requestRef.current = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(requestRef.current!)
  }, [isPaused])

  return (
    <div
      className="relative w-full overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="Our trusted partners carousel"
    >
      {/* Gradient fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

      {/* Carousel */}
      <div className="relative py-8">
        <div
          ref={containerRef}
          className="flex items-center gap-8 will-change-transform"
          role="list"
          aria-label="Partner logos"
        >
          {[...logos, ...logos, ...logos].map((logo, idx) => (
            <div
              className="logo-item group"
              key={`${logo.name}-${idx}`}
              role="listitem"
            >
              <div className="w-full h-full flex items-center justify-center p-6">
                <Image
                  src={logo.src}
                  alt={`${logo.name} logo`}
                  width={200}
                  height={140}
                  className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                  draggable={false}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Styles */}
      <style jsx>{`
        .logo-item {
          flex: 0 0 auto;
          width: 240px;
          height: 160px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: white;
          border-radius: 16px;
          border: 1px solid #e5e7eb;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          overflow: hidden;
        }
        .logo-item:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.08);
          border-color: #3b82f6;
        }
      `}</style>
    </div>
  )
}

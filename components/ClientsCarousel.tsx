"use client"

import { useEffect, useRef } from "react"

const clientLogos: string[] = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThOZNEuSPeLK6enh3s7FCNEMurzXWIMpeWvw&s",
  "https://www.uxdt.nic.in/wp-content/uploads/2024/09/mp-poorv-kshetra-vidyut-vitaran-company-limited-01-01.jpg?x90705",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbhkGfEbQ-FEScoLTX8rXeSLlRiaxsd_jdgA&s",
  "https://seeklogo.com/images/D/dhaka-electric-supply-company-logo-F2C6D6C85A-seeklogo.com.png",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6XIlAh5QGUnLoshbaZEpa3YhhVsEwk_5bsg&s",
  "https://seeklogo.com/images/E/electricidade-de-mocambique-edm-logo-A6FAC89485-seeklogo.com.png",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOD9FrVlCDEIw677m-JIJAOJ6WdrP0UP0I0A&s",
  "https://i0.wp.com/www.eastmojo.com/wp-content/uploads/2020/09/APDCL.png?fit=535%2C274&ssl=1",
  "https://pbs.twimg.com/media/EvtljFgUUAIt58E.jpg",
  "https://149356857.v2.pressablecdn.com/wp-content/uploads/2020/12/MSEDCL-logo.png",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5CfPbTPWMSc1Tm15uqGHMNIhV8Ls2tTL93Q&s",
]

export default function ClientsCarousel() {
  const trackRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    let animationFrame: number
    let scrollX = 0
    const speed = 1.2
    const totalWidth = track.scrollWidth / 2

    const animate = () => {
      scrollX += speed
      if (scrollX >= totalWidth) scrollX = 0
      track.style.transform = `translateX(-${scrollX}px)`
      animationFrame = requestAnimationFrame(animate)
    }

    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [])

  return (
    <section className="py-16  overflow-hidden">
      <div className="container mx-auto px-6">


        {/* Carousel */}
        <div className="relative">
          <div
            ref={trackRef}
            className="flex items-center gap-6 will-change-transform"
            style={{ width: `calc(220px * ${clientLogos.length * 2})` }}
          >
            {[...clientLogos, ...clientLogos].map((logo, idx) => (
            

              <div key={idx}
                className="flex items-center justify-center 
             w-[350px] h-[180px]  // ⬅️ bigger card
             bg-white rounded-xl shadow-md p-6  // ⬅️ more padding
             transition-transform duration-300 hover:-translate-y-2"
              >
                <img
                  src={logo}
                  alt={`Client ${idx + 1}`}
                  className="max-h-24 object-contain"  // ⬅️ allow logo to grow taller
                />
              </div>

            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

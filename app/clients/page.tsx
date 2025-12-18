

// "use client"

// import { Header } from "@/components/header"
// import { Footer } from "@/components/footer"
// import { Card, CardContent } from "@/components/ui/card"
// import { useState } from "react"
// import { X, ChevronRight } from "lucide-react"
// import ClientsCarousel from "@/components/ClientsCarousel"


// type CategoryCard = {
//   title: string
//   image: string
//   items: string[]
//   description?: string
//   details?: string[]
// }

// const CATEGORY_CARDS: CategoryCard[] = [
//   {
//     title: "AIR PORTS",
//     image: "/airport.jpg",
//     description: "Leading airports across India and Nepal trust our transformer solutions for critical infrastructure needs.",
//     items: [
//       "Indira Gandhi International Airport, New Delhi",
//       "Chhatrapati Shivaji International Airport, Mumbai",
//       "Tribhuvan International Airport, Kathmandu (Nepal)",
//     ],
//     details: [
//       "Power distribution systems for terminal buildings",
//       "Ground support equipment power supply",
//       "Runway lighting transformer solutions",
//       "Emergency backup power systems"
//     ]
//   },
//   {
//     title: "AGRO CHEMICAL PLANTS",
//     image: "/coal mine.jpg",
//     description: "Powering India's agricultural transformation with reliable electrical solutions for chemical processing facilities.",
//     items: [
//       "Bodal Agro Chemicals Ltd.",
//       "Gujarat Alkalies and Chemicals Ltd.",
//       "National Fertilizers Ltd.",
//     ],
//     details: [
//       "High-voltage power distribution",
//       "Process equipment power supply",
//       "Safety-critical electrical systems",
//       "Environmental compliance solutions"
//     ]
//   },
//   {
//     title: "COAL MINES",
//     image: "/power-transformer-electrical-equipment.jpg",
//     description: "Supporting India's energy sector with robust transformer solutions for mining operations.",
//     items: [
//       "Mahanadi Coalfields Ltd. (MCL)",
//       "South Eastern Coalfields Ltd. (SECL)",
//       "Northern Coalfields Ltd. (NCL)",
//     ],
//     details: [
//       "Mining equipment power systems",
//       "Underground electrical infrastructure",
//       "Surface facility power distribution",
//       "Safety and monitoring systems"
//     ]
//   },
//   {
//     title: "ELECTRICAL UTILITIES (Govt. Sector)",
//     image: "/electrical-distribution-grid-system.jpg",
//     description: "Partnering with government utilities to strengthen India's power transmission infrastructure.",
//     items: [
//       "APTRANSCO (AP)",
//       "PGCIL (India)",
//       "Gujarat Energy Transmission (GETCO)",
//     ],
//     details: [
//       "High-voltage transmission transformers",
//       "Grid interconnection solutions",
//       "Power quality enhancement",
//       "Smart grid integration"
//     ]
//   },
//   {
//     title: "ELECTRICAL CONTRACTORS",
//     image: "/electrical-energy-storage-battery-systems.jpg",
//     description: "Collaborating with leading contractors to deliver comprehensive electrical solutions.",
//     items: [
//       "Larsen & Toubro Ltd.",
//       "Siemens Ltd.",
//       "ABB India Ltd.",
//     ],
//     details: [
//       "Project execution support",
//       "Technical consultation services",
//       "Custom transformer solutions",
//       "Installation and commissioning"
//     ]
//   },
//   {
//     title: "FINANCIAL INSTITUTION",
//     image: "/banking.jpg",
//     description: "Trusted by financial institutions for critical infrastructure and operational continuity.",
//     items: [
//       "Project Finance Partners",
//       "Nationalized Banks",
//       "International Lenders",
//     ],
//     details: [
//       "Data center power solutions",
//       "Branch office electrical systems",
//       "UPS and backup power integration",
//       "Energy-efficient solutions"
//     ]
//   },
// ]

// export default function ClientsPage() {
//   const [selectedCard, setSelectedCard] = useState<CategoryCard | null>(null)

//   const openModal = (card: CategoryCard) => {
//     setSelectedCard(card)
//   }

//   const closeModal = () => {
//     setSelectedCard(null)
//   }

//   return (
//     <div className="min-h-screen bg-white">
//       <Header />

//       {/* Hero with background image */}
//       <section className="relative h-[320px] md:h-[420px]">
//         <img
//           // src="/industrial-electrical-manufacturing-facility.jpg"
//              src="/industrial-electrical-manufacturing-facility.jpg"
//           alt="Our Clients"
//           className="absolute inset-0 w-full h-full object-cover opacity-100"
//         />
//         <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40" />
//         <div className="relative z-10 flex items-center justify-center h-full">
//           <div className="text-center text-white px-4">
//             <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight ">Our Clients</h1>
//             <h6 className="mt-4 text-base md:text-lg text-blue-100 max-w-2xl mx-auto font-bold opacity-100 ">
//               Trusted by India's leading utilities, industries and infrastructure companies
//             </h6>
//           </div>
//         </div>
//       </section>

//       {/* Cards grid */}
//       <section className="py-16 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {CATEGORY_CARDS.map((card, idx) => (
//               <Card key={idx} className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
//                 {/* top image */}
//                 <div className="h-40 w-full overflow-hidden">
//                   <img src={card.image} alt={card.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
//                 </div>
//                 <CardContent className="p-6 flex-grow flex flex-col">
//                   {/* title styled like blue heading */}
//                   <h3 className="text-blue-700 font-extrabold tracking-wide text-sm uppercase mb-4">
//                     {card.title}
//                   </h3>
//                   <ul className="space-y-2 list-disc pl-5 text-gray-700 flex-grow">
//                     {card.items.map((item, i) => (
//                       <li key={i} className="leading-relaxed text-sm">
//                         {item}
//                       </li>
//                     ))}
//                   </ul>
                  
//                   {/* Beautified Read More Button */}
//                   <button
//                     onClick={() => openModal(card)}
//                     className="mt-6 w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg flex items-center justify-center gap-2 group"
//                   >
//                     Read More
//                     <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
//                   </button>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Modal */}
//       {selectedCard && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
//           <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
//             {/* Modal Header */}
//             <div className="relative">
//               <img
//                 src={selectedCard.image}
//                 alt={selectedCard.title}
//                 className="w-full h-48 md:h-64 object-cover"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
//               <button
//                 onClick={closeModal}
//                 className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-2 rounded-full transition-colors duration-200"
//               >
//                 <X className="w-5 h-5" />
//               </button>
//               <div className="absolute bottom-4 left-4 text-white">
//                 <h2 className="text-2xl md:text-3xl font-bold tracking-wide">
//                   {selectedCard.title}
//                 </h2>
//               </div>
//             </div>

//             {/* Modal Content */}
//             <div className="p-6 md:p-8 overflow-y-auto max-h-[calc(90vh-16rem)]">
//               <div className="space-y-6">
//                 {/* Description */}
//                 {selectedCard.description && (
//                   <div>
//                     <p className="text-gray-700 leading-relaxed text-base md:text-lg">
//                       {selectedCard.description}
//                     </p>
//                   </div>
//                 )}

//                 {/* Client List */}
//                 <div>
//                   <h3 className="text-xl font-bold text-blue-700 mb-4">Our Valued Clients</h3>
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
//                     {selectedCard.items.map((item, i) => (
//                       <div key={i} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
//                         <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
//                         <span className="text-gray-700 font-medium">{item}</span>
//                       </div>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Additional Details */}
//                 {selectedCard.details && (
//                   <div>
//                     <h3 className="text-xl font-bold text-blue-700 mb-4">Services & Solutions</h3>
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                       {selectedCard.details.map((detail, i) => (
//                         <div key={i} className="flex items-start gap-3 p-4 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors duration-200">
//                           <ChevronRight className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
//                           <span className="text-gray-700">{detail}</span>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 )}
//               </div>

//               {/* Close Button */}
//               <div className="flex justify-center mt-8 pt-6 border-t border-gray-200">
//                 <button
//                   onClick={closeModal}
//                   className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg"
//                 >
//                   Close
//                 </button>
//               </div>
//             </div>
//           </div>
          
//         </div>

        
//       )}

//       <section>            {/* Esteemed Clients Carousel */}
//       <section className="py-20 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//               Our Esteemed Clients
//             </h2>
//             <p className="text-lg text-gray-600">
//               Trusted by leading organizations across industries
//             </p>
//           </div>

//         <ClientsCarousel />

//         </div>
//       </section>

//       {/* Tailwind keyframes for smooth infinite scroll */}
//       <style jsx>{`
//         @keyframes scroll {
//           0% {
//             transform: translateX(0%);
//           }
//           100% {
//             transform: translateX(-50%);
//           }
//         }
//         .animate-scroll {
//           width: max-content;
//           animation: scroll 20s linear infinite;
//         }
//       `}</style></section>

//       <Footer />
//     </div>
//   )
// }






"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { useState, useEffect } from "react"
import Image from 'next/image'
import { X, ChevronRight } from "lucide-react"
import ClientsCarousel from "@/components/ClientsCarousel"

type CategoryCard = {
  title: string
  image: string
  items: string[]
  description?: string
  details?: string[]
}

const CATEGORY_CARDS: CategoryCard[] = [
  {
    title: "AIR PORTS",
    image: "/airport.jpg",
    description: "Leading airports across India and Nepal trust our transformer solutions for critical infrastructure needs.",
    items: [
      "Indira Gandhi International Airport, New Delhi",
      "Chhatrapati Shivaji International Airport, Mumbai",
      "Tribhuvan International Airport, Kathmandu (Nepal)",
    ],
    details: [
      "Power distribution systems for terminal buildings",
      "Ground support equipment power supply",
      "Runway lighting transformer solutions",
      "Emergency backup power systems"
    ]
  },
  {
    title: "AGRO CHEMICAL PLANTS",
    image: "/coal mine.jpg",
    description: "Powering India's agricultural transformation with reliable electrical solutions for chemical processing facilities.",
    items: [
      "Bodal Agro Chemicals Ltd.",
      "Gujarat Alkalies and Chemicals Ltd.",
      "National Fertilizers Ltd.",
    ],
    details: [
      "High-voltage power distribution",
      "Process equipment power supply",
      "Safety-critical electrical systems",
      "Environmental compliance solutions"
    ]
  },
  {
    title: "COAL MINES",
    image: "/power-transformer-electrical-equipment.jpg",
    description: "Supporting India's energy sector with robust transformer solutions for mining operations.",
    items: [
      "Mahanadi Coalfields Ltd. (MCL)",
      "South Eastern Coalfields Ltd. (SECL)",
      "Northern Coalfields Ltd. (NCL)",
    ],
    details: [
      "Mining equipment power systems",
      "Underground electrical infrastructure",
      "Surface facility power distribution",
      "Safety and monitoring systems"
    ]
  },
  {
    title: "ELECTRICAL UTILITIES (Govt. Sector)",
    image: "/electrical-distribution-grid-system.jpg",
    description: "Partnering with government utilities to strengthen India's power transmission infrastructure.",
    items: [
      "APTRANSCO (AP)",
      "PGCIL (India)",
      "Gujarat Energy Transmission (GETCO)",
    ],
    details: [
      "High-voltage transmission transformers",
      "Grid interconnection solutions",
      "Power quality enhancement",
      "Smart grid integration"
    ]
  },
  {
    title: "ELECTRICAL CONTRACTORS",
    image: "/electrical-energy-storage-battery-systems.jpg",
    description: "Collaborating with leading contractors to deliver comprehensive electrical solutions.",
    items: [
      "Larsen & Toubro Ltd.",
      "Siemens Ltd.",
      "ABB India Ltd.",
    ],
    details: [
      "Project execution support",
      "Technical consultation services",
      "Custom transformer solutions",
      "Installation and commissioning"
    ]
  },
  {
    title: "FINANCIAL INSTITUTION",
    image: "/banking.jpg",
    description: "Trusted by financial institutions for critical infrastructure and operational continuity.",
    items: [
      "Project Finance Partners",
      "Nationalized Banks",
      "International Lenders",
    ],
    details: [
      "Data center power solutions",
      "Branch office electrical systems",
      "UPS and backup power integration",
      "Energy-efficient solutions"
    ]
  },
]

export default function ClientsPage() {
  const [selectedCard, setSelectedCard] = useState<CategoryCard | null>(null)

  const openModal = (card: CategoryCard) => setSelectedCard(card)
  const closeModal = () => setSelectedCard(null)

  // Preload category images to improve perceived load time
  useEffect(() => {
    if (typeof window === 'undefined') return
    const imgs = CATEGORY_CARDS.map((c) => c.image)
    imgs.forEach((src) => {
      const img = new window.Image()
      img.src = src
    })
  }, [])

  return (
    <div className="min-h-screen relative overflow-hidden">

      {/* UNIFIED BACKGROUND */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed zoom-bg"
        style={{ backgroundImage: "url('/landscapeeighteen.jpg')" }}
      />

      {/* Soft White Overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px] animate-fade" />

      {/* PAGE CONTENT */}
      <div className="relative z-10">

        <Header />

        {/* HERO */}
        <section className="relative h-[320px] md:h-[420px]">
          <div className="absolute inset-0" />
          <div className="relative z-10 flex items-center justify-center h-full">
            <div className="text-center px-4">
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">
                Our Clients
              </h1>
              <h6 className="mt-4 text-base md:text-lg text-white max-w-2xl mx-auto font-bold">
                Trusted by India's leading utilities, industries and infrastructure companies
              </h6>
            </div>
          </div>
        </section>

        {/* CATEGORY CARDS */}
        <section className="py-16 bg-transparent rounded-xl mx-4 md:mx-8 lg:mx-12 mt-10 shadow-xl">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {CATEGORY_CARDS.map((card, idx) => (
                <Card key={idx} className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
                  <div className="h-40 w-full overflow-hidden relative">
                    <Image
                      src={card.image}
                      alt={card.title}
                      width={1200}
                      height={480}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>

                  <CardContent className="p-6 flex-grow flex flex-col">
                    <h3 className="text-blue-700 font-extrabold tracking-wide text-sm uppercase mb-4">
                      {card.title}
                    </h3>
                    <ul className="space-y-2 list-disc pl-5 text-gray-700 flex-grow">
                      {card.items.map((item, i) => (
                        <li key={i} className="leading-relaxed text-sm">{item}</li>
                      ))}
                    </ul>

                    <button
                      onClick={() => openModal(card)}
                      className="mt-6 w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg flex items-center justify-center gap-2 group"
                    >
                      Read More
                      <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* MODAL */}
        {selectedCard && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
                <div className="relative">
                <Image
                  src={selectedCard.image}
                  alt={selectedCard.title}
                  width={1400}
                  height={600}
                  className="w-full h-48 md:h-64 object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-2 rounded-full"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="absolute bottom-4 left-4 text-white">
                  <h2 className="text-2xl md:text-3xl font-bold tracking-wide">{selectedCard.title}</h2>
                </div>
              </div>

              <div className="p-6 md:p-8 overflow-y-auto max-h-[calc(90vh-16rem)]">
                <div className="space-y-6">
                  {selectedCard.description && (
                    <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                      {selectedCard.description}
                    </p>
                  )}

                  <div>
                    <h3 className="text-xl font-bold text-blue-700 mb-4">Our Valued Clients</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {selectedCard.items.map((item, i) => (
                        <div key={i} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mt-2" />
                          <span className="text-gray-700 font-medium">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {selectedCard.details && (
                    <div>
                      <h3 className="text-xl font-bold text-blue-700 mb-4">Services & Solutions</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {selectedCard.details.map((detail, i) => (
                          <div key={i} className="flex items-start gap-3 p-4 border border-gray-200 rounded-lg hover:border-blue-300">
                            <ChevronRight className="w-5 h-5 text-blue-600 mt-0.5" />
                            <span className="text-gray-700">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="flex justify-center mt-8 pt-6 border-t border-gray-200">
                  <button
                    onClick={closeModal}
                    className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 px-8 rounded-lg transition-all hover:scale-[1.02]"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* CAROUSEL SECTION */}
        <section className="py-20 bg-transparent rounded-xl mx-4 md:mx-8 lg:mx-12 mt-16 shadow-xl">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Esteemed Clients
              </h2>
              <p className="text-lg text-white">
                Trusted by leading organizations across industries
              </p>
            </div>

            <ClientsCarousel />
          </div>

          {/* <style jsx>{`
            @keyframes scroll {
              0% { transform: translateX(0%); }
              100% { transform: translateX(-50%); }
            }

            .animate-scroll {
              width: max-content;
              animation: scroll 20s linear infinite;
            }

            @keyframes fade {
              0% { opacity: 0.85; }
              50% { opacity: 0.95; }
              100% { opacity: 0.85; }
            }

            .animate-fade {
              animation: fade 6s ease-in-out infinite;
            }
          `}</style> */}

          <style jsx global>{`
  @keyframes fade {
    0% { opacity: 0.85; }
    50% { opacity: 0.95; }
    100% { opacity: 0.85; }
  }
  .animate-fade {
    animation: fade 6s ease-in-out infinite;
  }

  @keyframes zoom {
    0% { transform: scale(1.1); }
    100% { transform: scale(1.3); }
  }
  .zoom-bg {
    animation: zoom 18s ease-in-out infinite alternate;
  }

  @keyframes scroll {
    0% { transform: translateX(0%); }
    100% { transform: translateX(-50%); }
  }
  .animate-scroll {
    width: max-content;
    animation: scroll 20s linear infinite;
  }
`}</style>



        </section>

        <Footer />
      </div>
    </div>
  )
}



// "use client"

// import { Header } from "@/components/header"
// import { Card, CardContent } from "@/components/ui/card"
// import { Footer } from "@/components/footer"
// import { useState } from "react"
// import { X, ChevronRight, Shield, Gauge, Settings, Zap } from "lucide-react"
// import { motion } from "framer-motion"

// type ProductCard = {
//   title: string
//   image: string
//   intro: string
//   highlights: string[]
//   description?: string
//   advantages?: string[]
//   specs?: string[]
//   applications?: string[]
// }

// const PRODUCTS: ProductCard[] = [
//   {
//     title: "Power Transformer",
//     image: "/power-transformer-electrical-equipment.jpg",
//     intro: "Power transformers play a crucial role in power networks, directly impacting electrification, transmission, and grid stability.",
//     highlights: [
//       "Up to 200MVA, 220kV Class",
//       "NABL-accredited laboratory",
//       "Approved by PGCIL, NTPC & state utilities",
//     ],
//     description: "At Tesla Transformers (India) Ltd., we manufacture high-quality Power Transformers, ensuring excellence at every stage of production. We adhere strictly to internationally accepted standards and regulations, without compromising on quality.",
//     advantages: [
//       "Trusted by customers across India and abroad",
//       "Specialized in power station transformers & reactors",
//       "Rigorous testing ensures superior reliability",
//     ],
//     specs: [
//       "Range: Up to 200MVA, 220kV Class",
//       "NABL-accredited laboratory",
//       "Tested at KEMA, CPRI, STL labs",
//       "Approved by PGCIL, NTPC & State Utilities",
//     ],
//   },
//   {
//     title: "Extra High Voltage (EHV) Transformer",
//     image: "/electrical-distribution-grid-system.jpg",
//     intro: "Engineered for long-distance transmission with high efficiency, minimal losses, and reliability under extreme conditions.",
//     highlights: [
//       "Voltage ratings up to 220kV",
//       "High dielectric strength",
//       "Robust construction",
//     ],
//     description: "Backed by decades of expertise and a commitment to innovation, Tesla's EHV Transformers are trusted by utilities and industries across India and global markets.",
//     specs: [
//       "Low loss design for enhanced efficiency",
//       "Advanced cooling for thermal performance",
//     ],
//     applications: [
//       "Power Generation Plants",
//       "Transmission & Distribution Networks",
//       "Heavy Industries",
//     ],
//   },
//   {
//     title: "Distribution Transformer",
//     image: "/industrial-electrical-manufacturing-facility.jpg",
//     intro: "Reliable transformers from 25 KVA to 5000 KVA with multiple voltage classes up to 33 kV.",
//     highlights: [
//       "Free-breathing & hermetically sealed options",
//       "Oil or synthetic fluid designs",
//       "Amorphous & CRGO core transformers",
//     ],
//     description: "Tesla manufactures BIS-compliant transformers ensuring top-tier energy efficiency and reliability. Options include plate radiator cooling or corrugated tank cooling.",
//     applications: [
//       "Urban & rural distribution networks",
//       "Chemical plants",
//       "Oil & gas terminals",
//       "Indoor applications with synthetic coolants",
//     ],
//   },
//   {
//     title: "Dry Type Transformer",
//     image: "/electrical-energy-storage-battery-systems.jpg",
//     intro: "Insulated with Class 'H' & 'C' materials, designed to withstand high temperatures and dielectric stress.",
//     highlights: [
//       "Range: 100 KVA to 15000 KVA",
//       "33 kV Class",
//       "IEC 60076 compliant",
//     ],
//     description: "Manufactured with advanced insulation systems for safety and performance. Rigorously tested for industrial and commercial reliability.",
//     advantages: [
//       "Low maintenance and eco-friendly",
//       "Safe for indoor installations",
//       "Durable under extreme environments",
//     ],
//   },
//   {
//     title: "Auto Transformer",
//     image: "/airport.jpg",
//     intro: "Efficient, compact, and cost-effective voltage regulation with single winding design.",
//     highlights: [
//       "Compact & lightweight",
//       "Low voltage regulation",
//       "High efficiency design",
//     ],
//     description: "Tesla Auto Transformers provide precision engineering, high efficiency, and durability. Designed as per IS 2026 / IEC 60076 standards.",
//     applications: [
//       "Transmission & Distribution",
//       "Industrial Machinery",
//       "Railway & Metro Networks",
//       "Testing Labs",
//       "Renewable Energy Systems",
//     ],
//   },
// ]

// export default function ProductsPage() {
//   const [selectedCard, setSelectedCard] = useState<ProductCard | null>(null)

//   return (
//     <div className="min-h-screen bg-white">
//       <Header />

//       {/* Hero */}
//       <section className="relative py-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white text-center">
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Products</h1>
//           <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
//             Comprehensive range of transformers engineered for reliability, efficiency, and performance.
//           </p>
//         </motion.div>
//       </section>



//     {/* Products Section Intro */}
//     <div className="text-center mb-16 mt-20">
//       <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//         Our Premium Products
//       </h2>
//       <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//         High-quality electrical solutions engineered for performance and reliability
//       </p>
//       <div className="w-24 h-1 bg-blue-600 mx-auto mt-6"></div>
//     </div>
  

//       {/* Product Cards */}
//       <section className="py-20 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
//           {PRODUCTS.map((card, idx) => (
//             <motion.div
//               key={idx}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: idx * 0.2 }}
//               viewport={{ once: true }}
//             >
//               <Card className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col">
//                 <div className="h-48 w-full relative">
//                   <img src={card.image} alt={card.title} className="w-full h-full object-cover" />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
//                   <h3 className="absolute bottom-4 left-4 text-white text-2xl font-bold drop-shadow-lg">{card.title}</h3>
//                 </div>
//                 <CardContent className="p-6 flex flex-col flex-grow">
//                   <p className="text-gray-700 mb-4">{card.intro}</p>
//                   <div className="mb-4">
//                     <h4 className="text-sm font-semibold text-blue-700 mb-2">Highlights</h4>
//                     <ul className="list-disc pl-5 space-y-1 text-gray-600 text-sm">
//                       {card.highlights.map((h, i) => (
//                         <li key={i}>{h}</li>
//                       ))}
//                     </ul>
//                   </div>
//                   {card.description && (
//                     <p className="text-gray-600 text-sm mb-4">{card.description.slice(0, 120)}...</p>
//                   )}
//                   <button
//                     onClick={() => setSelectedCard(card)}
//                     className="mt-auto w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg flex items-center justify-center gap-2"
//                   >
//                     Read More
//                     <ChevronRight className="w-4 h-4" />
//                   </button>
//                 </CardContent>
//               </Card>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* Modal */}
//       {selectedCard && (
//         <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
//           <div className="bg-white rounded-2xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden">
//             {/* Header */}
//             <div className="relative">
//               <img src={selectedCard.image} alt={selectedCard.title} className="w-full h-56 object-cover" />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
//               <button onClick={() => setSelectedCard(null)} className="absolute top-4 right-4 text-white bg-black/30 p-2 rounded-full">
//                 <X className="w-5 h-5" />
//               </button>
//               <h2 className="absolute bottom-4 left-6 text-2xl md:text-3xl font-bold text-white">{selectedCard.title}</h2>
//             </div>

//             {/* Content */}
//             <div className="p-6 md:p-8 overflow-y-auto max-h-[calc(90vh-14rem)] space-y-6">
//               {selectedCard.description && (
//                 <div>
//                   <h3 className="text-xl font-bold text-blue-700 mb-2">Product Description</h3>
//                   <p className="text-gray-700 leading-relaxed">{selectedCard.description}</p>
//                 </div>
//               )}

//               {selectedCard.advantages && (
//                 <div>
//                   <h3 className="text-xl font-bold text-blue-700 mb-2">Key Advantages</h3>
//                   <ul className="list-disc pl-6 space-y-2 text-gray-700">
//                     {selectedCard.advantages.map((a, i) => <li key={i}>{a}</li>)}
//                   </ul>
//                 </div>
//               )}

//               {selectedCard.specs && (
//                 <div>
//                   <h3 className="text-xl font-bold text-blue-700 mb-2">Technical Specifications</h3>
//                   <ul className="list-disc pl-6 space-y-2 text-gray-700">
//                     {selectedCard.specs.map((s, i) => <li key={i}>{s}</li>)}
//                   </ul>
//                 </div>
//               )}

//               {selectedCard.applications && (
//                 <div>
//                   <h3 className="text-xl font-bold text-blue-700 mb-2">Applications</h3>
//                   <ul className="list-disc pl-6 space-y-2 text-gray-700">
//                     {selectedCard.applications.map((app, i) => <li key={i}>{app}</li>)}
//                   </ul>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Technical Excellence Boxes */}
//       <section className="py-20 bg-gray-100">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {[
//               { icon: <Shield className="h-8 w-8 text-blue-600" />, title: "Quality Assured", desc: "ISO 9001:2015 certified manufacturing processes ensuring consistent quality." },
//               { icon: <Gauge className="h-8 w-8 text-green-600" />, title: "High Efficiency", desc: "Advanced designs achieving efficiency levels exceeding 99.5%." },
//               { icon: <Settings className="h-8 w-8 text-purple-600" />, title: "Customizable", desc: "Tailored solutions to meet specific customer requirements." },
//               { icon: <Zap className="h-8 w-8 text-orange-600" />, title: "Reliable", desc: "Proven track record with over 50 years of reliable operation." },
//             ].map((box, i) => (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ delay: i * 0.2, duration: 0.6 }}
//                 viewport={{ once: true }}
//               >
//                 <Card className="p-6 text-center border-0 shadow-lg hover:shadow-2xl transition">
//                   <CardContent>
//                     <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                       {box.icon}
//                     </div>
//                     <h3 className="text-xl font-bold text-gray-900 mb-2">{box.title}</h3>
//                     <p className="text-gray-600 text-sm">{box.desc}</p>
//                   </CardContent>
//                 </Card>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   )
// }



"use client";

import { Header } from "@/components/header";
import { Card, CardContent } from "@/components/ui/card";
import { Footer } from "@/components/footer";
import { useState } from "react";
import {
  X,
  ChevronRight,
  Shield,
  Gauge,
  Settings,
  Zap,
} from "lucide-react";
import { motion } from "framer-motion";

type ProductCard = {
  title: string;
  image: string;
  intro: string;
  highlights: string[];
  description?: string;
  advantages?: string[];
  specs?: string[];
  applications?: string[];
};

const PRODUCTS: ProductCard[] = [
  {
    title: "Power Transformer",
    image: "/power-transformer-electrical-equipment.jpg",
    intro:
      "Power transformers play a crucial role in power networks, directly impacting electrification, transmission, and grid stability.",
    highlights: [
      "Up to 200MVA, 220kV Class",
      "NABL-accredited laboratory",
      "Approved by PGCIL, NTPC & state utilities",
    ],
    description:
      "At Tesla Transformers (India) Ltd., we manufacture high-quality Power Transformers, ensuring excellence at every stage of production. We adhere strictly to internationally accepted standards and regulations, without compromising on quality.",
    advantages: [
      "Trusted by customers across India and abroad",
      "Specialized in power station transformers & reactors",
      "Rigorous testing ensures superior reliability",
    ],
    specs: [
      "Range: Up to 200MVA, 220kV Class",
      "NABL-accredited laboratory",
      "Tested at KEMA, CPRI, STL labs",
      "Approved by PGCIL, NTPC & State Utilities",
    ],
  },
  {
    title: "Extra High Voltage (EHV) Transformer",
    image: "/electrical-distribution-grid-system.jpg",
    intro:
      "Engineered for long-distance transmission with high efficiency, minimal losses, and reliability under extreme conditions.",
    highlights: [
      "Voltage ratings up to 220kV",
      "High dielectric strength",
      "Robust construction",
    ],
    description:
      "Backed by decades of expertise and a commitment to innovation, Tesla's EHV Transformers are trusted by utilities and industries across India and global markets.",
    specs: [
      "Low loss design for enhanced efficiency",
      "Advanced cooling for thermal performance",
    ],
    applications: [
      "Power Generation Plants",
      "Transmission & Distribution Networks",
      "Heavy Industries",
    ],
  },
  {
    title: "Distribution Transformer",
    image: "/industrial-electrical-manufacturing-facility.jpg",
    intro:
      "Reliable transformers from 25 KVA to 5000 KVA with multiple voltage classes up to 33 kV.",
    highlights: [
      "Free-breathing & hermetically sealed options",
      "Oil or synthetic fluid designs",
      "Amorphous & CRGO core transformers",
    ],
    description:
      "Tesla manufactures BIS-compliant transformers ensuring top-tier energy efficiency and reliability. Options include plate radiator cooling or corrugated tank cooling.",
    applications: [
      "Urban & rural distribution networks",
      "Chemical plants",
      "Oil & gas terminals",
      "Indoor applications with synthetic coolants",
    ],
  },
  {
    title: "Dry Type Transformer",
    image: "/electrical-energy-storage-battery-systems.jpg",
    intro:
      "Insulated with Class 'H' & 'C' materials, designed to withstand high temperatures and dielectric stress.",
    highlights: [
      "Range: 100 KVA to 15000 KVA",
      "33 kV Class",
      "IEC 60076 compliant",
    ],
    description:
      "Manufactured with advanced insulation systems for safety and performance. Rigorously tested for industrial and commercial reliability.",
    advantages: [
      "Low maintenance and eco-friendly",
      "Safe for indoor installations",
      "Durable under extreme environments",
    ],
  },
  {
    title: "Auto Transformer",
    image: "/airport.jpg",
    intro:
      "Efficient, compact, and cost-effective voltage regulation with single winding design.",
    highlights: [
      "Compact & lightweight",
      "Low voltage regulation",
      "High efficiency design",
    ],
    description:
      "Tesla Auto Transformers provide precision engineering, high efficiency, and durability. Designed as per IS 2026 / IEC 60076 standards.",
    applications: [
      "Transmission & Distribution",
      "Industrial Machinery",
      "Railway & Metro Networks",
      "Testing Labs",
      "Renewable Energy Systems",
    ],
  },
];

export default function ProductsPage() {
  const [selectedCard, setSelectedCard] = useState<ProductCard | null>(null);

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">

      {/* ================================================
           UNIFIED BACKGROUND (same as Vision + Facilities)
      ================================================= */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          style={{
            backgroundImage: `url('/landscapenine.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "absolute",
            inset: 0,
            transform: "scale(1.1)",
            animation: "sectionZoom 14s ease-in-out infinite alternate",
            filter: "brightness(0.55)",
            zIndex: 0,
          }}
        ></div>
      </div>

      {/* Soft overlay */}
      <div className="absolute inset-0 bg-white/10 pointer-events-none"></div>

      {/* ALL CONTENT ON TOP */}
      <div className="relative z-10">

        <Header />

        {/* HERO (background removed, text unchanged) */}
        <section className="relative py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg mb-6">
              Our Products
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto font-medium drop-shadow">
              Comprehensive range of transformers engineered for reliability,
              efficiency, and performance.
            </p>
          </motion.div>
        </section>

        {/* INTRO */}
        <div className="text-center mb-16 mt-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white drop-shadow mb-4">
            Our Premium Products
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto font-medium drop-shadow">
            High-quality electrical solutions engineered for performance and reliability
          </p>
          <div className="w-24 h-1 bg-blue-300 mx-auto mt-6"></div>
        </div>

        {/* PRODUCT CARDS */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {PRODUCTS.map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col bg-white/80 backdrop-blur-md">
                  <div className="h-48 w-full relative">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40"></div>
                    <h3 className="absolute bottom-4 left-4 text-white text-2xl font-bold drop-shadow-lg">
                      {card.title}
                    </h3>
                  </div>

                  <CardContent className="p-6 flex flex-col flex-grow">
                    <p className="text-gray-700 mb-4">{card.intro}</p>

                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-blue-700 mb-2">
                        Highlights
                      </h4>
                      <ul className="list-disc pl-5 space-y-1 text-gray-600 text-sm">
                        {card.highlights.map((h, i) => (
                          <li key={i}>{h}</li>
                        ))}
                      </ul>
                    </div>

                    {card.description && (
                      <p className="text-gray-600 text-sm mb-4">
                        {card.description.slice(0, 120)}...
                      </p>
                    )}

                    <button
                      onClick={() => setSelectedCard(card)}
                      className="mt-auto w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg flex items-center justify-center gap-2"
                    >
                      Read More <ChevronRight className="w-4 h-4" />
                    </button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* MODAL — unchanged */}
        {selectedCard && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden">

              <div className="relative">
                <img
                  src={selectedCard.image}
                  alt={selectedCard.title}
                  className="w-full h-56 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70"></div>
                <button
                  onClick={() => setSelectedCard(null)}
                  className="absolute top-4 right-4 text-white bg-black/40 p-2 rounded-full"
                >
                  <X className="w-5 h-5" />
                </button>
                <h2 className="absolute bottom-4 left-6 text-2xl md:text-3xl font-bold text-white">
                  {selectedCard.title}
                </h2>
              </div>

              <div className="p-6 md:p-8 overflow-y-auto max-h-[calc(90vh-14rem)] space-y-6">

                {selectedCard.description && (
                  <div>
                    <h3 className="text-xl font-bold text-blue-700 mb-2">
                      Product Description
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {selectedCard.description}
                    </p>
                  </div>
                )}

                {selectedCard.advantages && (
                  <div>
                    <h3 className="text-xl font-bold text-blue-700 mb-2">
                      Key Advantages
                    </h3>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      {selectedCard.advantages.map((a, i) => (
                        <li key={i}>{a}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {selectedCard.specs && (
                  <div>
                    <h3 className="text-xl font-bold text-blue-700 mb-2">
                      Technical Specifications
                    </h3>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      {selectedCard.specs.map((s, i) => (
                        <li key={i}>{s}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {selectedCard.applications && (
                  <div>
                    <h3 className="text-xl font-bold text-blue-700 mb-2">
                      Applications
                    </h3>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      {selectedCard.applications.map((app, i) => (
                        <li key={i}>{app}</li>
                      ))}
                    </ul>
                  </div>
                )}

              </div>
            </div>
          </div>
        )}

        {/* TECHNICAL BOXES */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <Shield className="h-8 w-8 text-blue-600" />,
                  title: "Quality Assured",
                  desc:
                    "ISO 9001:2015 certified manufacturing processes ensuring consistent quality.",
                },
                {
                  icon: <Gauge className="h-8 w-8 text-green-600" />,
                  title: "High Efficiency",
                  desc:
                    "Advanced designs achieving efficiency levels exceeding 99.5%.",
                },
                {
                  icon: <Settings className="h-8 w-8 text-purple-600" />,
                  title: "Customizable",
                  desc:
                    "Tailored solutions to meet specific customer requirements.",
                },
                {
                  icon: <Zap className="h-8 w-8 text-orange-600" />,
                  title: "Reliable",
                  desc:
                    "Proven track record with over 50 years of reliable operation.",
                },
              ].map((box, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <Card className="p-6 text-center border-0 shadow-lg hover:shadow-2xl bg-white/80 backdrop-blur-md transition">
                    <CardContent>
                      <div className="w-16 h-16 bg-white/60 rounded-full flex items-center justify-center mx-auto mb-4">
                        {box.icon}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {box.title}
                      </h3>
                      <p className="text-gray-600 text-sm">{box.desc}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>

      <style jsx>{`
        @keyframes sectionZoom {
          0% {
            transform: scale(1.1);
          }
          100% {
            transform: scale(1.35);
          }
        }
      `}</style>
    </div>
  );
}

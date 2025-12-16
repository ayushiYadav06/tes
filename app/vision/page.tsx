

// "use client"

// import { Header } from "@/components/header"
// import { Card, CardContent } from "@/components/ui/card"
// import { Eye, Lightbulb, Leaf, Globe2, Rocket, Heart } from "lucide-react"
// import { Footer } from "@/components/footer"
// import { motion } from "framer-motion"

// export default function VisionPage() {
//   return (
//     <div className="min-h-screen bg-white">
//       <Header />

//       {/* Hero Section */}
//       <section className="relative py-20 bg-gradient-to-r from-green-900 to-green-700 overflow-hidden">
//         <motion.div
//           initial={{ opacity: 0, y: -40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.9 }}
//           className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
//         >
//           <div className="text-center text-white">
//             <motion.div
//               whileHover={{ scale: 1.1, rotate: 10 }}
//               className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6"
//             >
//               <Eye className="h-8 w-8 text-white" />
//             </motion.div>
//             <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Vision</h1>
//             <p className="text-xl md:text-2xl text-green-100 max-w-4xl mx-auto">
//               Envisioning a sustainable energy future where innovation meets responsibility
//             </p>
//           </div>
//         </motion.div>
//       </section>

//       {/* Vision Statement */}
//       <section className="py-20 bg-white">
//         <motion.div
//           initial={{ opacity: 0, scale: 0.9 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
//         >
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Our Vision for Tomorrow</h2>
//           <Card className="shadow-xl border-0">
//             <CardContent className="p-8 md:p-12">
//               <p className="text-xl md:text-2xl text-green-700 leading-relaxed font-medium italic">
//                " To be recognized globally as the most trusted and innovative transformer manufacturer,
//                 contributing to a sustainable energy future. We envision a world where our solutions enable
//                 efficient power transmission and distribution, supporting economic growth while protecting the
//                 environment for future generations."
//               </p>
//             </CardContent>
//           </Card>
//         </motion.div>
//       </section>




//       {/* Vision Elements */}
//       <section className="py-20 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <motion.h2
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.7 }}
//               viewport={{ once: true }}
//               className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
//             >
//               Vision Elements
//             </motion.h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               The key components that shape our vision and drive our long-term strategy
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {[
//               {
//                 title: "Global Leadership",
//                 desc: "Establishing Tesla Transformers as a globally recognized leader in transformer technology, setting industry standards and best practices worldwide.",
//                 icon: <Globe2 className="h-8 w-8 text-blue-600" />,
//                 bg: "bg-blue-100",
//               },
//               {
//                 title: "Sustainable Future",
//                 desc: "Creating environmentally responsible solutions that reduce carbon footprint and promote sustainable energy practices across all sectors.",
//                 icon: <Leaf className="h-8 w-8 text-green-600" />,
//                 bg: "bg-green-100",
//               },
//               {
//                 title: "Innovation Pioneer",
//                 desc: "Leading the industry through breakthrough innovations in transformer design, smart grid integration, and digital transformation technologies.",
//                 icon: <Lightbulb className="h-8 w-8 text-purple-600" />,
//                 bg: "bg-purple-100",
//               },
//               {
//                 title: "Technological Advancement",
//                 desc: "Driving the next generation of power infrastructure through advanced materials, AI-powered monitoring, and IoT-enabled smart transformers.",
//                 icon: <Rocket className="h-8 w-8 text-orange-600" />,
//                 bg: "bg-orange-100",
//               },
//               {
//                 title: "Community Impact",
//                 desc: "Empowering communities worldwide by providing reliable power infrastructure that supports education, healthcare, and economic development.",
//                 icon: <Heart className="h-8 w-8 text-red-600" />,
//                 bg: "bg-red-100",
//               },
//               {
//                 title: "Future Readiness",
//                 desc: "Preparing for tomorrow's energy challenges by developing adaptive solutions that can evolve with changing technology and market demands.",
//                 icon: <Eye className="h-8 w-8 text-teal-600" />,
//                 bg: "bg-teal-100",
//               },
//             ].map((item, idx) => (
//               <motion.div
//                 key={idx}
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95, rotate: -1 }}
//                 transition={{ type: "spring", stiffness: 300 }}
//               >
//                 <Card className="shadow-lg border-0 cursor-pointer">
//                   <CardContent className="p-8">
//                     <div className={`w-16 h-16 ${item.bg} rounded-full flex items-center justify-center mb-6`}>
//                       {item.icon}
//                     </div>
//                     <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
//                     <p className="text-gray-600 leading-relaxed">{item.desc}</p>
//                   </CardContent>
//                 </Card>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>


//       {/* Vision Roadmap */}
// <section className="py-20 bg-white">
//   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//     <div className="text-center mb-16">
//       <motion.h2
//         initial={{ opacity: 0, y: 30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.7 }}
//         viewport={{ once: true }}
//         className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
//       >
//         Vision Roadmap
//       </motion.h2>
//       <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//         Our strategic milestones toward achieving our vision
//       </p>
//     </div>

//     <div className="relative">
//       {/* Center Line */}
//       <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-green-300 to-green-600"></div>

//       <div className="space-y-12">
//         {/* Item 1 */}
//         <motion.div
//           initial={{ opacity: 0, x: -50 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="flex items-center"
//         >
//           <div className="flex-1 text-right pr-8">
//             <Card className="shadow-lg border-0">
//               <CardContent className="p-6">
//                 <h3 className="text-xl font-bold text-gray-900 mb-2">2025-2027</h3>
//                 <h4 className="text-lg font-semibold text-blue-600 mb-2">Digital Transformation</h4>
//                 <p className="text-gray-600">
//                   Complete digitization of operations and launch of IoT-enabled smart transformers
//                 </p>
//               </CardContent>
//             </Card>
//           </div>
//           <div className="w-5 h-5 bg-blue-600 rounded-full relative z-10"></div>
//           <div className="flex-1 pl-8"></div>
//         </motion.div>

//         {/* Item 2 */}
//         <motion.div
//           initial={{ opacity: 0, x: 50 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="flex items-center"
//         >
//           <div className="flex-1 pr-8"></div>
//           <div className="w-5 h-5 bg-green-600 rounded-full relative z-10"></div>
//           <div className="flex-1 pl-8">
//             <Card className="shadow-lg border-0">
//               <CardContent className="p-6">
//                 <h3 className="text-xl font-bold text-gray-900 mb-2">2028-2030</h3>
//                 <h4 className="text-lg font-semibold text-green-600 mb-2">Sustainable Solutions</h4>
//                 <p className="text-gray-600">
//                   Achieve carbon neutrality in manufacturing and launch eco-friendly transformer series
//                 </p>
//               </CardContent>
//             </Card>
//           </div>
//         </motion.div>

//         {/* Item 3 */}
//         <motion.div
//           initial={{ opacity: 0, x: -50 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="flex items-center"
//         >
//           <div className="flex-1 text-right pr-8">
//             <Card className="shadow-lg border-0">
//               <CardContent className="p-6">
//                 <h3 className="text-xl font-bold text-gray-900 mb-2">2031-2035</h3>
//                 <h4 className="text-lg font-semibold text-purple-600 mb-2">Global Expansion</h4>
//                 <p className="text-gray-600">
//                   Establish manufacturing facilities in 3 new countries and achieve 25% global market share
//                 </p>
//               </CardContent>
//             </Card>
//           </div>
//           <div className="w-5 h-5 bg-purple-600 rounded-full relative z-10"></div>
//           <div className="flex-1 pl-8"></div>
//         </motion.div>
//       </div>
//     </div>
//   </div>
// </section>


//       <Footer />
//     </div>
//   )
// }



"use client"

import { Header } from "@/components/header"
import { Card, CardContent } from "@/components/ui/card"
import { Eye, Lightbulb, Leaf, Globe2, Rocket, Heart } from "lucide-react"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"

export default function VisionPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
     


      {/* =======================================================
          UNIFIED BACKGROUND SECTION (Vision Tomorrow + Elements + Roadmap)
      ======================================================= */}
      <div className="relative py-20 overflow-hidden">

        {/* Unified Background Image */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            style={{
              backgroundImage: `url('/landscape.jpg')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              position: "absolute",
              inset: 0,
              transform: "scale(1.1)",
              animation: "sectionZoom 14s ease-in-out infinite alternate",
              filter: "brightness(0.60)",
              zIndex: 0,
            }}
          ></div>
        </div>

        {/* White overlay */}
        <div className="absolute inset-0 bg-white/10 pointer-events-none"></div>


        {/* ---------- ALL CONTENT INSIDE ONE BACKGROUND ---------- */}
        <div className="relative z-10">

          
            <h1 className="text-4xl text-center md:text-6xl font-bold mb-6">Our Vision</h1>
            <p className="text-xl text-center md:text-2xl text-green-100 max-w-4xl mx-auto">
              Envisioning a sustainable energy future where innovation meets responsibility
            </p>


          {/* ==================== OUR VISION FOR TOMORROW ==================== */}
          <section className="py-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                Our Vision for Tomorrow
              </h2>

              <Card className="shadow-xl border-0 bg-white/70 backdrop-blur-sm">
                <CardContent className="p-8 md:p-12">
                  <p className="text-xl md:text-2xl text-green-700 leading-relaxed font-medium italic">
                    " To be recognized globally as the most trusted and innovative transformer
                    manufacturer, contributing to a sustainable energy future. We envision a world
                    where our solutions enable efficient power transmission and distribution,
                    supporting economic growth while protecting the environment for future generations."
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </section>



          {/* ==================== VISION ELEMENTS ==================== */}
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7 }}
                  viewport={{ once: true }}
                  className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
                >
                  Vision Elements
                </motion.h2>
                <p className="text-xl text-white max-w-3xl mx-auto">
                  The key components that shape our vision and drive our long-term strategy
                </p>
              </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Global Leadership",
                desc: "Establishing Tesla Transformers as a globally recognized leader in transformer technology, setting industry standards and best practices worldwide.",
                icon: <Globe2 className="h-8 w-8 text-blue-600" />,
                bg: "bg-blue-100",
              },
              {
                title: "Sustainable Future",
                desc: "Creating environmentally responsible solutions that reduce carbon footprint and promote sustainable energy practices across all sectors.",
                icon: <Leaf className="h-8 w-8 text-green-600" />,
                bg: "bg-green-100",
              },
              {
                title: "Innovation Pioneer",
                desc: "Leading the industry through breakthrough innovations in transformer design, smart grid integration, and digital transformation technologies.",
                icon: <Lightbulb className="h-8 w-8 text-purple-600" />,
                bg: "bg-purple-100",
              },
              {
                title: "Technological Advancement",
                desc: "Driving the next generation of power infrastructure through advanced materials, AI-powered monitoring, and IoT-enabled smart transformers.",
                icon: <Rocket className="h-8 w-8 text-orange-600" />,
                bg: "bg-orange-100",
              },
              {
                title: "Community Impact",
                desc: "Empowering communities worldwide by providing reliable power infrastructure that supports education, healthcare, and economic development.",
                icon: <Heart className="h-8 w-8 text-red-600" />,
                bg: "bg-red-100",
              },
              {
                title: "Future Readiness",
                desc: "Preparing for tomorrow's energy challenges by developing adaptive solutions that can evolve with changing technology and market demands.",
                icon: <Eye className="h-8 w-8 text-teal-600" />,
                bg: "bg-teal-100",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95, rotate: -1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="shadow-lg border-0 cursor-pointer">
                  <CardContent className="p-8">
                    <div className={`w-16 h-16 ${item.bg} rounded-full flex items-center justify-center mb-6`}>
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
            </div>
          </section>



          {/* ==================== VISION ROADMAP ==================== */}
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

              <div className="text-center mb-16">
                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7 }}
                  viewport={{ once: true }}
                  className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
                >
                  Vision Roadmap
                </motion.h2>

                <p className="text-xl text-white max-w-3xl mx-auto">
                  Our strategic milestones toward achieving our vision
                </p>
              </div>

              <div className="relative">
                <div className="absolute left-1/2 -translate-x-1/2 w-1 h-full 
                                bg-gradient-to-b from-green-300 to-green-600 opacity-80"></div>

                <div className="space-y-12">

                  {/* Item 1 */}
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="flex items-center"
                  >
                    <div className="flex-1 text-right pr-8">
                      <Card className="shadow-lg border-0 bg-white/70 backdrop-blur-sm">
                        <CardContent className="p-6">
                          <h3 className="text-xl font-bold text-gray-900 mb-2">2025–2027</h3>
                          <h4 className="text-lg font-semibold text-blue-600 mb-2">Digital Transformation</h4>
                          <p className="text-gray-700">Complete digitization & smart transformer rollout</p>
                        </CardContent>
                      </Card>
                    </div>
                    <div className="w-5 h-5 bg-blue-600 rounded-full relative z-10"></div>
                    <div className="flex-1 pl-8"></div>
                  </motion.div>

                  {/* Item 2 */}
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="flex items-center"
                  >
                    <div className="flex-1 pr-8"></div>
                    <div className="w-5 h-5 bg-green-600 rounded-full relative z-10"></div>
                    <div className="flex-1 pl-8">
                      <Card className="shadow-lg border-0 bg-white/70 backdrop-blur-sm">
                        <CardContent className="p-6">
                          <h3 className="text-xl font-bold text-gray-900 mb-2">2028–2030</h3>
                          <h4 className="text-lg font-semibold text-green-600 mb-2">Sustainable Solutions</h4>
                          <p className="text-gray-700">Carbon-neutral operations & eco-series launch</p>
                        </CardContent>
                      </Card>
                    </div>
                  </motion.div>

                  {/* Item 3 */}
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="flex items-center"
                  >
                    <div className="flex-1 text-right pr-8">
                      <Card className="shadow-lg border-0 bg-white/70 backdrop-blur-sm">
                        <CardContent className="p-6">
                          <h3 className="text-xl font-bold text-gray-900 mb-2">2031–2035</h3>
                          <h4 className="text-lg font-semibold text-purple-600 mb-2">Global Expansion</h4>
                          <p className="text-gray-700">Expand to 3 new countries & hit 25% global share</p>
                        </CardContent>
                      </Card>
                    </div>
                    <div className="w-5 h-5 bg-purple-600 rounded-full relative z-10"></div>
                    <div className="flex-1 pl-8"></div>
                  </motion.div>

                </div>
              </div>

            </div>
          </section>


        </div>

        {/* Keyframes */}
        <style jsx>{`
          @keyframes sectionZoom {
            0% { transform: scale(1.1); }
            100% { transform: scale(1.35); }
          }
        `}</style>

      </div>



      <Footer />
    </div>
  )
}

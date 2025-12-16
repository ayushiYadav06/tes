


// "use client"

// import { motion } from "framer-motion"
// import { Header } from "@/components/header"
// import { Footer } from "@/components/footer"

// export default function ServicesPage() {
//   return (
//     <div className="min-h-screen flex flex-col">
//       {/* Sticky Header */}
//       <div className="sticky top-0 z-50 shadow-md">
//         <Header />
//       </div>

//       {/* Main Content */}
//       <main className="flex-grow">
//         <section className="relative py-20 bg-gradient-to-b from-blue-50 via-white to-blue-50">
//           {/* Background Decorative Shapes */}
//           <div className="absolute top-10 left-10 w-40 h-40 bg-blue-200 rounded-full blur-3xl opacity-40 animate-pulse"></div>
//           <div className="absolute bottom-20 right-20 w-52 h-52 bg-purple-200 rounded-full blur-3xl opacity-40 animate-bounce"></div>

//           <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
//             {/* Heading */}
//             <div className="text-center mb-16">
//               <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
//                 Our{" "}
//                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
//                   Services 
//                 </span>
//               </h1>
//               <p className="text-lg text-blue-600 tracking-widest uppercase">
//                 Our Capabilities
//               </p>
//               <h2 className="text-3xl font-bold text-gray-800 mt-2">
//                 Engineering Services
//               </h2>
//             </div>

//             {/* Services Grid */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
//               {/* Card 1 */}
//               <motion.div
//                 whileHover={{ scale: 1.05 }}
//                 className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all border-t-4 border-blue-500"
//               >
//                 <h3 className="text-xl font-bold text-blue-700 mb-3">
//                   Transformer Manufacturing
//                 </h3>
//                 <p className="text-gray-700 leading-relaxed">
//                   <strong>Tesla Transformers (India) Ltd.</strong> specializes in
//                   high-quality Power Transformers, E.H.V Transformers, Distribution,
//                   Auto Transformers, Dry Type and Special Transformers. Innovation +
//                   International Standards = Reliable, efficient solutions worldwide.
//                 </p>
//               </motion.div>

//               {/* Card 2 */}
//               <motion.div
//                 whileHover={{ scale: 1.05 }}
//                 className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all border-t-4 border-green-500"
//               >
//                 <h3 className="text-xl font-bold text-green-700 mb-3">
//                   Transformer Supply, Installation & Commissioning
//                 </h3>
//                 <p className="text-gray-700 leading-relaxed">
//                   End-to-end <strong>supply and installation</strong> of Power, E.H.V,
//                   Distribution, Auto, Dry Type and Special Transformers. Seamless
//                   integration, global standards, and reliability at scale.
//                 </p>
//               </motion.div>

//               {/* Card 3 */}
//               <motion.div
//                 whileHover={{ scale: 1.05 }}
//                 className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all border-t-4 border-purple-500"
//               >
//                 <h3 className="text-xl font-bold text-purple-700 mb-3">
//                   Holistic Power Infrastructure Approach
//                 </h3>
//                 <p className="text-gray-700 leading-relaxed">
//                   From <strong>transformer installations</strong> to full-scale{" "}
//                   <strong>substation projects</strong>, Tesla ensures seamless execution
//                   with unmatched expertise and reliability worldwide.
//                 </p>
//               </motion.div>

//               {/* Card 4 */}
//               <motion.div
//                 whileHover={{ scale: 1.05 }}
//                 className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all border-t-4 border-orange-500"
//               >
//                 <h3 className="text-xl font-bold text-orange-700 mb-3">
//                   Power System Experts
//                 </h3>
//                 <p className="text-gray-700 leading-relaxed">
//                   Trusted advisors for <strong>transformer technology</strong> &
//                   <strong> substation projects</strong>. We guide clients through
//                   complexities to ensure informed decisions & successful outcomes.


//                 </p>
//               </motion.div>

//             {/* Card 5 */}
// <motion.div
//   whileHover={{ scale: 1.05 }}
//   className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all md:col-span-2 border-t-4 border-teal-500"
// >
//   <h3 className="text-xl font-bold text-teal-700 mb-3">
//     After Sales Services
//   </h3>
//   <p className="text-gray-700 leading-relaxed">
//     For Tesla, <strong>after-sales service is the cornerstone</strong> of our brand identity. 
//     More than just support, it’s our promise of lasting performance, reliability, and customer trust.
//  We believe that exceptional after-sales service is the new marketing—it’s what truly differentiates us from others in the industry.
//   </p>
// </motion.div>

//             </div>
//           </div>
//         </section>
//       </main>

//       {/* Footer */}
//       <Footer />
//     </div>
//   )
// }





"use client"

import { motion } from "framer-motion"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="sticky top-0 z-50 shadow-md">
        <Header />
      </div>

      <main className="flex-grow">

        {/* <section className="relative py-20 bg-gradient-to-b from-blue-50 via-white to-blue-50">
          <div className="absolute top-10 left-10 w-40 h-40 bg-blue-200 rounded-full blur-3xl opacity-40 animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-52 h-52 bg-purple-200 rounded-full blur-3xl opacity-40 animate-bounce"></div>

          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
                Our{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  Services
                </span>
              </h1>
              <p className="text-lg text-blue-600 tracking-widest uppercase">
                Our Capabilities
              </p>
              <h2 className="text-3xl font-bold text-gray-800 mt-2">
                Engineering Services
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all border-t-4 border-blue-500"
              >
                <h3 className="text-xl font-bold text-blue-700 mb-3">
                  Transformer Manufacturing
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  <strong>Tesla Transformers (India) Ltd.</strong> specializes in
                  high-quality Power Transformers, E.H.V Transformers, Distribution,
                  Auto Transformers, Dry Type and Special Transformers. Innovation +
                  International Standards = Reliable, efficient solutions worldwide.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all border-t-4 border-green-500"
              >
                <h3 className="text-xl font-bold text-green-700 mb-3">
                  Transformer Supply, Installation & Commissioning
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  End-to-end <strong>supply and installation</strong> of Power, E.H.V,
                  Distribution, Auto, Dry Type and Special Transformers. Seamless
                  integration, global standards, and reliability at scale.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all border-t-4 border-purple-500"
              >
                <h3 className="text-xl font-bold text-purple-700 mb-3">
                  Holistic Power Infrastructure Approach
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  From <strong>transformer installations</strong> to full-scale{" "}
                  <strong>substation projects</strong>, Tesla ensures seamless execution
                  with unmatched expertise and reliability worldwide.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all border-t-4 border-orange-500"
              >
                <h3 className="text-xl font-bold text-orange-700 mb-3">
                  Power System Experts
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Trusted advisors for <strong>transformer technology</strong> &
                  <strong> substation projects</strong>. We guide clients through
                  complexities to ensure informed decisions & successful outcomes.


                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all md:col-span-2 border-t-4 border-teal-500"
              >
                <h3 className="text-xl font-bold text-teal-700 mb-3">
                  After Sales Services
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  For Tesla, <strong>after-sales service is the cornerstone</strong> of our brand identity.
                  More than just support, it’s our promise of lasting performance, reliability, and customer trust.
                  We believe that exceptional after-sales service is the new marketing—it’s what truly differentiates us from others in the industry.
                </p>
              </motion.div>

            </div>
          </div>
        </section> */}

        <section className="relative py-20 overflow-hidden">

          {/* 🔥 Background Image with Zoom Animation */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-fixed zoom-bg pointer-events-none"
            style={{
              backgroundImage: "url('/landscapeeight.jpg')",
              filter: "brightness(0.75)"
            }}
          />

          {/* 🔥 Blackish Soft Overlay */}
          <div className="absolute inset-0 bg-black/40 pointer-events-none" />

          {/* 🔥 Main Content */}
          <div className="relative max-w-7xl mx-auto px-6 lg:px-8 z-10">

            {/* Heading */}
            <div className="text-center mb-16">
              <h1 className="text-5xl font-extrabold text-white mb-4">
                Our{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300">
                  Services
                </span>
              </h1>
              <p className="text-lg text-blue-200 tracking-widest uppercase">
                Our Capabilities
              </p>
              <h2 className="text-3xl font-bold text-white mt-2">
                Engineering Services
              </h2>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

              {/* Card 1 */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white/90 backdrop-blur-md p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all border-t-4 border-blue-500"
              >
                <h3 className="text-xl font-bold text-blue-700 mb-3">
                  Transformer Manufacturing
                </h3>
                {/* <p className="text-gray-700 leading-relaxed">
          <strong>Tesla Transformers (India) Ltd.</strong> specializes in high-quality Power Transformers, 
          E.H.V Transformers, Distribution, Auto, Dry Type and Special Transformers.
        </p> */}

                <p className="text-gray-700 leading-relaxed">
                  <strong>Tesla Transformers (India) Ltd.</strong> specializes in the manufacturing of high-quality Power
                  Transformer, E.H.V Transformer, Distribution, Auto Transformer, Dry Type and Special
                  Type Transformers. With a focus on innovation and adherence to international
                  standards, Tesla ensures reliable and efficient solutions for power infrastructure
                  projects, catering to clients worldwide.
                </p>
              </motion.div>

              {/* Card 2 */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white/90 backdrop-blur-md p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all border-t-4 border-green-500"
              >
                <h3 className="text-xl font-bold text-green-700 mb-3">
                  Transformer Supply, Installation & Commissioning
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  <strong>Tesla Transformers (India) Ltd.</strong> specializes in the supply and installation of high-quality
                  Power Transformer, E.H.V Transformer, Distribution, Auto Transformer, Dry Type and
                  Special Type Transformers. Our team is dedicated to ensuring seamless integration
                  and optimal performance in various power applications, delivering reliable solutions
                  that meet international standards.
                </p>
              </motion.div>

              {/* Card 3 */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white/90 backdrop-blur-md p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all border-t-4 border-purple-500"
              >
                <h3 className="text-xl font-bold text-purple-700 mb-3">
                  Industry Insights
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  <strong>Tesla Transformers (India) Ltd.</strong>  Tesla Transformers (India) Ltd. offers valuable insights and expertise in the electric
                  power sector. Our knowledgeable team guides clients through the complexities of
                  transformer technology and substation projects, ensuring informed decisions and
                  successful outcomes in their power infrastructure endeavors.
                </p>
              </motion.div>

              {/* Card 4 */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white/90 backdrop-blur-md p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all border-t-4 border-orange-500"
              >
                <h3 className="text-xl font-bold text-orange-700 mb-3">
                  Power System Experts
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  <strong>Tesla Transformers (India) Ltd.</strong> provides expert guidance in power systems, from
                  transformer installations to substation projects. With a wealth of industry knowledge
                  and a commitment to quality, Tesla India ensures seamless execution and support for
                  power infrastructure projects around the globe.

                </p>
              </motion.div>

              {/* Card 5 */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white/90 backdrop-blur-md p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all md:col-span-2 border-t-4 border-teal-500"
              >
                <h3 className="text-xl font-bold text-teal-700 mb-3">
                  After Sales Services
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  For our transformer company, after-sales service is not just an add-on; it’s a
                  cornerstone of our business strategy and brand identity. We believe that exceptional
                  after-sales service is the new marketing—it’s what truly differentiates us from others in
                  the industry.
                </p>
              </motion.div>

            </div>
          </div>

          {/* 🔥 Zoom Animation CSS */}
          <style jsx global>{`
    @keyframes zoomBg {
      0% { transform: scale(1); }
      100% { transform: scale(1.15); }
    }
    .zoom-bg {
      animation: zoomBg 10s ease-in-out infinite alternate;
    }
  `}</style>
        </section>


      </main>

      <Footer />
    </div>
  )
}

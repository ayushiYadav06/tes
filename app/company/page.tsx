// "use client"

// import { motion } from "framer-motion"
// import { Header } from "@/components/header"
// import { Footer } from "@/components/footer"

// export default function CompanyPage() {
//   return (
//     <div className="bg-gradient-to-b from-blue-50 via-white to-gray-50 min-h-screen flex flex-col">
//       {/* Sticky Header */}
//       <header className="sticky top-0 z-50 shadow-md">
//         <Header />
//       </header>

//       {/* Main Section */}
//       <section className="py-20 flex-grow">
//         <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

//           {/* Animated Image */}
//           <motion.div
//             initial={{ scale: 0.9, opacity: 0 }}
//             animate={{ scale: [0.9, 1.05, 1], opacity: 2 }}
//             transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
//             className="rounded-xl overflow-hidden shadow-2xl border-4 border-blue-200"
//           >

//             <div
//   className="w-full h-[450px] rounded-xl overflow-hidden shadow-2xl border-4 border-blue-200 bg-center bg-cover"
//   style={{
//     backgroundImage: "url('/office.jpg')",
//   }}
//   aria-label="Tesla Transformers (India) Ltd."
// />

//           </motion.div>

//           {/* Text Content */}
//           <motion.div
//             initial={{ y: 50, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 1, ease: "easeOut" }}
//           >

//             <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
//               Our Company
//             </h1>
//             <p className="text-lg text-gray-700 leading-relaxed mb-4">
//               <strong className="text-blue-700">Tesla Transformers (India) Limited (TTIL)</strong> 
//               was established in 1972 and proudly celebrated its{" "}
//               <strong className="text-green-600">50-year golden jubilee</strong> in 2022. 
//               Ranked among the top transformer manufacturing companies in India, TTIL is a trusted name 
//               in the electric power sector.
//             </p>
//             <p className="text-lg text-gray-700 leading-relaxed mb-4">
//               TTIL is a multi-product and service organization specializing in the{" "}
//               <strong className="text-blue-700">manufacturing, supply, erection, and testing</strong> 
//               of Power and Distribution Transformers, as well as the execution of{" "}
//               <strong className="text-green-600">complete substations as turnkey projects</strong>.
//             </p>
//             <p className="text-lg text-gray-700 leading-relaxed">
//               With over{" "}
//               <strong className="text-blue-700">52 years of industry credibility</strong>, 
//               the company aligns with international and Indian quality standards, ensuring customer 
//               satisfaction through{" "}
//               <strong className="text-green-600">continuous innovation and commitment</strong>.
//             </p>
//           </motion.div>
//         </div>
//       </section>

//       {/* Footer */}
//       <Footer />
//     </div>
//   )
// }



"use client"

import { motion } from "framer-motion"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function CompanyPage() {
  return (
    <div className="relative min-h-screen flex flex-col overflow-hidden">

      {/* 🔥 Unified Background */}
      {/* <div
        className="absolute inset-0 bg-cover bg-center bg-fixed zoom-bg pointer-events-none"
        style={{ backgroundImage: "url('/landscapefour.jpg')" }}
      /> */}

      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed zoom-bg pointer-events-none"
        style={{
          backgroundImage: "url('/landscapefour.jpg')",
          filter: "blur(1px)",    // 🔥 Blur added
          transform: "scale(1.05)" // keep full image visible after blur cropping
        }}
      />

      {/* 🔥 Soft White Overlay */}
      <div className="absolute inset-0 bg-black/40 pointer-events-none" />

      {/* Page Content */}
      <div className="relative z-10">

        {/* Sticky Header */}
        <header className="sticky top-0 z-50 shadow-md">
          <Header />
        </header>

        {/* Main Section */}
        <section className="py-20 flex-grow ">
          <div className="max-w-7xl m-5 border-3 rounded-md px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-white/60 ">

            {/* Animated Image */}
            <motion.div
              // initial={{ scale: 0.9, opacity: 0 }}
              // animate={{ scale: [0.9, 1.05, 1], opacity: 1 }}
              // transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
         initial={{ scale: 0.95 }}
animate={{ scale: 1.05 }}

transition={{ duration: 5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}

              className="rounded-xl overflow-hidden shadow-2xl m-5 "
            >
              <div
                className="w-full h-[450px] rounded-xl overflow-hidden shadow-2xl  bg-center bg-contain bg-no-repeat"
                style={{
                  backgroundImage: "url('/office.jpg')",
                }}
                aria-label="Tesla Transformers (India) Ltd."
              />
            </motion.div>

            {/* Text Content */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              
            >
              <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
                Our Company
              </h1>
              <p className="text-lg text-gray-700 leading-relaxed mb-4 ">
                <strong className="text-blue-700">Tesla Transformers (India) Limited (TTIL)</strong>
                was established in 1972 and proudly celebrated its{" "}
                <strong className="text-green-600">50-year golden jubilee</strong> in 2022.
                Ranked among the top transformer manufacturing companies in India, TTIL is a trusted name
                in the electric power sector.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                TTIL is a multi-product and service organization specializing in the{" "}
                <strong className="text-blue-700">manufacturing, supply, erection, and testing</strong>
                of Power and Distribution Transformers, as well as the execution of{" "}
                <strong className="text-green-600">complete substations as turnkey projects</strong>.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                With over{" "}
                <strong className="text-blue-700">52 years of industry credibility</strong>,
                the company aligns with international and Indian quality standards, ensuring customer
                satisfaction through{" "}
                <strong className="text-green-600">continuous innovation and commitment</strong>.
              </p>
            </motion.div>
          </div>
        </section>




        {/* Footer */}
        <Footer />

      </div>

      {/* 🔥 Internal CSS */}
      <style jsx global>{`
        @keyframes zoomSlow {
          0% { transform: scale(1); }
          100% { transform: scale(1.08); }
        }

        .zoom-bg {
          animation: zoomSlow 18s ease-in-out infinite alternate;
        }
      `}</style>

    </div>
  )
}




// "use client"

// import { Header } from "@/components/header"
// import { Card, CardContent } from "@/components/ui/card"
// import { Target, Zap, Shield, Globe, Users, Award } from "lucide-react"
// import { Footer } from "@/components/footer"
// import { motion } from "framer-motion"

// export default function MissionPage() {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
//       {/* Floating background accents */}
//       <div className="absolute top-10 left-10 w-64 h-64 bg-blue-300/20 rounded-full blur-3xl animate-pulse"></div>
//       <div className="absolute bottom-32 right-20 w-72 h-72 bg-indigo-400/20 rounded-full blur-3xl animate-bounce"></div>
//       <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-blue-200/30 rounded-full blur-2xl animate-ping"></div>

//       <Header />

//       {/* Hero Section */}
//       <section className="relative py-28 bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-700 text-white text-center overflow-hidden">
//         <motion.div
//           className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.9 }}
//         >
//           <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl">
//             <Target className="h-10 w-10 text-white" />
//           </div>
//           <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight drop-shadow-lg">
//             Our Mission
//           </h1>
//           <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
//             Powering India’s energy future with <span className="font-semibold text-white">innovation</span>, 
//             <span className="font-semibold text-white"> quality</span>, and a vision built on 
//             <span className="font-semibold text-white"> sustainability</span>.
//           </p>
//         </motion.div>
//       </section>

//       {/* Mission Statement */}
//       <section className="py-24">
//         <motion.div
//           className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
//           initial={{ opacity: 0, scale: 0.95 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.7 }}
//           viewport={{ once: true }}
//         >
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Our Core Mission</h2>
//           <Card className="shadow-2xl border-0 bg-white/70 backdrop-blur-xl hover:shadow-blue-200/50 transition transform hover:scale-[1.02] ">
//             <CardContent className="p-10 md:p-14 ">
//               <p className="text-xl md:text-2xl text-blue-700 leading-relaxed font-bold italic bg-grey-400 ">
//                 {/* To be recognized as the **most trusted provider** of reliable and sustainable transformer solutions, 
//                 powering national growth while advancing **energy security**. We promise exceptional value through 
//                 cutting-edge technology, **uncompromising quality**, and unmatched service. */}
//                 “Our mission is to consistently fulfill customer needs with unwavering focus, innovation, and uncompromising quality. We strive to deliver products of the highest standard, complemented by service excellence that sets benchmarks in our industry. As a trusted partner and reliable employer, we are dedicated to fostering enduring relationships, achieving sustainable growth, and unlocking new opportunities that strengthen both our customers’ success and our own.”
//               </p>
//             </CardContent>
//           </Card>
//         </motion.div>
//       </section>

//       {/* Mission Pillars */}
//       <section className="py-24 bg-gradient-to-br from-gray-50 to-gray-100 relative">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             className="text-center mb-20"
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//           >
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Mission Pillars</h2>
//             <p className="text-lg text-gray-600 max-w-3xl mx-auto">
//               Our mission rests on six unshakable pillars that shape everything we create and deliver.
//             </p>
//           </motion.div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
//             {[
//               { icon: <Zap className="h-8 w-8 text-blue-600" />, title: "Innovation Excellence", text: "Constantly redefining transformer technology to serve tomorrow’s power needs." },
//               { icon: <Shield className="h-8 w-8 text-green-600" />, title: "Uncompromised Quality", text: "Delivering world-class products tested to global standards." },
//               { icon: <Globe className="h-8 w-8 text-purple-600" />, title: "Sustainability", text: "Pioneering eco-friendly and energy-efficient solutions for a greener planet." },
//               { icon: <Users className="h-8 w-8 text-orange-600" />, title: "Customer First", text: "Listening, adapting, and delivering excellence to every client we serve." },
//               { icon: <Award className="h-8 w-8 text-red-600" />, title: "Industry Leadership", text: "Setting benchmarks in reliability, performance, and global recognition." },
//               { icon: <Target className="h-8 w-8 text-teal-600" />, title: "National Growth", text: "Strengthening India’s backbone with resilient energy infrastructure." },
//             ].map((pillar, i) => (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ delay: i * 0.2, duration: 0.6 }}
//                 viewport={{ once: true }}
//               >
//                 <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-md hover:shadow-xl hover:scale-105 transition">
//                   <CardContent className="p-8 text-center">
//                     <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
//                       {pillar.icon}
//                     </div>
//                     <h3 className="text-xl font-bold text-gray-900 mb-3">{pillar.title}</h3>
//                     <p className="text-gray-600">{pillar.text}</p>
//                   </CardContent>
//                 </Card>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Mission in Action */}
//       <section className="py-24">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             className="text-center mb-16"
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7 }}
//             viewport={{ once: true }}
//           >
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Mission in Action</h2>
//             <p className="text-lg text-gray-600 max-w-3xl mx-auto">
//               Turning words into measurable outcomes: the tangible ways we live our mission.
//             </p>
//           </motion.div>

//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//             <motion.div
//               className="space-y-8"
//               initial={{ opacity: 0, x: -40 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: true }}
//             >
//               {[
//                 { num: "1", color: "blue", title: "Advanced R&D", desc: "Investing 5% of annual revenue in research to pioneer next-gen transformer tech." },
//                 { num: "2", color: "green", title: "Global Certifications", desc: "Upholding ISO 9001:2015 and international quality excellence at every step." },
//                 { num: "3", color: "purple", title: "Sustainability", desc: "Implementing eco-conscious processes and green energy practices." },
//                 { num: "4", color: "orange", title: "Customer Success", desc: "Achieving 98% client satisfaction through dependable service and products." },
//               ].map((item, i) => (
//                 <div key={i} className="flex items-start">
//                   <div className={`w-10 h-10 bg-${item.color}-100 rounded-full flex items-center justify-center mr-4 shadow`}>
//                     <span className={`text-${item.color}-600 font-bold text-sm`}>{item.num}</span>
//                   </div>
//                   <div>
//                     <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
//                     <p className="text-gray-600">{item.desc}</p>
//                   </div>
//                 </div>
//               ))}
//             </motion.div>

//             <motion.div
//               className="relative"
//               initial={{ opacity: 0, x: 40 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: true }}
//             >
//               <div
//                 className="aspect-square bg-cover bg-center rounded-3xl shadow-2xl border-4 border-white/70"
//                 style={{
//                   backgroundImage: `url('/transformer.jpg')`,
//                 }}
//               />
//               <div className="absolute inset-0 rounded-3xl shadow-[0_0_50px_15px_rgba(37,99,235,0.2)] pointer-events-none"></div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   )
// }


"use client"

import { Header } from "@/components/header"
import { Card, CardContent } from "@/components/ui/card"
import { Target, Zap, Shield, Globe, Users, Award } from "lucide-react"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"

export default function MissionPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">

      <div className="absolute top-10 left-10 w-64 h-64 bg-blue-300/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-32 right-20 w-72 h-72 bg-indigo-400/20 rounded-full blur-3xl animate-bounce"></div>
      <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-blue-200/30 rounded-full blur-2xl animate-ping"></div>

      <Header />


      {/* --------------------- HERO SECTION (UNCHANGED) ---------------------- */}
      {/* <section className="relative py-28 bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-700 text-white text-center overflow-hidden"> */}
      <section className="relative py-28 bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-700 text-white text-center overflow-hidden">

        <motion.div
          className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl">
            <Target className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight drop-shadow-lg">
            Our Mission
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Powering India’s energy future with <span className="font-semibold text-white">innovation</span>, 
            <span className="font-semibold text-white"> quality</span>, and a vision built on 
            <span className="font-semibold text-white"> sustainability</span>.
          </p>
        </motion.div>
      </section>



      {/* --------------------- MISSION STATEMENT ---------------------- */}
      <section className="relative py-24 overflow-hidden">

        {/* Sharp image — NO BLUR */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute inset-0 bg-cover bg-center animate-[missionZoom_4s_ease-in-out_infinite]"
            style={{
              backgroundImage: "url('/landscapetwo.jpg')",
              filter: "brightness(0.75)"
            }}
          />
        </div>

        {/* Soft white tint for readability */}
        {/* <div className="absolute inset-0 bg-white/20"></div> */}
        <div className="absolute inset-0 bg-black/40 "></div>


        <motion.div
          className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 drop-shadow">
            Our Core Mission
          </h2>

          <Card className="text-card-foreground flex flex-col gap-6 rounded-xl py-6  border-0 bg-[rgba(241, 241, 241, 0.99)] hover:shadow-blue-300/40 transition transform hover:scale-[1.02]">
            <CardContent className="p-10 md:p-14">
              <p className="text-xl md:text-2xl text-white leading-relaxed font-bold italic">
                “Our mission is to consistently fulfill customer needs with unwavering focus, innovation, and uncompromising quality. We strive to deliver products of the highest standard, complemented by service excellence that sets benchmarks in our industry. As a trusted partner and reliable employer, we are dedicated to fostering enduring relationships, achieving sustainable growth, and unlocking new opportunities that strengthen both our customers’ success and our own.”
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </section>



      {/* --------------------- MISSION PILLARS ---------------------- */}
      <section className="relative py-24 overflow-hidden">

        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center animate-[missionWave_5s_ease-in-out_infinite]"
            style={{
              backgroundImage: "url('/landscapethirteen.jpg')",
              filter: "brightness(0.75)"
            }}
          />
        </div>

        {/* Light tint — NO BLUR */}
        <div className="absolute inset-0 bg-white/20"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Mission Pillars</h2>
            <p className="text-lg text-white max-w-3xl mx-auto ">
              Our mission rests on six unshakable pillars that shape everything we create and deliver.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { icon: <Zap className="h-8 w-8 text-blue-600" />, title: "Innovation Excellence", text: "Constantly redefining transformer technology to serve tomorrow’s power needs." },
              { icon: <Shield className="h-8 w-8 text-green-600" />, title: "Uncompromised Quality", text: "Delivering world-class products tested to global standards." },
              { icon: <Globe className="h-8 w-8 text-purple-600" />, title: "Sustainability", text: "Pioneering eco-friendly and energy-efficient solutions for a greener planet." },
              { icon: <Users className="h-8 w-8 text-orange-600" />, title: "Customer First", text: "Listening, adapting, and delivering excellence to every client we serve." },
              { icon: <Award className="h-8 w-8 text-red-600" />, title: "Industry Leadership", text: "Setting benchmarks in reliability, performance, and global recognition." },
              { icon: <Target className="h-8 w-8 text-teal-600" />, title: "National Growth", text: "Strengthening India’s backbone with resilient energy infrastructure." },
            ].map((pillar, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="shadow-lg border-0 bg-white/90 hover:shadow-xl hover:scale-105 transition">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-white/50 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
                      {pillar.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{pillar.title}</h3>
                    <p className="text-gray-700">{pillar.text}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* --------------------- MISSION IN ACTION ---------------------- */}
      <section className="relative py-24 overflow-hidden">

        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute inset-0 bg-cover bg-center animate-[missionFloat_6s_linear_infinite]"
            style={{
              backgroundImage: "url('/landscapetwenty.jpg')",
              filter: "brightness(0.75)"
            }}
          />
        </div>

        {/* REMOVE BLUR — KEEP ONLY LIGHT WHITE OVERLAY */}
        <div className="absolute inset-0 bg-white/90"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 drop-shadow">Mission in Action</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Turning words into measurable outcomes: the tangible ways we live our mission.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {[
                { num: "1", color: "blue", title: "Advanced R&D", desc: "Investing 5% of annual revenue in research to pioneer next-gen transformer tech." },
                { num: "2", color: "green", title: "Global Certifications", desc: "Upholding ISO 9001:2015 and international quality excellence at every step." },
                { num: "3", color: "purple", title: "Sustainability", desc: "Implementing eco-conscious processes and green energy practices." },
                { num: "4", color: "orange", title: "Customer Success", desc: "Achieving 98% client satisfaction through dependable service and products." },
              ].map((item, i) => (
                <div key={i} className="flex items-start">
                  <div className={`w-10 h-10 bg-${item.color}-100 rounded-full flex items-center justify-center mr-4 shadow`}>
                    <span className={`text-${item.color}-600 font-bold text-sm`}>{item.num}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                    <p className="text-gray-700">{item.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div
                className="aspect-square bg-cover bg-center rounded-3xl shadow-2xl border-4 border-white/70"
                style={{ backgroundImage: `url('/transformer.jpg')` }}
              />

              <div className="absolute inset-0 rounded-3xl shadow-[0_0_60px_20px_rgba(37,99,235,0.35)] pointer-events-none"></div>
            </motion.div>
          </div>
        </div>
      </section>


      <Footer />


      <style jsx global>{`
        @keyframes missionZoom {
          0% { transform: scale(1.1); }
          100% { transform: scale(1.18); }
        }
        @keyframes missionWave {
          0% { transform: scale(1.05) rotate(0deg); }
          50% { transform: scale(1.1) rotate(1deg); }
          100% { transform: scale(1.05) rotate(0deg); }
        }
        @keyframes missionFloat {
          0% { transform: translateY(0px); }
          100% { transform: translateY(-25px); }
        }
      `}</style>

    </div>
  )
}

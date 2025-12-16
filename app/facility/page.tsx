// // app/facilities/page.tsx
// import Image from "next/image"
// import { Header } from "@/components/header"
// import { Footer } from "@/components/footer"
// import { Card, CardContent } from "@/components/ui/card"
// import { CheckCircle2, Zap, Shield, Award } from "lucide-react"

// export default function FacilitiesPage() {
//   return (
//     <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
//       {/* Background Decorative Elements */}
//       <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30 -z-10" />
//       <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-30 -z-10" />

//       {/* Sticky Header */}
//       <div className="sticky top-0 z-50">
//         <Header />
//       </div>

//       {/* Hero Section */}
//       <section className="relative py-24 bg-gradient-to-b from-white via-blue-50 to-white text-center overflow-hidden">
//         <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full mb-6 animate-fade-in">
//             <Award className="w-4 h-4 text-blue-700" />
//             <span className="text-sm font-medium text-blue-700">ISO Certified Facilities</span>
//           </div>
//           <h1 className="text-5xl md:text-7xl font-bold text-blue-900 leading-tight mb-6 animate-fade-in-up">
//             Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Facilities</span>
//           </h1>
//           <p className="mt-6 text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-100">
//             Advanced infrastructure, certified processes, and cutting-edge
//             testing—delivering transformers that set benchmarks in reliability
//             and performance.
//           </p>
//         </div>
//       </section>

//       {/* Section 1: Production & Quality Excellence */}
//       <section className="py-20 bg-white relative">
//         <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 px-4 sm:px-6 lg:px-8 items-center">
//           {/* Text */}
//           <div className="space-y-8">
//             <div>
//               <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 rounded-full mb-4">
//                 <Shield className="w-4 h-4 text-blue-600" />
//                 <span className="text-sm font-semibold text-blue-600">Quality Assured</span>
//               </div>
//               <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
//                 Production & Quality Excellence
//               </h2>
//               <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full" />
//             </div>

//             <Card className="shadow-2xl border-0 bg-gradient-to-br from-white to-blue-50 hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-1">
//               <CardContent className="p-8 md:p-10 space-y-6">
//                 <div className="flex gap-4">
//                   <div className="flex-shrink-0">
//                     <CheckCircle2 className="w-6 h-6 text-blue-600 mt-1" />
//                   </div>
//                   <div>
//                     <h3 className="font-bold text-xl text-blue-900 mb-2">
//                       Certified Excellence
//                     </h3>
//                     <p className="text-gray-700 leading-relaxed">
//                       Our transformers are ISO 9001, 14001 & OHSAS 18001 certified,
//                       ensuring strict compliance with international quality norms.
//                       Regular audits reinforce our commitment to global standards.
//                     </p>
//                   </div>
//                 </div>

//                 <div className="flex gap-4">
//                   <div className="flex-shrink-0">
//                     <CheckCircle2 className="w-6 h-6 text-blue-600 mt-1" />
//                   </div>
//                   <div>
//                     <h3 className="font-bold text-xl text-blue-900 mb-2">
//                       Supplier Standards & Comprehensive Testing
//                     </h3>
//                     <p className="text-gray-700 leading-relaxed">
//                      Quality control is earned out at each stage of production on a self-assessment basic. Each employee regards the next workstation as his customer and performs a series of quality checks before passing on a product down the line. The quality development department monitors all quality control documents and carries out its own additional inspection at strategic points in the production process. This system of checks and counter checks allows immediate action to be taken and modification to be made as required. All transformer tanks are tested before being released to the customer. Testing includes leakage test and pressure test.
//                     </p>
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>
//           </div>

//           {/* Image */}
//           <div className="relative group">
//             <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl opacity-20 group-hover:opacity-30 blur-xl transition-opacity duration-300" />
//             <div className="relative rounded-2xl overflow-hidden shadow-2xl">
//               <div
//                 className="w-full aspect-[4/3] bg-cover bg-center rounded-2xl transform group-hover:scale-105 transition-transform duration-500"
//                 style={{
//                   backgroundImage: "url('/transformer 1.jpg')"
//                 }}
//               >
//                 <span className="sr-only">Production and Quality Excellence</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Section 2: Vapour Phase Drying (VPD) Plant */}
//       <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative">
//         <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 px-4 sm:px-6 lg:px-8 items-center">
//           {/* Image */}
//           <div className="relative group order-2 lg:order-1">
//             <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl opacity-20 group-hover:opacity-30 blur-xl transition-opacity duration-300" />
//             <div className="relative rounded-2xl overflow-hidden shadow-2xl">
//               <div
//                 className="w-full aspect-[4/3] bg-cover bg-center rounded-2xl transform group-hover:scale-105 transition-transform duration-500"
//                 style={{
//                   backgroundImage: "url('/transformer 2.jpg')"
//                 }}
//               >
//                 <span className="sr-only">Vapour Phase Drying Plant</span>
//               </div>
//             </div>
//           </div>

//           {/* Text */}
//           <div className="space-y-8 order-1 lg:order-2">
//             <div>
//               <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-50 rounded-full mb-4">
//                 <Zap className="w-4 h-4 text-purple-600" />
//                 <span className="text-sm font-semibold text-purple-600">Advanced Technology</span>
//               </div>
//               <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
//                 Vapour Phase Drying (VPD) Plant
//               </h2>
//               <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full" />
//             </div>

//             <Card className="shadow-2xl border-0 bg-gradient-to-br from-white to-purple-50 hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-1">
//               <CardContent className="p-8 md:p-10 space-y-6">
//                 <p className="text-gray-700 text-lg leading-relaxed">
//                   Our state-of-the-art Vapour Phase Drying Plant ensures deeper
//                   insulation drying, enhanced durability, and superior
//                   transformer performance.
//                 </p>

//                 <div className="space-y-4">
//                   {[
//                     { title: "300 kW Heating Capacity", desc: "Removes moisture rapidly, even in large MVA transformers." },
//                     { title: "Uniform Heat Distribution", desc: "Minimizes thermal stress on insulation and windings." },
//                     { title: "Energy-Efficient", desc: "Reduces drying time while maintaining environmental safety." },
//                     { title: "High Capacity", desc: "Designed for units up to 200 MVA / 220 kV class." },
//                     { title: "Improved Insulation Life", desc: "Prevents premature aging and dielectric failures." }
//                   ].map((item, index) => (
//                     <div key={index} className="flex gap-3 items-start group/item">
//                       <CheckCircle2 className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0 group-hover/item:scale-110 transition-transform" />
//                       <div>
//                         <span className="font-semibold text-blue-900">{item.title}:</span>{" "}
//                         <span className="text-gray-700">{item.desc}</span>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </section>

//       {/* Section 3: NABL Testing Lab */}
//       <section className="py-20 bg-white relative">
//         <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 px-4 sm:px-6 lg:px-8 items-center">
//           {/* Text */}
//           <div className="space-y-8">
//             <div>
//               <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-50 rounded-full mb-4">
//                 <Award className="w-4 h-4 text-green-600" />
//                 <span className="text-sm font-semibold text-green-600">NABL Accredited</span>
//               </div>
//               <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
//                 NABL Testing Lab
//               </h2>
//               <div className="w-20 h-1 bg-gradient-to-r from-green-600 to-blue-600 rounded-full" />
//             </div>

//             <Card className="shadow-2xl border-0 bg-gradient-to-br from-white to-green-50 hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-1">
//               <CardContent className="p-8 md:p-10 space-y-8">
//                 <p className="text-gray-700 text-lg leading-relaxed">
//                   Our NABL-accredited laboratory, compliant with IEC:60076 /
//                   IS:2026, guarantees every transformer meets rigorous
//                   international benchmarks.
//                 </p>

//                 {[
//                   {
//                     title: "Routine Tests",
//                     items: ["Voltage ratio & phase displacement", "Applied & induced AC withstand tests", "No-load loss & resistance measurements", "Partial discharge checks (via third party)"]
//                   },
//                   {
//                     title: "Type Tests",
//                     items: ["Lightning impulse test", "Temperature-rise test"]
//                   },
//                   {
//                     title: "Special Tests",
//                     items: ["Sound level determination", "Zero-sequence impedance", "No-load current harmonics", "Insulation resistance checks"]
//                   }
//                 ].map((section, index) => (
//                   <div key={index} className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:border-blue-200 transition-colors">
//                     <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center gap-2">
//                       <div className="w-2 h-2 bg-blue-600 rounded-full" />
//                       {section.title}
//                     </h3>
//                     <ul className="space-y-2">
//                       {section.items.map((item, idx) => (
//                         <li key={idx} className="flex items-start gap-2 text-gray-700">
//                           <CheckCircle2 className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
//                           <span>{item}</span>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 ))}
//               </CardContent>
//             </Card>
//           </div>

//           {/* Image */}
//           <div className="relative group">
//             <div className="absolute -inset-4 bg-gradient-to-r from-green-600 to-blue-600 rounded-3xl opacity-20 group-hover:opacity-30 blur-xl transition-opacity duration-300" />
//             <div className="relative rounded-2xl overflow-hidden shadow-2xl">
//               <div
//                 className="w-full aspect-[4/3] bg-cover bg-center rounded-2xl transform group-hover:scale-105 transition-transform duration-500"
//                 style={{
//                   backgroundImage: "url('/transformer 4.jpg')"
//                 }}
//               >
//                 <span className="sr-only">NABL Testing Lab</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <Footer />
//     </main>
//   )
// }


"use client";

import Image from "next/image";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Zap, Shield, Award } from "lucide-react";

export default function FacilitiesPage() {
  return (
    <main className="min-h-screen bg-white relative overflow-hidden">

      {/* =======================================================
           UNIFIED BACKGROUND (same as VisionPage)
      ======================================================= */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          style={{
            backgroundImage: `url('/landscapefifteen.jpg')`,
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

      {/* Soft white overlay */}
      <div className="absolute inset-0 bg-white/10 pointer-events-none"></div>

      {/* All page content sits above unified background */}
      <div className="relative z-10">

        {/* Sticky Header */}
        <div className="sticky top-0 z-50">
          <Header />
        </div>

        {/* =======================================================
            HERO SECTION (content untouched, backgrounds removed)
        ======================================================= */}
        <section className="relative py-24 text-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100/70 backdrop-blur-sm rounded-full mb-6">
              <Award className="w-4 h-4 text-blue-700" />
              <span className="text-sm font-medium text-blue-700">
                ISO Certified Facilities
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-lg leading-tight mb-6">
              Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300">
                Facilities
              </span>
            </h1>

            <p className="mt-6 text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed font-medium drop-shadow">
              Advanced infrastructure, certified processes, and cutting-edge
              testing—delivering transformers that set benchmarks in reliability
              and performance.
            </p>
          </div>
        </section>

        {/* =======================================================
            SECTION 1 (BACKGROUNDS REMOVED — CONTENT UNCHANGED)
        ======================================================= */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 px-4 sm:px-6 lg:px-8 items-center">

            {/* TEXT BLOCK */}
            <div className="space-y-8">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50/70 backdrop-blur-sm rounded-full mb-4">
                  <Shield className="w-4 h-4 text-blue-600" />
                  <span className="text-sm font-semibold text-blue-600">
                    Quality Assured
                  </span>
                </div>

                <h2 className="text-4xl md:text-5xl font-bold text-white drop-shadow mb-4">
                  Production & Quality Excellence
                </h2>

                <div className="w-20 h-1 bg-gradient-to-r from-blue-300 to-purple-300 rounded-full" />
              </div>

              <Card className="shadow-2xl border-0 bg-white/70 backdrop-blur-md hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-1">
                <CardContent className="p-8 md:p-10 space-y-6">

                  <div className="flex gap-4">
                    <CheckCircle2 className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-xl text-blue-900 mb-2">
                        Certified Excellence
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        Our transformers are ISO 9001, 14001 & OHSAS 18001 certified,
                        ensuring strict compliance with international quality norms.
                        Regular audits reinforce our commitment to global standards.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <CheckCircle2 className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-xl text-blue-900 mb-2">
                        Supplier Standards & Comprehensive Testing
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        Quality control is earned out at each stage of production on a
                        self-assessment basic. Each employee regards the next workstation
                        as his customer and performs a series of quality checks before
                        passing on a product down the line. The quality development
                        department monitors all quality control documents and carries out
                        its own additional inspection at strategic points in the production
                        process. This system of checks and counter checks allows immediate
                        action to be taken and modification to be made as required. All
                        transformer tanks are tested before being released to the customer.
                        Testing includes leakage test and pressure test.
                      </p>
                    </div>
                  </div>

                </CardContent>
              </Card>
            </div>

            {/* IMAGE */}
            <div className="relative group">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <div
                  className="w-full aspect-[4/3] bg-cover bg-center rounded-2xl transform group-hover:scale-105 transition-transform duration-500"
                  style={{ backgroundImage: "url('/transformer 1.jpg')" }}
                ></div>
              </div>
            </div>

          </div>
        </section>

        {/* =======================================================
            SECTION 2 (BACKGROUNDS REMOVED — CONTENT UNCHANGED)
        ======================================================= */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 px-4 sm:px-6 lg:px-8 items-center">

            {/* IMAGE */}
            <div className="relative group order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <div
                  className="w-full aspect-[4/3] bg-cover bg-center rounded-2xl transform group-hover:scale-105 transition-transform duration-500"
                  style={{ backgroundImage: "url('/transformer 2.jpg')" }}
                ></div>
              </div>
            </div>

            {/* TEXT BLOCK */}
            <div className="space-y-8 order-1 lg:order-2">

              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-50/70 backdrop-blur-sm rounded-full mb-4">
                  <Zap className="w-4 h-4 text-purple-600" />
                  <span className="text-sm font-semibold text-purple-600">
                    Advanced Technology
                  </span>
                </div>

                <h2 className="text-4xl md:text-5xl font-bold text-white drop-shadow mb-4">
                  Vapour Phase Drying (VPD) Plant
                </h2>

                <div className="w-20 h-1 bg-gradient-to-r from-purple-300 to-blue-300 rounded-full" />
              </div>

              <Card className="shadow-2xl border-0 bg-white/70 backdrop-blur-md hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-1">
                <CardContent className="p-8 md:p-10 space-y-6">
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Our state-of-the-art Vapour Phase Drying Plant ensures deeper
                    insulation drying, enhanced durability, and superior transformer
                    performance.
                  </p>

                  <div className="space-y-4">
                    {[
                      { title: "300 kW Heating Capacity", desc: "Removes moisture rapidly, even in large MVA transformers." },
                      { title: "Uniform Heat Distribution", desc: "Minimizes thermal stress on insulation and windings." },
                      { title: "Energy-Efficient", desc: "Reduces drying time while maintaining environmental safety." },
                      { title: "High Capacity", desc: "Designed for units up to 200 MVA / 220 kV class." },
                      { title: "Improved Insulation Life", desc: "Prevents premature aging and dielectric failures." },
                    ].map((item, index) => (
                      <div key={index} className="flex gap-3 items-start">
                        <CheckCircle2 className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <span className="font-semibold text-blue-900">{item.title}:</span>{" "}
                          <span className="text-gray-700">{item.desc}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

          </div>
        </section>

        {/* =======================================================
            SECTION 3 (BACKGROUNDS REMOVED — CONTENT UNCHANGED)
        ======================================================= */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 px-4 sm:px-6 lg:px-8 items-center">

            {/* TEXT BLOCK */}
            <div className="space-y-8">

              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-50/70 backdrop-blur-sm rounded-full mb-4">
                  <Award className="w-4 h-4 text-green-600" />
                  <span className="text-sm font-semibold text-green-600">
                    NABL Accredited
                  </span>
                </div>

                <h2 className="text-4xl md:text-5xl font-bold text-white drop-shadow mb-4">
                  NABL Testing Lab
                </h2>

                <div className="w-20 h-1 bg-gradient-to-r from-green-300 to-blue-300 rounded-full" />
              </div>

              <Card className="shadow-2xl border-0 bg-white/70 backdrop-blur-md hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-1">
                <CardContent className="p-8 md:p-10 space-y-8">
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Our NABL-accredited laboratory, compliant with IEC:60076 /
                    IS:2026, guarantees every transformer meets rigorous
                    international benchmarks.
                  </p>

                  {[
                    {
                      title: "Routine Tests",
                      items: [
                        "Voltage ratio & phase displacement",
                        "Applied & induced AC withstand tests",
                        "No-load loss & resistance measurements",
                        "Partial discharge checks (via third party)",
                      ],
                    },
                    {
                      title: "Type Tests",
                      items: ["Lightning impulse test", "Temperature-rise test"],
                    },
                    {
                      title: "Special Tests",
                      items: [
                        "Sound level determination",
                        "Zero-sequence impedance",
                        "No-load current harmonics",
                        "Insulation resistance checks",
                      ],
                    },
                  ].map((section, index) => (
                    <div
                      key={index}
                      className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:border-blue-200 transition-colors"
                    >
                      <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full" />
                        {section.title}
                      </h3>
                      <ul className="space-y-2">
                        {section.items.map((item, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-gray-700"
                          >
                            <CheckCircle2 className="w-4 h-4 text-green-600 mt-1" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* IMAGE */}
            <div className="relative group">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <div
                  className="w-full aspect-[4/3] bg-cover bg-center rounded-2xl transform group-hover:scale-105 transition-transform duration-500"
                  style={{ backgroundImage: "url('/transformer 4.jpg')" }}
                ></div>
              </div>
            </div>

          </div>
        </section>

        {/* FOOTER */}
        <Footer />

      </div>

      {/* Zoom Animation */}
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
    </main>
  );
}

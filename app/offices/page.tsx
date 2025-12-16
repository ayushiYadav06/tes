
















// "use client"

// import { useEffect, useState, ChangeEvent, FormEvent } from "react"
// import { FiChevronDown, FiChevronUp } from "react-icons/fi"
// import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa"
// import { BsGeoAltFill, BsTelephoneFill, BsEnvelopeFill } from "react-icons/bs"
// import { motion } from "framer-motion"
// import { Header } from "@/components/header"
// import { Footer } from "@/components/footer"

// // Only import AOS dynamically on client side
// let AOS: any = null
// if (typeof window !== 'undefined') {
//   import('aos').then((module) => {
//     AOS = module.default
//     import('aos/dist/aos.css')
//   })
// }

// // ---------- Types ----------
// interface Office {
//   city: string
//   contact: string
//   phone: string
// }

// interface Region {
//   name: string
//   offices: Office[]
// }

// interface RegionData {
//   [key: string]: Region
// }

// interface RegionCardProps {
//   regionKey: string
//   regionName: string
//   offices: Office[]
//   expanded: boolean
//   toggleRegion: (region: string) => void
// }

// // ---------- Page Title ----------
// const PageTitle = () => (
//   <section className="relative py-28 bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-700 text-white text-center overflow-hidden">
//     <div className="absolute top-10 left-10 w-64 h-64 bg-blue-300/20 rounded-full blur-3xl animate-pulse"></div>
//     <div className="absolute bottom-20 right-20 w-72 h-72 bg-indigo-400/20 rounded-full blur-3xl animate-bounce"></div>

//     <motion.div
//       className="max-w-4xl mx-auto px-6 relative z-10"
//       initial={{ opacity: 0, y: 50 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.9 }}
//     >
//       <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight drop-shadow-lg">
//         Our Offices
//       </h1>
//       <p className="text-lg md:text-xl text-blue-100 leading-relaxed">
//         Tesla Transformers (India) Limited welcomes all your inquiries —
//         whether you're seeking product information, business collaborations, or
//         support.
//         <br />
//         <span className="italic text-white font-semibold">
//           "Connect with Innovation. Power the Future."
//         </span>
//       </p>
//     </motion.div>
//   </section>
// )

// // ---------- RegionCard ----------
// const RegionCard = ({
//   regionKey,
//   regionName,
//   offices,
//   expanded,
//   toggleRegion,
// }: RegionCardProps) => {
//   return (
//     <div className="shadow-lg border-0 bg-white/80 backdrop-blur-md rounded-xl transition hover:scale-[1.02]">
//       <button
//         onClick={() => toggleRegion(regionKey)}
//         className="flex justify-between items-center w-full p-5 font-bold text-gray-800 hover:bg-gray-50 rounded-t-xl"
//       >
//         {regionName} Region
//         {expanded ? <FiChevronUp /> : <FiChevronDown />}
//       </button>
      
//       {expanded && (
//         <div className="px-6 pb-6">
//           <ul className="space-y-3 text-gray-700">
//             {offices && offices.length > 0 ? (
//               offices.map((office, index) => (
//                 <li
//                   key={`${regionKey}-office-${index}`}
//                   className="p-4 rounded-lg bg-gray-50 hover:bg-blue-50 transition"
//                 >
//                   <p className="flex items-center font-medium text-blue-700">
//                     <FaMapMarkerAlt className="mr-2" /> {office.city}
//                   </p>
//                   <p className="flex items-center text-sm mt-2 text-gray-600">
//                     <FaPhoneAlt className="mr-2 text-gray-500" />
//                     {office.contact} ({office.phone})
//                   </p>
//                 </li>
//               ))
//             ) : (
//               <li className="p-4 rounded-lg bg-red-50 text-red-600">
//                 No offices data found for {regionName}
//               </li>
//             )}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// }

// // ---------- RegionOffices ----------
// const RegionOffices = ({
//   expandedRegions,
//   toggleRegion,
// }: {
//   expandedRegions: Record<string, boolean>
//   toggleRegion: (region: string) => void
// }) => {
//   const regionData: RegionData = {
//     central: {
//       name: "Central",
//       offices: [
//         { city: "Bhopal, Madhya Pradesh", contact: "Yasir Farooque", phone: "+91 7024120460" },
//         { city: "Nagpur, Maharashtra", contact: "Shashank Thakre", phone: "+91 7389905881" },
//       ],
//     },
//     northern: {
//       name: "Northern",
//       offices: [
//         { city: "Lucknow, Uttar Pradesh", contact: "Ajay Kumar Tiwari", phone: "+91 7024012365" },
//         { city: "New Delhi", contact: "Abhishek Jayaswal", phone: "+91 9412745385" },
//       ],
//     },
//     eastern: {
//       name: "Eastern",
//       offices: [
//         { city: "Guwahati, Assam", contact: "Pratim Das", phone: "+91 7024120441" },
//         { city: "Kolkata, West Bengal", contact: "Sougata Bhattacherjee", phone: "+91 7024007768" },
//       ],
//     },
//     southern: {
//       name: "Southern",
//       offices: [
//         { city: "Hyderabad, Telangana", contact: "Shantanu Mukherjee", phone: "+91 7024154624" },
//         { city: "Bangalore, Karnataka", contact: "Akash Soni", phone: "+91 7024154610" },
//         { city: "Chennai, Tamilnadu", contact: "Sanjoy Kr. Hazra", phone: "+91 9609512760" },
//       ],
//     },
//     western: {
//       name: "Western",
//       offices: [
//         { city: "Ahmedabad, Gujarat", contact: "Niher Ranjan Paul", phone: "+91 9748753616" },
//         { city: "Mumbai, Maharashtra", contact: "Shailesh Karnani", phone: "+91 9967014407" },
//       ],
//     },
//   }

//   return (
//     <section className="py-24 bg-gradient-to-br from-gray-50 to-gray-100">
//       <div className="max-w-6xl mx-auto px-6">
//         <motion.h2
//           className="text-3xl md:text-4xl font-bold text-center mb-12"
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7 }}
//           viewport={{ once: true }}
//         >
//           Our Offices Across Regions
//         </motion.h2>
//         <div className="grid md:grid-cols-1 gap-8">
//           {Object.entries(regionData).map(([regionKey, region]) => {
//             const isExpanded = expandedRegions[regionKey] || false;
            
//             return (
//               <RegionCard
//                 key={`region-${regionKey}`}
//                 regionKey={regionKey}
//                 regionName={region.name}
//                 offices={region.offices}
//                 expanded={isExpanded}
//                 toggleRegion={toggleRegion}
//               />
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   )
// }

// // ---------- ContactInfo ----------
// const ContactInfo = () => (
//   <motion.div
//     className="max-w-5xl w-full shadow-xl bg-white/90 backdrop-blur-md rounded-2xl p-12 text-center"
//     initial={{ opacity: 0, y: 30 }}
//     whileInView={{ opacity: 1, y: 0 }}
//     transition={{ duration: 0.7 }}
//     viewport={{ once: true }}
//   >
//     <BsGeoAltFill className="text-blue-700 text-5xl mx-auto mb-4" />
//     <p className="mb-8 text-gray-700 font-medium leading-relaxed text-lg">
//       23-A, Sector –B, <br />
//       Industrial Area, Govindpura, <br />
//       Bhopal, MP - 462023
//     </p>

//     <BsTelephoneFill className="text-blue-700 text-5xl mx-auto mb-4" />
//     <p className="mb-8 text-gray-700 leading-relaxed text-lg">
//       <strong>Domestic:</strong> +91-7610447608 <br />
//       <strong>International:</strong> +91-9993055536 <br />
//       <strong>Project:</strong> +91-8269072002
//     </p>

//     <BsEnvelopeFill className="text-blue-700 text-5xl mx-auto mb-4" />
//     <p className="text-gray-700 leading-relaxed text-lg">
//       jitendra@teslaindia.co <br />
//       mktg@teslaindia.co <br />
//       projects@teslaindia.co
//     </p>
//   </motion.div>
// )

// // ---------- ContactSection ----------
// const ContactSection = () => (
//   <section className="py-24 relative bg-gradient-to-br from-gray-50 to-gray-100">
//     <div className="max-w-6xl mx-auto px-6">
//       <motion.div
//         className="text-center mb-16"
//         initial={{ opacity: 0, y: 30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.7 }}
//         viewport={{ once: true }}
//       >
//         <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">We'd Love to Hear from You</h2>
//         <p className="text-gray-600">Reach us directly at our offices.</p>
//       </motion.div>
//       <div className="flex justify-center">
//         <ContactInfo />
//       </div>
//     </div>
    
//     <div className="max-w-6xl mx-auto px-6">
//       <iframe
//         title="Tesla Transformers Location"
//         className="w-full h-[400px] mt-16 border-0 rounded-xl shadow-lg"
//         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3665.5010565565726!2d77.44492887509935!3d23.261236679007197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c43d5781c8303%3A0x9e0ab25498a23bfb!2sTesla%20Transformers%20(India)%20Ltd!5e0!3m2!1sen!2sin!4v1749923165118!5m2!1sen!2sin"
//         allowFullScreen
//         loading="lazy"
//       />
//     </div>
//   </section>
// )

// // ---------- Main Page ----------
// export default function ContactPage() {
//   const [isClient, setIsClient] = useState(false)
//   const [expandedRegions, setExpandedRegions] = useState<Record<string, boolean>>({
//     central: false,
//     northern: false,
//     eastern: false,
//     southern: false,
//     western: false,
//   })

//   useEffect(() => {
//     setIsClient(true)
    
//     // Initialize AOS only on client side
//     if (AOS) {
//       AOS.init()
//     }
//   }, [])

//   const toggleRegion = (region: string) => {
//     setExpandedRegions((prev) => ({
//       ...prev,
//       [region]: !prev[region],
//     }))
//   }

//   // Don't render until client-side hydration is complete
//   if (!isClient) {
//     return null
//   }

//   return (
//     <>
//       <Header />
//       <main>
//         <PageTitle />
//         <RegionOffices expandedRegions={expandedRegions} toggleRegion={toggleRegion} />
//         <ContactSection />
//       </main>
//       <Footer />
//     </>
//   )
// }




"use client"

import { useEffect, useState, ChangeEvent, FormEvent } from "react"
import { FiChevronDown, FiChevronUp } from "react-icons/fi"
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa"
import { BsGeoAltFill, BsTelephoneFill, BsEnvelopeFill } from "react-icons/bs"
import { motion } from "framer-motion"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

// Only import AOS dynamically on client side
let AOS: any = null
if (typeof window !== 'undefined') {
  import('aos').then((module) => {
    AOS = module.default
    import('aos/dist/aos.css')
  })
}

// ---------- Types ----------
interface Office {
  city: string
  contact: string
  phone: string
}

interface Region {
  name: string
  offices: Office[]
}

interface RegionData {
  [key: string]: Region
}

interface RegionCardProps {
  regionKey: string
  regionName: string
  offices: Office[]
  expanded: boolean
  toggleRegion: (region: string) => void
}

// ---------- Page Title ----------
const PageTitle = () => (
  <section className="relative py-28 bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-700 text-white text-center overflow-hidden">
    <div className="absolute top-10 left-10 w-64 h-64 bg-blue-300/20 rounded-full blur-3xl animate-pulse"></div>
    <div className="absolute bottom-20 right-20 w-72 h-72 bg-indigo-400/20 rounded-full blur-3xl animate-bounce"></div>

    <motion.div
      className="max-w-4xl mx-auto px-6 relative z-10"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9 }}
    >
      <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight drop-shadow-lg">
        Our Offices
      </h1>
      <p className="text-lg md:text-xl text-blue-100 leading-relaxed">
        Tesla Transformers (India) Limited welcomes all your inquiries —
        whether you're seeking product information, business collaborations, or
        support.
        <br />
        <span className="italic text-white font-semibold">
          "Connect with Innovation. Power the Future."
        </span>
      </p>
    </motion.div>
  </section>
)

// ---------- RegionCard ----------
const RegionCard = ({
  regionKey,
  regionName,
  offices,
  expanded,
  toggleRegion,
}: RegionCardProps) => {
  return (
    <div className="shadow-lg border-0 bg-white/80 backdrop-blur-md rounded-xl transition hover:scale-[1.02]">
      <button
        onClick={() => toggleRegion(regionKey)}
        className="flex justify-between items-center w-full p-5 font-bold text-gray-800 hover:bg-gray-50 rounded-t-xl"
      >
        {regionName} Region
        {expanded ? <FiChevronUp /> : <FiChevronDown />}
      </button>
      
      {expanded && (
        <div className="px-6 pb-6">
          <ul className="space-y-3 text-gray-700">
            {offices && offices.length > 0 ? (
              offices.map((office, index) => (
                <li
                  key={`${regionKey}-office-${index}`}
                  className="p-4 rounded-lg bg-gray-50 hover:bg-blue-50 transition"
                >
                  <p className="flex items-center font-medium text-blue-700">
                    <FaMapMarkerAlt className="mr-2" /> {office.city}
                  </p>
                  <p className="flex items-center text-sm mt-2 text-gray-600">
                    <FaPhoneAlt className="mr-2 text-gray-500" />
                    {office.contact} ({office.phone})
                  </p>
                </li>
              ))
            ) : (
              <li className="p-4 rounded-lg bg-red-50 text-red-600">
                No offices data found for {regionName}
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}

// ---------- RegionOffices ----------
const RegionOffices = ({
  expandedRegions,
  toggleRegion,
}: {
  expandedRegions: Record<string, boolean>
  toggleRegion: (region: string) => void
}) => {

  const regionData: RegionData = {
    central: {
      name: "Central",
      offices: [
        { city: "Bhopal, Madhya Pradesh", contact: "Yasir Farooque", phone: "+91 7024120460" },
        { city: "Nagpur, Maharashtra", contact: "Shashank Thakre", phone: "+91 7389905881" },
      ],
    },
    northern: {
      name: "Northern",
      offices: [
        { city: "Lucknow, Uttar Pradesh", contact: "Ajay Kumar Tiwari", phone: "+91 7024012365" },
        { city: "New Delhi", contact: "Abhishek Jayaswal", phone: "+91 9412745385" },
      ],
    },
    eastern: {
      name: "Eastern",
      offices: [
        { city: "Guwahati, Assam", contact: "Pratim Das", phone: "+91 7024120441" },
        { city: "Kolkata, West Bengal", contact: "Sougata Bhattacherjee", phone: "+91 7024007768" },
      ],
    },
    southern: {
      name: "Southern",
      offices: [
        { city: "Hyderabad, Telangana", contact: "Shantanu Mukherjee", phone: "+91 7024154624" },
        { city: "Bangalore, Karnataka", contact: "Akash Soni", phone: "+91 7024154610" },
        { city: "Chennai, Tamilnadu", contact: "Sanjoy Kr. Hazra", phone: "+91 9609512760" },
      ],
    },
    western: {
      name: "Western",
      offices: [
        { city: "Ahmedabad, Gujarat", contact: "Niher Ranjan Paul", phone: "+91 9748753616" },
        { city: "Mumbai, Maharashtra", contact: "Shailesh Karnani", phone: "+91 9967014407" },
      ],
    },
  }

  return (
    <section className="py-24 bg-transparent">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          Our Offices Across Regions
        </motion.h2>

        <div className="grid md:grid-cols-1 gap-8">
          {Object.entries(regionData).map(([regionKey, region]) => {
            const isExpanded = expandedRegions[regionKey] || false

            return (
              <RegionCard
                key={`region-${regionKey}`}
                regionKey={regionKey}
                regionName={region.name}
                offices={region.offices}
                expanded={isExpanded}
                toggleRegion={toggleRegion}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}

// ---------- ContactInfo ----------
const ContactInfo = () => (
  <motion.div
    className="max-w-5xl w-full shadow-xl bg-white/80 backdrop-blur-md rounded-2xl p-12 text-center"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
    viewport={{ once: true }}
  >
    <BsGeoAltFill className="text-blue-700 text-5xl mx-auto mb-4" />
    <p className="mb-8 text-gray-700 font-medium leading-relaxed text-lg">
      23-A, Sector –B, <br />
      Industrial Area, Govindpura, <br />
      Bhopal, MP - 462023
    </p>

    <BsTelephoneFill className="text-blue-700 text-5xl mx-auto mb-4" />
    <p className="mb-8 text-gray-700 leading-relaxed text-lg">
      <strong>Domestic:</strong> +91-7610447608 <br />
      <strong>International:</strong> +91-9993055536 <br />
      <strong>Project:</strong> +91-8269072002
    </p>

    <BsEnvelopeFill className="text-blue-700 text-5xl mx-auto mb-4" />
    <p className="text-gray-700 leading-relaxed text-lg">
      jitendra@teslaindia.co <br />
      mktg@teslaindia.co <br />
      projects@teslaindia.co
    </p>
  </motion.div>
)

// ---------- ContactSection ----------
const ContactSection = () => (
  <section className="py-24 relative bg-transparent">
    <div className="max-w-6xl mx-auto px-6">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">We'd Love to Hear from You</h2>
        <p className="text-gray-800 font-bold">Reach us directly at our offices.</p>
      </motion.div>

      <div className="flex justify-center">
        <ContactInfo />
      </div>
    </div>
    
    <div className="max-w-6xl mx-auto px-6">
      <iframe
        title="Tesla Transformers Location"
        className="w-full h-[400px] mt-16 border-0 rounded-xl shadow-lg"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3665.5010565565726!2d77.44492887509935!3d23.261236679007197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c43d5781c8303%3A0x9e0ab25498a23bfb!2sTesla%20Transformers%20(India)%20Ltd!5e0!3m2!1sen!2sin!4v1749923165118!5m2!1sen!2sin"
        allowFullScreen
        loading="lazy"
      />
    </div>
  </section>
)

// ---------- Main Page ----------
export default function ContactPage() {
  const [isClient, setIsClient] = useState(false)
  const [expandedRegions, setExpandedRegions] = useState<Record<string, boolean>>({
    central: false,
    northern: false,
    eastern: false,
    southern: false,
    western: false,
  })

  useEffect(() => {
    setIsClient(true)

    if (AOS) {
      AOS.init()
    }
  }, [])

  const toggleRegion = (region: string) => {
    setExpandedRegions((prev) => ({
      ...prev,
      [region]: !prev[region],
    }))
  }

  if (!isClient) return null

  return (
    <div className="relative min-h-screen overflow-hidden">

      {/* ⭐ Unified Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed zoom-bg"
        style={{ backgroundImage: "url('/landscapeten.jpg')" }}
      />

      {/* ⭐ Soft White Overlay */}
      <div className="absolute inset-0 bg-white/40 backdrop-blur-[1px]" />

      {/* ⭐ Content */}
      <div className="relative z-10">
        <Header />
        <main>
          <PageTitle />
          <RegionOffices expandedRegions={expandedRegions} toggleRegion={toggleRegion} />
          <ContactSection />
        </main>
        <Footer />
      </div>

      {/* ⭐ Internal CSS */}
      <style jsx global>{`
        @keyframes zoomSlow {
          0% { transform: scale(1); }
          100% { transform: scale(1.08); }
        }
        .zoom-bg {
animation: zoomSlow 5s ease-in-out infinite alternate;

        }
      `}</style>

    </div>
  )
}

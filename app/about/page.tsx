// import Image from "next/image"
// import { Header } from "@/components/header"
// import { Footer } from "@/components/footer"
// import { Card, CardContent } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"
// import {
//   Calendar,
//   MapPin,
//   Award,
//   Target,
//   Eye,
//   Gauge,
//   Zap,
//   Factory,
//   ShieldCheck,
//   BadgeCheck,
//   ClipboardList,
//   FileText,
//   Globe2,
//   CheckCircle2,
//   Users,
//   RefreshCw,
//   User,
//   Settings,
//   Rocket,

// } from "lucide-react"



// export default function AboutPage() {

//   const experienceItems = [
//   {
//     icon: <RefreshCw size={30} />,
//     title: "Flexibility",
//     content:
//       "Tesla policy is to keep customers satisfied by continuous improvement and modernization of company's production methods.",
//   },
//   {
//     image: "/gallery 1.jpeg",
//   },
//   {
//     icon: <User size={30} />,
//     title: "Strong Leaders",
//     content:
//       "Tesla believes that true mark of a leader is the willingness to stick with a bold course of action — an unconventional business strategy.",
//   },
//   {
//     image: "/gallery 3.jpeg",
//   },
//   {
//     icon: <Factory size={30} />,
//     title: "Manufacturing Power",
//     content:
//       "Tesla offers various range of transformers from 200 MVA upto 200 KV voltage class.",
//   },
//   {
//     image: "/gallery 9.jpeg",
//   },
//   {
//     icon: <Users size={30} />,
//     title: "Client Oriented",
//     content:
//       "Customer is at the center of our business philosophy, operations, or ideas. Customer focus means putting our customers' needs first.",
//   },
//   {
//     image: "/gallery 5.jpeg",
//   },
//   {
//     icon: <Rocket size={30} />,
//     title: "Rich Experience",
//     content:
//       "Tesla has more than 50 years of experience and an adequate marketing, service network across the country.",
//   },
// ];

//   return (
//     <div className="min-h-screen bg-white">
//       <Header />

//       {/* Hero */}
//       <section className="relative py-20 bg-gradient-to-b from-white to-blue-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
//           <div>
//             <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-700">
//               <CheckCircle2 className="h-4 w-4" />
//               Powering Reliability for 52+ Years
//             </div>
//             <h1 className="mt-4 text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
//               Transformers Built for Performance, Proven in the Field.
//             </h1>
//             <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-2xl">
//               Tesla Transformers (India) Ltd. (TTIL) is a leading Indian manufacturer of Power & Distribution
//               Transformers and turnkey substations—delivering reliable, high-performance solutions to utilities and
//               industries worldwide since 1972.
//             </p>

//             {/* KPIs */}
//             <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-4">
//               <Card><CardContent className="p-4 flex items-center gap-3">
//                 <Gauge className="h-6 w-6 text-blue-600" />
//                 <div>
//                   <div className="text-xs text-gray-500">Annual Capacity</div>
//                   <div className="font-semibold">8,000 MVA</div>
//                 </div>
//               </CardContent></Card>
//               <Card><CardContent className="p-4 flex items-center gap-3">
//                 <Zap className="h-6 w-6 text-blue-600" />
//                 <div>
//                   <div className="text-xs text-gray-500">Voltage Class</div>
//                   <div className="font-semibold">Up to 220 kV</div>
//                 </div>
//               </CardContent></Card>
//               <Card><CardContent className="p-4 flex items-center gap-3">
//                 <Factory className="h-6 w-6 text-blue-600" />
//                 <div>
//                   <div className="text-xs text-gray-500">Product Rating</div>
//                   <div className="font-semibold">Up to 200 MVA</div>
//                 </div>
//               </CardContent></Card>
//               <Card><CardContent className="p-4 flex items-center gap-3">
//                 <ShieldCheck className="h-6 w-6 text-blue-600" />
//                 <div>
//                   <div className="text-xs text-gray-500">VPD Plant</div>
//                   <div className="font-semibold">300 kW</div>
//                 </div>
//               </CardContent></Card>
//             </div>
//           </div>

//           {/* Hero side card */}
//           <Card className="shadow-xl border-0">
//             <CardContent className="p-6">
//               <h3 className="text-2xl font-bold text-gray-900">Quality You Can Measure</h3>
//               <p className="mt-2 text-gray-600">
//                 Certified systems and accredited testing for repeatable, traceable performance.
//               </p>
//               <div className="mt-4 flex flex-wrap gap-2">
//                 <Badge className="bg-blue-100 text-blue-800">ISO 9001</Badge>
//                 <Badge className="bg-blue-100 text-blue-800">ISO 14001</Badge>
//                 <Badge className="bg-blue-100 text-blue-800">ISO 45001</Badge>
//                 <Badge className="bg-green-100 text-green-800">NABL (ISO/IEC 17025:2017)</Badge>
//               </div>
//               <p className="mt-3 text-sm text-gray-500">Routine, type & special tests with full traceability.</p>
//               <div className="mt-6 relative w-full aspect-[16/10] overflow-hidden rounded-lg">
//                 {/* <Image
//                   src="/tesla-transformers-facility-overview.jpg"
//                   alt="TTIL facility overview"
//                   fill
//                   className="object-cover"
//                   priority
//                 /> */}

// <div
//   className="absolute inset-0 bg-cover bg-center animate-zoomSlow"
//   style={{
//     backgroundImage: "url('/about 1.jpg')",
//   }}
// ></div>
//               </div>
//             </CardContent>
//           </Card>
//         </div>
//       </section>

//       {/* Company Overview */}
//     <section className="py-16 bg-white" id="about">
//   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

//     {/* Left Side - About Content */}
//     <div>
//       <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
//         About Tesla Transformers (India) Ltd.
//       </h2>
//       <p className="text-lg text-gray-600 mb-4">
//         TTIL has been powering progress since 1972—celebrating its golden jubilee in 2022—and 
//         is consistently ranked among India’s leading transformer manufacturers. Guided by the 
//         leadership of <strong>Mr. Jaideep Jain (CMD)</strong>, we are committed to engineering excellence, 
//         dependable performance, and on-time delivery for customers worldwide.
//       </p>

//       {/* Company Highlights */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
//         <div className="flex items-center">
//           <Calendar className="h-8 w-8 text-blue-600 mr-3" />
//           <div>
//             <div className="font-semibold text-gray-900">Established</div>
//             <div className="text-gray-600">1972</div>
//           </div>
//         </div>
//         <div className="flex items-center">
//           <MapPin className="h-8 w-8 text-blue-600 mr-3" />
//           <div>
//             <div className="font-semibold text-gray-900">Headquarters</div>
//             <div className="text-gray-600">Bhopal, Madhya Pradesh (India)</div>
//           </div>
//         </div>
//         <div className="flex items-center">
//           <BadgeCheck className="h-8 w-8 text-blue-600 mr-3" />
//           <div>
//             <div className="font-semibold text-gray-900">Certifications</div>
//             <div className="text-gray-600">ISO 9001 • ISO 14001 • ISO 45001</div>
//           </div>
//         </div>
//         <div className="flex items-center">
//           <ShieldCheck className="h-8 w-8 text-blue-600 mr-3" />
//           <div>
//             <div className="font-semibold text-gray-900">Test Lab</div>
//             <div className="text-gray-600">NABL (ISO/IEC 17025:2017)</div>
//           </div>
//         </div>
//       </div>
//     </div>

//     {/* Right Side - Image */}
//     <div className="flex justify-center">
//       <div
//         className="relative w-full h-96 rounded-xl shadow-lg overflow-hidden"
//         style={{
//           backgroundImage: "url('/office.jpg')",
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//         aria-label="Tesla Transformers Facility"
//       />
//     </div>
//   </div>

//   {/* What we do below the image */}
//   <div className="max-w-3xl mx-auto mt-12">
//     <Card className="shadow-xl border-0">
//       <CardContent className="p-8 space-y-4">
//         <h3 className="text-2xl font-bold text-gray-900 mb-2">What We Do</h3>
//         <div className="flex items-start gap-3 text-gray-700">
//           <Factory className="h-6 w-6 text-blue-600 mt-1" />
//           <p><strong>Manufacturing & Supply</strong> of Power and Distribution Transformers</p>
//         </div>
//         <div className="flex items-start gap-3 text-gray-700">
//           <ClipboardList className="h-6 w-6 text-blue-600 mt-1" />
//           <p><strong>Erection, Testing & Commissioning</strong> with full compliance documentation</p>
//         </div>
//         <div className="flex items-start gap-3 text-gray-700">
//           <FileText className="h-6 w-6 text-blue-600 mt-1" />
//           <p><strong>Turnkey Substations (EPC)</strong> execution end-to-end</p>
//         </div>
//       </CardContent>
//     </Card>
//   </div>
// </section>


//       {/* Mission & Vision */}
//       <section className="py-20 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
//           {/* Mission */}
//           <Card className="shadow-xl border-0">
//             <CardContent className="p-8">
//               <div className="flex items-center mb-6">
//                 <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
//                   <Target className="h-6 w-6 text-blue-600" />
//                 </div>
//                 <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
//               </div>
//               <p className="text-lg text-gray-600 leading-relaxed">
//                 Our mission is to profitably meet the needs of our customers through Focused, Innovative, High Quality products accompanied by the best customer service in our industry while being recognized as a trusted, reliable supplier and employer achieving steady growth by retaining our customers and discovering new business opportunities              </p>
//             </CardContent>
//           </Card>

//           {/* Vision */}
//           <Card className="shadow-xl border-0">
//             <CardContent className="p-8">
//               <div className="flex items-center mb-6">
//                 <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
//                   <Eye className="h-6 w-6 text-green-600" />
//                 </div>
//                 <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
//               </div>
//               <p className="text-lg text-gray-600 leading-relaxed">
//                Our vision is to become a world class Organization and to manufacture world class equipment's with total focus on customer satisfaction.
//               </p>
//             </CardContent>
//           </Card>
//         </div>
//       </section>

//       {/* Core Values */}
//       <section className="py-20 bg-white" id="values">

//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Core Values</h2>
//             <p className="mt-2 text-gray-600">Relentless Integrity • Uncompromising Standards • Unyielding Commitment</p>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <Card className="text-center border-0 shadow-lg">
//               <CardContent className="p-8">
//                 <ShieldCheck className="h-8 w-8 text-blue-600 mx-auto mb-4" />
//                 <h3 className="text-xl font-bold text-gray-900 mb-2">Integrity</h3>
//                 <p className="text-gray-600">We do what&apos;s right—for the grid, for the customer, and for the long term.</p>
//               </CardContent>
//             </Card>
//             <Card className="text-center border-0 shadow-lg">
//               <CardContent className="p-8">
//                 <Award className="h-8 w-8 text-blue-600 mx-auto mb-4" />
//                 <h3 className="text-xl font-bold text-gray-900 mb-2">Standards</h3>
//                 <p className="text-gray-600">Certified systems and accredited testing underpin every build.</p>
//               </CardContent>
//             </Card>
//             <Card className="text-center border-0 shadow-lg">
//               <CardContent className="p-8">
//                 <Target className="h-8 w-8 text-blue-600 mx-auto mb-4" />
//                 <h3 className="text-xl font-bold text-gray-900 mb-2">Commitment</h3>
//                 <p className="text-gray-600">Project after project, we deliver dependable power.</p>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </section>

//       {/* Leadership */}
//       <section className="py-16 bg-gray-50" id="leadership">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <Card className="max-w-5xl mx-auto shadow-xl">
//             <CardContent className="p-8 md:p-12 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
//               <div className="md:col-span-1 relative mx-auto h-48 w-48 overflow-hidden rounded-full shadow-lg">

//                 {/* <div
//   className="relative w-full h-96 rounded-lg overflow-hidden"
//   style={{
//     backgroundImage: "url('/imageee.png')",
//     backgroundSize: "cover",
//     backgroundPosition: "center",
//   }}
//   aria-label="Mr. Jaideep Jain, CMD"
// /> */}


// <div
//   className="relative w-48 h-48 rounded-full overflow-hidden mx-auto shadow-lg border-4 border-gray-200"
//   style={{
//     backgroundImage: "url('/imageee.png')",
//     backgroundSize: "contain",   // ensures full image fits inside
//     backgroundRepeat: "no-repeat",
//     backgroundPosition: "center", // keeps it centered
//   }}
//   aria-label="Mr. Jaideep Jain, CMD"
// />


//               </div>
//               <div className="md:col-span-2">
//                 <Badge className="mb-3 bg-blue-100 text-blue-800">Chairman & Managing Director</Badge>
//                 <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Mr. Jaideep Jain</h3>
//                 <p className="text-gray-700">
//                   Under the guidance of Mr. Jain, TTIL continues to invest in people, processes, and technology—
//                   delivering dependable power solutions at global scale.
//                 </p>
//               </div>
//             </CardContent>
//           </Card>
//         </div>
//       </section>

//       {/* Global Presence */}
//       <section className="py-16 bg-white" id="presence">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <Card className="border-0 shadow-xl">
//             <CardContent className="p-8">
//               <div className="flex items-start gap-3">
//                 <Globe2 className="h-7 w-7 text-blue-600 mt-1" />
//                 <div>
//                   <h2 className="text-3xl font-bold text-gray-900">From Bhopal to the World</h2>
//                   <p className="mt-2 text-gray-600">
//                     Headquartered in <strong>Bhopal, Madhya Pradesh (India)</strong>, TTIL supports customers via a
//                     widespread sales & service network across all major continents.
//                   </p>
//                   <div className="mt-4 flex flex-wrap gap-2">
//                     {["India", "Asia", "Middle East", "Africa", "Australia", "The Americas", "Europe"].map((r) => (
//                       <Badge key={r} variant="secondary" className="border border-gray-200 bg-white text-gray-700">
//                         {r}
//                       </Badge>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </CardContent>
//           </Card>
//         </div>
//       </section>

//       {/* Contact / CTA */}
//       <section className="py-16 bg-gray-50" id="contact">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <Card className="border-0 shadow-xl">
//             <CardContent className="p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
//               <div>
//                 <h2 className="text-3xl font-bold text-gray-900">Ready to power your next project?</h2>
//                 <p className="mt-2 text-gray-600">
//                   Talk to our team about transformers and turnkey substations.
//                 </p>
//               </div>
//               <div className="flex gap-3">
//                 <a
//                   href="/contact"
//                   className="inline-flex items-center justify-center rounded-md bg-blue-600 px-5 py-2.5 font-semibold text-white shadow hover:bg-blue-700"
//                 >
//                   Contact Us
//                 </a>
//                 <a
//                   href="/Tesla.pdf"
//                   className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-5 py-2.5 font-semibold text-gray-900 shadow hover:bg-gray-50"
//                 >
//                   Download Brochure
//                 </a>
//               </div>
//             </CardContent>
//           </Card>
//         </div>
//       </section>




//  {/* <section className="bg-[#1687a7] py-16 text-white text-center" > */}
//   <section className="bg-[#1167b1] py-16 text-white text-center" >

//   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

//     <h2 className="text-3xl md:text-4xl font-bold mb-2">Trust our experience!</h2>
//     <p className="text-[#e0f7fa] mb-10">
//       Check out some interesting facts about our team.
//     </p>
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//       {experienceItems.map((item, index) => (
//         <div key={index}>
//           {item.image ? (
//             <div className="border border-white/20 h-full rounded-md overflow-hidden">
//               <img
//                 src={item.image}
//                 alt="experience"
//                 className="w-full h-full object-cover"
//               />
//             </div>
//           ) : (
//             // <div className="bg-[#14869a] p-8 rounded-md h-full border border-white/20">
//                         <div className="bg-[#1167b1] p-8 rounded-md h-full border border-white/20">

//               <div className="mb-4 text-white">

//                 {item.icon}
//               </div>
//               <h5 className="font-bold mb-4 text-lg">
//                 {item.title}
//               </h5>
//               <p className="text-sm text-[#e0f7fa]">
//                 {item.content}
//               </p>
//             </div>
//           )}
//         </div>
//       ))}
//     </div>
//   </div>
// </section>


//       <Footer />
//     </div>
//   )
// }



"use client"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Calendar,
  MapPin,
  Award,
  Target,
  Eye,
  Gauge,
  Zap,
  Factory,
  ShieldCheck,
  BadgeCheck,
  ClipboardList,
  FileText,
  Globe2,
  CheckCircle2,
  Users,
  RefreshCw,
  User,
  Settings,
  Rocket,
} from "lucide-react"

export default function AboutPage() {
  const experienceItems = [
    {
      icon: <RefreshCw size={30} />,
      title: "Flexibility",
      content:
        "Tesla policy is to keep customers satisfied by continuous improvement and modernization of company's production methods.",
    },
    {
      image: "/gallery 1.jpeg",
    },
    {
      icon: <User size={30} />,
      title: "Strong Leaders",
      content:
        "Tesla believes that true mark of a leader is the willingness to stick with a bold course of action — an unconventional business strategy.",
    },
    {
      image: "/gallery 3.jpeg",
    },
    {
      icon: <Factory size={30} />,
      title: "Manufacturing Power",
      content:
        "Tesla offers various range of transformers from 200 MVA upto 200 KV voltage class.",
    },
    {
      image: "/gallery 9.jpeg",
    },
    {
      icon: <Users size={30} />,
      title: "Client Oriented",
      content:
        "Customer is at the center of our business philosophy, operations, or ideas. Customer focus means putting our customers' needs first.",
    },
    {
      image: "/gallery 5.jpeg",
    },
    {
      icon: <Rocket size={30} />,
      title: "Rich Experience",
      content:
        "Tesla has more than 50 years of experience and an adequate marketing, service network across the country.",
    },
  ]

  return (
    <div className="min-h-screen">
      <Header />

      {/* 🌍 UNIFIED BACKGROUND WRAPPER */}
      <div className="relative overflow-hidden min-h-screen">

        {/* 🔥 Background Image */}
        {/* <div
          className="absolute inset-0 bg-cover bg-center bg-fixed zoom-bg pointer-events-none"
          style={{ backgroundImage: "url('/landscapenineteen.jpg')" }}
        /> */}


        {/* <div className="absolute inset-0 overflow-hidden zoom-bg pointer-events-none">
  <Image
    src="/landscapenineteen.jpg"
    alt="Background"
    fill
    priority
    className="object-cover"
 
     quality={100}          // ⬅️ maximum image clarity
    sizes="100vw"          // ⬅️ forces correct resolution
  />
</div> */}

        <div className="absolute inset-0 overflow-hidden zoom-bg pointer-events-none">
          <Image
            src="/landscapethree.jpg"
            alt="Background"
            fill
            priority
            quality={100}        // MAX clarity
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>


        {/* 🔥 Black Overlay */}
        {/* <div className="absolute inset-0 bg-black/40 pointer-events-none" /> */}
        <div className="absolute inset-0 bg-black/5 pointer-events-none" />


        {/* ⭐ Foreground Content */}
        <div className="relative z-10">

          {/* Hero */}
          <section className="relative py-20 bg-transparent">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-700">
                  <CheckCircle2 className="h-4 w-4" />
                  Powering Reliability for 52+ Years
                </div>
                <h1 className="mt-4 text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                  Transformers Built for Performance, Proven in the Field.
                </h1>
                <p className="mt-4 text-lg md:text-xl text-black/80 max-w-2xl">
                  Tesla Transformers (India) Ltd. (TTIL) is a leading Indian manufacturer of Power & Distribution
                  Transformers and turnkey substations—delivering reliable, high-performance solutions to utilities and
                  industries worldwide since 1972.
                </p>

                {/* KPIs */}
                <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-4">
                  <Card><CardContent className="p-4 flex items-center gap-3">
                    <Gauge className="h-6 w-6 text-blue-600" />
                    <div>
                      <div className="text-xs text-gray-500">Annual Capacity</div>
                      <div className="font-semibold">8,000 MVA</div>
                    </div>
                  </CardContent></Card>

                  <Card><CardContent className="p-4 flex items-center gap-3">
                    <Zap className="h-6 w-6 text-blue-600" />
                    <div>
                      <div className="text-xs text-gray-500">Voltage Class</div>
                      <div className="font-semibold">Up to 220 kV</div>
                    </div>
                  </CardContent></Card>

                  <Card><CardContent className="p-4 flex items-center gap-3">
                    <Factory className="h-6 w-6 text-blue-600" />
                    <div>
                      <div className="text-xs text-gray-500">Product Rating</div>
                      <div className="font-semibold">Up to 200 MVA</div>
                    </div>
                  </CardContent></Card>
                  <Card><CardContent className="p-4 flex items-center gap-3">
                    <ShieldCheck className="h-6 w-6 text-blue-600" />
                    <div>
                      <div className="text-xs text-gray-500">VPD Plant</div>
                      <div className="font-semibold">300 kW</div>
                    </div>
                  </CardContent></Card>
                </div>
              </div>

              {/* Hero side card */}
              <Card className="shadow-xl border-0">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900">Quality You Can Measure</h3>
                  <p className="mt-2 text-gray-600">
                    Certified systems and accredited testing for repeatable, traceable performance.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <Badge className="bg-blue-100 text-blue-800">ISO 9001</Badge>
                    <Badge className="bg-blue-100 text-blue-800">ISO 14001</Badge>
                    <Badge className="bg-blue-100 text-blue-800">ISO 45001</Badge>
                    <Badge className="bg-green-100 text-green-800">NABL (ISO/IEC 17025:2017)</Badge>
                  </div>
                  <p className="mt-3 text-sm text-gray-500">Routine, type & special tests with full traceability.</p>

                  <div className="mt-6 relative w-full aspect-[16/10] overflow-hidden rounded-lg">
                    <div
                      className="absolute inset-0 bg-cover bg-center animate-zoomSlow"
                      style={{
                        backgroundImage: "url('/about 1.jpg')",
                      }}
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Company Overview */}
          <section className="py-16 bg-white/60" id="about">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  About Tesla Transformers (India) Ltd.
                </h2>

                <p className="text-lg text-black mb-4">
                  Tesla Transformers (India) Limited (TTIL) was established in 1972 and proudly
                  celebrated its 50-year golden jubilee in 2022. Ranked among the top transformer
                  manufacturing companies in India, TTIL is a trusted name in the electric power
                  sector.
                </p>

                <p className="text-lg text-black mb-4">
                  Under the visionary leadership of <strong>Mr. Jaideep Jain (CMD)</strong>, TTIL
                  is committed to delivering reliable and high-performance solutions across the
                  globe.
                </p>

                <p className="text-lg text-black mb-4">
                  TTIL is a multi-product and service organization specializing in the
                  manufacturing, supply, erection, and testing of Power and Distribution
                  Transformers, as well as the execution of complete substations as turnkey
                  projects.
                </p>

                <p className="text-lg text-black">
                  With over 52 years of industry credibility, the company aligns with
                  international and Indian quality standards, ensuring customer satisfaction
                  through continuous innovation and commitment.
                </p>


                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
                  <div className="flex items-center">
                    <Calendar className="h-8 w-8 text-blue-600 mr-3" />
                    <div>
                      <div className="font-semibold text-gray-900">Established</div>
                      <div className="text-black">1972</div>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <MapPin className="h-8 w-8 text-blue-600 mr-3" />
                    <div>
                      <div className="font-semibold text-gray-900">Headquarters</div>
                      <div className="text-black">Bhopal, Madhya Pradesh (India)</div>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <BadgeCheck className="h-8 w-8 text-blue-600 mr-3" />
                    <div>
                      <div className="font-semibold text-gray-900">Certifications</div>
                      <div className="text-black">ISO 9001 • ISO 14001 • ISO 45001</div>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <ShieldCheck className="h-8 w-8 text-blue-600 mr-3" />
                    <div>
                      <div className="font-semibold text-gray-900">Test Lab</div>
                      <div className="text-black">NABL (ISO/IEC 17025:2017)</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-center">
                <div
                  className="relative w-full h-96 rounded-xl shadow-lg overflow-hidden"
                  style={{
                    backgroundImage: "url('/office.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
              </div>
            </div>

            <div className="max-w-3xl mx-auto mt-12">
              <Card className="shadow-xl border-0">
                <CardContent className="p-8 space-y-4">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">What We Do</h3>

                  <div className="flex items-start gap-3 text-gray-700">
                    <Factory className="h-6 w-6 text-blue-600 mt-1" />
                    <p><strong>Manufacturing & Supply</strong> of Power and Distribution Transformers</p>
                  </div>

                  <div className="flex items-start gap-3 text-gray-700">
                    <ClipboardList className="h-6 w-6 text-blue-600 mt-1" />
                    <p><strong>Erection, Testing & Commissioning</strong> with full compliance documentation</p>
                  </div>

                  <div className="flex items-start gap-3 text-gray-700">
                    <FileText className="h-6 w-6 text-blue-600 mt-1" />
                    <p><strong>Turnkey Substations (EPC)</strong> execution end-to-end</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Mission & Vision */}
          <section className="py-20 bg-transparent">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">

              <Card className="shadow-xl border-0">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                      <Target className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
                  </div>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Our mission is to profitably meet the needs of our customers through Focused, Innovative, High Quality products accompanied by the best customer service in our industry while being recognized as a trusted, reliable supplier and employer achieving steady growth by retaining our customers and discovering new business opportunities
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-xl border-0">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                      <Eye className="h-6 w-6 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
                  </div>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Our vision is to become a world class Organization and to manufacture world class equipment's with total focus on customer satisfaction.
                  </p>
                </CardContent>
              </Card>

            </div>
          </section>

          {/* Core Values */}
          <section className="py-20 bg-transparent" id="values">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white">Our Core Values</h2>
                <p className="mt-2 text-white/80 font-bold" >Relentless Integrity • Uncompromising Standards • Unyielding Commitment</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                <Card className="text-center border-0 shadow-lg">
                  <CardContent className="p-8">
                    <ShieldCheck className="h-8 w-8 text-blue-600 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Integrity</h3>
                    <p className="text-gray-600">We do what&apos;s right—for the grid, for the customer, and for the long term.</p>
                  </CardContent>
                </Card>

                <Card className="text-center border-0 shadow-lg">
                  <CardContent className="p-8">
                    <Award className="h-8 w-8 text-blue-600 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Standards</h3>
                    <p className="text-gray-600">Certified systems and accredited testing underpin every build.</p>
                  </CardContent>
                </Card>

                <Card className="text-center border-0 shadow-lg">
                  <CardContent className="p-8">
                    <Target className="h-8 w-8 text-blue-600 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Commitment</h3>
                    <p className="text-gray-600">Project after project, we deliver dependable power.</p>
                  </CardContent>
                </Card>

              </div>
            </div>
          </section>

          {/* Leadership */}
          <section className="py-16 bg-transparent" id="leadership">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <Card className="max-w-5xl mx-auto shadow-xl">
                <CardContent className="p-8 md:p-12 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                  <div className="md:col-span-1 relative mx-auto h-48 w-48 overflow-hidden rounded-full shadow-lg">
                    <div
                      className="relative w-48 h-48 rounded-full overflow-hidden mx-auto shadow-lg border-4 border-gray-200"
                      style={{
                        backgroundImage: "url('/imageee.png')",
                        backgroundSize: "contain",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                      }}
                    />
                  </div>

                  <div className="md:col-span-2">
                    <Badge className="mb-3 bg-blue-100 text-blue-800">Chairman & Managing Director</Badge>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Mr. Jaideep Jain</h3>
                    <p className="text-gray-700">
                      Under the guidance of Mr. Jain, TTIL continues to invest in people, processes, and technology—
                      delivering dependable power solutions at global scale.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Global Presence */}
          <section className="py-16 bg-transparent" id="presence">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <Card className="border-0 shadow-xl">
                <CardContent className="p-8">
                  <div className="flex items-start gap-3">
                    <Globe2 className="h-7 w-7 text-blue-600 mt-1" />
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900">From Bhopal to the World</h2>
                      <p className="mt-2 text-gray-600">
                        Headquartered in <strong>Bhopal, Madhya Pradesh (India)</strong>, TTIL supports customers via a
                        widespread sales & service network across all major continents.
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {["India", "Asia", "Middle East", "Africa", "Australia", "The Americas", "Europe"].map((r) => (
                          <Badge key={r} variant="secondary" className="border border-gray-200 bg-white text-gray-700">
                            {r}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Contact / CTA */}
          <section className="py-16 bg-transparent" id="contact">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <Card className="border-0 shadow-xl">
                <CardContent className="p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900">Ready to power your next project?</h2>
                    <p className="mt-2 text-gray-600">
                      Talk to our team about transformers and turnkey substations.
                    </p>
                  </div>

                  <div className="flex gap-3">
                    <a
                      href="/contact"
                      className="inline-flex items-center justify-center rounded-md bg-blue-600 px-5 py-2.5 font-semibold text-white shadow hover:bg-blue-700"
                    >
                      Contact Us
                    </a>
                    <a
                      href="/Tesla.pdf"
                      className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-5 py-2.5 font-semibold text-gray-900 shadow hover:bg-gray-50"
                    >
                      Download Brochure
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Experience Section */}
          <section className="bg-[#1167b1] py-16 text-white text-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-2">Trust our experience!</h2>
              <p className="text-[#e0f7fa] mb-10">
                Check out some interesting facts about our team.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {experienceItems.map((item, index) => (
                  <div key={index}>
                    {item.image ? (
                      <div className="border border-white/20 h-full rounded-md overflow-hidden">
                        <img
                          src={item.image}
                          alt="experience"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ) : (
                      <div className="bg-[#1167b1] p-8 rounded-md h-full border border-white/20">
                        <div className="mb-4 text-white">{item.icon}</div>
                        <h5 className="font-bold mb-4 text-lg">{item.title}</h5>
                        <p className="text-sm text-[#e0f7fa]">{item.content}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>

        </div> {/* z-10 */}
      </div> {/* background wrapper */}

      {/* ✨ Global Zoom Animation */}
      <style jsx global>{`
        @keyframes zoomBg {
          0% { transform: scale(1); }
          100% { transform: scale(1.18); }
        }
        .zoom-bg {
          animation: zoomBg 14s ease-in-out infinite alternate;
        }
      `}</style>

      <Footer />
    </div>
  )
}


// "use client"

// import { Header } from "@/components/header"
// import { Card, CardContent } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"
// import { Button } from "@/components/ui/button"
// import { MapPin, Calendar, Zap, Building, Factory, Train, ArrowRight, X } from "lucide-react"
// import { Footer } from "@/components/footer"
// import { useState } from "react"

// export default function ProjectsPage() {
//   const [openCard, setOpenCard] = useState<string | null>(null)

//   const projects = [
//     {
//       id: 1,
//       name: "Mumbai Metro Rail Project",
//       client: "Mumbai Metro Rail Corporation",
//       location: "Mumbai, Maharashtra",
//       year: "2023",
//       category: "Transportation",
//       capacity: "25 MVA",
//       description: "Supply of traction transformers for Mumbai Metro Line 3 underground corridor.",
//       image: "/electrical-power-transmission-lines-and-transforme.jpg",
//       status: "Completed",
//       icon: Train,
//     },
//     {
//       id: 2,
//       name: "Tata Steel Power Plant",
//       client: "Tata Steel Limited",
//       location: "Jamshedpur, Jharkhand",
//       year: "2022",
//       category: "Industrial",
//       capacity: "100 MVA",
//       description: "Power transformers for steel plant expansion and modernization project.",
//       image: "/industrial-electrical-manufacturing-facility.jpg",
//       status: "Completed",
//       icon: Factory,
//     },
//     {
//       id: 3,
//       name: "Delhi Smart Grid Initiative",
//       client: "Delhi Electricity Regulatory Commission",
//       location: "New Delhi",
//       year: "2024",
//       category: "Smart Grid",
//       capacity: "50 MVA",
//       description: "Distribution transformers with smart monitoring capabilities for grid modernization.",
//       image: "/electrical-distribution-grid-system.jpg",
//       status: "Ongoing",
//       icon: Building,
//     },
//     {
//       id: 4,
//       name: "Rajasthan Solar Park",
//       client: "Rajasthan Solar Park Development Company",
//       location: "Jodhpur, Rajasthan",
//       year: "2023",
//       category: "Renewable Energy",
//       capacity: "75 MVA",
//       description: "Step-up transformers for one of India's largest solar power installations.",
//       image: "/electrical-energy-storage-battery-systems.jpg",
//       status: "Completed",
//       icon: Zap,
//     },
//   ]

//   const stats = [
//     { label: "Projects Completed", value: "500+", icon: Building },
//     { label: "States Covered", value: "28", icon: MapPin },
//     { label: "Total Capacity", value: "10,000+ MVA", icon: Zap },
//     { label: "Years of Experience", value: "50+", icon: Calendar },
//   ]

//   return (
//     <div className="min-h-screen bg-white">
//       <Header />

//       {/* Hero Section */}
//       <section className="relative py-20 bg-gradient-to-r from-blue-900 to-blue-700">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center text-white">
//             <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Projects</h1>
//             <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
//               Powering India's infrastructure with innovative transformer solutions across diverse sectors
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Stats Section */}
//       <section className="py-16 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//             {stats.map((stat, index) => (
//               <div key={index} className="text-center">
//                 <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                   <stat.icon className="h-8 w-8 text-blue-600" />
//                 </div>
//                 <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
//                 <div className="text-gray-600">{stat.label}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Featured Projects */}
//       <section className="py-20 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
//             <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
//           </div>

//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//             {projects.map((project) => (
//               <Card key={project.id} className="shadow-xl border-0 overflow-hidden">
//                 <div
//                   className="h-48 bg-cover bg-center relative"
//                   style={{ backgroundImage: `url('${project.image}')` }}
//                 >
//                   <div className="absolute top-4 right-4">
//                     <Badge
//                       className={
//                         project.status === "Completed" ? "bg-green-100 text-green-800" : "bg-orange-100 text-orange-800"
//                       }
//                     >
//                       {project.status}
//                     </Badge>
//                   </div>
//                 </div>

//                 <CardContent className="p-6">
//                   <div className="flex items-center mb-4">
//                     <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
//                       <project.icon className="h-5 w-5 text-blue-600" />
//                     </div>
//                     <Badge variant="outline">{project.category}</Badge>
//                   </div>

//                   <h3 className="text-xl font-bold text-gray-900 mb-3">{project.name}</h3>
//                   <p className="text-gray-600 mb-4">{project.description}</p>

//                   <div className="space-y-2 mb-6">
//                     <div className="flex items-center text-sm text-gray-600">
//                       <Building className="h-4 w-4 mr-2" />
//                       <span className="font-medium">Client:</span>
//                       <span className="ml-1">{project.client}</span>
//                     </div>
//                     <div className="flex items-center text-sm text-gray-600">
//                       <MapPin className="h-4 w-4 mr-2" />
//                       <span className="font-medium">Location:</span>
//                       <span className="ml-1">{project.location}</span>
//                     </div>
//                     <div className="flex items-center text-sm text-gray-600">
//                       <Calendar className="h-4 w-4 mr-2" />
//                       <span className="font-medium">Year:</span>
//                       <span className="ml-1">{project.year}</span>
//                     </div>
//                     <div className="flex items-center text-sm text-gray-600">
//                       <Zap className="h-4 w-4 mr-2" />
//                       <span className="font-medium">Capacity:</span>
//                       <span className="ml-1">{project.capacity}</span>
//                     </div>
//                   </div>

//                   {/* <Button className="w-full bg-blue-600 hover:bg-blue-700">
//                     View Details <ArrowRight className="h-4 w-4 ml-2" />
//                   </Button> */}
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Projects Division Insights */}
//       <section className="py-20 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Projects Division Insights</h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               Learn more about our strengths, strategy, and capabilities in delivering turnkey solutions.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {/* About Project Division */}
//             <Card className="shadow-xl border-0 hover:shadow-2xl transition-transform hover:scale-[1.02]">
//               <CardContent className="p-6">
//                 <h3 className="text-xl font-bold text-blue-900 mb-3">About Project Division</h3>
//                 <p className="text-gray-700 text-sm">
//                   Specializing in turnkey projects for substations & transmission lines up to 400 kV.
//                 </p>
//                 <Button className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white" onClick={() => setOpenCard("about")}>
//                   Read More
//                 </Button>
//               </CardContent>
//             </Card>

//             {/* Project Strength */}
//             <Card className="shadow-xl border-0 hover:shadow-2xl transition-transform hover:scale-[1.02]">
//               <CardContent className="p-6">
//                 <h3 className="text-xl font-bold text-blue-900 mb-3">Project Strength</h3>
//                 <p className="text-gray-700 text-sm pb-5">Comprehensive solutions with ISO-certified quality assurance.</p>
//                 <Button className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white" onClick={() => setOpenCard("strength")}>
//                   Read More
//                 </Button>
//               </CardContent>
//             </Card>

//             {/* Our Strategy */}
//             <Card className="shadow-xl border-0 hover:shadow-2xl transition-transform hover:scale-[1.02]">
//               <CardContent className="p-6">
//                 <h3 className="text-xl font-bold text-blue-900 mb-3">Our Strategy</h3>
//                 <p className="text-gray-700 text-sm">Focused on profitable growth, partnerships, and customer satisfaction.</p>
//                 <Button className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white" onClick={() => setOpenCard("strategy")}>
//                   Read More
//                 </Button>
//               </CardContent>
//             </Card>

//             {/* Capacity & Capabilities */}
//             <Card className="shadow-xl border-0 hover:shadow-2xl transition-transform hover:scale-[1.02]">
//               <CardContent className="p-6">
//                 <h3 className="text-xl font-bold text-blue-900 mb-3">Capacity & Capabilities</h3>
//                 <p className="text-gray-700 text-sm">Single-window solutions for substations, transmission, and power plants.</p>
//                 <Button className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white" onClick={() => setOpenCard("capacity")}>
//                   Read More
//                 </Button>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </section>

//       {/* Modal */}
//       {openCard && (
//         <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
//           <div className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full p-8 relative">
//             <button onClick={() => setOpenCard(null)} className="absolute top-4 right-4 bg-gray-200 hover:bg-gray-300 rounded-full p-2">
//               <X className="w-5 h-5 text-gray-700" />
//             </button>

//             {openCard === "about" && (
//               <>
//                 <h2 className="text-2xl font-bold text-blue-900 mb-4">About Project Division</h2>
//                 <p className="text-gray-700 leading-relaxed whitespace-pre-line">
//                   Tesla Transformers' Projects Division specializes in executing turnkey projects for substations and transmission lines up to 400 kV, including design, supply, installation, testing, and commissioning.{"\n\n"}
//                   Established in 1985, the division leverages TESLA's expertise in design, manufacturing, erection, testing, and commissioning of transformers and substation equipment.
//                 </p>
//               </>
//             )}

//             {openCard === "strength" && (
//               <>
//                 <h2 className="text-2xl font-bold text-blue-900 mb-4">Project Strength</h2>
//                 <p className="text-gray-700 leading-relaxed whitespace-pre-line">
//                   • Single-Point Responsibility: End-to-end services for substations & transmission lines.{"\n"}
//                   • Experienced Workforce: Highly qualified engineers in erection, testing & commissioning.{"\n"}
//                   • Efficient Execution: Timely delivery with modern methods.{"\n"}
//                   • In-House Engineering & ISO Certifications.{"\n"}
//                   • Strong procurement & after-sales support.
//                 </p>
//               </>
//             )}

//             {openCard === "strategy" && (
//               <>
//                 <h2 className="text-2xl font-bold text-blue-900 mb-4">Our Strategy</h2>
//                 <p className="text-gray-700 leading-relaxed whitespace-pre-line">
//                   Tesla's Projects business strategy focuses on:{"\n\n"}
//                   • Strategic Partnerships with energy leaders.{"\n"}
//                   • Targeted high-impact projects.{"\n"}
//                   • Continuous Quality Improvement.{"\n"}
//                   • Customer Satisfaction & market adaptability.{"\n"}
//                   • Strong leadership with innovative decisions.
//                 </p>
//               </>
//             )}

//             {openCard === "capacity" && (
//               <>
//                 <h2 className="text-2xl font-bold text-blue-900 mb-4">Capacity & Capabilities</h2>
//                 <p className="text-gray-700 leading-relaxed whitespace-pre-line">
//                   • Substation Construction (33kV – 400kV).{"\n"}
//                   • Transmission Line Construction up to 400 kV.{"\n"}
//                   • System Upgrades & modernization.{"\n"}
//                   • Infrastructure development.{"\n"}
//                   • Industrial Electrification.{"\n"}
//                   • Hydro & geothermal power plants.{"\n"}
//                   • Consultancy for efficiency improvements.
//                 </p>
//               </>
//             )}
//           </div>
//         </div>
//       )}


//       <section className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Project Categories</h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               We serve diverse sectors with specialized transformer solutions
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             <Card className="text-center p-6 border-0 shadow-lg hover:shadow-xl transition-shadow">
//               <CardContent className="p-0">
//                 <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                   <Zap className="h-8 w-8 text-blue-600" />
//                 </div>
//                 <h3 className="text-xl font-bold text-gray-900 mb-3">Power Generation</h3>
//                 <p className="text-gray-600">Thermal, hydro, and renewable energy power plants</p>
//               </CardContent>
//             </Card>

//             <Card className="text-center p-6 border-0 shadow-lg hover:shadow-xl transition-shadow">
//               <CardContent className="p-0">
//                 <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                   <Factory className="h-8 w-8 text-green-600" />
//                 </div>
//                 <h3 className="text-xl font-bold text-gray-900 mb-3">Industrial</h3>
//                 <p className="text-gray-600">Steel, cement, petrochemical, and manufacturing industries</p>
//               </CardContent>
//             </Card>

//             <Card className="text-center p-6 border-0 shadow-lg hover:shadow-xl transition-shadow">
//               <CardContent className="p-0">
//                 <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                   <Train className="h-8 w-8 text-purple-600" />
//                 </div>
//                 <h3 className="text-xl font-bold text-gray-900 mb-3">Transportation</h3>
//                 <p className="text-gray-600">Metro rail, railways, and electric vehicle infrastructure</p>
//               </CardContent>
//             </Card>

//             <Card className="text-center p-6 border-0 shadow-lg hover:shadow-xl transition-shadow">
//               <CardContent className="p-0">
//                 <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                   <Building className="h-8 w-8 text-orange-600" />
//                 </div>
//                 <h3 className="text-xl font-bold text-gray-900 mb-3">Infrastructure</h3>
//                 <p className="text-gray-600">Smart cities, airports, hospitals, and commercial complexes</p>
//               </CardContent>
//             </Card>
//           </div>
//         </div>

//       </section>

//       {/* Gallery Section */}
//       <section className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

//           <div className="text-center mb-16">
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Project Gallery</h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               A glimpse of our diverse projects and state-of-the-art facilities.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
//             <div
//               className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg group"
//               style={{
//                 backgroundImage: "url('/gallery 17.jpg')",
//                 backgroundSize: "cover",
//                 backgroundPosition: "center",
//               }}
//             >
//               <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-semibold text-lg">
//                 Transformer Unit
//               </div>
//             </div>

//             <div
//               className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg group"
//               style={{
//                 backgroundImage: "url('/gallery 27.jpeg')",
//                 backgroundSize: "cover",
//                 backgroundPosition: "center",
//               }}
//             >
//               <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-semibold text-lg">
//                 Power Grid Installation
//               </div>
//             </div>

//             <div
//               className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg group"
//               style={{
//                 backgroundImage: "url('/gallery 3.jpeg')",
//                 backgroundSize: "cover",
//                 backgroundPosition: "center",
//               }}
//             >
//               <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-semibold text-lg">
//                 Smart Distribution System
//               </div>
//             </div>

//             <div
//               className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg group"
//               style={{
//                 backgroundImage: "url('/gallery.jpeg')",
//                 backgroundSize: "cover",
//                 backgroundPosition: "center",
//               }}
//             >
//               <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-semibold text-lg">
//                 Renewable Energy Hub
//               </div>
//             </div>

//             <div
//               className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg group"
//               style={{
//                 backgroundImage: "url('/gallery 26.jpeg')",
//                 backgroundSize: "cover",
//                 backgroundPosition: "center",
//               }}
//             >
//               <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-semibold text-lg">
//                 High-Voltage Testing Facility
//               </div>
//             </div>

//             <div
//               className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg group"
//               style={{
//                 backgroundImage: "url('/Areal-View-220x132x33-KV-Grid-Substation.jpg')",
//                 backgroundSize: "cover",
//                 backgroundPosition: "center",
//               }}
//             >
//               <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-semibold text-lg">
//                 Manufacturing Excellence
//               </div>
//             </div>


//             <div
//               className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg group"
//               style={{
//                 backgroundImage: "url('/gallery 10.jpg')",
//                 backgroundSize: "cover",
//                 backgroundPosition: "center",
//               }}
//             >
//               <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-semibold text-lg">
//                 Transformer Unit
//               </div>
//             </div>

//             <div
//               className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg group"
//               style={{
//                 backgroundImage: "url('/gallery 7.jpg')",
//                 backgroundSize: "cover",
//                 backgroundPosition: "center",
//               }}
//             >
//               <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-semibold text-lg">
//                 Power Grid Installation
//               </div>
//             </div>

//             <div
//               className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg group"
//               style={{
//                 backgroundImage: "url('/gallery 8.jpg')",
//                 backgroundSize: "cover",
//                 backgroundPosition: "center",
//               }}
//             >
//               <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-semibold text-lg">
//                 Smart Distribution System
//               </div>
//             </div>


//             <div
//               className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg group"
//               style={{
//                 backgroundImage: "url('/gallery 14.jpg')",
//                 backgroundSize: "cover",
//                 backgroundPosition: "center",
//               }}
//             >
//               <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-semibold text-lg">
//                 Renewable Energy Hub
//               </div>
//             </div>

//             <div
//               className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg group"
//               style={{
//                 backgroundImage: "url('/gallery 18.jpg')",
//                 backgroundSize: "cover",
//                 backgroundPosition: "center",
//               }}
//             >
//               <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-semibold text-lg">
//                 High-Voltage Testing Facility
//               </div>
//             </div>

//             <div
//               className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg group"
//               style={{
//                 backgroundImage: "url('/gallery 22.jpeg')",
//                 backgroundSize: "cover",
//                 backgroundPosition: "center",
//               }}
//             >
//               <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-semibold text-lg">
//                 Manufacturing Excellence
//               </div>
//             </div>

// {/* <h1>dkfjsdjf</h1> */}

//     <div
//               className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg group"
//               style={{
//                 backgroundImage: "url('/gallery 1.jpeg')",
//                 backgroundSize: "cover",
//                 backgroundPosition: "center",
//               }}
//             >
//               <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-semibold text-lg">
//                 Transformer Unit
//               </div>
//             </div>

//             <div
//               className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg group"
//               style={{
//                 backgroundImage: "url('/gallery 4.jpeg')",
//                 backgroundSize: "cover",
//                 backgroundPosition: "center",
//               }}
//             >
//               <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-semibold text-lg">
//                 Power Grid Installation
//               </div>
//             </div>

//             <div
//               className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg group"
//               style={{
//                 backgroundImage: "url('/gallery 5.jpeg')",
//                 backgroundSize: "cover",
//                 backgroundPosition: "center",
//               }}
//             >
//               <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-semibold text-lg">
//                 Smart Distribution System
//               </div>
//             </div>

//             <div
//               className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg group"
//               style={{
//                 backgroundImage: "url('/gallery 6.jpeg')",
//                 backgroundSize: "cover",
//                 backgroundPosition: "center",
//               }}
//             >
//               <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-semibold text-lg">
//                 Renewable Energy Hub
//               </div>
//             </div>

//             <div
//               className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg group"
//               style={{
//                 backgroundImage: "url('/gallery 7.jpg')",
//                 backgroundSize: "cover",
//                 backgroundPosition: "center",
//               }}
//             >
//               <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-semibold text-lg">
//                 High-Voltage Testing Facility
//               </div>
//             </div>

//             <div
//               className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg group"
//               style={{
//                 backgroundImage: "url('/gallery 10.jpg')",
//                 backgroundSize: "cover",
//                 backgroundPosition: "center",
//               }}
//             >
//               <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-semibold text-lg">
//                 Manufacturing Excellence
//               </div>
//             </div>


//             <div
//               className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg group"
//               style={{
//                 backgroundImage: "url('/gallery 11.jpg')",
//                 backgroundSize: "cover",
//                 backgroundPosition: "center",
//               }}
//             >
//               <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-semibold text-lg">
//                 Transformer Unit
//               </div>
//             </div>

//             <div
//               className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg group"
//               style={{
//                 backgroundImage: "url('/gallery 14.jpg')",
//                 backgroundSize: "cover",
//                 backgroundPosition: "center",
//               }}
//             >
//               <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-semibold text-lg">
//                 Power Grid Installation
//               </div>
//             </div>

//             <div
//               className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg group"
//               style={{
//                 backgroundImage: "url('/gallery 15.jpg')",
//                 backgroundSize: "cover",
//                 backgroundPosition: "center",
//               }}
//             >
//               <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-semibold text-lg">
//                 Smart Distribution System
//               </div>
//             </div>


//             <div
//               className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg group"
//               style={{
//                 backgroundImage: "url('/gallery 17.jpg')",
//                 backgroundSize: "cover",
//                 backgroundPosition: "center",
//               }}
//             >
//               <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-semibold text-lg">
//                 Renewable Energy Hub
//               </div>
//             </div>

//             <div
//               className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg group"
//               style={{
//                 backgroundImage: "url('/gallery 21.jpeg')",
//                 backgroundSize: "cover",
//                 backgroundPosition: "center",
//               }}
//             >
//               <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-semibold text-lg">
//                 High-Voltage Testing Facility
//               </div>
//             </div>

//             <div
//               className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg group"
//               style={{
//                 backgroundImage: "url('/gallery 23.jpeg')",
//                 backgroundSize: "cover",
//                 backgroundPosition: "center",
//               }}
//             >
//               <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-semibold text-lg">
//                 Manufacturing Excellence
//               </div>
//             </div>









//   <div
//               className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg group"
//               style={{
//                 backgroundImage: "url('/gallery 21.jpeg')",
//                 backgroundSize: "cover",
//                 backgroundPosition: "center",
//               }}
//             >
//               <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-semibold text-lg">
//                 Manufacturing Excellence
//               </div>
//             </div>

//   <div
//               className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg group"
//               style={{
//                 backgroundImage: "url('/gallery 25.jpeg')",
//                 backgroundSize: "cover",
//                 backgroundPosition: "center",
//               }}
//             >
//               <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-semibold text-lg">
//                 Manufacturing Excellence
//               </div>
//             </div>

//   <div
//               className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg group"
//               style={{
//                 backgroundImage: "url('/gallery 26.jpeg')",
//                 backgroundSize: "cover",
//                 backgroundPosition: "center",
//               }}
//             >
//               <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-semibold text-lg">
//                 Manufacturing Excellence
//               </div>
//             </div>

//   <div
//               className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg group"
//               style={{
//                 backgroundImage: "url('/gallery 16.jpg')",
//                 backgroundSize: "cover",
//                 backgroundPosition: "center",
//               }}
//             >
//               <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-semibold text-lg">
//                 Manufacturing Excellence
//               </div>
//             </div>



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
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, Calendar, Zap, Building, Factory, Train, ArrowRight, X } from "lucide-react"
import { Footer } from "@/components/footer"
import { useState } from "react"

export default function ProjectsPage() {
  const [openCard, setOpenCard] = useState<string | null>(null)

  const projects = [
    {
      id: 1,
      name: "Mumbai Metro Rail Project",
      client: "Mumbai Metro Rail Corporation",
      location: "Mumbai, Maharashtra",
      year: "2023",
      category: "Transportation",
      capacity: "25 MVA",
      description: "Supply of traction transformers for Mumbai Metro Line 3 underground corridor.",
      image: "/electrical-power-transmission-lines-and-transforme.jpg",
      status: "Completed",
      icon: Train,
    },
    {
      id: 2,
      name: "Tata Steel Power Plant",
      client: "Tata Steel Limited",
      location: "Jamshedpur, Jharkhand",
      year: "2022",
      category: "Industrial",
      capacity: "100 MVA",
      description: "Power transformers for steel plant expansion and modernization project.",
      image: "/industrial-electrical-manufacturing-facility.jpg",
      status: "Completed",
      icon: Factory,
    },
    {
      id: 3,
      name: "Delhi Smart Grid Initiative",
      client: "Delhi Electricity Regulatory Commission",
      location: "New Delhi",
      year: "2024",
      category: "Smart Grid",
      capacity: "50 MVA",
      description: "Distribution transformers with smart monitoring capabilities for grid modernization.",
      image: "/electrical-distribution-grid-system.jpg",
      status: "Ongoing",
      icon: Building,
    },
    {
      id: 4,
      name: "Rajasthan Solar Park",
      client: "Rajasthan Solar Park Development Company",
      location: "Jodhpur, Rajasthan",
      year: "2023",
      category: "Renewable Energy",
      capacity: "75 MVA",
      description: "Step-up transformers for one of India's largest solar power installations.",
      image: "/electrical-energy-storage-battery-systems.jpg",
      status: "Completed",
      icon: Zap,
    },
  ]

  const stats = [
    { label: "Projects Completed", value: "500+", icon: Building },
    { label: "States Covered", value: "28", icon: MapPin },
    { label: "Total Capacity", value: "10,000+ MVA", icon: Zap },
    { label: "Years of Experience", value: "50+", icon: Calendar },
  ]

  return (
    <div className="min-h-screen bg-white">

      {/* ========= UNIFIED BACKGROUND WRAPPER ========= */}
      <div className="relative py-20 overflow-hidden">

        {/* Background Image */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            style={{
              backgroundImage: `url('/landscapenine.jpg')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              position: "absolute",
              inset: 0,
              transform: "scale(1.1)",
              animation: "sectionZoom 14s ease-in-out infinite alternate",
              filter: "brightness(0.75)", // Soft white overlay brightness
            }}
          ></div>
        </div>

        {/* Soft White Overlay */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px] pointer-events-none"></div>

        {/* ======= ALL CONTENT (UNCHANGED) ======= */}
        <div className="relative z-10">

          <Header />

          {/* Hero Section */}
          <section className="relative py-20 text-white text-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center text-black">
                <h1 className="text-4xl md:text-6xl text-white font-bold mb-6">Our Projects</h1>
                <p className="text-xl  md:text-2xl text-white  max-w-3xl mx-auto">
                  Powering India's infrastructure with innovative transformer solutions across diverse sectors
                </p>
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-white/70 backdrop-blur-md rounded-full flex items-center justify-center mx-auto mb-4">
                      <stat.icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                    <div className="text-white">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Featured Projects */}
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Projects</h2>
                <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {projects.map((project) => (
                  <Card key={project.id} className="shadow-xl border-0 overflow-hidden bg-white/80 backdrop-blur-lg">
                    <div
                      className="h-48 bg-cover bg-center relative"
                      style={{ backgroundImage: `url('${project.image}')` }}
                    >
                      <div className="absolute top-4 right-4">
                        <Badge
                          className={
                            project.status === "Completed" ? "bg-green-100 text-green-800" : "bg-orange-100 text-orange-800"
                          }
                        >
                          {project.status}
                        </Badge>
                      </div>
                    </div>

                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                          <project.icon className="h-5 w-5 text-blue-600" />
                        </div>
                        <Badge variant="outline">{project.category}</Badge>
                      </div>

                      <h3 className="text-xl font-bold text-gray-900 mb-3">{project.name}</h3>
                      <p className="text-gray-600 mb-4">{project.description}</p>

                      <div className="space-y-2 mb-6">
                        <div className="flex items-center text-sm text-gray-600">
                          <Building className="h-4 w-4 mr-2" />
                          <span className="font-medium">Client:</span>
                          <span className="ml-1">{project.client}</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <MapPin className="h-4 w-4 mr-2" />
                          <span className="font-medium">Location:</span>
                          <span className="ml-1">{project.location}</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <Calendar className="h-4 w-4 mr-2" />
                          <span className="font-medium">Year:</span>
                          <span className="ml-1">{project.year}</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <Zap className="h-4 w-4 mr-2" />
                          <span className="font-medium">Capacity:</span>
                          <span className="ml-1">{project.capacity}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Projects Division Insights */}
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Projects Division Insights</h2>
                <p className="text-xl text-white max-w-3xl mx-auto">
                  Learn more about our strengths, strategy, and capabilities in delivering turnkey solutions.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                {/* About Project Division */}
                <Card className="h-full shadow-xl border-0 hover:shadow-2xl transition-transform hover:scale-[1.02] bg-white/80 backdrop-blur">
                  <CardContent className="p-6 flex flex-col h-full">
                    <h3 className="text-xl font-bold text-blue-900 mb-3">About Project Division</h3>
                    <p className="text-gray-700 text-sm flex-1">
                      Specializing in turnkey projects for grid substations and transmission lines up to 400 kV, including design, supply, construction, and commissioning.
                    </p>
                    <Button className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white" onClick={() => setOpenCard("about")}>
                      Read More
                    </Button>
                  </CardContent>
                </Card>

                {/* Project Strength */}
                <Card className="h-full shadow-xl border-0 hover:shadow-2xl transition-transform hover:scale-[1.02] bg-white/80 backdrop-blur">
                  <CardContent className="p-6 flex flex-col h-full">
                    <h3 className="text-xl font-bold text-blue-900 mb-3">Project Strength</h3>
                    <p className="text-gray-700 text-sm pb-5 flex-1">Comprehensive solutions with single-point responsibility, experienced workforce, and ISO-certified quality assurance.</p>
                    <Button className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white" onClick={() => setOpenCard("strength")}>
                      Read More
                    </Button>
                  </CardContent>
                </Card>

                {/* Our Strategy */}
                <Card className="h-full shadow-xl border-0 hover:shadow-2xl transition-transform hover:scale-[1.02] bg-white/80 backdrop-blur">
                  <CardContent className="p-6 flex flex-col h-full">
                    <h3 className="text-xl font-bold text-blue-900 mb-3">Our Strategy</h3>
                    <p className="text-gray-700 text-sm flex-1">Focused on profitable growth through strategic partnerships, continuous quality improvement, and customer satisfaction.</p>
                    <Button className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white" onClick={() => setOpenCard("strategy")}>
                      Read More
                    </Button>
                  </CardContent>
                </Card>

                {/* Capacity & Capabilities */}
                <Card className="h-full shadow-xl border-0 hover:shadow-2xl transition-transform hover:scale-[1.02] bg-white/80 backdrop-blur">
                  <CardContent className="p-6 flex flex-col h-full">
                    <h3 className="text-xl font-bold text-blue-900 mb-3">Capacity & Capabilities</h3>
                    <p className="text-gray-700 text-sm flex-1">Single-window solutions for substation construction, transmission lines, system upgrades, and power plant construction.</p>
                    <Button className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white" onClick={() => setOpenCard("capacity")}>
                      Read More
                    </Button>
                  </CardContent>
                </Card>

              </div>
            </div>
          </section>

          {/* Modal */}
          {openCard && (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
              <div className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full p-8 relative">
                <button onClick={() => setOpenCard(null)} className="absolute top-4 right-4 bg-gray-200 hover:bg-gray-300 rounded-full p-2">
                  <X className="w-5 h-5 text-gray-700" />
                </button>

                {openCard === "about" && (
                  <>
                    <h2 className="text-2xl font-bold text-blue-900 mb-4">About Project Division</h2>
                    <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                      Tesla Transformers' Projects Division specializes in executing turnkey projects for substations and transmission lines up to 400 kV, including design, supply, installation, testing, and commissioning.{"\n\n"}
                      Established in 1985, the division leverages TESLA's expertise in design, manufacturing, erection, testing, and commissioning of transformers and substation equipment.
                    </p>
                  </>
                )}

                {openCard === "strength" && (
                  <>
                    <h2 className="text-2xl font-bold text-blue-900 mb-4">Project Strength</h2>
                    <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                      • Single-Point Responsibility: End-to-end services for substations & transmission lines.{"\n"}
                      • Experienced Workforce: Highly qualified engineers in erection, testing & commissioning.{"\n"}
                      • Efficient Execution: Timely delivery with modern methods.{"\n"}
                      • In-House Engineering & ISO Certifications.{"\n"}
                      • Strong procurement & after-sales support.
                    </p>
                  </>
                )}

                {openCard === "strategy" && (
                  <>
                    <h2 className="text-2xl font-bold text-blue-900 mb-4">Our Strategy</h2>
                    <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                      Tesla's Projects business strategy focuses on:{"\n\n"}
                      • Strategic Partnerships with energy leaders.{"\n"}
                      • Targeted high-impact projects.{"\n"}
                      • Continuous Quality Improvement.{"\n"}
                      • Customer Satisfaction & market adaptability.{"\n"}
                      • Strong leadership with innovative decisions.
                    </p>
                  </>
                )}

                {openCard === "capacity" && (
                  <>
                    <h2 className="text-2xl font-bold text-blue-900 mb-4">Capacity & Capabilities</h2>
                    <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                      • Substation Construction (33kV – 400kV).{"\n"}
                      • Transmission Line Construction up to 400 kV.{"\n"}
                      • System Upgrades & modernization.{"\n"}
                      • Infrastructure development.{"\n"}
                      • Industrial Electrification.{"\n"}
                      • Hydro & geothermal power plants.{"\n"}
                      • Consultancy for efficiency improvements.
                    </p>
                  </>
                )}
              </div>
            </div>
          )}

          {/* Project Categories */}
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Project Categories</h2>
                <p className="text-xl text-white max-w-3xl mx-auto">
                  We serve diverse sectors with specialized transformer solutions
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <Card className="text-center p-6 border-0 shadow-lg hover:shadow-xl transition-shadow bg-white/80 backdrop-blur">
                  <CardContent className="p-0">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Zap className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Power Generation</h3>
                    <p className="text-gray-600">Thermal, hydro, and renewable energy power plants</p>
                  </CardContent>
                </Card>

                <Card className="text-center p-6 border-0 shadow-lg hover:shadow-xl transition-shadow bg-white/80 backdrop-blur">
                  <CardContent className="p-0">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Factory className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Industrial</h3>
                    <p className="text-gray-600">Steel, cement, petrochemical, and manufacturing industries</p>
                  </CardContent>
                </Card>

                <Card className="text-center p-6 border-0 shadow-lg hover:shadow-xl transition-shadow bg-white/80 backdrop-blur">
                  <CardContent className="p-0">
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Train className="h-8 w-8 text-purple-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Transportation</h3>
                    <p className="text-gray-600">Metro rail, railways, and electric vehicle infrastructure</p>
                  </CardContent>
                </Card>

                <Card className="text-center p-6 border-0 shadow-lg hover:shadow-xl transition-shadow bg-white/80 backdrop-blur">
                  <CardContent className="p-0">
                    <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Building className="h-8 w-8 text-orange-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Infrastructure</h3>
                    <p className="text-gray-600">Smart cities, airports, hospitals, and commercial complexes</p>
                  </CardContent>
                </Card>
              </div>

            </div>
          </section>

          {/* Gallery Section */}
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Project Gallery</h2>
                <p className="text-xl text-white max-w-3xl mx-auto">
                  A glimpse of our diverse projects and state-of-the-art facilities.
                </p>
              </div>

              {/* GALLERY GRID UNCHANGED — Just floats on unified background */}
                 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <div
              className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg group"
              style={{
                backgroundImage: "url('/gallery 17.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-semibold text-lg">
                Transformer Unit
              </div>
            </div>

            <div
              className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg group"
              style={{
                backgroundImage: "url('/gallery 27.jpeg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-semibold text-lg">
                Power Grid Installation
              </div>
            </div>

            <div
              className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg group"
              style={{
                backgroundImage: "url('/gallery 3.jpeg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-semibold text-lg">
                Smart Distribution System
              </div>
            </div>

            <div
              className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg group"
              style={{
                backgroundImage: "url('/gallery.jpeg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-semibold text-lg">
                Renewable Energy Hub
              </div>
            </div>

            <div
              className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg group"
              style={{
                backgroundImage: "url('/gallery 26.jpeg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-semibold text-lg">
                High-Voltage Testing Facility
              </div>
            </div>

            <div
              className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg group"
              style={{
                backgroundImage: "url('/Areal-View-220x132x33-KV-Grid-Substation.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-semibold text-lg">
                Manufacturing Excellence
              </div>
            </div>


            <div
              className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg group"
              style={{
                backgroundImage: "url('/gallery 10.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-semibold text-lg">
                Transformer Unit
              </div>
            </div>

            <div
              className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg group"
              style={{
                backgroundImage: "url('/gallery 7.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-semibold text-lg">
                Power Grid Installation
              </div>
            </div>

            <div
              className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg group"
              style={{
                backgroundImage: "url('/gallery 8.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-semibold text-lg">
                Smart Distribution System
              </div>
            </div>


            <div
              className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg group"
              style={{
                backgroundImage: "url('/gallery 14.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-semibold text-lg">
                Renewable Energy Hub
              </div>
            </div>

            <div
              className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg group"
              style={{
                backgroundImage: "url('/gallery 18.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-semibold text-lg">
                High-Voltage Testing Facility
              </div>
            </div>

            <div
              className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg group"
              style={{
                backgroundImage: "url('/gallery 22.jpeg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-semibold text-lg">
                Manufacturing Excellence
              </div>
            </div>

{/* <h1>dkfjsdjf</h1> */}

    <div
              className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg group"
              style={{
                backgroundImage: "url('/gallery 1.jpeg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-semibold text-lg">
                Transformer Unit
              </div>
            </div>

            <div
              className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg group"
              style={{
                backgroundImage: "url('/gallery 4.jpeg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-semibold text-lg">
                Power Grid Installation
              </div>
            </div>

            <div
              className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg group"
              style={{
                backgroundImage: "url('/gallery 5.jpeg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-semibold text-lg">
                Smart Distribution System
              </div>
            </div>

            <div
              className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg group"
              style={{
                backgroundImage: "url('/gallery 6.jpeg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-semibold text-lg">
                Renewable Energy Hub
              </div>
            </div>

            <div
              className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg group"
              style={{
                backgroundImage: "url('/gallery 7.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-semibold text-lg">
                High-Voltage Testing Facility
              </div>
            </div>

            <div
              className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg group"
              style={{
                backgroundImage: "url('/gallery 10.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-semibold text-lg">
                Manufacturing Excellence
              </div>
            </div>


            <div
              className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg group"
              style={{
                backgroundImage: "url('/gallery 11.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-semibold text-lg">
                Transformer Unit
              </div>
            </div>

            <div
              className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg group"
              style={{
                backgroundImage: "url('/gallery 14.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-semibold text-lg">
                Power Grid Installation
              </div>
            </div>

            <div
              className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg group"
              style={{
                backgroundImage: "url('/gallery 15.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-semibold text-lg">
                Smart Distribution System
              </div>
            </div>


            <div
              className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg group"
              style={{
                backgroundImage: "url('/gallery 17.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-semibold text-lg">
                Renewable Energy Hub
              </div>
            </div>

            <div
              className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg group"
              style={{
                backgroundImage: "url('/gallery 21.jpeg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-semibold text-lg">
                High-Voltage Testing Facility
              </div>
            </div>

            <div
              className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg group"
              style={{
                backgroundImage: "url('/gallery 23.jpeg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-semibold text-lg">
                Manufacturing Excellence
              </div>
            </div>









  <div
              className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg group"
              style={{
                backgroundImage: "url('/gallery 21.jpeg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-semibold text-lg">
                Manufacturing Excellence
              </div>
            </div>

  <div
              className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg group"
              style={{
                backgroundImage: "url('/gallery 25.jpeg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-semibold text-lg">
                Manufacturing Excellence
              </div>
            </div>

  <div
              className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg group"
              style={{
                backgroundImage: "url('/gallery 26.jpeg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-semibold text-lg">
                Manufacturing Excellence
              </div>
            </div>

  <div
              className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg group"
              style={{
                backgroundImage: "url('/gallery 16.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-semibold text-lg">
                Manufacturing Excellence
              </div>
            </div>



          </div>

            </div>
          </section>



           


        
        </div>

        {/* Keyframes */}
        <style jsx>{`
          @keyframes sectionZoom {
            0% { transform: scale(1.1); }
            100% { transform: scale(1.3); }
          }
        `}</style>
      </div>
        <Footer />
    </div>
  )
}

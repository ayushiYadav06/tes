// 'use client';

// import { useState, Suspense } from "react";
// import Head from 'next/head';
// import Image from 'next/image';
// import Link from 'next/link'
// import {
//   TrendingUp,
//   Settings,
//   Layers,
//   Clock,
//   Cpu,
//   BarChart2,
//   Box,
//   Package,
//   Phone,
//   Globe,
//   Award,
//   Shield,
//   Zap,
//   Check,
//   ChevronDown,
//   ChevronUp,
// } from "lucide-react";

// // Types
// interface ExpandedSections {
//   powerTransformers: boolean;
//   distributionTransformers: boolean;
//   smartTransformers: boolean;
//   greenTransformers: boolean;
//   exportHighlights: boolean;
// }

// interface ProductCardProps {
//   title: string;
//   expanded: boolean;
//   onToggle: () => void;
//   children: React.ReactNode;
// }

// interface TechnologyCardProps {
//   icon: React.ReactNode;
//   title: string;
//   color: string;
//   children: React.ReactNode;
// }

// interface FeatureBoxProps {
//   icon: React.ReactNode;
//   title: string;
//   desc: string;
//   delay?: number;
// }

// interface CapacityCardProps {
//   title: string;
//   children: React.ReactNode;
//   delay?: number;
// }

// interface ExportHighlightsProps {
//   expanded: boolean;
//   onToggle: () => void;
// }

// interface ProductsSectionProps {
//   expandedSections: ExpandedSections;
//   toggleSection: (section: keyof ExpandedSections) => void;
// }

// // Loading Component
// const LoadingSkeleton: React.FC = () => (
//   <div className="animate-pulse">
//     <div className="bg-gray-200 h-64 rounded mb-4"></div>
//     <div className="space-y-2">
//       <div className="bg-gray-200 h-4 rounded w-3/4"></div>
//       <div className="bg-gray-200 h-4 rounded w-1/2"></div>
//     </div>
//   </div>
// );


// // Container Component for consistent spacing
// const Container: React.FC<{ children: React.ReactNode; className?: string }> = ({ 
//   children, 
//   className = "" 
// }) => (
//   <div className={`container mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
//     {children}
//   </div>
// );

// // Section Header Component
// const SectionHeader: React.FC<{ title: string; subtitle?: string }> = ({ 
//   title, 
//   subtitle 
// }) => (
//   <div className="text-center mb-12 sm:mb-16">
//     <h2 className="text-blue-600 text-3xl sm:text-4xl font-semibold relative inline-block pb-4">
//       {title}
//       <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-blue-600"></span>
//     </h2>
//     {subtitle && (
//       <p className="text-lg mt-4 text-gray-600 max-w-2xl mx-auto">
//         {subtitle}
//       </p>
//     )}
//   </div>
// );

// // About Section Component
// const AboutSection: React.FC = () => (
//   <section className="py-16 sm:py-20 bg-white">
//     <Container>
//       <SectionHeader title="About TESLA International Division" />

//       <div className="max-w-5xl mx-auto space-y-6 sm:space-y-8">
//         <p className="text-gray-700 text-base sm:text-lg leading-relaxed text-justify">
//         <b>Tesla Transformers (India) Ltd.,</b> headquartered in Bhopal, is a
//           leading manufacturer and exporter of high-performance
//           transformers, specializing in power, distribution, inverter, and
//           converter duty transformers, with over 50 years of strong
//           engineering foundation and decades of industry expertise, TESLA
//           offers a wide product range from 25 kVA, 11 kV class to 200 MVA,
//           220 kV class. Our exports span 5 continents, 36+ countries
//           across Asia, Africa, Australia, Europe & North America.
//         </p>

//         <p className="text-gray-700 text-base sm:text-lg leading-relaxed text-justify">
//           TESLA transformers are designed for high efficiency,
//           reliability, and durability, meeting international standards
//           such as ISO, IEC, IEEE etc and regional/country wise standards
//           such as ANSI, ASTM, AS, BS, BIS, CE, CSA, DIN, ESCOM, GOST,
//           NEMA, SABS, SASO etc. The company has successfully exported its
//           products to multiple countries, serving utilities, renewable
//           energy sectors, and industrial clients worldwide.
//         </p>

//         <p className="text-gray-700 text-base sm:text-lg leading-relaxed text-justify">
//           In addition to manufacturing, TESLA has a proven track record in
//           executing end-to-end turnkey substation and transmission
//           projects up to 400 kV and 765 kV. This includes engineering,
//           procurement, construction, testing, and commissioning –
//           delivering complete power infrastructure solutions (EPC) with a
//           focus on quality, safety, and timely execution.
//         </p>

//         <p className="text-gray-700 text-base sm:text-lg leading-relaxed text-justify">
//           TESLA continues to grow its global footprint by delivering
//           innovative energy solutions, backed by robust R&D, advanced
//           manufacturing facilities, and a commitment to customer
//           satisfaction.
//         </p>
//       </div>
//     </Container>
//   </section>
// );

// // Product Card Component with improved accessibility
// const ProductCard: React.FC<ProductCardProps> = ({ title, expanded, onToggle, children }) => {
//   const contentId = `content-${title.replace(/\s+/g, '-').toLowerCase()}`;
  
//   return (
//     <div className="bg-white rounded-lg shadow-md mb-5 overflow-hidden transition-all duration-300 hover:shadow-lg">
//       <button
//         className="w-full bg-blue-600 text-white p-4 sm:p-5 cursor-pointer flex justify-between items-center hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
//         onClick={onToggle}
//         aria-expanded={expanded}
//         aria-controls={contentId}
//       >
//         <h3 className="m-0 text-lg sm:text-xl font-medium text-left">{title}</h3>
//         <div className="flex-shrink-0 ml-4">
//           {expanded ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
//         </div>
//       </button>

//       {expanded && (
//         <div 
//           id={contentId}
//           className="p-6 sm:p-8 border-t border-gray-200 animate-fade-in"
//         >
//           {children}
//         </div>
//       )}
//     </div>
//   );
// };

// // Key Products Section Component
// const ProductsSection: React.FC<ProductsSectionProps> = ({ 
//   expandedSections, 
//   toggleSection 
// }) => (
//   <section className="py-16 sm:py-20 bg-gray-50">
//     <Container>
//       <SectionHeader title="Key Types & Applications" />

//       <div className="space-y-5">
//         {/* Power Transformers */}
//         <ProductCard
//           title="Power Transformers"
//           expanded={expandedSections.powerTransformers}
//           onToggle={() => toggleSection("powerTransformers")}
//         >
//           <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-5">
//             Large, high-voltage units used in Utility Grids and Power
//             Generation to "step-up" or "step-down" voltages from
//             33 kV–220 kV, up to 200 MVA with "ON LOAD" tap changers for
//             real-time regulation or with "OFF LOAD" tap changers as per
//             customer requirement and specification.
//           </p>
//         </ProductCard>

//         {/* Distribution Transformers */}
//         <ProductCard
//           title="Distribution Transformers"
//           expanded={expandedSections.distributionTransformers}
//           onToggle={() => toggleSection("distributionTransformers")}
//         >
//           <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-5">
//             Low and Medium range distribution transformers from 11 kV to
//             35 kV, up to ≤ 10000 KVA, Dry/Oil Type, Pole, Pad and Ground
//             mounted
//           </p>
//         </ProductCard>
//       </div>
//     </Container>
//   </section>
// );

// // Technology Card Component
// const TechnologyCard: React.FC<TechnologyCardProps> = ({ icon, title, color, children }) => (
//   <div 
//     className="bg-gray-50 rounded-lg p-6 sm:p-8 h-full border-l-4 hover:shadow-md transition-shadow duration-300" 
//     style={{ borderLeftColor: color }}
//   >
//     <h3 className="mt-0 mb-5 flex items-center text-lg sm:text-xl font-semibold" style={{ color }}>
//       <span className="mr-3 flex-shrink-0">{icon}</span>
//       <span>{title}</span>
//     </h3>
//     {children}
//   </div>
// );

// // Technology Section Component
// const TechnologySection: React.FC = () => (
//   <section className="py-16 sm:py-20 bg-white">
//     <Container>
//       <SectionHeader title="Advanced Technology & Highlights" />

//       <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
//         {/* Smart Transformers */}
//         <TechnologyCard
//           icon={<Zap className="w-6 h-6" />}
//           title="Smart Transformers"
//           color="#6176A2"
//         >
//           <div className="space-y-4">
//             <p className="text-gray-600 text-base leading-relaxed">
//               Smart transformers enhance power distribution with real-time
//               monitoring and predictive maintenance using Internet of Things
//               (IoT) technology. They optimize grid performance by
//               automatically adjusting voltage and power quality according to
//               changes in demand.
//             </p>
//             <p className="text-gray-600 text-base leading-relaxed">
//               Smart transformers help maintain grid stability and improve
//               efficiency, especially when fluctuating renewable energy
//               sources like solar and wind are integrated. They reduce
//               maintenance costs, extend lifespans, and support a sustainable
//               energy system.
//             </p>
//           </div>
//         </TechnologyCard>

//         {/* Green Transformers */}
//         <TechnologyCard
//           icon={<TrendingUp className="w-6 h-6" />}
//           title="Green Transformers"
//           color="#4CAF50"
//         >
//           <div className="space-y-4">
//             <p className="text-gray-600 text-base leading-relaxed">
//               Green transformers focus on sustainability using eco-friendly
//               materials like biodegradable cooling liquids from vegetable
//               oils and recyclable construction materials. These transformers
//               operate more efficiently, reducing energy loss and carbon
//               footprint.
//             </p>
//             <p className="text-gray-600 text-base leading-relaxed">
//               Green transformers comply with stringent environmental
//               regulations, ensuring global marketability while contributing
//               to energy savings and emission reductions.
//             </p>
//           </div>
//         </TechnologyCard>
//       </div>
//     </Container>
//   </section>
// );

// // Feature Box Component
// const FeatureBox: React.FC<FeatureBoxProps> = ({ icon, title, desc }) => (
//   <div className="w-full sm:w-1/2 px-2 mb-4">
//     <div className="bg-white/5 rounded-xl p-4 sm:p-5 h-full shadow-lg backdrop-blur-sm hover:bg-white/10 transition-colors duration-300">
//       <div className="flex flex-col sm:flex-row">
//         <div className="mb-3 sm:mb-0 sm:mr-5 text-2xl sm:text-3xl text-yellow-400 flex-shrink-0 self-start">
//           {icon}
//         </div>
//         <div className="flex-1">
//           <h4 className="mb-2 font-semibold text-white text-base sm:text-lg">{title}</h4>
//           <p className="m-0 opacity-85 leading-relaxed text-white text-sm sm:text-base">{desc}</p>
//         </div>
//       </div>
//     </div>
//   </div>
// );

// // Why Choose Tesla Section Component
// const WhyChooseSection: React.FC = () => {
//   const features = [
//     {
//       icon: <TrendingUp className="w-6 h-6" />,
//       title: "Efficiency & Cost Savings",
//       desc: "Low-loss cores (laminated or amorphous), high saturation thresholds, and smart-load adaptability.",
//     },
//     {
//       icon: <Settings className="w-6 h-6" />,
//       title: "Flexible Configurations",
//       desc: "From indoor dry-type to outdoor oil-immersed, spanning single-phase to high-voltage three-phase systems, Inverter/Converter Duty Transformers with multiple windings, rectifier transformers (multiple transformers in one tank).",
//     },
//     {
//       icon: <Shield className="w-6 h-6" />,
//       title: "Superior Reliability",
//       desc: "Built to handle harmonics, equipped with real-time diagnostics, and optimized for safety across environments.",
//     },
//     {
//       icon: <Globe className="w-6 h-6" />,
//       title: "Eco-Friendly Design",
//       desc: "Green designs align with global environmental standards and reduce operational carbon footprint",
//     },
//     {
//       icon: <Layers className="w-6 h-6" />,
//       title: "Scalability & Integration",
//       desc: "Easy to integrate with modern utility grids, renewable sites, industrial installations, and sensitive equipment infrastructures.",
//     },
//     {
//       icon: <Clock className="w-6 h-6" />,
//       title: "Engineering Excellence",
//       desc: "Over 50 years of transformer innovation and a legacy of delivering performance globally.",
//     },
//     {
//       icon: <Award className="w-6 h-6" />,
//       title: "Global Certifications",
//       desc: "Certified with ISO 9001, 14001, 45001. Accredited by NABL/ILAC and ISO/IEC labs for international testing.",
//     },
//     {
//       icon: <Cpu className="w-6 h-6" />,
//       title: "Advanced Manufacturing",
//       desc: "In-house testing up to 200 MVA at 220 kV. Type tested at KEMA, CPRI, and ERDA labs for global compliance.",
//     },
//     {
//       icon: <BarChart2 className="w-6 h-6" />,
//       title: "High Production Capacity",
//       desc: "16,000 MVA annual output across three manufacturing facilities—ensuring fast, scalable delivery.",
//     },
//     {
//       icon: <Box className="w-6 h-6" />,
//       title: "Turnkey EHV Expertise",
//       desc: "Proven execution of extra high voltage projects up to 400 kV and 765 kV with end-to-end support.",
//     },
//     {
//       icon: <Package className="w-6 h-6" />,
//       title: "All-in-One Solutions",
//       desc: "From 50 kVA 11 kV to 200 MVA 220 kV, and turnkey solutions up to 765 kV—all under one roof.",
//     },
//     {
//       icon: <Phone className="w-6 h-6" />,
//       title: "After-Sales Support",
//       desc: "A dedicated team ensures prompt global service, with product guarantees ranging from 2 to 5 years—even in the most remote markets.",
//     },
//   ];

//   return (
//     <section className="py-16 sm:py-20 bg-gradient-to-br from-blue-700 to-slate-700 text-white-900">
//       <Container >
//         {/* <SectionHeader 
//           title="Why Choose Tesla for Exports" 
//           subtitle="Trusted worldwide for innovation, reliability, and scalable energy solutions."
        
//         /> */}
//         {/* <h1  className="text-3xl font-bold ">Why Choose Tesla for Exports</h1> */}
//                   <h1 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center pb-5">Ready to Export to Your Market?</h1>


//         <div className="flex flex-wrap -mx-2">
//           {features.map((feature, idx) => (
//             <FeatureBox
//               key={idx}
//               icon={feature.icon}
//               title={feature.title}
//               desc={feature.desc}
//             />
//           ))}
//         </div>
//       </Container>
//     </section>
//   );
// };

// // Export Highlights Component
// const ExportHighlights: React.FC<ExportHighlightsProps> = ({ expanded, onToggle }) => {
//   const exportData = [
//     // Column 1
//     [
//       {
//         country: "AUSTRALIA",
//         data: ["12.5 MVA & 10 MVA, 66/11 POWER TRANSFORMER"],
//       },
//       {
//         country: "BANGLADESH",
//         data: [
//           "35 MVA, 33/11 KV – 16 NOS. IN OPERATION & 9 UNDER EXECUTION",
//           "28 MVA, 33/11 KV – 75 NOS. IN OPERATION",
//           "26.66 MVA, 33/11 KV – 34 NOS. IN OPERATION",
//           "20 MVA, 33/11 KV – 10 NOS. IN OPERATION",
//           "13.33 MVA, 33/11 KV – 88 NOS. IN OPERATION",
//         ],
//       },
//       {
//         country: "CANADA",
//         data: ["60 MVA, 230-125/34.5 kV DUAL RATIO (KINROSS GOLD CORP.)"],
//       },
//       {
//         country: "IRAQ",
//         data: ["25 MVA, 132/6.3 kV POWER TRANSFORMER"],
//       },
//       {
//         country: "INDIA",
//         data: ["100 MVA, 220 KV CLASS", "70 MVA, 132 KV POWER TRANSFORMERS"],
//       },
//       {
//         country: "JORDAN",
//         data: ["10 MVA, 33/6.6 kV POWER TRANSFORMER"],
//       },
//       {
//         country: "KAZAKHSTAN",
//         data: ["6.3 MVA, 11/6 kV GENERATOR TRANSFORMER"],
//       },
//       {
//         country: "KENYA",
//         data: ["5 MVA, 132/6.6 kV POWER TRANSFORMER"],
//       },
//       {
//         country: "LIBYA",
//         data: ["20 MVA, 30/11 kV POWER TRANSFORMER"],
//       },
//       {
//         country: "LIBERIA",
//         data: ["2 MVA, 132 kV POWER TRANSFORMER"],
//       },
//       {
//         country: "NAMIBIA",
//         data: ["7.5 MVA, 30/6.6 kV (DE BEERS DIAMOND CORP.)"],
//       },
//     ],
//     // Column 2
//     [
//       {
//         country: "NEPAL",
//         data: ["15 MVA, 132 KV POWER TRANSFORMER"],
//       },
//       {
//         country: "NIGERIA",
//         data: ["2.5 MVA, 11/0.433 kV TRANSFORMER"],
//       },
//       {
//         country: "OMAN",
//         data: ["10 MVA, 33/11.5 KV POWER TRANSFORMER"],
//       },
//       {
//         country: "PALESTINE",
//         data: ["10 MVA, 33/11-6.6 KV POWER TRANSFORMER"],
//       },
//       {
//         country: "QATAR",
//         data: ["2 MVA, 6.6 kV/415V TRANSFORMER"],
//       },
//       {
//         country: "SAUDI ARABIA",
//         data: ["2.5 MVA, 13.8 kV/416 V, 60 Hz POWER TRANSFORMER"],
//       },
//       {
//         country: "SOUTH KOREA",
//         data: ["12.5 MVA, 22.9/10.5 kV, 60 Hz POWER TRANSFORMER"],
//       },
//       {
//         country: "SPAIN",
//         data: ["12.5 MVA, 20/66 kV ELEVATOR TRANSFORMER"],
//       },
//       {
//         country: "SUDAN",
//         data: ["2.5 MVA, 6.6/0.433 kV CONVERTER DUTY TRANSFORMER"],
//       },
//       {
//         country: "TANZANIA",
//         data: ["3 MVA, 66/3.3 kV POWER TRANSFORMER"],
//       },
//       {
//         country: "USA",
//         data: [
//           "35 MVA, 13.8/13.8 kV UNITY RATIO TRANSFORMER (60 Hz)",
//           "12 MVA, 13.8/12.47 kV INTERCONNECTION TRANSFORMER (60 Hz)",
//         ],
//       },
//       {
//         country: "ZAMBIA",
//         data: ["10 MVA, 66/33 kV POWER TRANSFORMER"],
//       },
//       {
//         country: "ZIMBABWE",
//         data: ["6 MVA, 18/11 KV POWER TRANSFORMER"],
//       },
//     ],
//   ];

//   const contentId = "export-highlights-content";

//   return (
//     <section className="py-16 sm:py-20 bg-white">
//       <Container >
//         <SectionHeader title="Key Export Highlights"  />

//         <div className="max-w-6xl mx-auto ">
//           <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
//             <button
//               className="w-full bg-blue-600 text-white p-4 sm:p-5 flex justify-between items-center cursor-pointer hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
//               onClick={onToggle}
//               aria-expanded={expanded}
//               aria-controls={contentId}
//             >
//               <h3 className="m-0 text-lg sm:text-xl font-medium">Global Export Projects</h3>
//               <div className="flex-shrink-0 ml-4">
//                 {expanded ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
//               </div>
//             </button>

//             {expanded && (
//               <div id={contentId} className="p-4 sm:p-6 animate-fade-in">
//                 <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
//                   {exportData.map((column, colIdx) => (
//                     <div key={colIdx} className="space-y-4 sm:space-y-6">
//                       {column.map((item, i) => (
//                         <div className="border-b border-gray-200 pb-4 last:border-b-0 last:pb-0" key={i}>
//                           <h4 className="text-blue-600 font-semibold mb-2 text-base sm:text-lg">
//                             {item.country}
//                           </h4>
//                           <div className="space-y-1">
//                             {item.data.map((line, j) => (
//                               <p key={j} className="text-gray-700 text-sm sm:text-base leading-relaxed">
//                                 {line}
//                               </p>
//                             ))}
//                           </div>
//                         </div>
//                       ))}
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       </Container>
//     </section>
//   );
// };

// // Capacity Card Component
// const CapacityCard: React.FC<CapacityCardProps> = ({ title, children }) => (
//   <div className="w-full md:w-1/2 px-2 mb-6">
//     <div className="bg-white rounded-lg p-6 sm:p-8 h-full shadow-md hover:shadow-lg transition-shadow duration-300">
//       <h3 className="text-blue-600 mt-0 mb-5 text-lg sm:text-xl font-semibold">
//         {title}
//       </h3>
//       {children}
//     </div>
//   </div>
// );

// // Capacity Section Component
// const CapacitySection: React.FC = () => (
//   <section className="py-16 sm:py-20 bg-gray-50">
//     <Container>
//       <SectionHeader title="Capacity & Capability" />

//       <div className="flex flex-wrap -mx-2">
//         <CapacityCard title="Power Transformers">
//           <ul className="list-none p-0 space-y-2">
//             <li className="flex items-start">
//               <Check className="text-blue-600 mr-3 mt-1 flex-shrink-0" size={16} />
//               <span className="text-gray-700 text-base">Up to 200 MVA, 220 kV</span>
//             </li>
//           </ul>
//         </CapacityCard>

//         <CapacityCard title="Distribution Transformers">
//           <ul className="list-none p-0 space-y-2">
//             <li className="flex items-start">
//               <Check className="text-blue-600 mr-3 mt-1 flex-shrink-0" size={16} />
//               <span className="text-gray-700 text-base">25 kVA up to ≤ 15 MVA up to 33kV</span>
//             </li>
//           </ul>
//         </CapacityCard>

//         <CapacityCard title="Special Transformers">
//           <ul className="list-none p-0 space-y-2">
//             <li className="flex items-start">
//               <Check className="text-blue-600 mr-3 mt-1 flex-shrink-0" size={16} />
//               <span className="text-gray-700 text-base">
//                 Inverter Duty Transformers for solar & wind applications
//                 from 500 KVA to ≤ 30 MVA
//               </span>
//             </li>
//             <li className="flex items-start">
//               <Check className="text-blue-600 mr-3 mt-1 flex-shrink-0" size={16} />
//               <span className="text-gray-700 text-base">
//                 Converter Duty Transformers for industrial needs from 500
//                 KVA to ≤ 30 MVA
//               </span>
//             </li>
//           </ul>
//         </CapacityCard>

//         <CapacityCard title="Other Solutions">
//           <ul className="list-none p-0 space-y-2">
//             <li className="flex items-start">
//               <Check className="text-blue-600 mr-3 mt-1 flex-shrink-0" size={16} />
//               <span className="text-gray-700 text-base">
//                 Dry-Type & Cast Resin Transformers up to ≤ 15 MVA 33 kV
//               </span>
//             </li>
//             <li className="flex items-start">
//               <Check className="text-blue-600 mr-3 mt-1 flex-shrink-0" size={16} />
//               <span className="text-gray-700 text-base">
//                 Unitized/Packaged Substations up to ≤ 15 MVA 33 kV
//               </span>
//             </li>
//             <li className="flex items-start">
//               <Check className="text-blue-600 mr-3 mt-1 flex-shrink-0" size={16} />
//               <span className="text-gray-700 text-base">Mobile Substations up to ≤ 60 MVA 132 kV</span>
//             </li>
//           </ul>
//         </CapacityCard>
//       </div>
//     </Container>
//   </section>
// );

// // Main Exports Component
// const Exports: React.FC = () => {
//   const [expandedSections, setExpandedSections] = useState<ExpandedSections>({
//     powerTransformers: false,
//     distributionTransformers: false,
//     smartTransformers: false,
//     greenTransformers: false,
//     exportHighlights: false,
//   });

//   const toggleSection = (section: keyof ExpandedSections) => {
//     setExpandedSections((prev) => ({
//       ...prev,
//       [section]: !prev[section],
//     }));
//   };

//   return (
//     <>
//       <Head>
//         <title>Tesla Transformers - Engineering Energy for the Future | Global Exports</title>
//         <meta 
//           name="description" 
//           content="Tesla Transformers (India) Ltd. - Leading manufacturer and exporter of high-performance transformers with 50+ years of expertise. Power, distribution, inverter, and converter duty transformers for global markets." 
//         />
//         <meta 
//           name="keywords" 
//           content="transformers, power transformers, distribution transformers, Tesla, India, export, electrical equipment, smart transformers, green transformers" 
//         />
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//         <meta property="og:title" content="Tesla Transformers - Engineering Energy for the Future" />
//         <meta 
//           property="og:description" 
//           content="Leading manufacturer and exporter of high-performance transformers with 50+ years of expertise across 5 continents, 36+ countries." 
//         />
//         <meta property="og:type" content="website" />
//         <meta name="twitter:card" content="summary_large_image" />
//         <link rel="canonical" href="/exports" />
//       </Head>

//       <div className="bg-gray-50 min-h-screen">
//         <Suspense fallback={<LoadingSkeleton />}>
//           {/* <PageTitle /> */}
//         </Suspense>
        
//         <Suspense fallback={<LoadingSkeleton />}>
//           <AboutSection />
//         </Suspense>
        
//         <Suspense fallback={<LoadingSkeleton />}>
//           <ProductsSection 
//             expandedSections={expandedSections} 
//             toggleSection={toggleSection} 
//           />
//         </Suspense>
        
//         <Suspense fallback={<LoadingSkeleton />}>
//           <TechnologySection />
//         </Suspense>
        
//         <Suspense fallback={<LoadingSkeleton />}>
//           <WhyChooseSection />
//         </Suspense>
        
//         <Suspense fallback={<LoadingSkeleton />}>
//           <ExportHighlights 
//             expanded={expandedSections.exportHighlights}
//             onToggle={() => toggleSection("exportHighlights")}
//           />
//         </Suspense>
        
//         <Suspense fallback={<LoadingSkeleton />}>
//           <CapacitySection />
//         </Suspense>

//         {/* Additional CSS for animations */}
//         <style jsx global>{`
//           .animate-fade-in {
//             animation: fadeIn 0.3s ease-in-out;
//           }
          
//           @keyframes fadeIn {
//             from {
//               opacity: 0;
//               transform: translateY(10px);
//             }
//             to {
//               opacity: 1;
//               transform: translateY(0);
//             }
//           }
          
//           /* Custom scrollbar for webkit browsers */
//           ::-webkit-scrollbar {
//             width: 8px;
//           }
          
//           ::-webkit-scrollbar-track {
//             background: #f1f1f1;
//           }
          
//           ::-webkit-scrollbar-thumb {
//             background: #6176A2;
//             border-radius: 4px;
//           }
          
//           ::-webkit-scrollbar-thumb:hover {
//             background: #4a5a82;
//           }
          
//           /* Focus styles for accessibility */
//           .focus\\:ring-2:focus {
//             outline: 2px solid transparent;
//             outline-offset: 2px;
//           }
          
//           /* Print styles */
//           @media print {
//             .no-print {
//               display: none !important;
//             }
//           }
          
//           /* High contrast mode support */
//           @media (prefers-contrast: high) {
//             .bg-blue-600 {
//               background-color: #000080 !important;
//             }
            
//             .text-blue-600 {
//               color: #000080 !important;
//             }
//           }
          
//           /* Reduced motion support */
//           @media (prefers-reduced-motion: reduce) {
//             .animate-bounce {
//               animation: none;
//             }
            
//             .animate-fade-in-up {
//               animation: none;
//             }
            
//             .animate-fade-in {
//               animation: none;
//             }
            
//             * {
//               transition-duration: 0.01ms !important;
//             }
//           }
//         `}</style>
//       </div>
//     </>
//   );
// };

// export default Exports;


'use client';

import { useState, Suspense } from "react";
import Image from 'next/image';
import Link from 'next/link'
import {
  TrendingUp,
  Settings,
  Layers,
  Clock,
  Cpu,
  BarChart2,
  Box,
  Package,
  Phone,
  Globe,
  Award,
  Shield,
  Zap,
  Check,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

// Types
interface ExpandedSections {
  powerTransformers: boolean;
  distributionTransformers: boolean;
  smartTransformers: boolean;
  greenTransformers: boolean;
  exportHighlights: boolean;
}

interface ProductCardProps {
  title: string;
  expanded: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}

interface TechnologyCardProps {
  icon: React.ReactNode;
  title: string;
  color: string;
  children: React.ReactNode;
}

interface FeatureBoxProps {
  icon: React.ReactNode;
  title: string;
  desc: string;
  delay?: number;
}

interface CapacityCardProps {
  title: string;
  children: React.ReactNode;
  delay?: number;
}

interface ExportHighlightsProps {
  expanded: boolean;
  onToggle: () => void;
}

interface ProductsSectionProps {
  expandedSections: ExpandedSections;
  toggleSection: (section: keyof ExpandedSections) => void;
}

// Loading Component
const LoadingSkeleton: React.FC = () => (
  <div className="animate-pulse">
    <div className="bg-gray-200 h-64 rounded mb-4"></div>
    <div className="space-y-2">
      <div className="bg-gray-200 h-4 rounded w-3/4"></div>
      <div className="bg-gray-200 h-4 rounded w-1/2"></div>
    </div>
  </div>
);


// Container Component for consistent spacing
const Container: React.FC<{ children: React.ReactNode; className?: string }> = ({ 
  children, 
  className = "" 
}) => (
  <div className={`container mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
    {children}
  </div>
);

// Section Header Component
const SectionHeader: React.FC<{ title: string; subtitle?: string }> = ({ 
  title, 
  subtitle 
}) => (
  <div className="text-center mb-12 sm:mb-16">
    <h2 className="text-blue-600 text-3xl sm:text-4xl font-semibold relative inline-block pb-4">
      {title}
      <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-blue-600"></span>
    </h2>
    {subtitle && (
      <p className="text-lg mt-4 text-gray-600 max-w-2xl mx-auto">
        {subtitle}
      </p>
    )}
  </div>
);

// About Section Component
const AboutSection: React.FC = () => (
  <section className="py-16 sm:py-20 bg-white">
    
    <Container>
      <SectionHeader title="About TESLA International Division" />

      <div className="max-w-5xl mx-auto space-y-6 sm:space-y-8">
        <p className="text-gray-700 text-base sm:text-lg leading-relaxed text-justify">
        <b>Tesla Transformers (India) Ltd.,</b> headquartered in Bhopal, is a
          leading manufacturer and exporter of high-performance
          transformers, specializing in power, distribution, inverter, and
          converter duty transformers, with over 50 years of strong
          engineering foundation and decades of industry expertise, TESLA
          offers a wide product range from 25 kVA, 11 kV class to 200 MVA,
          220 kV class. Our exports span 5 continents, 36+ countries
          across Asia, Africa, Australia, Europe & North America.
        </p>

        <p className="text-gray-700 text-base sm:text-lg leading-relaxed text-justify">
          TESLA transformers are designed for high efficiency,
          reliability, and durability, meeting international standards
          such as ISO, IEC, IEEE etc and regional/country wise standards
          such as ANSI, ASTM, AS, BS, BIS, CE, CSA, DIN, ESCOM, GOST,
          NEMA, SABS, SASO etc. The company has successfully exported its
          products to multiple countries, serving utilities, renewable
          energy sectors, and industrial clients worldwide.
        </p>

        <p className="text-gray-700 text-base sm:text-lg leading-relaxed text-justify">
          In addition to manufacturing, TESLA has a proven track record in
          executing end-to-end turnkey substation and transmission
          projects up to 400 kV and 765 kV. This includes engineering,
          procurement, construction, testing, and commissioning –
          delivering complete power infrastructure solutions (EPC) with a
          focus on quality, safety, and timely execution.
        </p>

        <p className="text-gray-700 text-base sm:text-lg leading-relaxed text-justify">
          TESLA continues to grow its global footprint by delivering
          innovative energy solutions, backed by robust R&D, advanced
          manufacturing facilities, and a commitment to customer
          satisfaction.
        </p>
      </div>
    </Container>
  </section>
);

// Product Card Component with improved accessibility
const ProductCard: React.FC<ProductCardProps> = ({ title, expanded, onToggle, children }) => {
  const contentId = `content-${title.replace(/\s+/g, '-').toLowerCase()}`;
  
  return (
    <div className="bg-white rounded-lg shadow-md mb-5 overflow-hidden transition-all duration-300 hover:shadow-lg">
      <button
        className="w-full bg-blue-600 text-white p-4 sm:p-5 cursor-pointer flex justify-between items-center hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
        onClick={onToggle}
        aria-expanded={expanded}
        aria-controls={contentId}
      >
        <h3 className="m-0 text-lg sm:text-xl font-medium text-left">{title}</h3>
        <div className="flex-shrink-0 ml-4">
          {expanded ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
        </div>
      </button>

      {expanded && (
        <div 
          id={contentId}
          className="p-6 sm:p-8 border-t border-gray-200 animate-fade-in"
        >
          {children}
        </div>
      )}
    </div>
  );
};

// Key Products Section Component
const ProductsSection: React.FC<ProductsSectionProps> = ({ 
  expandedSections, 
  toggleSection 
}) => (
  <section className="py-16 sm:py-20 bg-gray-50">
    <Container>
      <SectionHeader title="Key Types & Applications" />

      <div className="space-y-5">
        {/* Power Transformers */}
        <ProductCard
          title="Power Transformers"
          expanded={expandedSections.powerTransformers}
          onToggle={() => toggleSection("powerTransformers")}
        >
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-5">
            Large, high-voltage units used in Utility Grids and Power
            Generation to "step-up" or "step-down" voltages from
            33 kV–220 kV, up to 200 MVA with "ON LOAD" tap changers for
            real-time regulation or with "OFF LOAD" tap changers as per
            customer requirement and specification.
          </p>
        </ProductCard>

        {/* Distribution Transformers */}
        <ProductCard
          title="Distribution Transformers"
          expanded={expandedSections.distributionTransformers}
          onToggle={() => toggleSection("distributionTransformers")}
        >
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-5">
            Low and Medium range distribution transformers from 11 kV to
            35 kV, up to ≤ 10000 KVA, Dry/Oil Type, Pole, Pad and Ground
            mounted
          </p>
        </ProductCard>
      </div>
    </Container>
  </section>
);

// Technology Card Component
const TechnologyCard: React.FC<TechnologyCardProps> = ({ icon, title, color, children }) => (
  <div 
    className="bg-gray-50 rounded-lg p-6 sm:p-8 h-full border-l-4 hover:shadow-md transition-shadow duration-300" 
    style={{ borderLeftColor: color }}
  >
    <h3 className="mt-0 mb-5 flex items-center text-lg sm:text-xl font-semibold" style={{ color }}>
      <span className="mr-3 flex-shrink-0">{icon}</span>
      <span>{title}</span>
    </h3>
    {children}
  </div>
);

// Technology Section Component
const TechnologySection: React.FC = () => (
  <section className="py-16 sm:py-20 bg-white">
    <Container>
      <SectionHeader title="Advanced Technology & Highlights" />

      <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
        {/* Smart Transformers */}
        <TechnologyCard
          icon={<Zap className="w-6 h-6" />}
          title="Smart Transformers"
          color="#6176A2"
        >
          <div className="space-y-4">
            <p className="text-gray-600 text-base leading-relaxed">
              Smart transformers enhance power distribution with real-time
              monitoring and predictive maintenance using Internet of Things
              (IoT) technology. They optimize grid performance by
              automatically adjusting voltage and power quality according to
              changes in demand.
            </p>
            <p className="text-gray-600 text-base leading-relaxed">
              Smart transformers help maintain grid stability and improve
              efficiency, especially when fluctuating renewable energy
              sources like solar and wind are integrated. They reduce
              maintenance costs, extend lifespans, and support a sustainable
              energy system.
            </p>
          </div>
        </TechnologyCard>

        {/* Green Transformers */}
        <TechnologyCard
          icon={<TrendingUp className="w-6 h-6" />}
          title="Green Transformers"
          color="#4CAF50"
        >
          <div className="space-y-4">
            <p className="text-gray-600 text-base leading-relaxed">
              Green transformers focus on sustainability using eco-friendly
              materials like biodegradable cooling liquids from vegetable
              oils and recyclable construction materials. These transformers
              operate more efficiently, reducing energy loss and carbon
              footprint.
            </p>
            <p className="text-gray-600 text-base leading-relaxed">
              Green transformers comply with stringent environmental
              regulations, ensuring global marketability while contributing
              to energy savings and emission reductions.
            </p>
          </div>
        </TechnologyCard>
      </div>
    </Container>
  </section>
);



// Feature Box Component
const FeatureBox: React.FC<FeatureBoxProps> = ({ icon, title, desc }) => (
  <div className="w-full sm:w-1/2 px-2 mb-4">
    <div className="bg-white/5 rounded-xl p-4 sm:p-5 h-full shadow-lg backdrop-blur-sm hover:bg-white/10 transition-colors duration-300">
      <div className="flex flex-col sm:flex-row">
        <div className="mb-3 sm:mb-0 sm:mr-5 text-2xl sm:text-3xl text-yellow-400 flex-shrink-0 self-start">
          {icon}
        </div>
        <div className="flex-1">
          <h4 className="mb-2 font-semibold text-white text-base sm:text-lg">{title}</h4>
          <p className="m-0 opacity-85 leading-relaxed text-white text-sm sm:text-base">{desc}</p>
        </div>
      </div>
    </div>
  </div>
);

// Why Choose Tesla Section Component
const WhyChooseSection: React.FC = () => {
  const features = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Efficiency & Cost Savings",
      desc: "Low-loss cores (laminated or amorphous), high saturation thresholds, and smart-load adaptability.",
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Flexible Configurations",
      desc: "From indoor dry-type to outdoor oil-immersed, spanning single-phase to high-voltage three-phase systems, Inverter/Converter Duty Transformers with multiple windings, rectifier transformers (multiple transformers in one tank).",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Superior Reliability",
      desc: "Built to handle harmonics, equipped with real-time diagnostics, and optimized for safety across environments.",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Eco-Friendly Design",
      desc: "Green designs align with global environmental standards and reduce operational carbon footprint",
    },
    {
      icon: <Layers className="w-6 h-6" />,
      title: "Scalability & Integration",
      desc: "Easy to integrate with modern utility grids, renewable sites, industrial installations, and sensitive equipment infrastructures.",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Engineering Excellence",
      desc: "Over 50 years of transformer innovation and a legacy of delivering performance globally.",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Global Certifications",
      desc: "Certified with ISO 9001, 14001, 45001. Accredited by NABL/ILAC and ISO/IEC labs for international testing.",
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "Advanced Manufacturing",
      desc: "In-house testing up to 200 MVA at 220 kV. Type tested at KEMA, CPRI, and ERDA labs for global compliance.",
    },
    {
      icon: <BarChart2 className="w-6 h-6" />,
      title: "High Production Capacity",
      desc: "16,000 MVA annual output across three manufacturing facilities—ensuring fast, scalable delivery.",
    },
    {
      icon: <Box className="w-6 h-6" />,
      title: "Turnkey EHV Expertise",
      desc: "Proven execution of extra high voltage projects up to 400 kV and 765 kV with end-to-end support.",
    },
    {
      icon: <Package className="w-6 h-6" />,
      title: "All-in-One Solutions",
      desc: "From 50 kVA 11 kV to 200 MVA 220 kV, and turnkey solutions up to 765 kV—all under one roof.",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "After-Sales Support",
      desc: "A dedicated team ensures prompt global service, with product guarantees ranging from 2 to 5 years—even in the most remote markets.",
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-blue-700 to-slate-700 text-white-900">
      <Container >
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center pb-5">Ready to Export to Your Market?</h1>

        <div className="flex flex-wrap -mx-2">
          {features.map((feature, idx) => (
            <FeatureBox
              key={idx}
              icon={feature.icon}
              title={feature.title}
              desc={feature.desc}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

// Export Highlights Component
const ExportHighlights: React.FC<ExportHighlightsProps> = ({ expanded, onToggle }) => {
  const exportData = [
    // Column 1
    [
      {
        country: "AUSTRALIA",
        data: ["12.5 MVA & 10 MVA, 66/11 POWER TRANSFORMER"],
      },
      {
        country: "BANGLADESH",
        data: [
          "35 MVA, 33/11 KV – 16 NOS. IN OPERATION & 9 UNDER EXECUTION",
          "28 MVA, 33/11 KV – 75 NOS. IN OPERATION",
          "26.66 MVA, 33/11 KV – 34 NOS. IN OPERATION",
          "20 MVA, 33/11 KV – 10 NOS. IN OPERATION",
          "13.33 MVA, 33/11 KV – 88 NOS. IN OPERATION",
        ],
      },
      {
        country: "CANADA",
        data: ["60 MVA, 230-125/34.5 kV DUAL RATIO (KINROSS GOLD CORP.)"],
      },
      {
        country: "IRAQ",
        data: ["25 MVA, 132/6.3 kV POWER TRANSFORMER"],
      },
      {
        country: "INDIA",
        data: ["100 MVA, 220 KV CLASS", "70 MVA, 132 KV POWER TRANSFORMERS"],
      },
      {
        country: "JORDAN",
        data: ["10 MVA, 33/6.6 kV POWER TRANSFORMER"],
      },
      {
        country: "KAZAKHSTAN",
        data: ["6.3 MVA, 11/6 kV GENERATOR TRANSFORMER"],
      },
      {
        country: "KENYA",
        data: ["5 MVA, 132/6.6 kV POWER TRANSFORMER"],
      },
      {
        country: "LIBYA",
        data: ["20 MVA, 30/11 kV POWER TRANSFORMER"],
      },
      {
        country: "LIBERIA",
        data: ["2 MVA, 132 kV POWER TRANSFORMER"],
      },
      {
        country: "NAMIBIA",
        data: ["7.5 MVA, 30/6.6 kV (DE BEERS DIAMOND CORP.)"],
      },
    ],
    // Column 2
    [
      {
        country: "NEPAL",
        data: ["15 MVA, 132 KV POWER TRANSFORMER"],
      },
      {
        country: "NIGERIA",
        data: ["2.5 MVA, 11/0.433 kV TRANSFORMER"],
      },
      {
        country: "OMAN",
        data: ["10 MVA, 33/11.5 KV POWER TRANSFORMER"],
      },
      {
        country: "PALESTINE",
        data: ["10 MVA, 33/11-6.6 KV POWER TRANSFORMER"],
      },
      {
        country: "QATAR",
        data: ["2 MVA, 6.6 kV/415V TRANSFORMER"],
      },
      {
        country: "SAUDI ARABIA",
        data: ["2.5 MVA, 13.8 kV/416 V, 60 Hz POWER TRANSFORMER"],
      },
      {
        country: "SOUTH KOREA",
        data: ["12.5 MVA, 22.9/10.5 kV, 60 Hz POWER TRANSFORMER"],
      },
      {
        country: "SPAIN",
        data: ["12.5 MVA, 20/66 kV ELEVATOR TRANSFORMER"],
      },
      {
        country: "SUDAN",
        data: ["2.5 MVA, 6.6/0.433 kV CONVERTER DUTY TRANSFORMER"],
      },
      {
        country: "TANZANIA",
        data: ["3 MVA, 66/3.3 kV POWER TRANSFORMER"],
      },
      {
        country: "USA",
        data: [
          "35 MVA, 13.8/13.8 kV UNITY RATIO TRANSFORMER (60 Hz)",
          "12 MVA, 13.8/12.47 kV INTERCONNECTION TRANSFORMER (60 Hz)",
        ],
      },
      {
        country: "ZAMBIA",
        data: ["10 MVA, 66/33 kV POWER TRANSFORMER"],
      },
      {
        country: "ZIMBABWE",
        data: ["6 MVA, 18/11 KV POWER TRANSFORMER"],
      },
    ],
  ];

  const contentId = "export-highlights-content";

  return (
    <section className="py-16 sm:py-20 bg-white">
      <Container >
        <SectionHeader title="Key Export Highlights"  />

        <div className="max-w-6xl mx-auto ">
          <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
            <button
              className="w-full bg-blue-600 text-white p-4 sm:p-5 flex justify-between items-center cursor-pointer hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
              onClick={onToggle}
              aria-expanded={expanded}
              aria-controls={contentId}
            >
              <h3 className="m-0 text-lg sm:text-xl font-medium">Global Export Projects</h3>
              <div className="flex-shrink-0 ml-4">
                {expanded ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
              </div>
            </button>

            {expanded && (
              <div id={contentId} className="p-4 sm:p-6 animate-fade-in">
                <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
                  {exportData.map((column, colIdx) => (
                    <div key={colIdx} className="space-y-4 sm:space-y-6">
                      {column.map((item, i) => (
                        <div className="border-b border-gray-200 pb-4 last:border-b-0 last:pb-0" key={i}>
                          <h4 className="text-blue-600 font-semibold mb-2 text-base sm:text-lg">
                            {item.country}
                          </h4>
                          <div className="space-y-1">
                            {item.data.map((line, j) => (
                              <p key={j} className="text-gray-700 text-sm sm:text-base leading-relaxed">
                                {line}
                              </p>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};

// Capacity Card Component
const CapacityCard: React.FC<CapacityCardProps> = ({ title, children }) => (
  <div className="w-full md:w-1/2 px-2 mb-6">
    <div className="bg-white rounded-lg p-6 sm:p-8 h-full shadow-md hover:shadow-lg transition-shadow duration-300">
      <h3 className="text-blue-600 mt-0 mb-5 text-lg sm:text-xl font-semibold">
        {title}
      </h3>
      {children}
    </div>
  </div>
);

// Capacity Section Component
const CapacitySection: React.FC = () => (
  <section className="py-16 sm:py-20 bg-gray-50">
    <Container>
      <SectionHeader title="Capacity & Capability" />

      <div className="flex flex-wrap -mx-2">
        <CapacityCard title="Power Transformers">
          <ul className="list-none p-0 space-y-2">
            <li className="flex items-start">
              <Check className="text-blue-600 mr-3 mt-1 flex-shrink-0" size={16} />
              <span className="text-gray-700 text-base">Up to 200 MVA, 220 kV</span>
            </li>
          </ul>
        </CapacityCard>

        <CapacityCard title="Distribution Transformers">
          <ul className="list-none p-0 space-y-2">
            <li className="flex items-start">
              <Check className="text-blue-600 mr-3 mt-1 flex-shrink-0" size={16} />
              <span className="text-gray-700 text-base">25 kVA up to ≤ 15 MVA up to 33kV</span>
            </li>
          </ul>
        </CapacityCard>

        <CapacityCard title="Special Transformers">
          <ul className="list-none p-0 space-y-2">
            <li className="flex items-start">
              <Check className="text-blue-600 mr-3 mt-1 flex-shrink-0" size={16} />
              <span className="text-gray-700 text-base">
                Inverter Duty Transformers for solar & wind applications
                from 500 KVA to ≤ 30 MVA
              </span>
            </li>
            <li className="flex items-start">
              <Check className="text-blue-600 mr-3 mt-1 flex-shrink-0" size={16} />
              <span className="text-gray-700 text-base">
                Converter Duty Transformers for industrial needs from 500
                KVA to ≤ 30 MVA
              </span>
            </li>
          </ul>
        </CapacityCard>

        <CapacityCard title="Other Solutions">
          <ul className="list-none p-0 space-y-2">
            <li className="flex items-start">
              <Check className="text-blue-600 mr-3 mt-1 flex-shrink-0" size={16} />
              <span className="text-gray-700 text-base">
                Dry-Type & Cast Resin Transformers up to ≤ 15 MVA 33 kV
              </span>
            </li>
            <li className="flex items-start">
              <Check className="text-blue-600 mr-3 mt-1 flex-shrink-0" size={16} />
              <span className="text-gray-700 text-base">
                Unitized/Packaged Substations up to ≤ 15 MVA 33 kV
              </span>
            </li>
            <li className="flex items-start">
              <Check className="text-blue-600 mr-3 mt-1 flex-shrink-0" size={16} />
              <span className="text-gray-700 text-base">Mobile Substations up to ≤ 60 MVA 132 kV</span>
            </li>
          </ul>
        </CapacityCard>
      </div>
    </Container>
  </section>
);

// Main Exports Component
const Exports: React.FC = () => {
  const [expandedSections, setExpandedSections] = useState<ExpandedSections>({
    powerTransformers: false,
    distributionTransformers: false,
    smartTransformers: false,
    greenTransformers: false,
    exportHighlights: false,
  });

  const toggleSection = (section: keyof ExpandedSections) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <>
      <div className="bg-gray-50 min-h-screen">
        <Suspense fallback={<LoadingSkeleton />}>
          <AboutSection />
        </Suspense>
        
        <Suspense fallback={<LoadingSkeleton />}>
          <ProductsSection 
            expandedSections={expandedSections} 
            toggleSection={toggleSection} 
          />
        </Suspense>
        
        <Suspense fallback={<LoadingSkeleton />}>
          <TechnologySection />
        </Suspense>
        
        <Suspense fallback={<LoadingSkeleton />}>
          <WhyChooseSection />
        </Suspense>
        
        <Suspense fallback={<LoadingSkeleton />}>
          <ExportHighlights 
            expanded={expandedSections.exportHighlights}
            onToggle={() => toggleSection("exportHighlights")}
          />
        </Suspense>
        
        <Suspense fallback={<LoadingSkeleton />}>
          <CapacitySection />
        </Suspense>

        {/* Additional CSS for animations */}
        <style jsx global>{`
          .animate-fade-in {
            animation: fadeIn 0.3s ease-in-out;
          }
          
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          /* Custom scrollbar for webkit browsers */
          ::-webkit-scrollbar {
            width: 8px;
          }
          
          ::-webkit-scrollbar-track {
            background: #f1f1f1;
          }
          
          ::-webkit-scrollbar-thumb {
            background: #6176A2;
            border-radius: 4px;
          }
          
          ::-webkit-scrollbar-thumb:hover {
            background: #4a5a82;
          }
          
          /* Focus styles for accessibility */
          .focus\\:ring-2:focus {
            outline: 2px solid transparent;
            outline-offset: 2px;
          }
          
          /* Print styles */
          @media print {
            .no-print {
              display: none !important;
            }
          }
          
          /* High contrast mode support */
          @media (prefers-contrast: high) {
            .bg-blue-600 {
              background-color: #000080 !important;
            }
            
            .text-blue-600 {
              color: #000080 !important;
            }
          }
          
          /* Reduced motion support */
          @media (prefers-reduced-motion: reduce) {
            .animate-bounce {
              animation: none;
            }
            
            .animate-fade-in-up {
              animation: none;
            }
            
            .animate-fade-in {
              animation: none;
            }
            
            * {
              transition-duration: 0.01ms !important;
            }
          }
        `}</style>
      </div>
    </>
  );
};

export default Exports;
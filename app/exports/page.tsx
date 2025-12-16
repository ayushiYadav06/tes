// "use client"

// import { Header } from "@/components/header"
// import { Card, CardContent } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"
// import { Button } from "@/components/ui/button"
// import { Globe, Ship, Truck, Plane, MapPin, TrendingUp, Award, CheckCircle } from "lucide-react"
// import { Footer } from "@/components/footer"
// // import { motion } from "framer-motion/client"
// import { motion } from "framer-motion"
// import Exports from "@/components/exportspart"
// import Link from 'next/link'



// export default function ExportsPage() {
//   const exportMarkets = [
//     {
//       region: "South Asia",
//       countries: ["Bangladesh", "Sri Lanka", "Nepal", "Bhutan"],
//       products: ["Distribution Transformers", "Power Transformers"],
//       volume: "25%",
//       growth: "+15%",
//     },
//     {
//       region: "Middle East",
//       countries: ["UAE", "Saudi Arabia", "Qatar", "Oman"],
//       products: ["Special Purpose Transformers", "Industrial Transformers"],
//       volume: "30%",
//       growth: "+20%",
//     },
//     {
//       region: "Africa",
//       countries: ["Nigeria", "Kenya", "South Africa", "Ghana"],
//       products: ["Rural Electrification Transformers", "Distribution Transformers"],
//       volume: "20%",
//       growth: "+25%",
//     },
//     {
//       region: "Southeast Asia",
//       countries: ["Vietnam", "Thailand", "Malaysia", "Indonesia"],
//       products: ["Power Transformers", "Industrial Transformers"],
//       volume: "25%",
//       growth: "+18%",
//     },
//   ]

//   const exportStats = [
//     { label: "Export Markets", value: "15+", icon: Globe },
//     { label: "Export Revenue", value: "₹500+ Cr", icon: TrendingUp },
//     { label: "International Clients", value: "50+", icon: Award },
//     { label: "Export Growth", value: "20% YoY", icon: TrendingUp },
//   ]

//   const certifications = [
//     {
//       name: "ISO 9001:2015",
//       description: "Quality Management System",
//       icon: Award,
//     },
//     {
//       name: "IEC Standards",
//       description: "International Electrotechnical Commission",
//       icon: CheckCircle,
//     },
//     {
//       name: "IEEE Standards",
//       description: "Institute of Electrical and Electronics Engineers",
//       icon: CheckCircle,
//     },
//     {
//       name: "BIS Certification",
//       description: "Bureau of Indian Standards",
//       icon: Award,
//     },
//   ]

//   const logistics = [
//     {
//       mode: "Sea Freight",
//       description: "Primary mode for heavy transformers and bulk shipments",
//       icon: Ship,
//       coverage: "Global",
//     },
//     {
//       mode: "Air Freight",
//       description: "For urgent deliveries and smaller components",
//       icon: Plane,
//       coverage: "Worldwide",
//     },
//     {
//       mode: "Land Transport",
//       description: "For neighboring countries and regional markets",
//       icon: Truck,
//       coverage: "Regional",
//     },
//   ]

//   return (
//     <div className="min-h-screen bg-white">
//       <Header />

//       {/* Hero Section */}
//       <section className="relative py-20 bg-gradient-to-r from-blue-900 to-blue-700">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center text-white">
//             <h1 className="text-4xl md:text-6xl font-bold mb-6">Global Exports</h1>
//             <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
//               Powering the world with Made in India transformer solutions across 15+ countries
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Export Stats */}
//       <section className="py-16 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//             {exportStats.map((stat, index) => (
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

//       {/* Export Markets */}
//       <section className="py-20 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Export Markets</h2>
//             <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
//           </div>

//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//             {exportMarkets.map((market, index) => (
//               <Card key={index} className="shadow-xl border-0">
//                 <CardContent className="p-8">
//                   <div className="flex items-center justify-between mb-6">
//                     <div className="flex items-center">
//                       <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
//                         <Globe className="h-6 w-6 text-blue-600" />
//                       </div>
//                       <h3 className="text-2xl font-bold text-gray-900">{market.region}</h3>
//                     </div>
//                     <div className="text-right">
//                       <div className="text-2xl font-bold text-blue-600">{market.volume}</div>
//                       <div className="text-sm text-gray-600">Export Volume</div>
//                     </div>
//                   </div>

//                   <div className="mb-6">
//                     <h4 className="font-semibold text-gray-900 mb-3">Key Markets</h4>
//                     <div className="flex flex-wrap gap-2">
//                       {market.countries.map((country, countryIndex) => (
//                         <Badge key={countryIndex} variant="outline" className="flex items-center">
//                           <MapPin className="h-3 w-3 mr-1" />
//                           {country}
//                         </Badge>
//                       ))}
//                     </div>
//                   </div>

//                   <div className="mb-6">
//                     <h4 className="font-semibold text-gray-900 mb-3">Export Products</h4>
//                     <ul className="space-y-2">
//                       {market.products.map((product, productIndex) => (
//                         <li key={productIndex} className="flex items-center text-gray-600">
//                           <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
//                           {product}
//                         </li>
//                       ))}
//                     </ul>
//                   </div>

//                   <div className="flex items-center justify-between pt-4 border-t">
//                     <span className="text-gray-600">Growth Rate</span>
//                     <Badge className="bg-green-100 text-green-800">{market.growth}</Badge>
//                   </div>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* International Standards */}
//       <section className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">International Standards</h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               Our products meet global quality standards and certifications
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {certifications.map((cert, index) => (
//               <Card key={index} className="text-center p-6 border-0 shadow-lg">
//                 <CardContent className="p-0">
//                   <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                     <cert.icon className="h-8 w-8 text-blue-600" />
//                   </div>
//                   <h3 className="text-xl font-bold text-gray-900 mb-3">{cert.name}</h3>
//                   <p className="text-gray-600">{cert.description}</p>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Logistics & Delivery */}
//       <section className="py-20 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Global Logistics</h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               Efficient delivery solutions to ensure timely product delivery worldwide
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {logistics.map((mode, index) => (
//               <Card key={index} className="shadow-xl border-0">
//                 <CardContent className="p-8 text-center">
//                   <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
//                     <mode.icon className="h-8 w-8 text-blue-600" />
//                   </div>
//                   <h3 className="text-xl font-bold text-gray-900 mb-4">{mode.mode}</h3>
//                   <p className="text-gray-600 mb-4">{mode.description}</p>
//                   <Badge variant="outline">{mode.coverage}</Badge>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Export Process */}
//       <section className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Export Process</h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">Streamlined process from inquiry to delivery</p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//             <div className="text-center">
//               <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <span className="text-2xl font-bold text-blue-600">1</span>
//               </div>
//               <h3 className="text-lg font-bold text-gray-900 mb-2">Inquiry & Quote</h3>
//               <p className="text-gray-600">Technical consultation and competitive pricing</p>
//             </div>

//             <div className="text-center">
//               <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <span className="text-2xl font-bold text-green-600">2</span>
//               </div>
//               <h3 className="text-lg font-bold text-gray-900 mb-2">Order Confirmation</h3>
//               <p className="text-gray-600">Contract finalization and production planning</p>
//             </div>

//             <div className="text-center">
//               <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <span className="text-2xl font-bold text-purple-600">3</span>
//               </div>
//               <h3 className="text-lg font-bold text-gray-900 mb-2">Manufacturing</h3>
//               <p className="text-gray-600">Quality production with regular updates</p>
//             </div>

//             <div className="text-center">
//               <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <span className="text-2xl font-bold text-orange-600">4</span>
//               </div>
//               <h3 className="text-lg font-bold text-gray-900 mb-2">Global Delivery</h3>
//               <p className="text-gray-600">Secure packaging and timely shipment</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20 bg-blue-900">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Export to Your Market?</h2>
//           <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
//             Contact our export team to discuss your requirements and explore partnership opportunities
//           </p>
//           <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100">
//             <Link href="/contact" target="_blank">
//                      Contact Export Team
//                   </Link>
        
//           </Button>
//         </div>
//       </section>

//          {/* About TESLA International Division */}
    

// <Exports/>
    
//          <Footer />
//     </div>
//   )
// }



"use client"

import { Header } from "@/components/header"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Globe, Ship, Truck, Plane, MapPin, TrendingUp, Award, CheckCircle } from "lucide-react"
import { Footer } from "@/components/footer"
// import { motion } from "framer-motion/client"
import { motion } from "framer-motion"
import Exports from "@/components/exportspart"
import Link from 'next/link'



export default function ExportsPage() {
  const exportMarkets = [
    {
      region: "South Asia",
      countries: ["Bangladesh", "Sri Lanka", "Nepal", "Bhutan"],
      products: ["Distribution Transformers", "Power Transformers"],
      volume: "25%",
      growth: "+15%",
    },
    {
      region: "Middle East",
      countries: ["UAE", "Saudi Arabia", "Qatar", "Oman"],
      products: ["Special Purpose Transformers", "Industrial Transformers"],
      volume: "30%",
      growth: "+20%",
    },
    {
      region: "Africa",
      countries: ["Nigeria", "Kenya", "South Africa", "Ghana"],
      products: ["Rural Electrification Transformers", "Distribution Transformers"],
      volume: "20%",
      growth: "+25%",
    },
    {
      region: "Southeast Asia",
      countries: ["Vietnam", "Thailand", "Malaysia", "Indonesia"],
      products: ["Power Transformers", "Industrial Transformers"],
      volume: "25%",
      growth: "+18%",
    },
  ]

  const exportStats = [
    { label: "Export Markets", value: "15+", icon: Globe },
    { label: "Export Revenue", value: "₹500+ Cr", icon: TrendingUp },
    { label: "International Clients", value: "50+", icon: Award },
    { label: "Export Growth", value: "20% YoY", icon: TrendingUp },
  ]

  const certifications = [
    {
      name: "ISO 9001:2015",
      description: "Quality Management System",
      icon: Award,
    },
    {
      name: "IEC Standards",
      description: "International Electrotechnical Commission",
      icon: CheckCircle,
    },
    {
      name: "IEEE Standards",
      description: "Institute of Electrical and Electronics Engineers",
      icon: CheckCircle,
    },
    {
      name: "BIS Certification",
      description: "Bureau of Indian Standards",
      icon: Award,
    },
  ]

  const logistics = [
    {
      mode: "Sea Freight",
      description: "Primary mode for heavy transformers and bulk shipments",
      icon: Ship,
      coverage: "Global",
    },
    {
      mode: "Air Freight",
      description: "For urgent deliveries and smaller components",
      icon: Plane,
      coverage: "Worldwide",
    },
    {
      mode: "Land Transport",
      description: "For neighboring countries and regional markets",
      icon: Truck,
      coverage: "Regional",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-900 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Global Exports</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Powering the world with Made in India transformer solutions across 15+ countries
            </p>
          </div>
        </div>
      </section>

      {/* Export Stats */}
      <section className="py-16 " style={{background:"rgb(31, 60, 79)"}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {exportStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-white/50">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Export Markets */}
      {/* <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Export Markets</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {exportMarkets.map((market, index) => (
              <Card key={index} className="shadow-xl border-0">
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                        <Globe className="h-6 w-6 text-blue-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">{market.region}</h3>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-blue-600">{market.volume}</div>
                      <div className="text-sm text-gray-600">Export Volume</div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Markets</h4>
                    <div className="flex flex-wrap gap-2">
                      {market.countries.map((country, countryIndex) => (
                        <Badge key={countryIndex} variant="outline" className="flex items-center">
                          <MapPin className="h-3 w-3 mr-1" />
                          {country}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Export Products</h4>
                    <ul className="space-y-2">
                      {market.products.map((product, productIndex) => (
                        <li key={productIndex} className="flex items-center text-gray-600">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          {product}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t">
                    <span className="text-gray-600">Growth Rate</span>
                    <Badge className="bg-green-100 text-green-800">{market.growth}</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* Export Markets */}
<section className="relative py-20">

  {/* 🔥 Background Image */}
  <div
    className="absolute inset-0 bg-cover bg-center bg-fixed zoom-bg pointer-events-none"
    style={{
      backgroundImage: "url('/landscapeeight.jpg')",
      filter: "brightness(0.85)"
    }}
  />

  {/* 🔥 Soft Overlay */}
  <div className="absolute inset-0 bg-white/20 backdrop-blur-[1px] pointer-events-none" />

  {/* 🔥 Actual Content */}
  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Export Markets</h2>
      <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {exportMarkets.map((market, index) => (
        <Card key={index} className="shadow-xl border-0">
          <CardContent className="p-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <Globe className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{market.region}</h3>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-blue-600">{market.volume}</div>
                <div className="text-sm text-gray-600">Export Volume</div>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="font-semibold text-gray-900 mb-3">Key Markets</h4>
              <div className="flex flex-wrap gap-2">
                {market.countries.map((country, countryIndex) => (
                  <Badge key={countryIndex} variant="outline" className="flex items-center">
                    <MapPin className="h-3 w-3 mr-1" />
                    {country}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h4 className="font-semibold text-gray-900 mb-3">Export Products</h4>
              <ul className="space-y-2">
                {market.products.map((product, productIndex) => (
                  <li key={productIndex} className="flex items-center text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    {product}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center justify-between pt-4 border-t">
              <span className="text-gray-600">Growth Rate</span>
              <Badge className="bg-green-100 text-green-800">{market.growth}</Badge>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>

  {/* 🔥 Animation */}
  <style jsx global>{`
    @keyframes zoomBg {
      0% { transform: scale(1); }
      100% { transform: scale(1.1); }
    }
    .zoom-bg {
      animation: zoomBg 18s ease-in-out infinite alternate;
    }
  `}</style>

</section>


      {/* International Standards */}
      <section className="py-20 bg-blue-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">International Standards</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our products meet global quality standards and certifications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <Card key={index} className="text-center p-6 border-0 shadow-lg">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <cert.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{cert.name}</h3>
                  <p className="text-gray-600">{cert.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Logistics & Delivery */}
      {/* <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Global Logistics</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Efficient delivery solutions to ensure timely product delivery worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {logistics.map((mode, index) => (
              <Card key={index} className="shadow-xl border-0">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <mode.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{mode.mode}</h3>
                  <p className="text-gray-600 mb-4">{mode.description}</p>
                  <Badge variant="outline">{mode.coverage}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}


{/* <section className="relative py-20">


  <div
    className="absolute inset-0 bg-cover bg-center bg-fixed zoom-bg pointer-events-none"
    style={{
      backgroundImage: "url('/landscapeseventeen.jpg')",
      filter: "brightness(0.85) blur(2px)"
    }}
  />


  <div className="absolute inset-0 bg-white/20 pointer-events-none" />

  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Global Logistics</h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        Efficient delivery solutions to ensure timely product delivery worldwide
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {logistics.map((mode, index) => (
        <Card key={index} className="shadow-xl border-0 bg-white/90 backdrop-blur-md">
          <CardContent className="p-8 text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <mode.icon className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">{mode.mode}</h3>
            <p className="text-gray-600 mb-4">{mode.description}</p>
            <Badge variant="outline">{mode.coverage}</Badge>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>


  <style jsx global>{`
    @keyframes zoomBg {
      0% { transform: scale(1); }
      100% { transform: scale(1.1); }
    }
    .zoom-bg {
      animation: zoomBg 18s ease-in-out infinite alternate;
    }
  `}</style>

</section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Export Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Streamlined process from inquiry to delivery</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Inquiry & Quote</h3>
              <p className="text-gray-600">Technical consultation and competitive pricing</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">2</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Order Confirmation</h3>
              <p className="text-gray-600">Contract finalization and production planning</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">3</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Manufacturing</h3>
              <p className="text-gray-600">Quality production with regular updates</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">4</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Global Delivery</h3>
              <p className="text-gray-600">Secure packaging and timely shipment</p>
            </div>
          </div>
        </div>
      </section> */}




{/* 🌎 Unified Background for LOGISTICS + EXPORT PROCESS */}
<section className="relative py-20">

  {/* 🔥 Unified Background Image */}
  <div
    className="absolute inset-0 bg-cover bg-center bg-fixed zoom-bg pointer-events-none"
    style={{
      backgroundImage: "url('/landscapeseventeen.jpg')",
      filter: "brightness(0.82) blur(2px)"
    }}
  />

  {/* 🔥 Soft White Overlay */}
  <div className="absolute inset-0 bg-white/20 pointer-events-none" />

  {/* ================================
        LOGISTICS (Actual Content)
      ================================ */}
  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Global Logistics</h2>
      <p className="text-xl text-white max-w-3xl mx-auto">
        Efficient delivery solutions to ensure timely product delivery worldwide
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-28">
      {logistics.map((mode, index) => (
        <Card key={index} className="shadow-xl border-0 bg-white/90 backdrop-blur-md">
          <CardContent className="p-8 text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <mode.icon className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">{mode.mode}</h3>
            <p className="text-gray-600 mb-4">{mode.description}</p>
            <Badge variant="outline">{mode.coverage}</Badge>
          </CardContent>
        </Card>
      ))}
    </div>

    {/* ================================
          EXPORT PROCESS (Actual Content)
        ================================ */}
    <div className="text-center mb-16 mt-24">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Export Process</h2>
      <p className="text-xl text-white max-w-3xl mx-auto">
        Streamlined process from inquiry to delivery
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
      <div className="text-center">
        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="text-2xl font-bold text-blue-600">1</span>
        </div>
        <h3 className="text-lg font-bold text-gray-900 mb-2">Inquiry & Quote</h3>
        <p className="text-white">Technical consultation and competitive pricing</p>
      </div>

      <div className="text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="text-2xl font-bold text-green-600">2</span>
        </div>
        <h3 className="text-lg font-bold text-gray-900 mb-2">Order Confirmation</h3>
        <p className="text-white">Contract finalization and production planning</p>
      </div>

      <div className="text-center">
        <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="text-2xl font-bold text-purple-600">3</span>
        </div>
        <h3 className="text-lg font-bold text-gray-900 mb-2">Manufacturing</h3>
        <p className="text-white">Quality production with regular updates</p>
      </div>

      <div className="text-center">
        <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="text-2xl font-bold text-orange-600">4</span>
        </div>
        <h3 className="text-lg font-bold text-gray-900 mb-2">Global Delivery</h3>
        <p className="text-white">Secure packaging and timely shipment</p>
      </div>
    </div>
  </div>

  {/* 🔥 Background Zoom Animation */}
  <style jsx global>{`
    @keyframes zoomBg {
      0% { transform: scale(1); }
      100% { transform: scale(1.1); }
    }
    .zoom-bg {
      animation: zoomBg 18s ease-in-out infinite alternate;
    }
  `}</style>

</section>


      {/* CTA Section */}
      <section className="py-20 bg-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Export to Your Market?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Contact our export team to discuss your requirements and explore partnership opportunities
          </p>
          <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100">
            <Link href="/contact" target="_blank">
                     Contact Export Team
                  </Link>
        
          </Button>
        </div>
      </section>

         {/* About TESLA International Division */}
    

<Exports/>
    
         <Footer />
    </div>
  )
}

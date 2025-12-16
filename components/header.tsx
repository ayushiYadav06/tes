


// "use client"

// import { useState, useEffect } from "react"
// import Link from "next/link"
// import { ChevronDown, Menu, X, User, Building2, Factory, Globe, CheckCircle } from "lucide-react"
// import { Button } from "@/components/ui/button"

// export function Header() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false)
//   const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
//   const [isMobile, setIsMobile] = useState(false)
//   const [scrolled, setScrolled] = useState(false)

//   // Mobile & Click Outside Checks
//   useEffect(() => {
//     const checkMobile = () => {
//       if (typeof window !== "undefined") {
//         setIsMobile(window.innerWidth < 768)
//       }
//     }

//     const handleClickOutside = (event: MouseEvent) => {
//       const target = event.target as Element
//       if (!target.closest(".dropdown-container")) {
//         setActiveDropdown(null)
//       }
//     }

//     // Detect scroll
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50)
//     }

//     checkMobile()

//     if (typeof window !== "undefined") {
//       window.addEventListener("resize", checkMobile)
//       window.addEventListener("scroll", handleScroll)
//       document.addEventListener("click", handleClickOutside)
//     }

//     return () => {
//       if (typeof window !== "undefined") {
//         window.removeEventListener("resize", checkMobile)
//         window.removeEventListener("scroll", handleScroll)
//         document.removeEventListener("click", handleClickOutside)
//       }
//     }
//   }, [])

//   const handleDropdownToggle = (dropdown: string) => {
//     setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
//   }

//   const closeMenu = () => {
//     setIsMenuOpen(false)
//     setActiveDropdown(null)
//   }

//   return (
//     <header
//       className={`
//         fixed top-0 left-0 w-full z-50 transition-all duration-500
//         ${scrolled ? "bg-white shadow-md border-b border-gray-200" : "bg-transparent border-transparent"}
//       `}
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">

//           {/* Logo */}
//           <div className="flex-shrink-0">
//             <Link href="/" className="block">
//               <div
//                 className={`
//                   flex items-center w-48 h-12 bg-no-repeat bg-contain bg-center transition-all duration-500
//                   ${scrolled ? "brightness-100" : "brightness-200"}
//                 `}
//                 style={{ backgroundImage: `url('/logo.png')` }}
//                 role="img"
//                 aria-label="Tesla Transformers (India) Limited - Home"
//               />
//             </Link>
//           </div>

//           {/* Desktop Navigation */}
//           <nav className="hidden md:flex items-center space-x-8">
            
//             {/* Company Dropdown */}
//             <div className="relative dropdown-container">
//               <button
//                 onClick={() => handleDropdownToggle("company")}
//                 className={`
//                   flex items-center font-medium transition-colors
//                   ${scrolled ? "text-gray-700 hover:text-blue-600" : "text-white hover:text-blue-200"}
//                 `}
//               >
//                 Company
//                 <ChevronDown
//                   className={`ml-1 h-4 w-4 transition-transform ${activeDropdown === "company" ? "rotate-180" : ""}`}
//                 />
//               </button>

//               {activeDropdown === "company" && (
//                 <div
//                   id="company-dropdown"
//                   className="absolute top-full left-0 mt-2 w-[720px] bg-white rounded-xl shadow-2xl border border-gray-200 p-6 lg:p-8 animate-fade-in-up"
//                   role="menu"
//                 >
//                   <div className="grid grid-cols-2 gap-8">
//                     {/* CEO Card */}
//                     <div>
//                       <Link href="/md-message" className="block group">
//                         <div className="relative rounded-xl border border-gray-200 bg-gray-50 h-64 overflow-hidden">
//                           <img
//                             src="/image.png"
//                             alt="Jaideep Jain - Managing Director"
//                             className="absolute inset-0 w-full h-full object-contain object-center transition-transform duration-300 group-hover:scale-[1.02]"
//                           />
//                           <div className="absolute left-4 right-4 bottom-4 bg-white/90 backdrop-blur px-3 py-2 rounded-md shadow">
//                             <p className="text-sm font-semibold text-gray-900">Jaideep Jain</p>
//                             <p className="text-xs text-gray-600">MD · Tesla Transformers Group</p>
//                           </div>
//                         </div>
//                       </Link>
//                     </div>

//                     {/* Mission & Vision */}
//                     <div>
//                       <h3 className="text-base font-semibold text-gray-900 mb-4">Company Values</h3>
//                       <div className="space-y-5">

//                         <div>
//                           <Link
//                             href="/mission"
//                             onClick={() => setActiveDropdown(null)}
//                             className="block text-sm font-semibold text-blue-600 hover:text-blue-700 mb-1"
//                           >
//                             Mission
//                           </Link>
//                           <p className="text-sm leading-snug text-gray-600">"Powering progress through innovation"</p>
//                         </div>

//                         <div>
//                           <Link
//                             href="/vision"
//                             onClick={() => setActiveDropdown(null)}
//                             className="block text-sm font-semibold text-blue-600 hover:text-blue-700 mb-1"
//                           >
//                             Vision
//                           </Link>
//                           <p className="text-sm leading-snug text-gray-600">"Leading India's energy transformation"</p>
//                         </div>

//                         <div>
//                           <Link
//                             href="/facility"
//                             onClick={() => setActiveDropdown(null)}
//                             className="block text-sm font-semibold text-blue-600 hover:text-blue-700 mb-1"
//                           >
//                             Facilities
//                           </Link>
//                           <p className="text-sm leading-snug text-gray-600">"Strength in every structure, precision in every process."</p>
//                         </div>

//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </div>

//             {/* Industry Dropdown */}
//             <div className="relative dropdown-container">
//               <button
//                 onClick={() => handleDropdownToggle("industry")}
//                 className={`
//                   flex items-center font-medium transition-colors
//                   ${scrolled ? "text-gray-700 hover:text-blue-600" : "text-white hover:text-blue-200"}
//                 `}
//               >
//                 Industry
//                 <ChevronDown
//                   className={`ml-1 h-4 w-4 transition-transform ${activeDropdown === "industry" ? "rotate-180" : ""}`}
//                 />
//               </button>

//               {activeDropdown === "industry" && (
//                 <div
//                   id="industry-dropdown"
//                   className="absolute top-full left-0 mt-2 w-72 bg-white rounded-lg shadow-xl border border-gray-200 p-4 animate-fade-in-up"
//                 >
//                   <div className="grid grid-cols-2 gap-3">
                    
//                     {/* Products */}
//                     <Link
//                       href="/products"
//                       onClick={() => setActiveDropdown(null)}
//                       className="block p-4 rounded-lg hover:bg-blue-50 text-center transition-colors group"
//                     >
//                       <Factory className="h-6 w-6 text-blue-600 mx-auto mb-2 group-hover:scale-110 transition-transform" />
//                       <div className="text-blue-600 font-semibold text-sm">Products</div>
//                       <div className="text-xs text-gray-500 mt-1">Our Solutions</div>
//                     </Link>

//                     {/* Projects */}
//                     <Link
//                       href="/projects"
//                       onClick={() => setActiveDropdown(null)}
//                       className="block p-4 rounded-lg hover:bg-blue-50 text-center transition-colors group"
//                     >
//                       <Building2 className="h-6 w-6 text-blue-600 mx-auto mb-2 group-hover:scale-110 transition-transform" />
//                       <div className="text-blue-600 font-semibold text-sm">Projects</div>
//                       <div className="text-xs text-gray-500 mt-1">Our Work</div>
//                     </Link>

//                     {/* Clients */}
//                     <Link
//                       href="/clients"
//                       onClick={() => setActiveDropdown(null)}
//                       className="block p-4 rounded-lg hover:bg-blue-50 text-center transition-colors group"
//                     >
//                       <User className="h-6 w-6 text-blue-600 mx-auto mb-2 group-hover:scale-110 transition-transform" />
//                       <div className="text-blue-600 font-semibold text-sm">Clients</div>
//                       <div className="text-xs text-gray-500 mt-1">Our Partners</div>
//                     </Link>

//                     {/* Exports */}
//                     <Link
//                       href="/exports"
//                       onClick={() => setActiveDropdown(null)}
//                       className="block p-4 rounded-lg hover:bg-blue-50 text-center transition-colors group"
//                     >
//                       <Globe className="h-6 w-6 text-blue-600 mx-auto mb-2 group-hover:scale-110 transition-transform" />
//                       <div className="text-blue-600 font-semibold text-sm">Exports</div>
//                       <div className="text-xs text-gray-500 mt-1">Global Reach</div>
//                     </Link>

//                   </div>
//                 </div>
//               )}

//             </div>

//           </nav>

//           {/* Right Buttons */}
//           <div className="hidden md:flex items-center space-x-4">

//             <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-gradient-to-r from-amber-50 to-yellow-50 border border-amber-200">
//               <CheckCircle className="w-4 h-4 mr-2 text-amber-600" />
//               <span className="text-sm font-medium text-amber-700">Trusted Since 1972</span>
//             </div>

//             {/* <Link href="/contact">
//               <Button variant="outline" size="sm" className="hover:bg-blue-50 hover:border-blue-300 bg-transparent">
//                 Contact Us
//               </Button>
//             </Link> */}


//             <Link href="/contact">
//   <Button
//     variant="outline"
//     size="sm"
//     className={`
//       bg-transparent transition-all border 
//       ${scrolled 
//         ? "text-gray-800 border-gray-300 hover:bg-blue-50 hover:border-blue-300" 
//         : "text-white border-white hover:bg-white/20 hover:border-white"
//       }
//     `}
//   >
//     Contact Us
//   </Button>
// </Link>


//             {/* <Link href="/career">
//               <Button variant="outline" size="sm" className="hover:bg-blue-50 hover:border-blue-300 bg-transparent">
//                 Career
//               </Button>
//             </Link> */}



//             <Link href="/career">
//   <Button
//     variant="outline"
//     size="sm"
//     className={`
//       bg-transparent transition-all border 
//       ${scrolled 
//         ? "text-gray-800 border-gray-300 hover:bg-blue-50 hover:border-blue-300" 
//         : "text-white border-white hover:bg-white/20 hover:border-white"
//       }
//     `}
//   >
//     Career
//   </Button>
// </Link>


//             {/* <Link href="/enquiry">
//               <Button variant="outline" size="sm" className="hover:bg-blue-50 hover:border-blue-300 bg-transparent">
//                 Enquiry
//               </Button>
//             </Link> */}


//             <Link href="/enquiry">
//   <Button
//     variant="outline"
//     size="sm"
//     className={`
//       bg-transparent transition-all border 
//       ${scrolled 
//         ? "text-gray-800 border-gray-300 hover:bg-blue-50 hover:border-blue-300" 
//         : "text-white border-white hover:bg-white/20 hover:border-white"
//       }
//     `}
//   >
//     Enquiry
//   </Button>
// </Link>


//           </div>

//           {/* Mobile Menu Button */}
//           <div className="md:hidden">
//             <button
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//               className={`
//                 p-2 rounded-lg transition-colors
//                 ${scrolled ? "text-gray-700 hover:text-blue-600 hover:bg-gray-100" : "text-white hover:text-blue-200 hover:bg-white/10"}
//               `}
//             >
//               {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//             </button>
//           </div>

//         </div>

//         {/* Mobile Menu */}
//         {isMenuOpen && (
//           <div id="mobile-menu" className="md:hidden py-4 border-t border-gray-200 animate-fade-in-up">

//             {/* Company Section */}
//             <div className="px-3 py-2">
//               <div className="text-sm font-semibold text-gray-900 mb-2">Company</div>

//               <div className="pl-4 space-y-1">
//                 <Link href="/about" onClick={closeMenu} className="block py-1 text-gray-600 hover:text-blue-600">
//                   About & CEO
//                 </Link>
//                 <Link href="/mission" onClick={closeMenu} className="block py-1 text-gray-600 hover:text-blue-600">
//                   Mission
//                 </Link>
//                 <Link href="/vision" onClick={closeMenu} className="block py-1 text-gray-600 hover:text-blue-600">
//                   Vision
//                 </Link>
//               </div>
//             </div>

//             {/* Industry */}
//             <div className="px-3 py-2">
//               <div className="text-sm font-semibold text-gray-900 mb-2">Industry</div>

//               <div className="pl-4 space-y-1">
//                 <Link href="/products" onClick={closeMenu} className="block py-1 text-gray-600 hover:text-blue-600">
//                   Products
//                 </Link>
//                 <Link href="/projects" onClick={closeMenu} className="block py-1 text-gray-600 hover:text-blue-600">
//                   Projects
//                 </Link>
//                 <Link href="/clients" onClick={closeMenu} className="block py-1 text-gray-600 hover:text-blue-600">
//                   Clients
//                 </Link>
//                 <Link href="/exports" onClick={closeMenu} className="block py-1 text-gray-600 hover:text-blue-600">
//                   Exports
//                 </Link>
//               </div>
//             </div>

//             {/* Trusted Badge */}
//             <div className="px-3 py-2">
//               <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-gradient-to-r from-amber-50 to-yellow-50 border border-amber-200">
//                 <CheckCircle className="w-4 h-4 mr-2 text-amber-600" />
//                 <span className="text-sm font-medium text-amber-700">Trusted Since 1972</span>
//               </div>
//             </div>

//             <div className="px-3 pt-4">
//               <Button variant="outline" size="sm" className="w-full hover:bg-blue-50 hover:border-blue-300" onClick={closeMenu}>
//                 Contact Us
//               </Button>
//             </div>

//           </div>
//         )}
//       </div>
//     </header>
//   )
// }













"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ChevronDown, Menu, X, User, Building2, Factory, Globe, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [isMobile, setIsMobile] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Mobile & Click Outside Checks
  useEffect(() => {
    const checkMobile = () => {
      if (typeof window !== "undefined") {
        setIsMobile(window.innerWidth < 768)
      }
    }

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element
      if (!target.closest(".dropdown-container")) {
        setActiveDropdown(null)
      }
    }

    // Detect scroll
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    checkMobile()

    if (typeof window !== "undefined") {
      window.addEventListener("resize", checkMobile)
      window.addEventListener("scroll", handleScroll)
      document.addEventListener("click", handleClickOutside)
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", checkMobile)
        window.removeEventListener("scroll", handleScroll)
        document.removeEventListener("click", handleClickOutside)
      }
    }
  }, [])

  const handleDropdownToggle = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
    setActiveDropdown(null)
  }

  return (
    <header
      className={`
        fixed top-0 left-0 w-full z-50 transition-all duration-500
        ${scrolled ? "bg-white shadow-md border-b border-gray-200" : "bg-transparent border-transparent"}
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="block">
              <div
                className={`
                  flex items-center w-48 h-12 bg-no-repeat bg-contain bg-center transition-all duration-500
                  ${scrolled ? "brightness-100" : "brightness-200"}
                `}
                style={{ backgroundImage: `url('/logo.png')` }}
                role="img"
                aria-label="Tesla Transformers (India) Limited - Home"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            
            {/* Company Dropdown */}
            <div className="relative dropdown-container">
              <button
                onClick={() => handleDropdownToggle("company")}
                className={`
                  flex items-center font-medium transition-colors
                  ${scrolled ? "text-gray-700 hover:text-blue-600" : "text-white hover:text-blue-200"}
                `}
              >
                Company
                <ChevronDown
                  className={`ml-1 h-4 w-4 transition-transform ${activeDropdown === "company" ? "rotate-180" : ""}`}
                />
              </button>

              {activeDropdown === "company" && (
                <div
                  id="company-dropdown"
                  className="absolute top-full left-0 mt-2 w-[720px] bg-white rounded-xl shadow-2xl border border-gray-200 p-6 lg:p-8 animate-fade-in-up"
                  role="menu"
                >
                  <div className="grid grid-cols-2 gap-8">
                    {/* CEO Card */}
                    <div>
                      <Link href="/md-message" className="block group">
                        <div className="relative rounded-xl border border-gray-200 bg-gray-50 h-64 overflow-hidden">
                          <img
                            src="/image.png"
                            alt="Jaideep Jain - Managing Director"
                            className="absolute inset-0 w-full h-full object-contain object-center transition-transform duration-300 group-hover:scale-[1.02]"
                          />
                          <div className="absolute left-4 right-4 bottom-4 bg-white/90 backdrop-blur px-3 py-2 rounded-md shadow">
                            <p className="text-sm font-semibold text-gray-900">Jaideep Jain</p>
                            <p className="text-xs text-gray-600">MD · Tesla Transformers Group</p>
                          </div>
                        </div>
                      </Link>
                    </div>

                    {/* Mission & Vision */}
                    <div>
                      <h3 className="text-base font-semibold text-gray-900 mb-4">Company Values</h3>
                      <div className="space-y-5">

                        <div>
                          <Link
                            href="/mission"
                            onClick={() => setActiveDropdown(null)}
                            className="block text-sm font-semibold text-blue-600 hover:text-blue-700 mb-1"
                          >
                            Mission
                          </Link>
                          <p className="text-sm leading-snug text-gray-600">"Powering progress through innovation"</p>
                        </div>

                        <div>
                          <Link
                            href="/vision"
                            onClick={() => setActiveDropdown(null)}
                            className="block text-sm font-semibold text-blue-600 hover:text-blue-700 mb-1"
                          >
                            Vision
                          </Link>
                          <p className="text-sm leading-snug text-gray-600">"Leading India's energy transformation"</p>
                        </div>

                        <div>
                          <Link
                            href="/facility"
                            onClick={() => setActiveDropdown(null)}
                            className="block text-sm font-semibold text-blue-600 hover:text-blue-700 mb-1"
                          >
                            Facilities
                          </Link>
                          <p className="text-sm leading-snug text-gray-600">"Strength in every structure, precision in every process."</p>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Industry Dropdown */}
            <div className="relative dropdown-container">
              <button
                onClick={() => handleDropdownToggle("industry")}
                className={`
                  flex items-center font-medium transition-colors
                  ${scrolled ? "text-gray-700 hover:text-blue-600" : "text-white hover:text-blue-200"}
                `}
              >
                Industry
                <ChevronDown
                  className={`ml-1 h-4 w-4 transition-transform ${activeDropdown === "industry" ? "rotate-180" : ""}`}
                />
              </button>

              {activeDropdown === "industry" && (
                <div
                  id="industry-dropdown"
                  className="absolute top-full left-0 mt-2 w-72 bg-white rounded-lg shadow-xl border border-gray-200 p-4 animate-fade-in-up"
                >
                  <div className="grid grid-cols-2 gap-3">
                    
                    {/* Products */}
                    <Link
                      href="/products"
                      onClick={() => setActiveDropdown(null)}
                      className="block p-4 rounded-lg hover:bg-blue-50 text-center transition-colors group"
                    >
                      <Factory className="h-6 w-6 text-blue-600 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                      <div className="text-blue-600 font-semibold text-sm">Products</div>
                      <div className="text-xs text-gray-500 mt-1">Our Solutions</div>
                    </Link>

                    {/* Projects */}
                    <Link
                      href="/projects"
                      onClick={() => setActiveDropdown(null)}
                      className="block p-4 rounded-lg hover:bg-blue-50 text-center transition-colors group"
                    >
                      <Building2 className="h-6 w-6 text-blue-600 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                      <div className="text-blue-600 font-semibold text-sm">Projects</div>
                      <div className="text-xs text-gray-500 mt-1">Our Work</div>
                    </Link>

                    {/* Clients */}
                    <Link
                      href="/clients"
                      onClick={() => setActiveDropdown(null)}
                      className="block p-4 rounded-lg hover:bg-blue-50 text-center transition-colors group"
                    >
                      <User className="h-6 w-6 text-blue-600 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                      <div className="text-blue-600 font-semibold text-sm">Clients</div>
                      <div className="text-xs text-gray-500 mt-1">Our Partners</div>
                    </Link>

                    {/* Exports */}
                    <Link
                      href="/exports"
                      onClick={() => setActiveDropdown(null)}
                      className="block p-4 rounded-lg hover:bg-blue-50 text-center transition-colors group"
                    >
                      <Globe className="h-6 w-6 text-blue-600 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                      <div className="text-blue-600 font-semibold text-sm">Exports</div>
                      <div className="text-xs text-gray-500 mt-1">Global Reach</div>
                    </Link>

                  </div>
                </div>
              )}

            </div>

          </nav>

          {/* Right Buttons */}
          <div className="hidden md:flex items-center space-x-4">

            <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-gradient-to-r from-amber-50 to-yellow-50 border border-amber-200">
              <CheckCircle className="w-4 h-4 mr-2 text-amber-600" />
              <span className="text-sm font-medium text-amber-700">Trusted Since 1972</span>
            </div>

            {/* <Link href="/contact">
              <Button variant="outline" size="sm" className="hover:bg-blue-50 hover:border-blue-300 bg-transparent">
                Contact Us
              </Button>
            </Link> */}


            <Link href="/contact">
  <Button
    variant="outline"
    size="sm"
    className={`
      bg-transparent transition-all border 
      ${scrolled 
        ? "text-gray-800 border-gray-300 hover:bg-blue-50 hover:border-blue-300" 
        : "text-white border-white hover:bg-white/20 hover:border-white"
      }
    `}
  >
    Contact Us
  </Button>
</Link>


            {/* <Link href="/career">
              <Button variant="outline" size="sm" className="hover:bg-blue-50 hover:border-blue-300 bg-transparent">
                Career
              </Button>
            </Link> */}



            <Link href="/career">
  <Button
    variant="outline"
    size="sm"
    className={`
      bg-transparent transition-all border 
      ${scrolled 
        ? "text-gray-800 border-gray-300 hover:bg-blue-50 hover:border-blue-300" 
        : "text-white border-white hover:bg-white/20 hover:border-white"
      }
    `}
  >
    Career
  </Button>
</Link>


            {/* <Link href="/enquiry">
              <Button variant="outline" size="sm" className="hover:bg-blue-50 hover:border-blue-300 bg-transparent">
                Enquiry
              </Button>
            </Link> */}


            <Link href="/enquiry">
  <Button
    variant="outline"
    size="sm"
    className={`
      bg-transparent transition-all border 
      ${scrolled 
        ? "text-gray-800 border-gray-300 hover:bg-blue-50 hover:border-blue-300" 
        : "text-white border-white hover:bg-white/20 hover:border-white"
      }
    `}
  >
    Enquiry
  </Button>
</Link>


          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            {/* <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`
                p-2 rounded-lg transition-colors
                ${scrolled ? "text-gray-700 hover:text-blue-600 hover:bg-gray-100" : "text-white hover:text-blue-200 hover:bg-white/10"}
              `}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button> */}


            <button
  onClick={() => setIsMenuOpen(!isMenuOpen)}
  className={`
    p-2 rounded-lg transition-all border 
    bg-white shadow-sm
    ${scrolled ? "text-gray-700 border-gray-300" : "text-gray-700 border-white/40"}
  `}
>
  {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
</button>

          </div>

        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          // <div id="mobile-menu" className="md:hidden py-4 border-t border-gray-200 animate-fade-in-up">
          <div
  id="mobile-menu"
  className="md:hidden py-4 border-t border-gray-200 bg-white shadow-lg animate-fade-in-up"
>


            {/* Company Section */}
            <div className="px-3 py-2">
              <div className="text-sm font-semibold text-gray-900 mb-2">Company</div>

              <div className="pl-4 space-y-1">
                <Link href="/about" onClick={closeMenu} className="block py-1 text-gray-600 hover:text-blue-600">
                  About & CEO
                </Link>
                <Link href="/mission" onClick={closeMenu} className="block py-1 text-gray-600 hover:text-blue-600">
                  Mission
                </Link>
                <Link href="/vision" onClick={closeMenu} className="block py-1 text-gray-600 hover:text-blue-600">
                  Vision
                </Link>
              </div>
            </div>

            {/* Industry */}
            <div className="px-3 py-2">
              <div className="text-sm font-semibold text-gray-900 mb-2">Industry</div>

              <div className="pl-4 space-y-1">
                <Link href="/products" onClick={closeMenu} className="block py-1 text-gray-600 hover:text-blue-600">
                  Products
                </Link>
                <Link href="/projects" onClick={closeMenu} className="block py-1 text-gray-600 hover:text-blue-600">
                  Projects
                </Link>
                <Link href="/clients" onClick={closeMenu} className="block py-1 text-gray-600 hover:text-blue-600">
                  Clients
                </Link>
                <Link href="/exports" onClick={closeMenu} className="block py-1 text-gray-600 hover:text-blue-600">
                  Exports
                </Link>
              </div>
            </div>

            {/* Trusted Badge */}
            <div className="px-3 py-2">
              <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-gradient-to-r from-amber-50 to-yellow-50 border border-amber-200">
                <CheckCircle className="w-4 h-4 mr-2 text-amber-600" />
                <span className="text-sm font-medium text-amber-700">Trusted Since 1972</span>
              </div>
            </div>

            <div className="px-3 pt-4">
              <Button variant="outline" size="sm" className="w-full hover:bg-blue-50 hover:border-blue-300" onClick={closeMenu}>
                Contact Us
              </Button>
            </div>

          </div>
        )}
      </div>
    </header>
  )
}

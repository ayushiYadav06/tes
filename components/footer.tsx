

import { MapPin, Phone, Mail, Linkedin, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/10 rounded-full blur-2xl"></div>
      </div>

      {/* Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
          

            <div className="flex items-center mb-6  bg-white rounded">
              <div
                className="w-60 h-24 bg-no-repeat bg-contain bg-center "
                style={{ backgroundImage: `url('/logo.png')` }} >
              </div>
            </div>


            <p className="text-gray-300 mb-6 leading-relaxed text-base">
              We are committed to Customer, Society & Nature.
              We deliver what we commit. The measure of improvement is the ability to change.
            </p>
            <p className="text-gray-400 text-sm mb-4">Follow us on</p>
            <div className="flex space-x-3">
              <a
                href="https://www.linkedin.com/company/tesla-transformers-india-ltd"
                className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center hover:from-blue-700 hover:to-blue-800 transition transform hover:scale-110 shadow-md"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/teslatransformersindia/"
                className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center hover:from-pink-600 hover:to-purple-700 transition transform hover:scale-110 shadow-md"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">Company</h3>
            <ul className="space-y-3 text-base">
              <li><a href="/" className="text-gray-300 hover:text-blue-400">Home</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-blue-400">About Us</a></li>
              <li><a href="/mission" className="text-gray-300 hover:text-blue-400">Mission</a></li>
              <li><a href="/vision" className="text-gray-300 hover:text-blue-400">Vision</a></li>
              <li><a href="/services" className="text-gray-300 hover:text-blue-400">Services</a></li>
              <li><a href="/facility" className="text-gray-300 hover:text-blue-400">Facilities</a></li>
              <li><a href="/privacyPolicy" className="text-gray-300 hover:text-blue-400">Privacy Policy</a></li>

            </ul>
          </div>

          {/* Industry Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">Industry</h3>
            <ul className="space-y-3 text-base">
              <li><a href="/products" className="text-gray-300 hover:text-blue-400">Products</a></li>
              <li><a href="/projects" className="text-gray-300 hover:text-blue-400">Projects</a></li>
              <li><a href="/clients" className="text-gray-300 hover:text-blue-400">Clients</a></li>
              <li><a href="/exports" className="text-gray-300 hover:text-blue-400">Exports</a></li>
              <li><a href="/offices" className="text-gray-300 hover:text-blue-400">Offices</a></li>
              <li><a href="/company" className="text-gray-300 hover:text-blue-400">About Company</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">Contact Us</h3>
            <div className="space-y-4 text-base">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-400 flex-shrink-0 mt-1" />
                <div className="text-gray-300">
                  <p className="font-medium">Tesla Transformers (India) Ltd.</p>
                  <p>23-A, Sector B, Industrial Area, Govindpura</p>
                  <p>Bhopal, MP - 462023</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <span className="text-gray-300">+91-75549-45666</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <span className="text-gray-300">tesla@teslaindia.co</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800/50 bg-gray-900/90 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm md:text-base mb-4 md:mb-0">
            © 2024 Tesla Transformers (India) Limited. All rights reserved.
          </div>
         <div className="text-gray-400 text-sm md:text-base text-center md:text-right">
              Designed by{" "}
              <a
                href="https://innobimbinfotech.com/"
                className="font-semibold text-blue-500 hover:text-blue-400 transition-colors"
              >
                innobimbinfotech
              </a>
            </div>
        </div>
      </div>
    </footer>
  )
}





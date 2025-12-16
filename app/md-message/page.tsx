

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Quote, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Footer } from "@/components/footer"

export default function ManagingDirectorMessagePage() {
  return (
    // <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 relative overflow-hidden">
      {/* Floating Background Orbs */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-blue-200/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-56 h-56 bg-indigo-200/40 rounded-full blur-3xl animate-bounce"></div>
      <div className="absolute top-1/2 left-1/2 w-28 h-28 bg-blue-100/50 rounded-full blur-2xl animate-ping"></div>

      {/* Header Section */}
      <div className="bg-white/80 backdrop-blur-md border-b border-gray-200 shadow sticky top-0 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/">
                <Button variant="ghost" size="sm" className="text-gray-600 hover:text-blue-600">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Home
                </Button>
              </Link>
              <div className="h-6 w-px bg-gray-300"></div>
              <h1 className="text-lg font-semibold text-gray-900">Company Leadership</h1>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Photo with Spotlight */}
          <div className="lg:col-span-5 relative">
            <div className="relative group">
              <div className="rounded-2xl overflow-hidden border-4 border-white shadow-2xl">
                <Image
                  src="/image.png"
                  alt="Managing Director - Jaideep Jain"
                  width={600}
                  height={750}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                  priority
                />
              </div>
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-2xl shadow-[0_0_40px_15px_rgba(37,99,235,0.15)] pointer-events-none"></div>
            </div>
          </div>

          {/* Message Content */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-10 relative overflow-hidden">
              {/* Heading */}
              <div className="mb-10 relative">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
                  A Message from the{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                    Managing Director
                  </span>
                </h1>
                <div className="mt-3 h-1 w-28 bg-gradient-to-r from-blue-600 to-indigo-500 rounded-full"></div>
              </div>

              {/* Pull Quote */}
              <div className="flex items-start bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 rounded-xl p-6 mb-8">
                <Quote className="w-8 h-8 text-blue-600 mr-4 mt-1" />
                <p className="text-lg italic font-medium text-gray-800">
                  “At Tesla, our vision is not just to build transformers — but to power the backbone of sustainable progress.”
                </p>
              </div>

              {/* Body */}
              <div className="space-y-6 text-gray-700 text-base lg:text-lg leading-relaxed">
                <p>
                  Driving innovation for over five decades, we've evolved from our 1972 origins to become a powerhouse in transformer manufacturing. We engineer Power Transformers up to 200 MVA, 220 kV Class and, through our sister concern, specialize in Inverter Duty Transformers (IDTs) up to 20 MVA.
                </p>
                
                <p>
                  We have also established a sister concern focused exclusively on Inverter Duty Transformers (IDTs), currently producing up to 20 MVA.
                </p>

                {/* Call to Action with Icon */}
                <div className="mt-6 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-6 shadow-lg text-white flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold">Tesla Power Ltd</h3>
                    <p className="text-blue-100 text-sm">Discover our work in renewable and inverter solutions.</p>
                  </div>
                  <Link
                    href="#"
                    className="flex items-center bg-white text-blue-700 font-semibold px-4 py-2 rounded-xl hover:bg-gray-100 transition"
                  >
                    Visit Now
                    <Sparkles className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Signature */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="text-center">
                  <p className="text-2xl font-bold text-gray-900">JAIDEEP JAIN</p>
                  <p className="text-lg text-gray-600 font-medium">Managing Director – Tesla Transformers Group</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  )
}

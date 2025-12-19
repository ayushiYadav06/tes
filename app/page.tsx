"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
// import GlobalExportMap from "@/components/GlobalExportMap"
import Image from "next/image";

import {
  ArrowRight,
  Zap,
  Shield,
  Globe,
  Award,
  CheckCircle,
  TrendingUp,
  Factory,
} from "lucide-react";
import Link from "next/link";
import DirectorImage from "@/public/image.png";
import { useState, useEffect } from "react";
// import EsteemedPartnersCarousel from "@/components/EsteemedPartnersCarousel"
import { ScrollReveal } from "@/components/ScrollReveal";
import FullPageLoader from "@/components/FullPageLoader";

import dynamic from "next/dynamic";

const GlobalExportMap = dynamic(() => import("@/components/GlobalExportMap"), {
  ssr: false,
  loading: () => (
    <div className="h-64 bg-gray-100 animate-pulse rounded-lg flex items-center justify-center text-gray-500">
      Loading Export Map...
    </div>
  ),
});

const EsteemedPartnersCarousel = dynamic(
  () => import("@/components/EsteemedPartnersCarousel"),
  {
    ssr: false,
    loading: () => (
      <div className="h-32 bg-gray-100 animate-pulse rounded-lg flex items-center justify-center text-gray-500">
        Loading Partners...
      </div>
    ),
  }
);

function Counter({
  target,
  duration = 2000,
  startDelay = 0,
}: {
  target: number;
  duration?: number;
  startDelay?: number;
}) {
  const [count, setCount] = useState(target); // Start with target value for SSR
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    // Reset to 0 and start animation only on client side
    setCount(0);

    const startTimer = setTimeout(() => {
      if (hasStarted) return;

      setHasStarted(true);
      let start = 0;
      const end = target;
      const incrementTime = Math.abs(Math.floor(duration / end));

      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) {
          clearInterval(timer);
        }
      }, incrementTime);

      return () => clearInterval(timer);
    }, startDelay);

    return () => clearTimeout(startTimer);
  }, [target, duration, startDelay, hasStarted]);

  return <span>{count}</span>;
}

export default function HomePage() {
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Simulate front-end hydration
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % 3); // 3 slides
    }, 5000); // change slide every 5s
    return () => clearInterval(interval);
  }, []);

  // Preload hero background images for smoother transitions
  // useEffect(() => {
  //   if (typeof window === "undefined") return;

  //   const imgs = ["/plant-1.jpg", "/plant-2.jpg", "/plant-3.jpg"];
  //   imgs.forEach((src) => {
  //     const img = new Image();
  //     img.src = src;
  //   });
  // }, []);

  return (
    <div className="min-h-screen bg-white">
      {loading && <FullPageLoader />}

      {!loading && (
        <>
          <Header />

          <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
           <div
  className={`absolute inset-0 transition-opacity duration-1000 ${
    currentIndex === 0 ? "opacity-100" : "opacity-0"
  }`}
>
  <Image
    src="/plant-3.jpg"
    alt="Hero background"
    fill
    priority
    sizes="100vw"
    className="object-cover brightness-[0.45] contrast-[0.9]"
  />
  <div className="absolute inset-0 bg-gradient-to-br from-black/80 to-sky-500/20" />
</div>

        <div
  className={`absolute inset-0 transition-opacity duration-1000 ${
    currentIndex === 1 ? "opacity-100" : "opacity-0"
  }`}
>
  <Image
    src="/plant-2.jpg"
    alt="Hero background"
    fill
    sizes="100vw"
    className="object-cover brightness-[0.45] contrast-[0.9]"
  />
  <div className="absolute inset-0 bg-gradient-to-br from-black/80 to-sky-500/20" />
</div>

            {/* <div
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${currentIndex === 2 ? "opacity-100" : "opacity-0"
            }`} */}

         <div
  className={`absolute inset-0 transition-opacity duration-1000 ${
    currentIndex === 2 ? "opacity-100" : "opacity-0"
  }`}
>
  <Image
    src="/plant-1.jpg"
    alt="Hero background"
    fill
    sizes="100vw"
    className="object-cover brightness-[0.45] contrast-[0.9]"
  />
  <div className="absolute inset-0 bg-gradient-to-br from-black/80 to-sky-500/20" />
</div>


            {/* Enhanced Floating Shapes */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-blue-600/10 rounded-full blur-xl animate-pulse"></div>
              <div
                className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-white/10 to-blue-400/5 rounded-full blur-2xl animate-bounce"
                style={{ animationDuration: "4s" }}
              ></div>
              <div
                className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-br from-blue-300/15 to-blue-500/10 rounded-full blur-lg animate-ping"
                style={{ animationDelay: "2s" }}
              ></div>
              <div
                className="absolute top-1/3 right-1/4 w-16 h-16 bg-gradient-to-br from-white/8 to-blue-200/5 rounded-full blur-lg animate-pulse"
                style={{ animationDelay: "1s" }}
              ></div>
              <div
                className="absolute bottom-1/3 left-1/3 w-20 h-20 bg-gradient-to-br from-blue-400/12 to-white/8 rounded-full blur-xl animate-bounce"
                style={{ animationDelay: "0.5s", animationDuration: "3s" }}
              ></div>
            </div>

            {/* Hero Content (Different per Slide, Bold + Italic) */}
            <div className="relative z-10 text-center text-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {currentIndex === 0 && (
                <div className="animate-fade-in">
                  <div className="mb-6">
                    <span className="inline-block px-4 py-2 bg-blue-600/20 border border-blue-400/30 rounded-full text-blue-200 text-sm font-medium mb-4 backdrop-blur-sm">
                      ⚡ Powering India Since 1972
                    </span>
                  </div>
                  <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 leading-tight">
                    Tesla Transformers
                    <span className="block text-transparent bg-gradient-to-r from-blue-300 via-blue-400 to-cyan-300 bg-clip-text">
                      (India) Limited
                    </span>
                  </h1>
                  <p className="text-lg md:text-xl lg:text-2xl mb-10 text-gray-200 max-w-4xl mx-auto leading-relaxed">
                    Powering Progress,{" "}
                    <span className="text-blue-300 font-semibold">
                      {" "}
                      Empowering India since 1972
                    </span>{" "}
                    With over 52 years of excellence, Tesla Transformers (India)
                    Ltd. (TTIL) has been the powerhouse behind India's progress
                    since 1972. We're not just manufacturers, we're global
                    partners, delivering high-performance Power & Distribution
                    Transformers and turnkey substation solutions worldwide.
                    Explore Our Legacy.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Link href="/contact">
                      <Button
                        size="lg"
                        className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                      >
                        Get Started <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </Link>
                    <Link href="/products">
                      <Button
                        variant="outline"
                        size="lg"
                        className="border-white/50 text-white hover:bg-white/20 hover:text-white px-8 py-4 text-lg font-semibold rounded-lg backdrop-blur-sm transition-all duration-300 bg-transparent"
                      >
                        Our Solutions
                      </Button>
                    </Link>
                  </div>
                </div>
              )}

              {currentIndex === 1 && (
                <div className="animate-fade-in">
                  <div className="mb-6">
                    <span className="inline-block px-4 py-2 bg-green-600/20 border border-green-400/30 rounded-full text-green-200 text-sm font-medium mb-4 backdrop-blur-sm">
                      🌍 Global Impact
                    </span>
                  </div>
                  <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 leading-tight">
                    Global Standards.
                    <span className="block text-transparent bg-gradient-to-r from-green-300 via-blue-400 to-cyan-300 bg-clip-text">
                      Local Expertise. Local Expertise.
                    </span>
                  </h1>
                  <p className="text-lg md:text-xl lg:text-2xl mb-10 text-gray-200 max-w-4xl mx-auto leading-relaxed">
                    ISO-certified & NABL-accredited testing excellence{" "}
                    <span className="text-green-300 font-semibold">
                      Global standards, local expertise. Our ISO 9001, 14001,
                      and 45001 certifications coupled with NABL-accredited
                      testing guarantee unmatched quality and reliability. We
                      engineer and manufacture high-performance transformers up
                      to 200 MVA, 220 kV class to meet the most demanding
                      specifications.Global standards, local expertise. Our ISO
                      9001, 14001, and 45001 certifications coupled with
                      NABL-accredited testing guarantee unmatched quality and
                      reliability.
                    </span>{" "}
                    We engineer and manufacture high-performance transformers up
                    to 200 MVA, 220 kV class to meet the most demanding
                    specifications.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Link href="/exports">
                      <Button
                        size="lg"
                        className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                      >
                        Global Projects <Globe className="ml-2 h-5 w-5" />
                      </Button>
                    </Link>
                    <Link href="/clients">
                      <Button
                        variant="outline"
                        size="lg"
                        className="border-white/50 text-white hover:bg-white/20 hover:text-white px-8 py-4 text-lg font-semibold rounded-lg backdrop-blur-sm transition-all duration-300 bg-transparent"
                      >
                        Our Clients
                      </Button>
                    </Link>
                  </div>
                </div>
              )}

              {currentIndex === 2 && (
                <div className="animate-fade-in">
                  <div className="mb-6">
                    <span className="inline-block px-4 py-2 bg-purple-600/20 border border-purple-400/30 rounded-full text-purple-200 text-sm font-medium mb-4 backdrop-blur-sm">
                      🚀 Innovation Excellence
                    </span>
                  </div>
                  <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 leading-tight">
                    Driving progress with
                    <span className="block text-transparent bg-gradient-to-r from-purple-300 via-pink-400 to-blue-300 bg-clip-text">
                      innovative power solutions
                    </span>
                  </h1>
                  <p className="text-lg md:text-xl lg:text-2xl mb-10 text-gray-200 max-w-4xl mx-auto leading-relaxed">
                    Combining{" "}
                    <span className="text-purple-300 font-semibold">
                      Engineering brilliance for a sustainable tomorrow
                    </span>{" "}
                    From Distribution Transformers to Inverter Duty Transformers
                    (up to 20 MVA), our advanced Vapour Phase Drying (VPD)
                    technology ensures energy-efficient, durable, and
                    future-ready solutions for a sustainable tomorrow.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Link href="/facility">
                      <Button
                        size="lg"
                        className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                      >
                        Our Facilities <Factory className="ml-2 h-5 w-5" />
                      </Button>
                    </Link>
                    <Link href="/about">
                      <Button
                        variant="outline"
                        size="lg"
                        className="border-white/50 text-white hover:bg-white/20 hover:text-white px-8 py-4 text-lg font-semibold rounded-lg backdrop-blur-sm transition-all duration-300 bg-transparent"
                      >
                        Learn More
                      </Button>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Enhanced Scroll Indicator */}
            <div
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
              onClick={() =>
                window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
              }
            >
              <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center hover:border-white/70 transition-all duration-300 bg-white/5 backdrop-blur-sm">
                <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
              </div>
            </div>

            {/* Dots */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
              <div
                className={`w-3 h-3 rounded-full ${
                  currentIndex === 0 ? "bg-blue-400 scale-125" : "bg-white/40"
                }`}
              ></div>
              <div
                className={`w-3 h-3 rounded-full ${
                  currentIndex === 1 ? "bg-blue-400 scale-125" : "bg-white/40"
                }`}
              ></div>
              <div
                className={`w-3 h-3 rounded-full ${
                  currentIndex === 2 ? "bg-blue-400 scale-125" : "bg-white/40"
                }`}
              ></div>
            </div>
          </section>

          <section className="py-12 md:py-16 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div
                className="zoom-bg-image"
                style={{ backgroundImage: `url('/landscape.jpg')` }}
              ></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
              <ScrollReveal animation="fade-up">
                <div className="text-center mb-10 md:mb-14">
                  <div className="inline-flex items-center px-6 py-3 rounded-full bg-blue-100 text-blue-800 font-semibold mb-6 shadow-md">
                    <Award className="w-5 h-5 mr-2" />
                    Excellence & Innovation
                  </div>

                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                    POWERING EXCELLENCE,
                    <span className="block text-blue-600">
                      GLOBALLY TRUSTED
                    </span>
                  </h2>

                  <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto rounded-full"></div>
                </div>
              </ScrollReveal>

              {/* ✅ FIXED GRID */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-stretch">
                {/* CARD 1 */}
                <ScrollReveal animation="scale" delay={100}>
                  <Card className="h-full flex flex-col border-0 shadow-xl bg-white hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden">
                    <CardContent className="p-8 flex flex-col h-full text-center">
                      <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                        <Award className="h-10 w-10 text-white" />
                      </div>

                      <h3 className="text-3xl font-bold text-gray-900 mb-2">
                        50+ Years
                      </h3>

                      <p className="text-lg font-semibold text-blue-600 mb-4">
                        of Expertise
                      </p>

                      <p className="text-gray-600 leading-relaxed mb-6">
                        Since 1972, Tesla Transformers has been shaping India’s
                        power sector with innovation, trust, and proven
                        reliability.
                      </p>

                      <div className="mt-auto">
                        <Link href="/about">
                          <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow-lg">
                            Read More
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </ScrollReveal>

                {/* CARD 2 */}
                <ScrollReveal animation="scale" delay={200}>
                  <Card className="h-full flex flex-col border-0 shadow-xl bg-white hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden">
                    <CardContent className="p-8 flex flex-col h-full text-center">
                      <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                        <Shield className="h-10 w-10 text-white" />
                      </div>

                      <h3 className="text-3xl font-bold text-gray-900 mb-2">
                        Our Services
                      </h3>

                      <p className="text-lg font-semibold text-green-600 mb-4">
                        Comprehensive Solutions
                      </p>

                      <p className="text-gray-600 leading-relaxed mb-6">
                        Our offerings include manufacturing, large-scale
                        projects, global exports, and dependable after-sales
                        services.
                      </p>

                      <div className="mt-auto">
                        <Link href="/services">
                          <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow-lg">
                            Read More
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </ScrollReveal>

                {/* CARD 3 */}
                <ScrollReveal animation="scale" delay={300}>
                  <Card className="h-full flex flex-col border-0 shadow-xl bg-white hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden">
                    <CardContent className="p-8 flex flex-col h-full text-center">
                      <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                        <Globe className="h-10 w-10 text-white" />
                      </div>

                      <h3 className="text-3xl font-bold text-gray-900 mb-2">
                        Our Portfolio
                      </h3>

                      <p className="text-lg font-semibold text-purple-600 mb-4">
                        Global Reach
                      </p>

                      <p className="text-gray-600 leading-relaxed mb-6">
                        Backed by approvals from major clients, Tesla's
                        portfolio includes diverse transformer models and test
                        reports.
                      </p>

                      <div className="mt-auto">
                        <Link href="/company">
                          <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow-lg">
                            Read More
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              </div>
            </div>
          </section>

          <section className="py-12 md:py-16 bg-gradient-to-br from-white via-gray-50/30 to-white relative overflow-hidden ">
            {/* BACKGROUND ZOOM IMAGE */}

            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div
                className="bg-rotate"
                style={{
                  backgroundImage: `url('/landscapefive.jpg')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  position: "absolute",
                  inset: 0,
                  filter: "brightness(0.4)",
                  zIndex: 0,
                }}
              ></div>
            </div>

            <div className="absolute top-0 left-0 w-full h-full opacity-5">
              <div className="absolute top-20 -right-20 w-80 md:w-96 h-80 md:h-96 bg-blue-500 rounded-full blur-3xl"></div>
              <div className="absolute bottom-20 -left-20 w-64 md:w-80 h-64 md:h-80 bg-green-500 rounded-full blur-3xl"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-purple-400/30 rounded-full blur-2xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
              <ScrollReveal animation="fade-up">
                <div className="text-center mb-10 md:mb-14">
                  <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 font-semibold mb-8 shadow-md border border-blue-200">
                    <Zap className="w-5 h-5 mr-3" />
                    Our Solutions
                  </div>
                  {/* <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white-900 mb-6 leading-tight"> */}
                  <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                    Comprehensive Transformer
                    <span className="block bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
                      Solutions
                    </span>
                  </h2>
                  <p className="text-lg sm:text-xl text-white max-w-4xl mx-auto leading-relaxed px-4 opacity-90">
                    We support companies and countries to reduce emissions
                    across the energy landscape — for a more{" "}
                    <span className="font-semibold text-white">
                      reliable, affordable and sustainable
                    </span>{" "}
                    energy system.
                  </p>
                </div>
              </ScrollReveal>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                <ScrollReveal animation="fade-up" delay={100}>
                  <div className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-4 border border-gray-100 flex flex-col h-full">
                    <div className="aspect-video relative overflow-hidden">
                      <div
                        className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                        style={{
                          backgroundImage: `linear-gradient(135deg, rgba(152, 159, 169, 0.9), rgba(212, 222, 237, 0.09)), url('/power transformer.jpg')`,
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-600/40 to-transparent"></div>
                      <div className="absolute bottom-4 left-4">
                        <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                          <Zap className="h-6 w-6 text-white" />
                        </div>
                      </div>
                    </div>
                    <div className="p-8 flex flex-col flex-grow">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                        Power Transformers
                      </h3>
                      <p className="text-gray-800  mb-6 leading-relaxed">
                        Designed for flawless power transmission, our advanced
                        high-voltage transformers ensure reliable energy for the
                        grid.{" "}
                      </p>
                      <ul className="space-y-3">
                        <li className="flex items-center text-sm text-gray-700">
                          <CheckCircle className="w-4 h-4 text-blue-500 mr-3 flex-shrink-0" />
                          High Voltage Systems
                        </li>
                        <li className="flex items-center text-sm text-gray-700">
                          <CheckCircle className="w-4 h-4 text-blue-500 mr-3 flex-shrink-0" />
                          Grid Integration
                        </li>
                        <li className="flex items-center text-sm text-gray-700">
                          <CheckCircle className="w-4 h-4 text-blue-500 mr-3 flex-shrink-0" />
                          Custom Configurations
                        </li>
                      </ul>
                    </div>
                  </div>
                </ScrollReveal>

                <ScrollReveal animation="fade-up" delay={200}>
                  <div className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-4 border border-gray-100 flex flex-col h-full">
                    <div className="aspect-video relative overflow-hidden">
                      <div
                        className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                        style={{
                          backgroundImage: `linear-gradient(135deg, rgba(220, 239, 227, 0.23), rgba(175, 222, 192, 0.3)), url('/electrical-distribution-grid-system.jpg')`,
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-green-900/90 via-green-600/40 to-transparent"></div>
                      <div className="absolute bottom-4 left-4">
                        <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                          <Shield className="h-6 w-6 text-white" />
                        </div>
                      </div>
                    </div>
                    <div className="p-8 flex flex-col flex-grow">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors">
                        Distribution Technology
                      </h3>
                      <p className="text-gray-800 mb-6 leading-relaxed">
                        We engineer intelligent grid infrastructure that not
                        only optimizes energy distribution but also enhances
                        overall reliability and efficiency.{" "}
                      </p>
                      <ul className="space-y-3">
                        <li className="flex items-center text-sm text-gray-700">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                          Smart Grid Solutions
                        </li>
                        <li className="flex items-center text-sm text-gray-700">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                          Automated Systems
                        </li>
                        <li className="flex items-center text-sm text-gray-700">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                          Power Quality Control
                        </li>
                      </ul>
                    </div>
                  </div>
                </ScrollReveal>

                <ScrollReveal animation="fade-up" delay={300}>
                  <div className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-4 border border-gray-100 flex flex-col h-full">
                    <div className="aspect-video relative overflow-hidden">
                      <div
                        className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                        style={{
                          backgroundImage: `linear-gradient(135deg, rgba(205, 184, 224, 0.27), rgba(208, 199, 216, 0.31)), url('/electrical-energy-storage-battery-systems.jpg')`,
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 via-purple-600/40 to-transparent"></div>
                      <div className="absolute bottom-4 left-4">
                        <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                          <Globe className="h-6 w-6 text-white" />
                        </div>
                      </div>
                    </div>
                    <div className="p-8 flex flex-col flex-grow">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">
                        Energy Storage
                      </h3>
                      <p className="text-gray-800 mb-6 leading-relaxed">
                        We develop advanced storage solutions that guarantee
                        grid stability and seamlessly integrate renewable energy
                        sources.{" "}
                      </p>
                      <ul className="space-y-3">
                        <li className="flex items-center text-sm text-gray-700">
                          <CheckCircle className="w-4 h-4 text-purple-500 mr-3 flex-shrink-0" />
                          Battery Integration
                        </li>
                        <li className="flex items-center text-sm text-gray-700">
                          <CheckCircle className="w-4 h-4 text-purple-500 mr-3 flex-shrink-0" />
                          Grid Stabilization
                        </li>
                        <li className="flex items-center text-sm text-gray-700">
                          <CheckCircle className="w-4 h-4 text-purple-500 mr-3 flex-shrink-0" />
                          Emergency Backup
                        </li>
                      </ul>
                    </div>
                  </div>
                </ScrollReveal>

                <ScrollReveal animation="fade-up" delay={400}>
                  <div className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-4 border border-gray-100 flex flex-col h-full">
                    <div className="aspect-video relative overflow-hidden">
                      <div
                        className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                        style={{
                          backgroundImage: `linear-gradient(135deg, rgba(212, 204, 199, 0.28), rgba(233, 214, 200, 0.24)), url('/industrial-electrical-manufacturing-facility.jpg')`,
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-orange-900/90 via-orange-600/40 to-transparent"></div>
                      <div className="absolute bottom-4 left-4">
                        <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                          <Factory className="h-6 w-6 text-white" />
                        </div>
                      </div>
                    </div>
                    <div className="p-8 flex flex-col flex-grow">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors">
                        Industrial Solutions
                      </h3>
                      <p className="text-gray-800 mb-6 leading-relaxed">
                        Crafted for demanding environments, our specialized
                        energy solutions are precisely tailored for
                        manufacturing and heavy industrial applications.{" "}
                      </p>
                      <ul className="space-y-3">
                        <li className="flex items-center text-sm text-gray-700">
                          <CheckCircle className="w-4 h-4 text-orange-500 mr-3 flex-shrink-0" />
                          Process Optimization
                        </li>
                        <li className="flex items-center text-sm text-gray-700">
                          <CheckCircle className="w-4 h-4 text-orange-500 mr-3 flex-shrink-0" />
                          Energy Efficiency
                        </li>
                        <li className="flex items-center text-sm text-gray-700">
                          <CheckCircle className="w-4 h-4 text-orange-500 mr-3 flex-shrink-0" />
                          Custom Engineering
                        </li>
                      </ul>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>

            <style jsx global>{`
              @keyframes rotateBg {
                0% {
                  transform: scale(1.12) rotate(0deg);
                }
                50% {
                  transform: scale(1.14) rotate(4deg);
                }
                100% {
                  transform: scale(1.12) rotate(0deg);
                }
              }

              .bg-rotate {
                animation: rotateBg 12s ease-in-out infinite;
                transform-origin: center center;
              }
            `}</style>
          </section>

          {/*
      <section className="py-12 md:py-16 relative overflow-hidden bg-gray-50">
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <div className="absolute top-20 -right-20 w-80 md:w-96 h-80 md:h-96 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 -left-20 w-64 md:w-80 h-64 md:h-80 bg-green-500 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-purple-400/30 rounded-full blur-2xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight px-4">
              Our Achievements
              <span className="block text-blue-600 text-3xl">
                Driving excellence for over five decades with trust, innovation, and proven performance worldwide.
              </span>
            </h2>

            <div className="flex justify-center gap-6 flex-wrap mt-12">
              <div className="flex justify-center gap-6 flex-wrap mt-12">
                <div className="flex-none w-80 h-auto bg-blue-100 border border-gray-200 rounded-lg shadow-md p-4 transition-all duration-300 ease-in-out hover:-translate-y-2 hover:scale-105 hover:shadow-xl hover:border-blue-500 cursor-pointer group">
                  <h1 className="text-5xl font-semibold pb-5 pt-10">98%</h1>
                  <h3 className="text-lg font-semibold pb-10">CUSTOMER SATISFACTION

                  </h3>
                </div>
              </div>

              <div className="flex justify-center gap-6 flex-wrap mt-12">
                <div className="flex-none w-80 h-auto bg-blue-100 border border-gray-200 rounded-lg shadow-md p-4 transition-all duration-300 ease-in-out hover:-translate-y-2 hover:scale-105 hover:shadow-xl hover:border-blue-500 cursor-pointer group">
                  <h1 className="text-5xl font-semibold pb-5 pt-10">50+</h1>
                  <h3 className="text-lg font-semibold pb-10">SPECIALISTS IN OUR TEAM</h3>
                </div>
              </div>

              <div className="flex justify-center gap-6 flex-wrap mt-12">
                <div className="flex-none w-80 h-auto bg-blue-100 border border-gray-200 rounded-lg shadow-md p-4 transition-all duration-300 ease-in-out hover:-translate-y-2 hover:scale-105 hover:shadow-xl hover:border-blue-500 cursor-pointer group">
                  <h1 className="text-5xl font-semibold pb-5 pt-10">200+</h1>
                  <h3 className="text-lg font-semibold pb-10">SHORT CIRCUIT TEST REPORTS</h3>
                </div>
              </div>

              <div className="flex justify-center gap-6 flex-wrap mt-12">
                <div className="flex-none w-80 h-auto bg-blue-100 border border-gray-200 rounded-lg shadow-md p-4 transition-all duration-300 ease-in-out hover:-translate-y-2 hover:scale-105 hover:shadow-xl hover:border-blue-500 cursor-pointer group">
                  <h1 className="text-5xl font-semibold pb-5 pt-10">50+</h1>
                  <h3 className="text-lg font-semibold pb-10">SUCCESSFUL PROJECTS</h3>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section> */}

          <section className="py-16 md:py-24 relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-50">
            {/* Subtle background pattern */}

            {/* BACKGROUND ZOOM IMAGE */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div
                className="zoom-bg-image"
                style={{
                  backgroundImage: `url('/landscapefour.jpg')`,
                }}
              ></div>
            </div>

            <div className="absolute inset-0 opacity-[0.03]">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, #3b82f6 1px, transparent 0)`,
                  backgroundSize: "40px 40px",
                }}
              ></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
              {/* Section Header */}
              <ScrollReveal animation="fade-up">
                <div className="text-center mb-16 md:mb-20">
                  <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 font-semibold mb-6 shadow-sm border border-blue-100">
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    Proven Track Record
                  </div>

                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                    Our Achievements
                  </h2>

                  <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    Driving excellence for over five decades with{" "}
                    <span className="font-semibold text-blue-600">
                      trust, innovation, and proven performance
                    </span>{" "}
                    worldwide
                  </p>

                  <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full mt-6"></div>
                </div>
              </ScrollReveal>

              {/* Stats Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                {/* Card 1 - Customer Satisfaction */}
                <ScrollReveal animation="scale" delay={100}>
                  <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 overflow-hidden h-full min-h-[240px] flex flex-col">
                    {/* Gradient background on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <div className="relative z-10 flex flex-col h-full">
                      {/* Icon */}
                      <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <svg
                          className="w-7 h-7 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                          />
                        </svg>
                      </div>

                      {/* Number */}
                      <div className="text-5xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                        <Counter
                          target={98}
                          duration={2000}
                          startDelay={3000}
                        />
                        %
                      </div>

                      {/* Label */}
                      <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wide mt-auto">
                        Customer Satisfaction
                      </h3>
                    </div>
                  </div>
                </ScrollReveal>

                {/* Card 2 - Specialists */}
                <ScrollReveal animation="scale" delay={200}>
                  <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 overflow-hidden h-full min-h-[240px] flex flex-col">
                    <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <div className="relative z-10 flex flex-col h-full">
                      <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <svg
                          className="w-7 h-7 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                          />
                        </svg>
                      </div>

                      <div className="text-5xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                        <Counter
                          target={50}
                          duration={2000}
                          startDelay={3000}
                        />
                        +
                      </div>

                      <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wide mt-auto">
                        Specialists in Our Team
                      </h3>
                    </div>
                  </div>
                </ScrollReveal>

                {/* Card 3 - Test Reports */}
                <ScrollReveal animation="scale" delay={300}>
                  <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 overflow-hidden h-full min-h-[240px] flex flex-col">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <div className="relative z-10 flex flex-col h-full">
                      <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <svg
                          className="w-7 h-7 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                          />
                        </svg>
                      </div>

                      <div className="text-5xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                        <Counter
                          target={200}
                          duration={2000}
                          startDelay={3000}
                        />
                        +
                      </div>

                      <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wide mt-auto">
                        Short Circuit Test Reports
                      </h3>
                    </div>
                  </div>
                </ScrollReveal>

                {/* Card 4 - Successful Projects */}
                <ScrollReveal animation="scale" delay={400}>
                  <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 overflow-hidden h-full min-h-[240px] flex flex-col">
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <div className="relative z-10 flex flex-col h-full">
                      <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <svg
                          className="w-7 h-7 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                          />
                        </svg>
                      </div>

                      <div className="text-5xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                        <Counter
                          target={50}
                          duration={2000}
                          startDelay={3000}
                        />
                        +
                      </div>

                      <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wide mt-auto">
                        Successful Projects
                      </h3>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </section>

          <section className="py-12 md:py-16 relative overflow-hidden bg-gray-50">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div
                style={{
                  backgroundImage: `url('/landscape.jpg')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  position: "absolute",
                  inset: 0,
                  transform: "scale(1.1)",
                  animation: "sectionZoom 12s ease-in-out infinite alternate",
                  filter: "brightness(0.35)", // ← BLACKISH LOOK
                  zIndex: 0,
                }}
              ></div>
            </div>

            <div className="absolute top-0 left-0 w-full h-full opacity-5">
              <div className="absolute top-20 -right-20 w-80 md:w-96 h-80 md:h-96 bg-blue-500 rounded-full blur-3xl"></div>
              <div className="absolute bottom-20 -left-20 w-64 md:w-80 h-64 md:h-80 bg-green-500 rounded-full blur-3xl"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-purple-400/30 rounded-full blur-2xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
              <div className="text-center mb-10 md:mb-14">
                {/* <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight px-4"> */}
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 md:mb-6 leading-tight px-4 relative z-[2]">
                  Our Competitive Advantages
                  <span className="block text-white/60 text-3xl">
                    Tesla combines technical expertise with rigorous quality
                    control to deliver exceptional transformer solutions.
                  </span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto">
                  <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100 hover:border-blue-200">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Zap className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                      High Quality Standards
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      Every single one of our transformers is a testament to our
                      commitment to high-quality standards. Each unit undergoes
                      a rigorous production cycle with over 100 quality checks,
                      ensuring superior performance and reliability.{" "}
                    </p>
                  </div>

                  <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100 hover:border-green-200">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Shield className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors">
                      Leading Experts
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      Every single one of our transformers is a testament to our
                      commitment to high-quality standards. Each unit undergoes
                      a rigorous production cycle with over 100 quality checks,
                      ensuring superior performance and reliability.{" "}
                    </p>
                  </div>

                  <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100 hover:border-purple-200">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Globe className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">
                      Complex Solutions
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      We deliver complex solutions, designing and rigorously
                      testing advanced transformers up to 200 MVA and 220 kV.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <style jsx>{`
              @keyframes sectionZoom {
                0% {
                  transform: scale(1.1) rotate(0deg);
                }
                100% {
                  transform: scale(1.5) rotate(0.6deg);
                }
              }
            `}</style>
          </section>

          <section className="py-12 md:py-16 bg-white text-gray-900 relative overflow-hidden">
            <div
              className="absolute inset-0 zoom-bg-image"
              style={{
                backgroundImage: "url('/landscapetwo.jpg')",
              }}
            ></div>
            <div className="absolute inset-0 bg-white/20 backdrop-blur-[1px]"></div>

            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-10 left-10 w-48 md:w-64 h-48 md:h-64 border border-gray-900/10 rounded-full"></div>
              <div className="absolute bottom-20 right-10 w-72 md:w-96 h-72 md:h-96 border border-gray-900/10 rounded-full"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 md:w-80 h-60 md:h-80 border border-gray-900/10 rounded-full"></div>
              <div className="absolute top-0 right-0 w-32 md:w-40 h-32 md:h-40 bg-gray-900/5 transform rotate-45"></div>
              <div className="absolute bottom-0 left-0 w-24 md:w-32 h-24 md:h-32 bg-gray-900/5 transform rotate-12"></div>
            </div>

            <div className="absolute inset-0">
              <div className="absolute top-20 right-20 w-2 h-2 bg-blue-600/20 rounded-full animate-ping"></div>
              <div className="absolute bottom-32 left-16 w-3 h-3 bg-blue-600/30 rounded-full animate-pulse"></div>
              <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-blue-600/40 rounded-full animate-bounce"></div>
              <div
                className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-blue-600/25 rounded-full animate-pulse"
                style={{ animationDelay: "1s" }}
              ></div>
              <div
                className="absolute top-3/4 right-1/3 w-1.5 h-1.5 bg-blue-600/35 rounded-full animate-ping"
                style={{ animationDelay: "2s" }}
              ></div>
            </div>

            <div className="max-w-6xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative">
              <div className="mb-6">
                <div className="inline-flex items-center px-6 md:px-8 py-4 rounded-2xl bg-gray-900/10 backdrop-blur-lg border border-gray-900/20 mb-8 shadow-xl">
                  <TrendingUp className="w-5 h-5 md:w-6 md:h-6 mr-3 text-blue-600" />
                  <span className="font-semibold text-base md:text-lg text-gray-900">
                    Ready to Transform Your Energy Future?
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 md:mb-8 leading-tight px-4">
                  <span className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent">
                    Ready to Power
                  </span>
                  <span className="block text-gray-600 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-2">
                    Your Future?
                  </span>
                </h2>
                <p className="text-lg md:text-xl text-gray-600 mb-12 md:mb-16 max-w-4xl mx-auto leading-relaxed font-light px-4">
                  Join the thousands of companies worldwide who trust Tesla
                  Transformers for their energy solutions.
                  <span className="block mt-2 text-gray-900 font-medium">
                    Let's build a sustainable energy future together.
                  </span>
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 md:gap-8 justify-center items-center mb-8 md:mb-12 px-4">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 md:px-10 py-4 md:py-5 rounded-2xl shadow-2xl transform hover:scale-105 md:hover:scale-110 transition-all duration-300 group border-2 border-blue-600"
                >
                  <Link href="/offices">Our Offices</Link>
                  <ArrowRight className="ml-3 h-5 w-5 md:h-6 md:w-6 group-hover:translate-x-2 transition-transform" />
                </Button>
                {/* <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto border-3 border-gray-900/40 text-gray-900 hover:bg-gray-900 hover:text-white bg-transparent backdrop-blur-sm px-8 md:px-10 py-4 md:py-5 rounded-2xl transform hover:scale-105 md:hover:scale-110 transition-all duration-300 font-bold"
            >
              Contact Our Experts
            </Button> */}

                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto border-3 border-gray-900/40 text-gray-900 hover:bg-gray-900 hover:text-white bg-transparent backdrop-blur-sm px-8 md:px-10 py-4 md:py-5 rounded-2xl transform hover:scale-105 md:hover:scale-110 transition-all duration-300 font-bold"
                >
                  <Link href="/contact">Contact Our Experts</Link>
                </Button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 text-center px-4">
                <div className="flex flex-col items-center p-6 rounded-2xl bg-gray-900/5 backdrop-blur-sm border border-gray-900/10 hover:bg-gray-900/10 transition-all duration-300 group">
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle className="w-7 h-7 md:w-8 md:h-8 text-blue-600" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2 text-base md:text-lg">
                    Expert Consultation
                  </h4>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    Free technical consultation with industry experts
                  </p>
                </div>
                <div className="flex flex-col items-center p-6 rounded-2xl bg-gray-900/5 backdrop-blur-sm border border-gray-900/10 hover:bg-gray-900/10 transition-all duration-300 group">
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Shield className="w-7 h-7 md:w-8 md:h-8 text-blue-600" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2 text-base md:text-lg">
                    Quality Assured
                  </h4>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    50+ years of proven reliability and excellence
                  </p>
                </div>
                <div className="flex flex-col items-center p-6 rounded-2xl bg-gray-900/5 backdrop-blur-sm border border-gray-900/10 hover:bg-gray-900/10 transition-all duration-300 group sm:col-span-2 lg:col-span-1">
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Globe className="w-7 h-7 md:w-8 md:h-8 text-blue-600" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2 text-base md:text-lg">
                    Global Support
                  </h4>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    Worldwide service network and technical support
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="py-16 md:py-20 relative overflow-hidden bg-white">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div
                style={{
                  backgroundImage: `url('/landscapethree.jpg')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  position: "absolute",
                  inset: 0,
                  transform: "scale(1.1)",
                  animation: "sectionZoom 12s ease-in-out infinite alternate",
                  filter: "brightness(0.35)",
                  zIndex: 0,
                }}
              ></div>
            </div>

            {/* Subtle background pattern */}
            <div className="absolute inset-0 opacity-[0.03]">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, #edf63bff 1px, transparent 0)`,
                  backgroundSize: "32px 32px",
                }}
              ></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
              {/* Section Header */}
              <ScrollReveal animation="fade-up">
                <div className="text-center mb-12 md:mb-16">
                  <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 font-semibold mb-6 shadow-sm border border-blue-100">
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    Our Trusted Partners
                  </div>

                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                    Our Esteemed Partners
                  </h2>

                  <p className="text-lg sm:text-xl text-white max-w-3xl mx-auto leading-relaxed">
                    Trusted by{" "}
                    <span className="font-semibold text-blue-600">
                      industry leaders worldwide
                    </span>
                    , powering critical infrastructure across nations
                  </p>

                  <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full mt-6"></div>
                </div>
              </ScrollReveal>

              {/* Carousel */}
              <ScrollReveal animation="fade-up" delay={200}>
                <EsteemedPartnersCarousel />
              </ScrollReveal>

              {/* Trust indicators */}
              <ScrollReveal animation="fade-up" delay={300}>
                <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                  <div className="text-center p-4">
                    <div className="text-3xl font-bold text-blue-600 mb-1">
                      25+
                    </div>
                    <div className="text-sm text-white font-medium">
                      Countries Served
                    </div>
                  </div>
                  <div className="text-center p-4">
                    <div className="text-3xl font-bold text-blue-600 mb-1">
                      200+
                    </div>
                    <div className="text-sm text-white font-medium">
                      Active Clients
                    </div>
                  </div>
                  <div className="text-center p-4">
                    <div className="text-3xl font-bold text-blue-600 mb-1">
                      50+
                    </div>
                    <div className="text-sm text-white font-medium">
                      Years Experience
                    </div>
                  </div>
                  <div className="text-center p-4">
                    <div className="text-3xl font-bold text-blue-600 mb-1">
                      98%
                    </div>
                    <div className="text-sm text-white font-medium">
                      Client Satisfaction
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            <style jsx>{`
              @keyframes sectionZoom {
                0% {
                  transform: scale(1.1) rotate(0deg);
                }
                100% {
                  transform: scale(1.25) rotate(0.6deg);
                }
              }
            `}</style>
          </section>

          <section className="py-12 md:py-16 relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-50">
            <div className="absolute top-0 left-0 w-full h-full opacity-5">
              <div className="absolute top-20 -right-20 w-80 md:w-96 h-80 md:h-96 bg-blue-500 rounded-full blur-3xl"></div>
              <div className="absolute bottom-20 -left-20 w-64 md:w-80 h-64 md:h-80 bg-green-500 rounded-full blur-3xl"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-purple-400/30 rounded-full blur-2xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
              <ScrollReveal animation="fade-up">
                <div className="text-center mb-8 md:mb-12">
                  <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800 font-semibold mb-8 shadow-md border border-blue-300">
                    <Globe className="w-5 h-5 mr-3" />
                    Global Presence
                  </div>

                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight px-4">
                    Global Export Projects
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800 text-2xl sm:text-3xl md:text-4xl mt-2">
                      Connecting Businesses Across Borders with Innovation &
                      Excellence
                    </span>
                  </h2>
                  <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto rounded-full mb-6"></div>
                  <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    Powering nations worldwide with world-class transformer
                    solutions across
                    <span className="font-semibold text-blue-600">
                      {" "}
                      25+ countries
                    </span>{" "}
                    and
                    <span className="font-semibold text-blue-600">
                      {" "}
                      6 continents
                    </span>
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal animation="scale" delay={200}>
                <div className="mt-10 relative overflow-hidden">
                  {/* 🔥 Add this animated wrapper */}
                  <div className="absolute inset-0 zoom-map-image pointer-events-none"></div>

                  {/* 🔥 Wrap the map inside this container */}
                  <div className="relative z-10 animate-map-smooth">
                    <GlobalExportMap />
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </section>

          <Footer />
        </>
      )}
    </div>
  );
}

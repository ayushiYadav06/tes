// import { Header } from "@/components/header"
// import { Footer } from "@/components/footer"
// import { Phone, Mail, MapPin } from "lucide-react"

// export default function ContactPage() {
//   return (
//     <div className="min-h-screen flex flex-col bg-white">
//       <Header />

//       {/* Hero Section */}
//       <section className="relative py-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
//         <div className="max-w-6xl mx-auto px-6 text-center">
//           <h1 className="text-4xl md:text-6xl font-bold mb-4">Contact Us</h1>
//           <p className="text-lg md:text-xl text-blue-100">
//             Get in touch with Tesla Transformers (India) Ltd. – We’re here to help
//           </p>
//         </div>
//       </section>

//       {/* Contact Info */}
//       <section className="py-16 bg-gray-50 flex-grow">
//         <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          
//           {/* Address */}
//           <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl transition">
//             <div className="w-16 h-16 mx-auto flex items-center justify-center bg-blue-100 text-blue-600 rounded-full mb-6">
//               <MapPin className="w-8 h-8" />
//             </div>
//             <h3 className="text-xl font-semibold mb-3">Address</h3>
//             <p className="text-gray-600 leading-relaxed">
//               Tesla Transformers (India) Ltd.<br />
//               23-A, Sector B, Industrial Area,<br />
//               Govindpura, Bhopal, MP - 462023
//             </p>
//           </div>

//           {/* Phone */}
//           <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl transition">
//             <div className="w-16 h-16 mx-auto flex items-center justify-center bg-green-100 text-green-600 rounded-full mb-6">
//               <Phone className="w-8 h-8" />
//             </div>
//             <h3 className="text-xl font-semibold mb-3">Phone</h3>
//             <p className="text-gray-600 leading-relaxed">+91-75549-45666</p>
//           </div>

//           {/* Email */}
//           <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl transition">
//             <div className="w-16 h-16 mx-auto flex items-center justify-center bg-purple-100 text-purple-600 rounded-full mb-6">
//               <Mail className="w-8 h-8" />
//             </div>
//             <h3 className="text-xl font-semibold mb-3">Email</h3>
//             <p className="text-gray-600 leading-relaxed">tesla@teslaindia.co</p>
//           </div>









           



//            {/* Phone */}
//           <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl transition">
//             <div className="w-16 h-16 mx-auto flex items-center justify-center bg-green-100 text-green-600 rounded-full mb-6">
//               <Phone className="w-8 h-8" />
//             </div>
//             <h3 className="text-xl font-semibold mb-3">Domestic Contact</h3>
//             <p className="text-gray-600 leading-relaxed">+91-7610447608</p>

//              <p className="text-lg font-semibold ">Email <span className="text-gray-600 leading-relaxed text-sm" >jitendra@teslaindia.co</span></p>
         
//           </div>


//                 {/* Phone */}
//           <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl transition">
//             <div className="w-16 h-16 mx-auto flex items-center justify-center bg-green-100 text-green-600 rounded-full mb-6">
//               <Phone className="w-8 h-8" />
//             </div>
//             <h3 className="text-xl font-semibold mb-3">International Contact</h3>
//             <p className="text-gray-600 leading-relaxed">+91-9993055536</p>

//              <p className="text-lg font-semibold ">Email <span className="text-gray-600 leading-relaxed text-sm" >mktg@teslaindia.co</span></p>
         
//           </div>


//             <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl transition">
//             <div className="w-16 h-16 mx-auto flex items-center justify-center bg-green-100 text-green-600 rounded-full mb-6">
//               <Phone className="w-8 h-8" />
//             </div>
//             <h3 className="text-xl font-semibold mb-3">Project Contact</h3>
//             <p className="text-gray-600 leading-relaxed">+91-8269072002</p>

//              <p className="text-lg font-semibold ">Email <span className="text-gray-600 leading-relaxed text-sm" >projects@teslaindia.co</span></p>
         
//           </div>

        
        
        
        
        
//         </div>
        
//       </section>

//       {/* Google Map Embed */}
//      {/* Google Map Embed */}
// <section className="relative w-full max-w-6xl mx-auto my-16 rounded-2xl overflow-hidden shadow-xl border border-gray-200">
//   <iframe
//     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.548144848745!2d77.456789!3d23.245678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sTesla%20Transformers%20(India)%20Ltd.!5e0!3m2!1sen!2sin!4v1234567890"
//     className="w-full h-[450px] border-0"
//     allowFullScreen={true}
//     loading="lazy"
//   ></iframe>

//   {/* Location Highlight Overlay */}
//   <div className="absolute top-4 left-4 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg">
//     📍 Tesla Transformers (India) Ltd.
//   </div>
// </section>


//       <Footer />
//     </div>
//   )
// }

'use client';

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Phone, Mail, MapPin } from "lucide-react"
import { useState } from "react"

// ContactInfo Component
const ContactInfo = () => (
  <div className="w-full lg:w-5/12 mb-8 lg:mb-0 lg:border-r lg:border-gray-200 lg:pr-8">
    <div className="mb-8 text-center">
      <div className="w-16 h-16 mx-auto flex items-center justify-center bg-blue-100 text-blue-600 rounded-full mb-4">
        <MapPin className="w-8 h-8" />
      </div>
      <p className="text-gray-600 leading-relaxed">
        23-A, Sector –B,<br />
        Industrial Area, Govindpura,<br />
        Bhopal, Madhya Pradesh -462023
      </p>
    </div>
    <div className="mb-8 text-center">
      <div className="w-16 h-16 mx-auto flex items-center justify-center bg-green-100 text-green-600 rounded-full mb-4">
        <Phone className="w-8 h-8" />
      </div>
      <p className="text-gray-600 leading-relaxed">
        +91-7610447608 (Domestic)<br />
        +91-9993055536 (International)<br />
        +91-8269072002 (Project)
      </p>
    </div>
    <div className="text-center">
      <div className="w-16 h-16 mx-auto flex items-center justify-center bg-purple-100 text-purple-600 rounded-full mb-4">
        <Mail className="w-8 h-8" />
      </div>
      <p className="text-gray-600 leading-relaxed">Domestic: jitendra@teslaindia.co</p>
      <p className="text-gray-600 leading-relaxed">Export: mktg@teslaindia.co</p>
      <p className="text-gray-600 leading-relaxed">Project: projects@teslaindia.co</p>
    </div>
  </div>
);

// ContactForm Component
const ContactForm = ({ formData, handleChange, handleSubmit }) => (
  <div className="w-full lg:w-7/12">
    <form onSubmit={handleSubmit}>
      <h5 className="text-2xl font-bold mb-6 text-gray-800">Send us a message</h5>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <input 
            name="name" 
            type="text" 
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" 
            placeholder="Your Name" 
            value={formData.name} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div>
          <input 
            name="email" 
            type="email" 
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" 
            placeholder="Your Email" 
            value={formData.email} 
            onChange={handleChange} 
            required 
          />
        </div>
      </div>
      <div className="mb-4">
        <input 
          name="subject" 
          type="text" 
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" 
          placeholder="Subject" 
          value={formData.subject} 
          onChange={handleChange} 
          required 
        />
      </div>
      <div className="mb-4">
        <textarea 
          name="message" 
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none" 
          rows="5" 
          placeholder="Message" 
          value={formData.message} 
          onChange={handleChange} 
          required 
        />
      </div>
      <button 
        type="submit" 
        className="w-full py-3 bg-blue-900 text-white font-semibold rounded-lg hover:bg-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl"
      >
        Send Message
      </button>
    </form>
  </div>
);

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Form submitted:", formData);
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg md:text-xl text-blue-100">
            Get in touch with Tesla Transformers (India) Ltd. – We're here to help
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Address */}
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl transition">
            <div className="w-16 h-16 mx-auto flex items-center justify-center bg-blue-100 text-blue-600 rounded-full mb-6">
              <MapPin className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Address</h3>
            <p className="text-gray-600 leading-relaxed">
              Tesla Transformers (India) Ltd.<br />
              23-A, Sector B, Industrial Area,<br />
              Govindpura, Bhopal, MP - 462023
            </p>
          </div>

          {/* Phone */}
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl transition">
            <div className="w-16 h-16 mx-auto flex items-center justify-center bg-green-100 text-green-600 rounded-full mb-6">
              <Phone className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Phone</h3>
            <p className="text-gray-600 leading-relaxed">+91-75549-45666</p>
          </div>

          {/* Email */}
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl transition">
            <div className="w-16 h-16 mx-auto flex items-center justify-center bg-purple-100 text-purple-600 rounded-full mb-6">
              <Mail className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Email</h3>
            <p className="text-gray-600 leading-relaxed">tesla@teslaindia.co</p>
          </div>

          {/* Domestic Contact */}
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl transition">
            <div className="w-16 h-16 mx-auto flex items-center justify-center bg-green-100 text-green-600 rounded-full mb-6">
              <Phone className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Domestic Contact</h3>
            <p className="text-gray-600 leading-relaxed">+91-7610447608</p>
            <p className="text-lg font-semibold mt-2">Email <span className="text-gray-600 leading-relaxed text-sm">jitendra@teslaindia.co</span></p>
          </div>

          {/* International Contact */}
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl transition">
            <div className="w-16 h-16 mx-auto flex items-center justify-center bg-green-100 text-green-600 rounded-full mb-6">
              <Phone className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold mb-3">International Contact</h3>
            <p className="text-gray-600 leading-relaxed">+91-9993055536</p>
            <p className="text-lg font-semibold mt-2">Email <span className="text-gray-600 leading-relaxed text-sm">mktg@teslaindia.co</span></p>
          </div>

          {/* Project Contact */}
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl transition">
            <div className="w-16 h-16 mx-auto flex items-center justify-center bg-green-100 text-green-600 rounded-full mb-6">
              <Phone className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Project Contact</h3>
            <p className="text-gray-600 leading-relaxed">+91-8269072002</p>
            <p className="text-lg font-semibold mt-2">Email <span className="text-gray-600 leading-relaxed text-sm">projects@teslaindia.co</span></p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Contact For Any Query</h2>
              <div className="w-20 h-1 bg-blue-900 mx-auto"></div>
            </div>

            <div className="flex flex-wrap lg:flex-nowrap gap-8">
              <ContactInfo />
              <ContactForm formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} />
            </div>
          </div>
        </div>
      </section>

      {/* Google Map Embed */}
      <section className="relative w-full max-w-6xl mx-auto my-16 rounded-2xl overflow-hidden shadow-xl border border-gray-200">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3665.5010565565726!2d77.44492887509935!3d23.261236679007197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c43d5781c8303%3A0x9e0ab25498a23bfb!2sTesla%20Transformers%20(India)%20Ltd!5e0!3m2!1sen!2sin!4v1749923165118!5m2!1sen!2sin"
          className="w-full h-[450px] border-0"
          allowFullScreen={true}
          loading="lazy"
        ></iframe>

        {/* Location Highlight Overlay */}
        <div className="absolute top-4 left-4 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg">
          📍 Tesla Transformers (India) Ltd.
        </div>
      </section>

      <Footer />
    </div>
  )
}
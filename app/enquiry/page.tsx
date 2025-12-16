

'use client';

import { useEffect, useState } from "react";
import { FaUser, FaTools, FaEnvelope, FaPhoneAlt, FaBolt } from "react-icons/fa";
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

// PageTitle Component with Modern Design
const PageTitle = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative w-full pb-5 pt-5 min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 ">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }} />
      
      {/* Content */}
      <div className={`relative z-10 max-w-5xl mx-auto px-6 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Icon */}
        {/* <div className="inline-flex items-center justify-center w-20 h-20 mb-6 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl shadow-2xl animate-scale-in">
          <FaBolt className="text-3xl text-white" />
        </div> */}

        {/* Title */}
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight animate-fade-in-up">
          Enquiry at{' '}
          <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent animate-pulse">
            Tesla India
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-blue-100 mb-4 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Committed to delivering cutting-edge energy solutions and exceptional customer experiences
        </p>

        {/* Tagline */}
        <div className="inline-block px-6 py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <p className="text-cyan-300 font-semibold text-lg">
            "Empowering India with Innovation, One Enquiry at a Time"
          </p>
        </div>

        {/* Decorative Line */}
        <div className="mt-12 flex items-center justify-center gap-3 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-blue-400" />
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-blue-400" />
        </div>
      </div>

      {/* Scroll Indicator */}
      {/* <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-blue-400/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-blue-400 rounded-full animate-pulse" />
        </div>
      </div> */}
    </section>
  );
};

// PersonalDetails Component
const PersonalDetails = ({ formData, handleChange }) => (
  <div className="w-full md:w-1/2 p-3">
    <div className="bg-white rounded-xl shadow-lg border border-gray-100 hover-lift">
      <div className="p-6">
        <h5 className="text-xl font-semibold mb-4 pb-3 border-b-2 border-blue-500 text-gray-700 flex items-center gap-2">
          <FaUser className="text-blue-600" /> Personal Details
        </h5>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { label: "Full Name", name: "fullName", required: true },
            { label: "Designation", name: "designation" },
            { label: "Organization", name: "organization" },
            { label: "Line of Business", name: "businessLine" },
            { label: "Phone", name: "phone" },
            { label: "Country", name: "country" },
            { label: "Email", name: "email", type: "email", required: true },
            { label: "Website", name: "website" },
          ].map(({ label, name, type, required }) => (
            <div key={name} className={name === "fullName" || name === "email" ? "md:col-span-2" : ""}>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {label} {required && <span className="text-red-500">*</span>}
              </label>
              <input
                type={type || "text"}
                name={name}
                value={formData[name] || ""}
                onChange={handleChange}
                placeholder={label}
                required={required}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
            </div>
          ))}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">Your Message</label>
            <textarea
              name="message"
              rows={4}
              placeholder="Tell us about your requirements..."
              value={formData.message || ""}
              onChange={handleChange}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
);

// TransformerSpecification Component
const TransformerSpecification = ({ formData, handleChange }) => (
  <div className="w-full md:w-1/2 p-3">
    <div className="bg-white rounded-xl shadow-lg border border-gray-100 hover-lift">
      <div className="p-6">
        <h5 className="text-xl font-semibold mb-4 pb-3 border-b-2 border-blue-500 text-gray-700 flex items-center gap-2">
          <FaTools className="text-blue-600" /> Transformer Specification
        </h5>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { label: "Consultant", name: "consultant" },
            { label: "Project", name: "project" },
            { label: "Rating (kVA/mVA)", name: "rating" },
            { label: "Voltage Ratio", name: "voltageratio" },
            { label: "Quantity", name: "quantity" },
            { label: "Vector Group", name: "vectorgroup" },
            { label: "Tapping Range", name: "tappingrange" },
            { label: "Tap-Changer", name: "tapchanger" },
            { label: "Steps", name: "steps" },
            { label: "Temperature Rise (Oil/Wdg)", name: "temperatureriseoilwdg" },
            { label: "No Load Loss", name: "noloadloss" },
            { label: "Full Load Loss", name: "fullloadloss" },
            { label: "Impedance at 75°C", name: "impedanceat75c", fullWidth: true },
          ].map(({ label, name, fullWidth }) => (
            <div key={name} className={fullWidth ? "md:col-span-2" : ""}>
              <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
              <input
                type="text"
                name={name}
                placeholder={label}
                value={formData[name] || ""}
                onChange={handleChange}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

// ContactCards Component
const ContactCards = () => (
  <div className="mt-12 px-3">
    <div className="text-center mb-8">
      <h3 className="text-3xl font-bold text-gray-800 mb-3">Get In Touch</h3>
      <p className="text-gray-600 text-lg">Feel free to reach out to us for any inquiries or questions</p>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {[
        { title: "Domestic Contact", phone: "+91-7610447608", email: "jitendra@teslaindia.co" },
        { title: "International Contact", phone: "+91-9993055536", email: "mktg@teslaindia.co" },
        { title: "Project Contact", phone: "+91-8269072002", email: "projects@teslaindia.co" },
      ].map((contact, idx) => (
        <div key={idx} className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl shadow-lg border border-blue-100 p-6 hover-lift scroll-fade-up" style={{ transitionDelay: `${idx * 100}ms` }}>
          <h5 className="text-xl font-bold text-blue-700 mb-4">{contact.title}</h5>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-gray-700">
              <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <FaPhoneAlt className="text-white text-sm" />
              </div>
              <span className="font-medium">{contact.phone}</span>
            </div>
            <div className="flex items-center gap-3 text-gray-700">
              <div className="w-10 h-10 bg-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <FaEnvelope className="text-white text-sm" />
              </div>
              <span className="font-medium break-all">{contact.email}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

// Main Enquiry Component
const Enquiry = () => {
  const initialFormData = {
    fullName: "", designation: "", organization: "", businessLine: "",
    phone: "", country: "", email: "", website: "", message: "",
    consultant: "", project: "", rating: "", voltageratio: "",
    quantity: "", vectorgroup: "", tappingrange: "", tapchanger: "",
    steps: "", temperatureriseoilwdg: "", noloadloss: "", fullloadloss: "",
    impedanceat75c: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [loading, setLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.scroll-fade-up').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setSubmitStatus(null);

    if (!formData.fullName || !formData.email) {
      setSubmitStatus({ type: 'error', message: 'Please fill in your full name and email.' });
      setLoading(false);
      return;
    }

    // Simulating API call - replace with actual endpoint
    setTimeout(() => {
      setSubmitStatus({ type: 'success', message: 'Enquiry submitted successfully! We\'ll get back to you soon.' });
      setFormData(initialFormData);
      setLoading(false);
    }, 1500);
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-blue-50">
      <Header />
      <PageTitle />
      
      <div className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
            {/* Header */}
            <div className="text-center mb-12 scroll-fade-up">
              <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4 uppercase tracking-wider">
                Enquiry Form
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Submit Your Enquiry</h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Please fill out the form below and our team will get in touch with you shortly
              </p>
            </div>

            {/* Status Message */}
            {submitStatus && (
              <div className={`mb-6 p-4 rounded-lg ${submitStatus.type === 'success' ? 'bg-green-50 text-green-800 border border-green-200' : 'bg-red-50 text-red-800 border border-red-200'}`}>
                {submitStatus.message}
              </div>
            )}

            {/* Form */}
            <div onSubmit={handleSubmit}>
              <div className="flex flex-wrap -mx-3">
                <PersonalDetails formData={formData} handleChange={handleChange} />
                <TransformerSpecification formData={formData} handleChange={handleChange} />
              </div>

              {/* Submit Button */}
              <div className="text-center mt-8">
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={loading}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <FaEnvelope />
                  {loading ? 'Submitting...' : 'Submit Enquiry'}
                </button>
              </div>
            </div>

            <ContactCards />
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default Enquiry;
'use client';

import { useEffect, useState } from "react";
import { FiCheckCircle, FiUpload } from "react-icons/fi";
import { BiBriefcase, BiEnvelope } from "react-icons/bi";
import { FaRocket, FaUsers, FaLightbulb } from "react-icons/fa";
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

// PageTitle Component with Modern Design
const PageTitle = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative w-full pt-5 pb-5 min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      {/* Animated Background Pattern */}
    
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          // backgroundImage: `linear-gradient(30deg, #ffffff 12%, transparent 12.5%, transparent 87%, #ffffff 87.5%, #ffffff),
          // linear-gradient(150deg, #ffffff 12%, transparent 12.5%, transparent 87%, #ffffff 87.5%, #ffffff),
          // linear-gradient(30deg, #ffffff 12%, transparent 12.5%, transparent 87%, #ffffff 87.5%, #ffffff),
          // linear-gradient(150deg, #ffffff 12%, transparent 12.5%, transparent 87%, #ffffff 87.5%, #ffffff)`,
          backgroundSize: '80px 140px',
          backgroundPosition: '0 0, 0 0, 40px 70px, 40px 70px'
        }} />
      </div>

      {/* Floating Gradient Orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-purple-500 rounded-full  filter blur-3xl opacity-20 animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96  rounded-full  filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 w-96 h-96  rounded-full  filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '4s' }} />
      
      {/* Content */}
      <div className={` relative z-10 max-w-6xl mx-auto  p-10 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Icon Badge */}
        {/* <div className="inline-flex items-center justify-center w-24 h-24 mb-8 bg-gradient-to-br from-purple-500 via-pink-500 to-indigo-500 rounded-3xl shadow-2xl animate-scale-in">
          <FaRocket className="text-4xl text-white" />
        </div> */}

        {/* Title */}
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight animate-fade-in-up">
          Careers at{' '}
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
            Tesla India
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-purple-100 mb-6 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Tesla Transformers (India) Limited invites passionate professionals to shape energy excellence
        </p>

        {/* Tagline Card */}
        <div className="inline-block px-8 py-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-xl animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <p className="text-pink-300 font-bold text-xl">
            "Your Talent. Our Technology. A Brighter Tomorrow."
          </p>
        </div>

        {/* Feature Pills */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-10 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          {[
            { icon: FaUsers, text: "Collaborative Culture" },
            { icon: FaLightbulb, text: "Innovation Driven" },
            { icon: FaRocket, text: "Career Growth" }
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-2 px-5 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <item.icon className="text-purple-300" />
              <span className="text-white font-medium">{item.text}</span>
            </div>
          ))}
        </div>

        {/* Decorative Line */}
        <div className="mt-12 flex items-center justify-center gap-3 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <div className="h-px w-20 bg-gradient-to-r from-transparent to-purple-400" />
          <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
          <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse" style={{ animationDelay: '0.3s' }} />
          <div className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse" style={{ animationDelay: '0.6s' }} />
          <div className="h-px w-20 bg-gradient-to-l from-transparent to-purple-400" />
        </div>
      </div>

      {/* Scroll Indicator */}
      {/* <div className="pt-5 absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-purple-400/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-purple-400 rounded-full animate-pulse" />
        </div>
      </div> */}
    </section>
  );
};

// Contact Info Component
const ContactInfo = () => {
  return (
    <div className="w-full lg:w-5/12 mb-8 lg:mb-0">
      <div className="space-y-8">
        {/* Open Positions Card */}
        <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-8 shadow-lg hover-lift border border-purple-100">
          <div className="flex justify-center mb-4">
            <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center shadow-xl">
              <BiBriefcase className="text-4xl text-white" />
            </div>
          </div>
          <h5 className="text-2xl font-bold text-gray-800 mb-3 text-center">Open Positions</h5>
          <p className="text-gray-600 text-center leading-relaxed">
            Explore job opportunities and join our innovative team building the future of energy solutions.
          </p>
        </div>

        {/* Apply Now Card */}
        <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-8 shadow-lg hover-lift border border-pink-100">
          <div className="flex justify-center mb-4">
            <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-xl">
              <BiEnvelope className="text-4xl text-white" />
            </div>
          </div>
          <h5 className="text-2xl font-bold text-gray-800 mb-3 text-center">Apply Now</h5>
          <p className="text-gray-600 text-center mb-4">Email your resume to:</p>
          <div className="bg-white rounded-lg p-4 border border-pink-200">
            <p className="text-pink-600 font-bold text-lg text-center">hr@teslaindia.co</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Application Form Component
const ApplicationForm = ({ formData, handleChange, handleFileChange, handleSubmit, loading, submitStatus }) => {
  return (
    <div className="w-full lg:w-7/12">
      <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
        <div className="mb-8 text-center">
          <h4 className="text-3xl font-bold text-gray-800 mb-2">Submit Your Resume</h4>
          <p className="text-gray-600">Fill in your details and upload your resume to apply</p>
        </div>

        {/* Status Message */}
        {submitStatus && (
          <div className={`mb-6 p-4 rounded-lg flex items-center gap-3 ${
            submitStatus.type === 'success' 
              ? 'bg-green-50 text-green-800 border border-green-200' 
              : 'bg-red-50 text-red-800 border border-red-200'
          }`}>
            {submitStatus.type === 'success' && <FiCheckCircle className="text-2xl" />}
            <span>{submitStatus.message}</span>
          </div>
        )}

        <div className="space-y-5">
          {/* Name and Email Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
              />
            </div>
          </div>

          {/* Position */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Position Interested In <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="position"
              placeholder="e.g., Electrical Engineer, Project Manager"
              value={formData.position}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
            />
          </div>

          {/* Cover Letter */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Cover Letter
            </label>
            <textarea
              name="coverLetter"
              rows={5}
              placeholder="Tell us why you'd be a great fit for this role..."
              value={formData.coverLetter}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none"
            />
          </div>

          {/* Resume Upload */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Upload Your Resume (PDF) <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                type="file"
                name="resume"
                accept=".pdf"
                onChange={handleFileChange}
                required
                className="w-full px-4 py-3 border-2 border-dashed border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-purple-100 file:text-purple-700 file:font-semibold hover:file:bg-purple-200 cursor-pointer"
              />
              <FiUpload className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl pointer-events-none" />
            </div>
            {formData.resume && (
              <p className="mt-2 text-sm text-green-600 flex items-center gap-2">
                <FiCheckCircle /> {formData.resume.name}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="button"
            onClick={handleSubmit}
            disabled={loading}
            className="w-full py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                Submitting...
              </>
            ) : (
              <>
                <BiEnvelope className="text-xl" />
                Submit Application
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

// Career Section Component
const CareerSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    position: "",
    coverLetter: "",
    resume: null,
  });
  const [loading, setLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData((prev) => ({
        ...prev,
        resume: file,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setSubmitStatus(null);

    // Validation
    if (!formData.name || !formData.email || !formData.position || !formData.resume) {
      setSubmitStatus({ 
        type: 'error', 
        message: 'Please fill in all required fields and upload your resume.' 
      });
      setLoading(false);
      return;
    }

    // Simulating API call - replace with actual endpoint
    setTimeout(() => {
      setSubmitStatus({ 
        type: 'success', 
        message: 'Application submitted successfully! We\'ll review your resume and get back to you soon.' 
      });
      setFormData({
        name: "",
        email: "",
        position: "",
        coverLetter: "",
        resume: null,
      });
      // Reset file input
      const fileInput = document.querySelector('input[type="file"]');
      if (fileInput) fileInput.value = '';
      setLoading(false);
    }, 2000);
  };

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

    document.querySelectorAll('.scroll-fade-up, .hover-lift').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="py-20 px-4 bg-gradient-to-b from-gray-50 to-purple-50">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 scroll-fade-up">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-bold mb-4 uppercase tracking-wider">
              Career Opportunities
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Be Part of Tesla Powers' Growth Story
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Join a team of innovators transforming India's energy landscape with cutting-edge transformer technology
            </p>
          </div>

          {/* Main Content */}
          <div className="flex flex-wrap lg:flex-nowrap gap-8">
            <ContactInfo />
            <ApplicationForm 
              formData={formData} 
              handleChange={handleChange}
              handleFileChange={handleFileChange}
              handleSubmit={handleSubmit}
              loading={loading}
              submitStatus={submitStatus}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Component
const Careers = () => {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      <PageTitle />
      <CareerSection />
      <Footer />
    </main>
  );
};

export default Careers;
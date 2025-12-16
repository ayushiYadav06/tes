import { Shield, Lock, Eye, FileText, Users, Mail, Phone, MapPin } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function PrivacyPolicy() {
  return (

    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
          <Header />

      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-300 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
          <div className="flex items-center justify-center mb-6">
            <Shield className="h-16 w-16 text-blue-300" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Privacy Policy
          </h1>
          <p className="text-xl text-center text-blue-100 max-w-3xl mx-auto">
            Tesla Transformers (India) Ltd. is committed to protecting your privacy and ensuring the security of your personal information.
          </p>
          <p className="text-center text-blue-200 mt-4">
            Last Updated: November 11, 2025
          </p>
        </div>
      </div>

      {/* Main Content */}
      {/* <div className="  px-4 sm:px-6 lg:px-8 py-16 bg-blue-100"> */}
      <div className="relative min-h-screen px-4 sm:px-6 lg:px-8 py-16 overflow-hidden">

  {/* 🔥 Animated Background Image */}
  <div
    className="absolute inset-0 bg-cover bg-center bg-fixed zoom-bg pointer-events-none"
    style={{
      backgroundImage: "url('/landscapeeight.jpg')",
      filter: "brightness(0.85) blur(1.5px)"
    }}
  />

  {/* 🔥 Soft Overlay */}
  {/* <div className="absolute inset-0 bg-white/40 pointer-events-none" /> */}
  <div className="absolute inset-0 bg-black/30 pointer-events-none" />


  {/* 🔥 Actual Content Wrapper */}
  <div className="relative z-10">

        {/* Introduction */}
        <section className="mb-12 bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
          <div className="flex items-center mb-4">
            <FileText className="h-6 w-6 text-blue-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">Introduction</h2>
          </div>
          <p className="text-gray-700 leading-relaxed">
            This Privacy Policy describes how Tesla Transformers (India) Limited ("we," "us," or "our") collects, uses, and protects the personal information you provide when you visit our website, use our services, or interact with us. We respect your privacy and are committed to maintaining the confidentiality and security of your personal data in accordance with applicable Indian laws, including the Information Technology Act, 2000 and the Digital Personal Data Protection Act, 2023.
          </p>
        </section>

        {/* Information We Collect */}
        <section className="mb-12 bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
          <div className="flex items-center mb-4">
            <Eye className="h-6 w-6 text-blue-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">Information We Collect</h2>
          </div>
          <div className="space-y-6 text-gray-700">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Personal Information</h3>
              <p className="leading-relaxed">
                We may collect personal information that you voluntarily provide to us, including but not limited to your name, email address, phone number, company name, job title, postal address, and any other information you choose to provide when you contact us, request a quote, or engage with our services.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Technical Information</h3>
              <p className="leading-relaxed">
                When you visit our website, we automatically collect certain technical information such as your IP address, browser type, device information, operating system, referring URLs, pages viewed, and the date and time of your visit. This information is collected through cookies and similar tracking technologies.
              </p>
            </div>
            {/* <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Business Information</h3>
              <p className="leading-relaxed">
                If you are a client, supplier, or business partner, we may collect information related to our business relationship, including transaction details, contract information, and communication records.
              </p>
            </div> */}
          </div>
        </section>

        {/* How We Use Your Information */}
        <section className="mb-12 bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
          <div className="flex items-center mb-4">
            <Users className="h-6 w-6 text-blue-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">How We Use Your Information</h2>
          </div>
          <div className="text-gray-700 leading-relaxed space-y-3">
            <p>We use the collected information for the following purposes:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>To respond to your inquiries and provide customer support</li>
              <li>To process your orders and deliver our products and services</li>
              <li>To communicate with you about our offerings, updates, and promotional materials</li>
              <li>To improve our website, products, and services</li>
              <li>To analyze usage patterns and optimize user experience</li>
              <li>To comply with legal obligations and protect our rights</li>
              <li>To detect, prevent, and address technical issues or fraudulent activities</li>
              <li>To maintain business records and fulfill contractual obligations</li>
            </ul>
          </div>
        </section>

        {/* Data Security */}
        <section className="mb-12 bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
          <div className="flex items-center mb-4">
            <Lock className="h-6 w-6 text-blue-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">Data Security</h2>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4 text-gray-700">
            <li>Encryption of data in transit and at rest</li>
            <li>Regular security assessments and audits</li>
            <li>Restricted access to personal information on a need-to-know basis</li>
            <li>Employee training on data protection and privacy practices</li>
            <li>Secure storage and backup systems</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mt-4">
            However, please note that no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute security.
          </p>
        </section>

        {/* Information Sharing */}
        <section className="mb-12 bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Information Sharing and Disclosure</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:
          </p>
          <div className="space-y-3 text-gray-700">
            <p><span className="font-semibold">Service Providers:</span> We may share information with trusted third-party service providers who assist us in operating our website, conducting business, or servicing you, provided they agree to keep this information confidential.</p>
            <p><span className="font-semibold">Legal Requirements:</span> We may disclose your information if required by law or in response to valid requests by public authorities.</p>
            <p><span className="font-semibold">Business Transfers:</span> In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.</p>
            {/* <p><span className="font-semibold">With Your Consent:</span> We may share your information with third parties when you have given us explicit consent to do so.</p> */}
          </div>
        </section>

        {/* Your Rights */}
        <section className="mb-12 bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Under applicable data protection laws, you have the following rights regarding your personal information:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4 text-gray-700">
            <li><span className="font-semibold">Right to Access:</span> You can request access to the personal information we hold about you</li>
            {/* <li><span className="font-semibold">Right to Correction:</span> You can request correction of inaccurate or incomplete information</li> */}
            {/* <li><span className="font-semibold">Right to Erasure:</span> You can request deletion of your personal information under certain circumstances</li>
            <li><span className="font-semibold">Right to Restriction:</span> You can request restriction of processing of your information</li>
            <li><span className="font-semibold">Right to Object:</span> You can object to the processing of your personal information</li>
            <li><span className="font-semibold">Right to Withdraw Consent:</span> Where processing is based on consent, you can withdraw it at any time</li>
          */}
          </ul>
          <p className="text-gray-700 leading-relaxed mt-4">
            To exercise any of these rights, please contact us using the information provided below.
          </p>
        </section>

        {/* Cookies */}
        {/* <section className="mb-12 bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookies and Tracking Technologies</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Our website uses cookies and similar tracking technologies to enhance your browsing experience and collect information about how you use our site. Cookies are small text files stored on your device that help us remember your preferences and understand site usage.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            You can control cookies through your browser settings and choose to disable them. However, please note that disabling cookies may affect the functionality of our website and your ability to access certain features.
          </p>
        </section> */}

        {/* Data Retention */}
        <section className="mb-12 bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Retention</h2>
          <p className="text-gray-700 leading-relaxed">
            We retain your personal information only for as long as necessary to fulfill the purposes for which it was collected, comply with legal obligations, resolve disputes, and enforce our agreements. When information is no longer needed, we will securely delete or anonymize it in accordance with our data retention policies and applicable laws.
          </p>
        </section>

        {/* Children's Privacy */}
        {/* <section className="mb-12 bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Children's Privacy</h2>
          <p className="text-gray-700 leading-relaxed">
            Our website and services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you are a parent or guardian and believe that your child has provided us with personal information, please contact us immediately, and we will take steps to delete such information.
          </p>
        </section> */}

        {/* Changes to Policy */}
        <section className="mb-12 bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to This Privacy Policy</h2>
          <p className="text-gray-700 leading-relaxed">
            We may update this Privacy Policy from time to time to reflect changes in our practices, legal requirements, or for other operational reasons. We will notify you of any material changes by posting the updated policy on our website with a revised "Last Updated" date. We encourage you to review this policy periodically to stay informed about how we protect your information.
          </p>
        </section>

        {/* Contact Information */}
        {/* <section className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl shadow-lg p-8 border border-blue-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Us</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
          </p>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <MapPin className="h-5 w-5 text-blue-600 flex-shrink-0 mt-1" />
              <div className="text-gray-700">
                <p className="font-semibold">Tesla Transformers (India) Ltd.</p>
                <p>23-A, Sector B, Industrial Area, Govindpura</p>
                <p>Bhopal, Madhya Pradesh - 462023, India</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="h-5 w-5 text-blue-600 flex-shrink-0" />
              <span className="text-gray-700">+91-75549-45666</span>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="h-5 w-5 text-blue-600 flex-shrink-0" />
              <span className="text-gray-700">tesla@teslaindia.co</span>
            </div>
          </div>
        </section> */}

        {/* Consent */}
        <div className="mt-12 text-center">
          <p className="text-white leading-relaxed max-w-3xl mx-auto font-bold">
            By using our website and services, you acknowledge that you have read, understood, and agree to be bound by this Privacy Policy.
          </p>
        </div>
        </div>


        
      </div>
        <Footer />

    </div>
  )
}
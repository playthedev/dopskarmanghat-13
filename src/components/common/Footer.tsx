import { Link } from 'react-router-dom';
import { schoolLogo } from '../../assets';
import { useState } from 'react';
import Modal from './Modal';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [showTerms, setShowTerms] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showCancellation, setShowCancellation] = useState(false);

  return (
    <>
      <footer className="bg-white pt-8 sm:pt-16 pb-6 sm:pb-8 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
            {/* Logo Section */}
            <div className="col-span-1">
              <img
                src={schoolLogo}
                alt="Discoveri Oaks Public School"
                className="h-24 sm:h-32 mb-6 sm:mb-8"
              />
            </div>

            {/* Quick Links */}
            <div className="col-span-1">
              <h3 className="text-lg sm:text-xl font-bold text-[#1B2B65] mb-4 sm:mb-6">Quick Links</h3>
              <ul className="space-y-2 sm:space-y-3">
                {/* <li><Link to="/about" className="text-gray-600 hover:text-[#F4B41A]">About Us</Link></li> */}
                <li><Link to="/academics#early" className="text-gray-600 hover:text-[#F4B41A]">Learning</Link></li>
                {/* <li><Link to="/campus" className="text-gray-600 hover:text-[#F4B41A]">Our Campus</Link></li> */}
                <li><Link to="/admissions" className="text-gray-600 hover:text-[#F4B41A]">Admissions</Link></li>
                {/* <li><Link to="/careers" className="text-gray-600 hover:text-[#F4B41A]">Careers</Link></li> */}
              </ul>

              <div className="mt-6 sm:mt-8">
                <h3 className="text-lg sm:text-xl font-bold text-[#1B2B65] mb-4 sm:mb-6">Social Media</h3>
                <div className="flex space-x-3 sm:space-x-4">
                  <a href="https://www.facebook.com/discoverioakspublicschool" target="_blank" className="bg-[#1B2B65] text-white p-2 rounded-full hover:bg-[#F4B41A] transition-colors flex items-center justify-center w-10 h-10">
                    <i className="fab fa-facebook-f text-lg"></i>
                  </a>
                  <a href="https://www.instagram.com/discoverioakspublicschool?igsh=MWdrcjJpN3pmbTV4cQ==" target="_blank" className="bg-[#1B2B65] text-white p-2 rounded-full hover:bg-[#F4B41A] transition-colors flex items-center justify-center w-10 h-10">
                    <i className="fab fa-instagram text-lg"></i>
                  </a>
                  <a href="mailto:info.dopskmgt@gmail.com" className="bg-[#1B2B65] text-white p-2 rounded-full hover:bg-[#F4B41A] transition-colors flex items-center justify-center w-10 h-10">
                    <i className="fas fa-envelope text-lg"></i>
                  </a>
                  <a href="https://wa.me/918106463683" target="_blank" className="bg-[#1B2B65] text-white p-2 rounded-full hover:bg-[#F4B41A] transition-colors flex items-center justify-center w-10 h-10">
                    <i className="fab fa-whatsapp text-lg"></i>
                  </a>
                  <a href="https://www.linkedin.com/company/discoveri-oaks-public-school/" target="_blank" className="bg-[#1B2B65] text-white p-2 rounded-full hover:bg-[#F4B41A] transition-colors flex items-center justify-center w-10 h-10">
                    <i className="fab fa-linkedin-in text-lg"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="col-span-1">
              <h3 className="text-lg sm:text-xl font-bold text-[#1B2B65] mb-4 sm:mb-6">Contact Info</h3>

              {/* Phone Numbers - Click to Call */}
              <a href="tel:+914049503596" className="block text-[#F4B41A] font-medium mb-2 hover:underline">
                (+91) 4049-503-596
              </a>
              <a href="tel:+918106463683" className="block text-[#F4B41A] font-medium mb-8 hover:underline">
                (+91) 81064 63683
              </a>

              <h3 className="text-lg sm:text-xl font-bold text-[#1B2B65] mb-4 sm:mb-6">WhatsApp</h3>
              {/* WhatsApp Link */}
              <a
                href="https://wa.me/918106463683"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-[#F4B41A] font-medium mb-8 hover:underline"
              >
                (+91) 81064 63683
              </a>

              <h3 className="text-lg sm:text-xl font-bold text-[#1B2B65] mb-4 sm:mb-6">Email</h3>
              {/* Email Link */}
              <a
                href="mailto:info.dopskmgt@gmail.com"
                className="block text-[#F4B41A] font-medium hover:underline"
              >
                info.dopskmgt@gmail.com
              </a>
            </div>

            {/* Map and Address */}
            <div className="col-span-1">
              <div className="h-[200px] w-full mb-4 sm:mb-6">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3808.4714395803503!2d78.5211503!3d17.3410334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9972c769a77f%3A0xad90cd9178e67bd8!2sDiscoveri%20Oaks%20Public%20School!5e0!3m2!1sen!2sin!4v1742138380294!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#1B2B65] mb-3 sm:mb-4">Address</h3>
              <p className="text-gray-600">
                Road #1, Sai Ram Nagar Colony,<br />
                Karmanghat,<br />
                Telangana 500079
              </p>
            </div>
          </div>

          {/* Copyright Section */}
          <div className="border-t border-gray-200 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center">
            <p className="text-sm sm:text-base text-gray-600">
              Copyright © {currentYear}. All Rights Reserved. Discover Oaks Educational Society.
            </p>
            <div className="mt-3 sm:mt-4 space-x-2 sm:space-x-4 text-sm sm:text-base">
              <button onClick={() => setShowTerms(true)} className="text-gray-600 hover:text-[#F4B41A]">
                Terms and Conditions
              </button>
              <span className="text-gray-400">|</span>
              <button onClick={() => setShowPrivacy(true)} className="text-gray-600 hover:text-[#F4B41A]">
                Privacy Policy
              </button>
              <span className="text-gray-400">|</span>
              <button onClick={() => setShowCancellation(true)} className="text-gray-600 hover:text-[#F4B41A]">
                Cancellation & Refund
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Terms Modal */}
      <Modal
        isOpen={showTerms}
        onClose={() => setShowTerms(false)}
        title="Terms and Conditions"
      >
        <div className="prose prose-sm max-w-none prose-headings:text-[#1B2B65] prose-h2:text-2xl prose-h3:text-xl prose-p:text-gray-600 prose-li:text-gray-600">
          <div className="bg-gradient-to-r from-[#1B2B65]/10 to-transparent p-4 rounded-lg mb-6">
            <p className="font-medium text-[#1B2B65]">Last Updated: {currentYear}</p>
          </div>

          <h3 className='font-semibold text-[#222]'>1. Acceptance of Terms</h3>
          <p>By accessing and using the services of Discoveri Oaks Public School, you acknowledge and agree to these terms and conditions.</p>

          <h3 className='font-semibold text-[#222]'>2. Admission and Enrollment</h3>
          <ul>
            <li>Admission is subject to availability of seats and successful completion of the admission process</li>
            <li>The school reserves the right to accept or reject applications</li>
            <li>All submitted documents must be genuine and valid</li>
            <li>Admission fees once paid are non-refundable</li>
          </ul>

          <h3 className='font-semibold text-[#222]'>3. Fee Policy</h3>
          <ul>
            <li>School fees must be paid within the specified deadlines</li>
            <li>Late payment may incur additional charges</li>
            <li>Fee structure is subject to annual revision</li>
            <li>Term fees once paid are non-refundable</li>
          </ul>

          <h3 className='font-semibold text-[#222]'>4. Code of Conduct</h3>
          <ul>
            <li>Students must adhere to the school's disciplinary policies</li>
            <li>Parents must support the school's educational philosophy</li>
            <li>Regular attendance is mandatory</li>
            <li>School uniform and dress code must be followed</li>
          </ul>

          <h3 className='font-semibold text-[#222]'>5. Academic Standards</h3>
          <ul>
            <li>Students must maintain minimum academic standards</li>
            <li>Parents are expected to monitor academic progress</li>
            <li>Participation in assessments is mandatory</li>
          </ul>

          <h3 className='font-semibold text-[#222]'>6. Communication</h3>
          <ul>
            <li>Parents must keep contact information updated</li>
            <li>Official communications will be through authorized channels</li>
            <li>Parents must attend scheduled parent-teacher meetings</li>
          </ul>

          <h3 className='font-semibold text-[#222]'>7. Termination of Services</h3>
          <p>The school reserves the right to terminate admission in cases of:</p>
          <ul>
            <li>Serious misconduct</li>
            <li>Non-payment of fees</li>
            <li>Violation of school policies</li>
          </ul>
        </div>
      </Modal>

      {/* Privacy Modal */}
      <Modal
        isOpen={showPrivacy}
        onClose={() => setShowPrivacy(false)}
        title="Privacy Policy"
      >
        <div className="prose prose-sm max-w-none">
          <div className="bg-gradient-to-r from-[#1B2B65]/10 to-transparent p-4 rounded-lg mb-6">
            <p className="font-medium text-[#1B2B65]">Last Updated: {currentYear}</p>
          </div>

          <h3 className='font-semibold text-[#222]'>1. Information We Collect</h3>
          <p>We collect information including:</p>
          <ul>
            <li>Personal identification information (Name, address, contact details)</li>
            <li>Student academic records</li>
            <li>Medical information</li>
            <li>Financial information for fee processing</li>
            <li>Photographs and videos of school activities</li>
          </ul>

          <h3 className='font-semibold text-[#222]'>2. How We Use Information</h3>
          <p>The collected information is used for:</p>
          <ul>
            <li>Administrative purposes</li>
            <li>Academic record keeping</li>
            <li>Communication with parents/guardians</li>
            <li>Emergency situations</li>
            <li>Legal compliance</li>
          </ul>

          <h3 className='font-semibold text-[#222]'>3. Information Security</h3>
          <ul>
            <li>We implement appropriate security measures</li>
            <li>Access to personal information is restricted</li>
            <li>Regular security assessments are conducted</li>
            <li>Data is stored securely with limited access</li>
          </ul>

          <h3 className='font-semibold text-[#222]'>4. Information Sharing</h3>
          <p>We may share information with:</p>
          <ul>
            <li>Educational authorities</li>
            <li>Medical professionals (when necessary)</li>
            <li>Third-party service providers (with consent)</li>
            <li>Law enforcement (when legally required)</li>
          </ul>

          <h3 className='font-semibold text-[#222]'>5. Parental Rights</h3>
          <ul>
            <li>Access to student records</li>
            <li>Request corrections to personal information</li>
            <li>Opt-out of certain data collection</li>
            <li>Receive copies of collected information</li>
          </ul>

          <h3 className='font-semibold text-[#222]'>6. Photography and Media</h3>
          <ul>
            <li>School events may be photographed or recorded</li>
            <li>Media may be used for school promotion</li>
            <li>Parents can opt-out of media usage</li>
          </ul>

          <h3 className='font-semibold text-[#222]'>7. Contact Information</h3>
          <p>For privacy-related queries, contact:</p>
          <p>Privacy Officer<br />
            Discoveri Oaks Public School<br />
            Email: info.dopskmgt@gmail.com<br />
            Phone: (+91) 4049-503-596</p>
        </div>
      </Modal>

      {/* Cancellation & Refund Modal */}
      <Modal
        isOpen={showCancellation}
        onClose={() => setShowCancellation(false)}
        title="Cancellation & Refund Policy"
      >
        <div className="space-y-6">
          {/* Hero Section */}
          <div className="bg-gradient-to-r from-[#1B2B65] to-[#2A3E8C] text-white p-6 rounded-xl">
            <p className="text-white/80">Last Updated: {currentYear}</p>
          </div>

          {/* Timeline Section */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-xl font-bold text-[#1B2B65] mb-4 border-b-2 border-[#F4B41A] pb-2">
              Refund Timeline
            </h3>
            <div className="space-y-4">
              {/* Timeline items */}
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 bg-[#1B2B65] text-white rounded-full flex items-center justify-center">
                    <i className="fas fa-calendar-alt"></i>
                  </div>
                  <div className="flex-1 w-0.5 bg-gray-200 my-2"></div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-[#1B2B65]">Before Academic Year Start</h4>
                  <p className="text-gray-600">Full refund minus processing fee (within 15 days of payment)</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 bg-[#F4B41A] text-white rounded-full flex items-center justify-center">
                    <i className="fas fa-clock"></i>
                  </div>
                  <div className="flex-1 w-0.5 bg-gray-200 my-2"></div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-[#1B2B65]">Within First Month</h4>
                  <p className="text-gray-600">75% refund of tuition fees</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center">
                    <i className="fas fa-times"></i>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-[#1B2B65]">After First Month</h4>
                  <p className="text-gray-600">No refund of tuition fees</p>
                </div>
              </div>
            </div>
          </div>

          {/* Process Section */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-xl font-bold text-[#1B2B65] mb-4 border-b-2 border-[#F4B41A] pb-2">
              Refund Process
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold text-[#1B2B65] mb-3 flex items-center gap-2">
                  <i className="fas fa-list-ol text-[#F4B41A]"></i>
                  Required Steps
                </h4>
                <ol className="list-decimal list-inside space-y-2 text-gray-600">
                  <li>Submit written application</li>
                  <li>Complete clearance process</li>
                  <li>Verify outstanding dues</li>
                  <li>Provide bank details</li>
                </ol>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold text-[#1B2B65] mb-3 flex items-center gap-2">
                  <i className="fas fa-clock text-[#F4B41A]"></i>
                  Processing Time
                </h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Processing time: 15 working days</li>
                  <li>• Bank transfer to original source</li>
                  <li>• Email notification on completion</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Non-Refundable Items */}
          <div className="bg-red-50 rounded-xl p-6">
            <h3 className="text-xl font-bold text-[#1B2B65] mb-4 border-b-2 border-red-200 pb-2 flex items-center gap-2">
              <i className="fas fa-exclamation-triangle text-red-500"></i>
              Non-Refundable Items
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {['Registration Fee', 'Admission Fee', 'Processing Fee', 'Annual Charges'].map((item) => (
                <div key={item} className="flex items-center gap-2 text-gray-600">
                  <i className="fas fa-times-circle text-red-500"></i>
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Special Cases */}
          <div className="bg-[#1B2B65]/5 rounded-xl p-6">
            <h3 className="text-xl font-bold text-[#1B2B65] mb-4 border-b-2 border-[#F4B41A] pb-2">
              Special Circumstances
            </h3>
            <div className="space-y-4">
              <p className="text-gray-600">
                The school management may consider special refund requests for:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-[#1B2B65] mb-2">Medical Emergencies</h4>
                  <p className="text-gray-600 text-sm">Requires valid medical documentation</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-[#1B2B65] mb-2">Relocation</h4>
                  <p className="text-gray-600 text-sm">Proof of relocation required</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-[#F4B41A]/10 rounded-xl p-6">
            <h3 className="text-xl font-bold text-[#1B2B65] mb-4">Need Help?</h3>
            <div className="flex items-center gap-4">
              <i className="fas fa-envelope text-[#F4B41A] text-2xl"></i>
              <div>
                <p className="text-gray-600">For any queries regarding refunds, please contact:</p>
                <a href="mailto:info.dopskmgt@gmail.com" className="text-[#1B2B65] font-semibold hover:text-[#F4B41A]">
                  info.dopskmgt@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Footer;

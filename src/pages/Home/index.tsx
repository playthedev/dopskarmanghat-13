import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AdmissionPopup from '../../components/AdmissionPopup';
import { Director, earlySection, HomeHero, middleSection, primarySection } from '../../assets';

const Home = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Show popup after 3 seconds of page load
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative">
      {/* Admission Strip */}
      <div className="bg-[#1B2B65] text-white py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div>
              <h2 className="text-2xl font-bold mb-2 md:mb-0">Admissions Open 2025-2026</h2>
              <p className="text-sm md:text-base">
                Unlock the Power Within, Inspire Brilliance: Where Education Shines.
              </p>
            </div>
            <button
              onClick={() => setShowPopup(true)}
              className="mt-4 md:mt-0 bg-[#F4B41A] text-white px-6 py-2 rounded cursor-pointer transition transform hover:-translate-y-1 hover:shadow-lg"
            >
              ENQUIRY NOW
            </button>
          </div>
        </div>
      </div>

      {/* Admission Popup */}
      <AdmissionPopup
        isOpen={showPopup}
        onClose={() => setShowPopup(false)}
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-[#1B2B65] mb-6">
                Empowering Minds, <br />
                <span className="text-[#F4B41A]">Shaping Futures</span>
               </h1>
              <p className="text-gray-600 text-md md:text-lg mb-8">
                Welcome to Discoveri Oaks Public School, where excellence meets innovation in education.
                We nurture young minds to become tomorrow's leaders.
              </p>
              <div className="space-x-4">
                <Link to="/admissions" className="bg-[#1B2B65] text-white px-8 py-3 rounded-lg hover:bg-[#F4B41A] transition-colors">
                  Apply Now
                </Link>
                <Link to="/academics" className="border-2 border-[#1B2B65] text-[#1B2B65] px-8 py-3 rounded-lg hover:bg-[#1B2B65] hover:text-white transition-colors">
                  Learn More
                </Link>
              </div>
            </motion.div>
            <div className="relative">
              <img
                src={HomeHero}
                alt="Students Learning"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-[#F4B41A] p-6 rounded-lg sm:p-4">
                <div className="text-4xl font-bold text-white">15+</div>
                <div className="text-white">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-[#1B2B65] mb-12">Why Choose Discoveri Oaks Public School?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg fade-in group relative overflow-hidden">
              <div className="w-16 h-16 bg-[#F4B41A] rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1B2B65] mb-3">Excellence in Education</h3>
              <p className="text-gray-600">Comprehensive curriculum designed to nurture academic excellence and personal growth.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg fade-in group relative overflow-hidden">
              <div className="w-16 h-16 bg-[#1B2B65] rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1B2B65] mb-3">Individual Attention</h3>
              <p className="text-gray-600">Small class sizes ensuring personalized attention and guidance for every student.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg fade-in group relative overflow-hidden">
              <div className="w-16 h-16 bg-[#F4B41A] rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1B2B65] mb-3">Modern Facilities</h3>
              <p className="text-gray-600">State-of-the-art infrastructure and modern learning tools for enhanced education.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Principal's Message Section */}
      <section className="py-20 bg-gray-50 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src={Director}
                alt="School Director"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-[#F4B41A] p-6 rounded-lg">
                <div className="text-xl font-bold text-white">Mr. Pramod Karnati</div>
                <div className="text-white">Director</div>
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-bold text-[#1B2B65] mb-6">Director's Message</h2>
              <p className="text-gray-600 text-md md:text-lg mb-6">
                At Discoveri Oaks Public School, we believe in nurturing not just academic excellence, but also character, creativity, and leadership. Our commitment is to provide an environment where every student can discover their potential and grow into confident, responsible individuals ready to make their mark in the world.
              </p>
              <p className="text-gray-600 text-md md:text-lg mb-6">
                We invite you to be part of our journey in shaping the leaders of tomorrow through innovative education and holistic development.
              </p>
              <p className="text-gray-600 text-md md:text-lg mb-6">
                Our approach blends traditional values with modern teaching methods, encouraging students to think critically, communicate effectively, and act with integrity.
              </p>
              <p className="text-gray-600 text-md md:text-lg mb-6">
                From well-rounded academics to extracurricular activities and community engagement, we strive to offer an enriching experience that builds lifelong learners and compassionate leaders.
              </p>
              <p className="text-gray-600 text-md md:text-lg mb-8">
                Join us at Discoveri Oaks Public School, where education is more than learning—it's about becoming.
              </p>
              <div className="flex items-center">
                <div>
                  <div className="font-bold text-[#1B2B65]">Mr. Pramod Karnati</div>
                  <div className="text-gray-600">Director,</div>
                  <div className="text-gray-600">Discoveri Oaks Group of Schools</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Programs Section */}
      <section className="py-20 bg-white relative z-10">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-block bg-pink-100 rounded-full px-6 py-2 mb-4">
              <span className="text-pink-600">OUR ACADEMICS</span>
            </div>
            <h2 className="text-4xl font-bold text-[#1B2B65] mb-4">Academic Excellence at Every Level</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our comprehensive academic programs are designed to challenge and inspire students, fostering critical thinking and a lifelong love for learning.
            </p>
          </div>

          {/* Programs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Early Years */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 overflow-hidden relative">
                <img src={earlySection} alt="Early Years" className="h-64 w-full object-cover"/>
                <span className="absolute top-4 left-4 bg-white rounded-full px-3 py-1 text-sm">Ages 3-5</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#1B2B65] mb-3">Early Years</h3>
                <p className="text-gray-600 mb-4">Nurturing young minds through play-based learning</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-[#F4B41A] rounded-full mr-2"></span>
                    Play-based learning
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-[#F4B41A] rounded-full mr-2"></span>
                    Social development
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-[#F4B41A] rounded-full mr-2"></span>
                    Creative activities
                  </li>
                </ul>
                <Link to="/academics#early" className="block w-full bg-[#F4B41A] hover:bg-opacity-90 text-white py-3 rounded-lg text-center">
                  Learn More
                </Link>
              </div>
            </div>

            {/* Primary School */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 overflow-hidden relative">
                <img src={primarySection} alt="Primary School" className="h-64 w-full object-cover"/>
                <span className="absolute top-4 left-4 bg-white rounded-full px-3 py-1 text-sm">Grades 1-5</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#1B2B65] mb-3">Primary School</h3>
                <p className="text-gray-600 mb-4">Building strong foundations in core subjects and essential skills</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-[#F4B41A] rounded-full mr-2"></span>
                    Foundational literacy and numeracy
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-[#F4B41A] rounded-full mr-2"></span>
                    Interactive learning
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-[#F4B41A] rounded-full mr-2"></span>
                    Project-based activities
                  </li>
                </ul>
                <Link to="/academics#primarye" className="block w-full bg-[#F4B41A] hover:bg-opacity-90 text-white py-3 rounded-lg text-center">
                  Learn More
                </Link>
              </div>
            </div>

            {/* Middle School */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 overflow-hidden relative">
                <img src={middleSection} alt="Middle School" className="h-64 w-full object-cover"/>
                <span className="absolute top-4 left-4 bg-white rounded-full px-3 py-1 text-sm">Grades 6-8</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#1B2B65] mb-3">Middle School</h3>
                <p className="text-gray-600 mb-4">Developing critical thinking and subject expertise</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-[#F4B41A] rounded-full mr-2"></span>
                    Advanced core subjects
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-[#F4B41A] rounded-full mr-2"></span>
                    STEM education
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-[#F4B41A] rounded-full mr-2"></span>
                    Leadership development
                  </li>
                </ul>
                <Link to="/academics#middle" className="block w-full bg-[#F4B41A] hover:bg-opacity-90 text-white py-3 rounded-lg text-center">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative z-10 bg-[#1B2B65]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Join Our Community?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Take the first step towards providing your child with an exceptional educational experience.
          </p>
          <Link to="/admissions" className="bg-[#F4B41A] text-white px-8 py-3 rounded-lg hover:bg-opacity-90 transition-colors">
            Apply Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
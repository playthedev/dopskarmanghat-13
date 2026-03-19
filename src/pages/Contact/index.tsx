import React, { useState } from 'react';
import Hero from '../../components/Hero';
import { contactHero } from '../../assets';
import { motion } from 'framer-motion';
import { submitForm } from '../../utils/api';
import { ContactForm as ContactFormType } from '../../types/forms';

interface ContactFormData extends ContactFormType {}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await submitForm('contact', formData);
      if (response.success) {
        alert('Message sent successfully!');
        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      }
    } catch (error) {
      alert('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <Hero
        title="Contact Us"
        backgroundImage={contactHero}
      />

      {/* Contact Cards Section */}
      <div className="container mx-auto px-4 -mt-16 sm:-mt-20 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
          {/* Location Card */}
          <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8">
            <div className="text-[#1B2B65] mb-4">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[#1B2B65] mb-2">Our Location</h3>
            <p className="text-gray-600 mb-4">
              Road #1, Sai Ram Nagar Colony,<br />
              Karmanghat,<br />
              Telangana 500079
            </p>
            <a
              href="https://maps.google.com/maps/dir//Discoveri+Oaks+Public+School+Road+%231+Sai+Ram+Nagar+Colony+Champapet,+Telangana+500079/@17.3410334,78.5211503,16z/data=!4m5!4m4!1m0!1m2!1m1!1s0x3bcb9972c769a77f:0xad90cd9178e67bd8"
              target="_blank"
              className="inline-block bg-[#1B2B65] text-white px-6 py-2 rounded-full hover:bg-[#F4B41A] transition-colors"
            >
              Get Directions
            </a>
          </div>

          {/* Get in Touch Card */}
          <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8">
            <div className="text-[#1B2B65] mb-4">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[#1B2B65] mb-2">Get in Touch</h3>
            {/* Phone Numbers - Click to Call */}
            <a href="tel:+914049503596" className="block text-[#F4B41A] font-medium mb-2 hover:underline">
              (+91) 4049-503-596
            </a>
            <a href="tel:+918106463683" className="block text-[#F4B41A] font-medium mb-8 hover:underline">
              (+91) 81064 63683
            </a>
            <p className="text-gray-600">Available Mon-Sat, 9AM-6PM</p>
          </div>
          {/* Email Card */}
          <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8">
            <div className="text-[#1B2B65] mb-4">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[#1B2B65] mb-2">Email Us</h3>
            <p className="text-[#F4B41A] font-medium mb-4">info.dopskmgt@gmail.com</p>
            <a
              href="mailto:info.dopskmgt@gmail.com"
              className="inline-block bg-[#1B2B65] text-white px-6 py-2 rounded-full hover:bg-[#F4B41A] transition-colors"
            >
              Send Email
            </a>
          </div>
        </div>
      </div>

      {/* Form and Map Section */}
      <div className="container mx-auto px-4 py-8 sm:py-16">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Form Section */}
            <div className="p-4 sm:p-8 lg:p-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1B2B65] mb-6 sm:mb-8">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1B2B65]"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1B2B65]"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-gray-700 mb-2">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1B2B65]"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1B2B65]"
                      required
                    ></textarea>
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#1B2B65] text-white px-8 py-3 rounded-md hover:bg-[#F4B41A] transition-colors disabled:bg-gray-400"
                >
                  {isSubmitting ? 'Sending Message...' : 'Send Message'}
                </button>
              </form>
            </div>

            {/* Map Section */}
            <div className="h-[300px] sm:h-[400px] lg:h-full">
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
          </div>
        </div>
      </div>

      {/* Social Media Strip */}
      <div className="bg-gray-100 py-8 sm:py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-[#1B2B65] mb-6 sm:mb-8">Stay Connected With Us</h2>
          <div className="flex justify-center space-x-4 sm:space-x-6">
            <motion.a 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href="https://www.facebook.com/discoverioakspublicschool" 
              target="_blank" 
              className="bg-[#1B2B65] text-white p-2 rounded-full hover:bg-[#F4B41A] transition-colors flex items-center justify-center w-10 h-10"
            >
              <i className="fab fa-facebook-f text-lg"></i>
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href="https://www.instagram.com/discoverioakspublicschool?igsh=MWdrcjJpN3pmbTV4cQ==" 
              target="_blank" 
              className="bg-[#1B2B65] text-white p-2 rounded-full hover:bg-[#F4B41A] transition-colors flex items-center justify-center w-10 h-10"
            >
              <i className="fab fa-instagram text-lg"></i>
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href="mailto:info.dopskmgt@gmail.com" 
              className="bg-[#1B2B65] text-white p-2 rounded-full hover:bg-[#F4B41A] transition-colors flex items-center justify-center w-10 h-10"
            >
              <i className="fas fa-envelope text-lg"></i>
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href="https://wa.me/918106463683" 
              target="_blank" 
              className="bg-[#1B2B65] text-white p-2 rounded-full hover:bg-[#F4B41A] transition-colors flex items-center justify-center w-10 h-10"
            >
              <i className="fab fa-whatsapp text-lg"></i>
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href="https://www.linkedin.com/company/discoveri-oaks-public-school/" 
              target="_blank" 
              className="bg-[#1B2B65] text-white p-2 rounded-full hover:bg-[#F4B41A] transition-colors flex items-center justify-center w-10 h-10"
            >
              <i className="fab fa-linkedin-in text-lg"></i>
            </motion.a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
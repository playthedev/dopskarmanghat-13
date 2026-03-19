import { useState } from 'react';
import { addmissionHero } from '../../assets';
import Hero from '../../components/Hero';
import { motion } from 'framer-motion';
import { submitForm } from '../../utils/api';
import { AdmissionForm } from '../../types/forms';

const Admissions = () => {
  const [formData, setFormData] = useState<AdmissionForm>({
    studentName: '',
    parentName: '',
    phone: '',
    email: '',
    grade: '',
    address: '',
    agreeToTerms: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await submitForm('admission', formData);
      if (response.success) {
        alert('Form submitted successfully!');
        setFormData({
          studentName: '',
          parentName: '',
          phone: '',
          email: '',
          grade: '',
          address: '',
          agreeToTerms: false
        });
      }
    } catch (error) {
      alert('Failed to submit form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero
        title="Admissions"
        backgroundImage={addmissionHero}
      />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Info Section */}
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-[#1B2B65] mb-4">Join Our Learning Community</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
            Discoveri Oaks Public School welcomes applications for the academic year 2025-26. 
              We are committed to providing quality education and nurturing young minds for a better tomorrow.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Form Section */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-[#1B2B65] mb-6">Admission Enquiry Form</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="studentName" className="block text-gray-700 mb-2">Student's Name</label>
                    <motion.input
                      whileFocus={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                      type="text"
                      id="studentName"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1B2B65]"
                      value={formData.studentName}
                      onChange={(e) => setFormData({...formData, studentName: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="parentName" className="block text-gray-700 mb-2">Parent's Name</label>
                    <motion.input
                      whileFocus={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                      type="text"
                      id="parentName"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1B2B65]"
                      value={formData.parentName}
                      onChange={(e) => setFormData({...formData, parentName: e.target.value})}
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 mb-2">Phone Number</label>
                    <motion.input
                      whileFocus={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1B2B65]"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 mb-2">Email ID</label>
                    <motion.input
                      whileFocus={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1B2B65]"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="grade" className="block text-gray-700 mb-2">Grade Seeking Admission to</label>
                  <select
                    id="grade"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1B2B65]"
                    value={formData.grade}
                    onChange={(e) => setFormData({...formData, grade: e.target.value})}
                    required
                  >
                    <option value="">Select Grade</option>
                    <option value="nursery">Nursery</option>
                    <option value="kg1">KG 1</option>
                    <option value="kg2">KG 2</option>
                    {[...Array(8)].map((_, i) => (
                      <option key={i} value={`grade${i+1}`}>Grade {i+1}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="address" className="block text-gray-700 mb-2">Address</label>
                  <textarea
                    id="address"
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1B2B65]"
                    value={formData.address}
                    onChange={(e) => setFormData({...formData, address: e.target.value})}
                    required
                  ></textarea>
                </div>

                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    id="terms"
                    className="mt-1"
                    checked={formData.agreeToTerms}
                    onChange={(e) => setFormData({...formData, agreeToTerms: e.target.checked})}
                    required
                  />
                  <label htmlFor="terms" className="text-sm text-gray-600">
                    I hereby accord consent to Discoveri Oaks Public School to process my personal data in accordance with the school's privacy policy.
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#1B2B65] text-white py-3 rounded-lg hover:bg-[#F4B41A] transition-colors disabled:bg-gray-400"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Enquiry'}
                </button>
              </form>
            </div>

            {/* Info Cards Section */}
            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-bold text-[#1B2B65] mb-4">Admission Process</h3>
                <ol className="list-decimal list-inside space-y-3 text-gray-600">
                  <li>Fill and submit the admission enquiry form</li>
                  <li>School will contact you for document verification</li>
                  <li>Schedule student assessment and parent interaction</li>
                  <li>Receive admission confirmation</li>
                  <li>Complete admission formalities and fee payment</li>
                </ol>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-bold text-[#1B2B65] mb-4">Required Documents</h3>
                <ul className="list-disc list-inside space-y-3 text-gray-600">
                  <li>Birth Certificate</li>
                  <li>Previous School Records (if applicable)</li>
                  <li>Passport Size Photographs</li>
                  <li>Parent's ID Proof</li>
                  <li>Address Proof</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-bold text-[#1B2B65] mb-4">Contact Admissions Office</h3>
                <div className="space-y-3 text-gray-600">
                  <p>For any queries regarding admissions, please contact:</p>
                  <p className="font-medium text-[#F4B41A]">+91 8106-463-683</p>
                  <p className="font-medium text-[#F4B41A]">info.dopskmgt@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admissions; 
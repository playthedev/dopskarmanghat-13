import { useState } from 'react';
import { admission2025 } from '../assets';
import { submitForm } from '../utils/api';
import { AdmissionPopupForm } from '../types/forms';

interface AdmissionPopupProps {
  isOpen: boolean;
  onClose: () => void;    
}

const AdmissionPopup = ({ isOpen, onClose }: AdmissionPopupProps) => {
  const [formData, setFormData] = useState<AdmissionPopupForm>({
    name: '',
    phone: '',
    email: '',
    childName: '',
    grade: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await submitForm('admission-popup', formData);
      if (response.success) {
        alert(response.message || 'Form submitted successfully!');
        setFormData({
          name: '',
          phone: '',
          email: '',
          childName: '',
          grade: ''
        });
        onClose();
      }
    } catch (error) {
      alert(error instanceof Error ? error.message : 'Failed to submit form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 backdrop-blur-sm bg-black/30 z-50 flex items-center justify-center p-4">
      <div className="bg-white/95 rounded-lg w-full max-w-[90%] sm:max-w-4xl relative shadow-xl max-h-[90vh] flex flex-col">
        {/* Close Button - Fixed position */}
        <button
          onClick={onClose}
          className="absolute right-2 top-2 z-20 bg-white/80 rounded-full p-1 text-gray-500 hover:text-gray-700"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Scrollable Content */}
        <div className="overflow-y-auto">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Image Section */}
            <div className="relative">
              <img
                src={admission2025}
                alt="Background"
                className="absolute inset-0 w-full h-full object-cover blur-sm opacity-70 z-0"
              />
              
              <img
                src={admission2025}
                alt="Admissions Open 2025"
                className="relative z-10 w-full h-auto md:h-full max-h-[250px] md:max-h-[100vh] object-contain md:rounded-tl-lg"
              />
            </div>

            {/* Content Section */}
            <div className="p-6 sm:p-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1B2B65] mb-4">Admissions Open 2025</h2>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#1B2B65]"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
                <input
                  type="tel"
                  placeholder="Phone number"
                  className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#1B2B65]"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
                <input
                  type="email"
                  placeholder="Email ID"
                  className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#1B2B65]"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
                <input
                  type="text"
                  placeholder="Child Name"
                  className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#1B2B65]"
                  value={formData.childName}
                  onChange={(e) => setFormData({ ...formData, childName: e.target.value })}
                />
                <select
                  className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#1B2B65]"
                  value={formData.grade}
                  onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                >
                  <option value="">Select Grade</option>
                  <option value="nursery">Nursery</option>
                  <option value="kg1">KG 1</option>
                  <option value="kg2">KG 2</option>
                  {[...Array(8)].map((_, i) => (
                    <option key={i} value={`grade${i + 1}`}>Grade {i + 1}</option>
                  ))}
                </select>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#1B2B65] text-white py-3 rounded hover:bg-[#F4B41A] transition-colors disabled:bg-gray-400"
                >
                  {isSubmitting ? 'Submitting...' : 'CONNECT NOW'}
                </button>
                <p className="text-xs text-gray-500 text-center">
                  Note: By submitting this form, I hereby accord consent to Discoveri Oaks Public School to process my personal data in accordance to the school's privacy policy.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdmissionPopup; 
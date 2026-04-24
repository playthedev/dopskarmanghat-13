import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  academicsHero,
  earlySection,
  primarySection,
  middleSection,
} from '../../assets';
import Hero from '../../components/Hero';
import { Helmet } from "react-helmet-async";

// Define a type for the section content
type SectionContent = {
  title: string;
  grades: string;
  description: string;
};

// Define a type for the sections object
type Sections = {
  [key: string]: SectionContent;
};

const Academics = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('primary');

  // Update active section based on URL hash
  useEffect(() => {
    const hash = location.hash.replace('#', '');
    if (hash && ['early', 'primary', 'middle'].includes(hash)) {
      setActiveSection(hash);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location]);

  const sections: Sections = {
    early: {
      title: "Early Years",
      grades: "(Pre-Nursery to KG-2)",
      description: "Our Early Years programme focuses on developing fundamental skills through play-based learning, fostering curiosity, and building a strong foundation for future academic success.",
    },
    primary: {
      title: "Primary School",
      grades: "(Grades 1-5)",
      description: "The Primary Years Programme is designed to develop critical thinking, collaboration, creativity, and communication skills. We focus on instilling a love for learning while building character and confidence.",
    },
    middle: {
      title: "Middle School",
      grades: "(Grades 6-8)",
      description: "Our Middle School programme bridges primary and secondary education, focusing on academic excellence, personal development, and preparing students for higher academic challenges.",
    }
  };

  const sectionFeatures: { [key: string]: string[] } = {
    early: [
      "Playful & Caring Educators",
      "Curiosity-Led Exploration",
      "Hands-on Discovery"
    ],
    primary: [
      "Engaging Educators",
      "Skill-Building Curriculum",
      "Interactive Learning"
    ],
    middle: [
      "Subject Matter Experts",
      "Strong Academic Framework",
      "Project-Based Learning"
    ]
  };

  const sectionImages = {
    early: earlySection,
    primary: primarySection,
    middle: middleSection
  };

  const handleSectionChange = (key: string) => {
    setActiveSection(key);
    navigate(`/academics#${key}`, { replace: true });
  };

  return (
    <>
    <Helmet>
  <title>Academics at DOPS Karmanghat School | CBSE Curriculum Hyderabad</title>
  <meta 
    name="description" 
    content="Explore Early Years, Primary, and Middle School academic programs at DOPS Karmanghat School in Hyderabad." 
  />
</Helmet>
    <div className="min-h-screen">
      {/* ✅ SEO H1 (hidden) */}
  <h1 className="sr-only">
    CBSE Academics at DOPS Karmanghat School Hyderabad
  </h1>
      {/* Hero Section */}
      <Hero
        title="Academics"
        backgroundImage={academicsHero}
      />

      {/* Navigation */}
      <div className="bg-white shadow-md sticky top-0 z-20">
        <div className="container mx-auto px-4">
          <div className="flex space-x-1">
            {Object.entries(sections).map(([key, section]) => (
              <button
                key={key}
                onClick={() => handleSectionChange(key)}
                className={`py-4 px-6 text-sm font-bold relative ${activeSection === key
                  ? 'text-[#F4B41A]'
                  : 'text-gray-800 hover:text-[#1B2B65]'
                  }`}
              >
                {section.title}
                {activeSection === key && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#F4B41A]"
                    layoutId="underline"
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          key={activeSection}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2 className="text-3xl font-bold text-[#1B2B65] mb-2">
              {sections[activeSection].title}
            </h2>
            <p className="text-[#F4B41A] font-medium mb-6">
              {sections[activeSection].grades}
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              {sections[activeSection].description}
            </p>
            <div className="space-y-4">
              {sectionFeatures[activeSection].map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-[#1B2B65] rounded-full flex items-center justify-center text-white">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img
              src={sectionImages[activeSection as keyof typeof sectionImages]}
              alt={sections[activeSection].title}
              className="rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-[#F4B41A] p-6 rounded-lg">
              {/* <div className="text-4xl font-bold text-white">100%</div> */}
              <div className="text-white">Skilling while schooling</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
    </>
  );
};

export default Academics;
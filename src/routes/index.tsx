import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import Academics from '../pages/Academics';
import Admissions from '../pages/Admissions';
import Contact from '../pages/Contact';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/academics" element={<Academics />} />
      <Route path="/admissions" element={<Admissions />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AppRoutes; 
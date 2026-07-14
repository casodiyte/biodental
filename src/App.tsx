import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Pages
import Home from './pages/Home';
import NaturalDental from './pages/NaturalDental';
import BioInDent from './pages/BioInDent';
import Nosotras from './pages/Nosotras';
import Contacto from './pages/Contacto';

function AppContent() {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col font-sans text-[var(--color-text)] bg-[var(--color-bg)] transition-colors duration-500 ease-in-out">
      <Navbar />
      
      <main className="flex-grow flex flex-col">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/natural-dental" element={<NaturalDental />} />
            <Route path="/bio-in-dent" element={<BioInDent />} />
            <Route path="/nosotras" element={<Nosotras />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}

import { HelmetProvider } from 'react-helmet-async';

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <AppContent />
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;


import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomeHero from './pages/homehero';
import Affiliate from './pages/Affiliate';
import Challenges from './pages/Challenges';
import AboutUs from './pages/AboutUs';
import Footer from './components/footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white selection:bg-blue-500/30">
        <Header />

        <main className="pt-20 relative z-10">
          <Routes>
            <Route path="/" element={<HomeHero />} />
            <Route path="/affiliate" element={<Affiliate />} />
            <Route path="/challenges" element={<Challenges />} />
            <Route path="/about" element={<AboutUs />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;

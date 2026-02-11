import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import HomeHero from './pages/homehero';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white selection:bg-blue-500/30">
        <Header />

        <main className="pt-20 relative z-10">
          <HomeHero />
        </main>
      </div>
    </Router>
  );
}

export default App;

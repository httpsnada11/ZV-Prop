import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import HomeHero from './pages/homehero';
import herobg from './assets/images/herobg.avif';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white selection:bg-blue-500/30">
        <Header />

        <main 
          className="pt-40 pb-32 px-6 flex flex-col items-center text-center relative z-10 overflow-hidden"
          style={{ 
            backgroundImage: `url(${herobg})`,
            backgroundPosition: 'right bottom',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="absolute inset-0 bg-black/5 backdrop-blur-md z-[-1]"></div>
          <HomeHero />
        </main>
      </div>
    </Router>
  );
}

export default App;

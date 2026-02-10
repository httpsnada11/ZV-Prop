import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Your React App</h1>
        <p className="text-lg text-gray-700">Your React, Vite, and JSX setup is ready!</p>
      </div>
    </Router>
  );
}

export default App;
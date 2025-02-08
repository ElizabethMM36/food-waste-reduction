import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Food Sharing App</h1>
      <p>Share and enjoy food with your community!</p>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Thêm các tuyến đường khác nếu cần */}
      </Routes>
    </Router>
  );
};

export default App;

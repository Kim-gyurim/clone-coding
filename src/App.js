import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header'; // ✅ Header import
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import Beauty from "./components/Beauty";


function App() {
  return (
    <Router>
      <Header /> {/* ✅ 공통으로 항상 보이게 */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/beauty" element={<Beauty />} />
      </Routes>
    </Router>
  );
}

export default App;

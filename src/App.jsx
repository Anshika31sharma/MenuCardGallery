import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import MenuItem from './components/MenuItem'; 
import AboutPage from './components/AboutPage'; 
import Pay from './components/Pay';
import Cart from './components/Cart';


const App = () => {
  return (
    <Router>

        <div className="flex flex-col lg:flex-row">
          <div className="flex-1">
            <Header />
            <div className="gap-4 lg:ml-52">
              <Routes>
                <Route path="/" element={<MenuItem />} />
                <Route path="/menu" element={<MenuItem />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/pay" element={<Pay />} />
                <Route path="/cart" element={<Cart />} />
              </Routes>
            </div>
          </div>
        </div>

    </Router>
  );
}

export default App;

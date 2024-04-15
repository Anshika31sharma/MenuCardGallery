import React,{useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import MenuItem from './components/Menu/MenuItem'; // Remove MenuItem import
import AboutPage from './components/About/AboutPage'; 
import Pay from './components/Pay';
import { CartProvider } from './components/Cart/CartContext';
import Cart from './components/Cart/Cart';

const App = () => {
  const [cart, setCart] = useState([]);
  return (
    <Router>
      <CartProvider>
        <div className="flex flex-col lg:flex-row">
          <div className="flex-1">
            <Header cart={cart} />
            <div className="gap-4 ">
              <Routes>
                <Route path="/" element={<MenuItem />} /> {/* Assuming this should be your home page */}
                <Route path="/menu" element={<MenuItem />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/pay" element={<Pay />} />
                <Route path="/cart" element={<Cart />} />
              </Routes>
            </div>
          </div>
        </div>
      </CartProvider>
    </Router>
  );
}

export default App;

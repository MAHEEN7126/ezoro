import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";

import "./App.css";

import Home from "./pages/Home";
import Clothes from "./pages/Clothes";
import Jewelry from "./pages/Jewelry";
import Profile from "./pages/Profile";
import Cart from "./pages/Cart";
import Sandal from "./pages/Sandal";
import Sliper from "./pages/Sliper";
import AllShoes from "./pages/AllShoes";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Navbar from "./components/Navbar"



function App() {
  return (
    <CartProvider>
      <Router>

        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/clothes" element={<Clothes />} />
          <Route path="/jewelry" element={<Jewelry />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/sandal" element={<Sandal />} />
          <Route path="/sliper" element={<Sliper />} />
          <Route path="/allshoes" element={<AllShoes />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/Login" element={<Login/>} />
        
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;

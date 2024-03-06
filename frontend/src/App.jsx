import "./styles/global.sass"
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index.jsx"
import Signup from "./pages/Signup.jsx"
import { AuthProvider } from "./AuthContext.jsx";
import Cart from "./pages/Cart.jsx";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App

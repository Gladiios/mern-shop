import "./styles/global.sass"
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/index.jsx"
import Signup from "./pages/signup.jsx"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

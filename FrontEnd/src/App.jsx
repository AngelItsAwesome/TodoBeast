import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "./pages/login/Login.jsx";
import Base from './pages/login/Base.jsx';
import Register from './pages/login/Register.jsx';
import Check from './pages/login/Check.jsx'

function App() {
  return (
      <BrowserRouter>
          <Base>
              <Routes>
                  <Route path="/" element={<Login />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/check" element={<Check />} />
                  <Route path="/check" element={<Check />} />
              </Routes>
          </Base>
      </BrowserRouter>
  )
}

export default App

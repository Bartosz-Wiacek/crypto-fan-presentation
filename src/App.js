import React from "react";
import Home from "./pages/Home";
import {BrowserRouter} from 'react-router-dom'
import {Routes, Route} from 'react-router'
import './index.css'
import Coins from "./pages/Coins";

function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/coins" element={<Coins/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

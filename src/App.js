import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Header from './Header.js';
import Footer from './Footer.js';
import Home from './Home.js';
import Tasks from './Tasks.js';
import { useState } from 'react';

function App() {
  const [footerDisplay, setFooterDisplay] = useState(true);

  return (
    <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<Home footerDisplay={footerDisplay} setFooterDisplay={setFooterDisplay}/>}/>
          <Route path="/tasks" element={<Tasks footerDisplay={footerDisplay} setFooterDisplay={setFooterDisplay}/>}/>
          <Route path="*" element={<p>404 not found</p>}/>
        </Routes>
      {footerDisplay && <Footer/>}
    </BrowserRouter>
  );
}

export default App;

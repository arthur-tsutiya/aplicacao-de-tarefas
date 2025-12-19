import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Header from './Header.js';
import Home from './Home.js';
import Tasks from './Tasks.js';


function App() {

  return (
    <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/tasks" element={<Tasks />}/>
          <Route path="*" element={<p>404 not found</p>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;

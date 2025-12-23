import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header.js';
import Home from './pages/Home.js';
import AddTasks from './pages/AddTasks.js';


function App() {

  return (
    <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/add-tasks" element={<AddTasks />}/>
          <Route path="*" element={<p>404 not found</p>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;

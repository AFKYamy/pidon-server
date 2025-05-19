import { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

// CSS styles components
import './App.css';
import './Styles/Navbar.css';
import './Styles/Button.css';
import './Styles/Header.css';
import './Styles/LevelLeaderboard.css';
import './Styles/LevelPlayer.css';
import './Styles/Stats.css';
import './Styles/Online.css';
import './Styles/OnlinePlayer.css';
import './Styles/Carousel.css';

// CSS styles pages
import './Styles/Home.css';
import './Styles/LiveMap.css';
import './Styles/Inventory.css';
import './Styles/Members.css';
import './Styles/About.css';
import './Styles/Contact.css';
import './Styles/Leaderboards.css';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Components
import Navbar from './Components/Navbar.js';
import Header from './Components/Header.js';

// Pages
import Home from './Pages/Home.js';
import LiveMap from './Pages/LiveMap.js';
import Inventory from './Pages/Inventory.js';
import Members from './Pages/Members.js';
import About from './Pages/About.js';
import Contact from './Pages/Contact.js';
import Leaderboards from './Pages/Leaderboards.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/LiveMap" element={<LiveMap />}/>
        <Route path="/Inventory" element={<Inventory />}/>
        <Route path="/Members" element={<Members />}/>
        <Route path="/About" element={<About />}/>
        <Route path="/Contact" element={<Contact />}/>
        <Route path="/Leaderboards" element={<Leaderboards />}/>
      </Routes>
    </Router>
  );
}

export default App;

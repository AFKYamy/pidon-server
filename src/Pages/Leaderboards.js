import React from 'react';
import { useState } from 'react';

import LevelLeaderboard from '../Components/LevelLeaderboard.js';
import Stats from '../Components/Stats.js';
import Online from '../Components/Online.js';
import Navbar from '../Components/Navbar.js';
import Header from '../Components/Header.js';

export default function Leaderboards() {
  return (
      <>
        <Navbar />
        <Header />
        <div className="leaderboards container">
            
        </div>
      </>
  );
}
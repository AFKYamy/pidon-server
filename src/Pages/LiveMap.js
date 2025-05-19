import React from 'react';
import { useState } from 'react';

import Navbar from '../Components/Navbar.js';
import Header from '../Components/Header.js';

export default function LiveMap() {
  return (
      <>
        <Navbar />
        <Header />
        <div className="live-map container">
        
        </div>
      </>
  );
}
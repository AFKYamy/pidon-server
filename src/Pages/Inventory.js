import React from 'react';
import { useState } from 'react';

import Navbar from '../Components/Navbar.js';
import Header from '../Components/Header.js';

export default function Inventory() {
  return (
      <>
        <Navbar />
        <Header />
        <div className="inventory container">
        
        </div>
      </>
  );
}
import React from 'react';
import { useState } from 'react';

import LevelLeaderboard from '../Components/LevelLeaderboard.js';
import Stats from '../Components/Stats.js';
import Online from '../Components/Online.js';
import Navbar from '../Components/Navbar.js';
import Header from '../Components/Header.js';

export default function Home() {
  return (
      <>
        <Navbar />
        <Header />
        <div className="home container">
            <div className="home__wrapper">
                <div className="home__left">
                    <LevelLeaderboard />
                </div>
                <div className="home__right">
                    <div className="home__stats">
                        <Stats id="server__status" img={process.env.PUBLIC_URL + '/Images/server.png'} name="Server status:" status="Online"/>
                        <Stats id="server__time" img={process.env.PUBLIC_URL + '/Images/time.png'} name="Server time:" status="1200 (day)"/>
                        <Stats id="server__age" img={process.env.PUBLIC_URL + '/Images/age.png'} name="Server age:" status="369 days"/>
                    </div>
                    <div className="home__online">
                        <Online count="2"/>
                    </div>
                </div>
            </div>
        </div>
      </>
  );
}
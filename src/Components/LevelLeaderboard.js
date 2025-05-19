import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import Button from './Button.js';
import LevelPlayer from './LevelPlayer.js';

export default function LevelLeaderboard() {
  return (
      <div className="level-leaderboard">
        <div className="level-leaderboard__wrapper">
            <h3>
                Level Leaderboard
            </h3>
            <LevelPlayer img={process.env.PUBLIC_URL + '/Images/devil-head.png'} name="DevilNo9" level="3339" />
            <span></span>
            <LevelPlayer img={process.env.PUBLIC_URL + '/Images/gemtik-head.png'} name="GEMTIkcz" level="229" />
            <span></span>
            <LevelPlayer img={process.env.PUBLIC_URL + '/Images/manie-head.png'} name="Manie_cz" level="19" />
            <Link to="/Leaderboards">
              <Button id="level-leaderboard__btn" text="Show leaderboard" type="btn--secondary" style={{marginTop: "100em"}}/>
            </Link>
        </div>
      </div>
  );
}
import React from 'react';

export default function LevelPlayer(props) {
  return (
      <div className="level-player">
        <div className="level-player__img">
          <img src={process.env.PUBLIC_URL + props.img} alt="level-player" />
        </div>
        <div className="level-player__name">
          <p><strong>{props.name}</strong></p>
        </div>
        <div className="level-player__level">
          <p><strong>{props.level} XP</strong></p>
        </div>
      </div>
  );
}
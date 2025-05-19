import React from 'react';

export default function OnlinePlayer(props) {
  return (
      <div className="online-player" id={props.status}>
        <div className="online-player__last">
          <p><strong>{props.last}</strong></p>
        </div>
        <div className="online-player__img">
          <img src={process.env.PUBLIC_URL + props.img} alt="online player" />
        </div>
        <div className="online-player__name">
          <p><strong>{props.name}</strong></p>
          <p className="online-player__status">{props.status}</p>
        </div>
      </div>
  );
}
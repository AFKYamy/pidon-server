import React from 'react';

export default function Stats(props) {
  return (
      <div id={props.id} className="stats">
        <div className="stats__wrapper">
            <div className="stats__icon">
                <img src={props.img} alt="status icon" />
            </div>
            <div className="stats__name">
                <h3>{props.name}</h3>
            </div>
            <div className="stats__status">
                <p>{props.status}</p>
            </div>
        </div>
      </div>
  );
}
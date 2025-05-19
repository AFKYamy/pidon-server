import React from 'react';

export default function Button(props) {
  return (
      <button id={props.id} className={props.type}>
        {props.text}
      </button>
  );
}
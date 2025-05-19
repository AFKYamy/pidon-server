import React from 'react';
import { Link } from 'react-router-dom';

import Button from './Button.js';
import { Carousel } from './Carousel.js';
import { HpImages } from './Data.js';

export default function Header() {
  return (
      <header className="header container">
        <div className="header__wrapper">
            <div className="header__text">
                <div className="header__title__wrapper">
                    <h1 className="header__title">
                        Private SMP
                        <br></br>
                        Minecraft Server
                    </h1>
                </div>
                <div className="header__info">
                    <p><strong>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                    <br></br>
                    Excepturi, porro.</strong></p>
                </div>
                <Link to="/Members">
                    <Button text="Server members" type="btn--secondary"/>
                </Link>
            </div>
            {/*
            <div className="header__image">
                <img src="/Images/gemtik.png" alt="player"></img>
            </div>
            */}
            <div className="header__image">
                <Carousel images={HpImages}/>
            </div>
        </div>
      </header>
  );
}
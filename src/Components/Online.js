import React from 'react';
import Slider from "react-slick";

import OnlinePlayer from './OnlinePlayer.js';

export default function Online(props) {
  const settings = {
    className: "center",
    infinite: false,
    centerPadding: "60px",
    slidesToShow: 6,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          infinite: false,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  };
  return (
      <div className="online">
        <div className="online__wrapper">
            <div className="online__status">
                <div className="online__status__circle"></div>
                <h3>Online players: <span>{props.count}</span></h3>
            </div>
            <div className="slider-container">
            <Slider {...settings}>
              <OnlinePlayer last="few seconds ago" img={process.env.PUBLIC_URL + '/Images/devil-head.png'} name="DevilNo9" status="Online"/>
              <OnlinePlayer last="16 hours ago" img={process.env.PUBLIC_URL + '/Images/gemtik-head.png'} name="GEMTIKcz" status="Online"/>
              <OnlinePlayer last="3 days ago" img={process.env.PUBLIC_URL + '/Images/manie-head.png'} name="Manie_cz" status="Offline"/>
              <OnlinePlayer last="4 days ago" img={process.env.PUBLIC_URL + '/Images/168-head.png'} name="168ping" status="Offline"/>
              <OnlinePlayer last="5 days ago" img={process.env.PUBLIC_URL + '/Images/smog-head.png'} name="N0Sm0g" status="Offline"/>
              <OnlinePlayer last="6 days ago" img={process.env.PUBLIC_URL + '/Images/policista-head.png'} name="PanPolicista" status="Offline"/>
              <OnlinePlayer last="7 days ago" img={process.env.PUBLIC_URL + '/Images/drdoo-head.png'} name="DrDoominoo" status="Offline"/>
              <OnlinePlayer last="5 years ago" img={process.env.PUBLIC_URL + '/Images/kovar-head.png'} name="kovarpico" status="Offline"/>
            </Slider>
            </div>
        </div>
      </div>
  );
}


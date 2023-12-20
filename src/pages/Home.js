import React from 'react';

import avatar from '../assets/img/avatar.png';

function Home() {
  return (
    <div className="br-color">
      <img className="avatar-img" src={avatar} alt="" />
      <div className="banner-text">
        <h1>Web-разработчик</h1>
        <p>HTML/CSS | JS | React/Redux | Vue | Laravel | PHP </p>
      </div>
    </div>
  );
}

export default Home;

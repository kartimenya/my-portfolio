import React from 'react';
import src from '../assets/img/project-1.jpg';

function Card({link, src}) {

  return (
    <div
     style = {{backgroundImage: "url("+src+")"}}
     className="card">
      <a className="card__link" href={link} target="_blank">Посмотреть</a>
    </div>
  );
}

export default Card;

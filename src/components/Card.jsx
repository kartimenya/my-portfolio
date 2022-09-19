import React from 'react';

function Card({ id, src, onClickMore }) {
  return (
    <div style={{ backgroundImage: 'url(' + src + ')' }} className="card">
      <p className="card__link" onClick={() => onClickMore(id)}>
        Посмотреть
      </p>
    </div>
  );
}

export default Card;

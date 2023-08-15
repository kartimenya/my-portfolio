import React from 'react';

function Card({ id, src, onClickMore, type }) {
  return (
    <div style={{ backgroundImage: 'url(' + src + ')' }} className="card">
      {type && <img className="card__type" src={type} alt="" />}
      <p className="card__link" onClick={() => onClickMore(id)}>
        Посмотреть
      </p>
    </div>
  );
}

export default Card;

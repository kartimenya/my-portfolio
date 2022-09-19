import React from 'react';
import { useState } from 'react';
import { Card, Modal } from '../components';

import progectArr from '../filling/projects';

function Projects() {
  const [modalActive, setModalActive] = useState(false);
  const [clickItem, setClickItem] = useState({});

  const openModal = (id) => {
    const selectProject = progectArr.find((item) => item.id === id);
    setClickItem(selectProject);
    setModalActive(true);
  };

  return (
    <div>
      <h2 className="projects__title">Мои работы</h2>
      <div className="card-list">
        {progectArr.map((item) => (
          <Card key={item.id} id={item.id} src={item.src} onClickMore={openModal} />
        ))}
      </div>
      <Modal modalActive={modalActive} setModalActive={setModalActive}>
        <div className="modal__inner">
          <div
            className="modal__inner-img"
            style={{ backgroundImage: 'url(' + clickItem.src + ')' }}></div>
          <div className="modal__inner-info">
            <div className="modal__inner-desc">{clickItem.desc}</div>
            <ul className="modal__inner-links">
              <li>
                <a href={clickItem.href} target="_blank" rel="noopener noreferrer">
                  Посмотреть
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default Projects;

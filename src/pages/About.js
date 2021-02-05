import React from 'react';

import {Skill} from '.././components';
import skills from '../filling/skills'


import avatar from '../assets/img/avatar.png';

function About() {
  return (
    <div className="about">
      <div className="about__left">
        <img src={avatar} alt=""/>
        <h2 className="about__left-name">Артименя Кирилл</h2>
        <p className="about__left-info">Возрост: 21 год</p>
        <p className="about__left-info">Место жительства : Минск</p>

        <h2 className="about__left-title">Коротко обо мне</h2>
        <p className="about__left-text">Увлеченный и целеустремленный разработчик. Постоянно улучшаю свои навыки во всех областях, начиная с разработки и заканчивая повседневными делами.Заканчивал курсы Frontend-разработчика в BelHard. Занимаюсь баскетболом, читаю книги, люблю рок.</p>
      </div>
      <div className="about__right">
        <h2 className="about__right-title">Мои скиллы</h2>
          {skills.map(item => (
            <Skill skillName={item.name} skillInfo={item.info}/>
          ))}
      </div>
    </div>
  );
}

export default About;

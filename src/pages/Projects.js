import React from 'react';
import {Card} from '../components';

import progectArr from '../filling/projects'

function Projects() {

  return (
    <div>
      <h2 className="projects__title">Мои работы</h2>
      <div className="card-list">
          {progectArr.map(item => (
            <Card key={item.id} link={item.href} src={item.src}/>
          ))}
      </div>
    </div>
  );
}

export default Projects;

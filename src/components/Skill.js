import React from 'react';

function Skill({skillName, skillInfo}) {
  return (
    <div className="about__skill">
      <h3 className="about__skill-name">{skillName}</h3>
      <p className="about__skill-info">{skillInfo}</p>
    </div>
  );
}

export default Skill;

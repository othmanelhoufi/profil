import React from 'react';
import Ring from './ring/Ring';
import './SkillsStyle.scss';

import Fade from 'react-reveal/Fade';


const Skills = (props) => (

  <div className="skills" >

    {
      arrayToSet(props.skillsArray)
    }

  </div>


);

const arrayToSet = (arr) => ( arr.map( (skills, num) => {
    return (
      <div key={num} className="skillSet">
        <Fade top>
        <div className="category">{skills.category}</div>
        </Fade>

        <Fade top cascade>
        <div className="skillRings">
          {arrayToRings(skills.skillTypes)}
        </div>
        </Fade>

      </div>
      );
  })
);

const arrayToRings = (arr) => ( arr.map( (types, num) => {
    return (
      <div key={num} className="ring">
        <Ring skill={types.skill} percentage={types.percentage} />
      </div>
      );
  })
);


export default Skills;

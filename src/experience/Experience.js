import React from 'react';
import CardsList from '../elements/CardsList';
import './ExperienceStyle.scss';

const Experience = (props) => (

  <div className="experience">

      <div className="experienceList">
        <CardsList array={props.experienceArray} />
      </div>

  </div>


);


export default Experience;

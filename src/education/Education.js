import React from 'react';
import CardsList from '../elements/CardsList';


const Education = (props) => (

  <div className="experience">

    <div className="experienceList">
      <CardsList array={props.educationArray} />
    </div>

  </div>


);


export default Education;

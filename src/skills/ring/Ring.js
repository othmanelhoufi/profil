import React from 'react';
import './RingStyle.scss';


const Ring = (props) => (

  <div className="ringContainer" >

    <div className="outerRing">
      <div className="innerRing"></div>
    </div>
    <div className="ringName">{props.skill}</div>

  </div>


);


export default Ring;

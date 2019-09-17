import React from 'react';

const SocialMedia = (props) => (

  <div className="socialContainer" >

    <div className="socialImage">
      <a href={props.link}><img src={"/icons/"+ props.name +".png"} alt={props.name}></img></a>
    </div>

  </div>


);


export default SocialMedia;

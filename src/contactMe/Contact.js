import React from 'react';
import Form from './form/Form';
import SocialMedia from './socialMedia/SocialMedia';
import './ContactStyle.scss';
import Fade from 'react-reveal/Fade';


const Contact = (props) => (

  <div className="contactContainer" >
    <Form email={props.email}/>

    <Fade top cascade>
    <div className="socialMedia">
        {
          arrayToIcons( props.social )
        }
    </div>
    </Fade>

  </div>


);

const arrayToIcons = (arr) => ( arr.map( (social, num) => {
    return (
      <div key={num}>
        <SocialMedia name={social.network} link={social.link} iconPath={social.iconPath} />
      </div>
    );
  })
);


export default Contact;

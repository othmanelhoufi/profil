import React from 'react';
import './SignatureStyle.scss';


const Signature = (props) => (

  <div className="signatureContainer">
    {
      arrayToImages( props.images )
    }
  </div>


);

const arrayToImages = (arr) => ( arr.map( (path, num) => {
    return (
        <div key={num} className="imageContainer">
          <img className="image" src={path} alt={path} />
        </div>
      );
  })
);


export default Signature;

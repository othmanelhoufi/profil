import React from 'react';
import Card from './Card';
import './CardsListStyle.scss';
import Fade from 'react-reveal/Fade';

const CardsList = (props) => (

  <Fade top cascade>
    <div className="cardsList">
        {
          arrayToCard( props.array )
        }
    </div>
  </Fade>


);


const arrayToCard = (arr) => ( arr.map( (exp, num) => {
    return (
      <div key={num}>
        <Card title={exp.title} date={exp.date} details={exp.details} links={exp.links} image={exp.image}/>
      </div>
    );
  })
);

export default CardsList;

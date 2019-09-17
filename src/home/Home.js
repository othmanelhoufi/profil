import React from 'react';
import {NavLink} from 'react-router-dom';
import Signature from './signature/Signature';
import './HomeStyle.scss';

import Fade from 'react-reveal/Fade';


const Home = (props) => (

  <Fade top cascade>
  <div className="home">

        <div className="signature">
          <Signature images={props.signature} />
        </div>



          <div>
              <div className="fullname">
                <div>{props.fullname}</div>
              </div>

              <div className="status">
                <div>{props.status}</div>
              </div>

              <div className="hireme">
                <NavLink activeClassName="selected" to="/contact"><button className="button element color-11">Hire me</button></NavLink>
              </div>
          </div>

  </div>
  </Fade>


);



export default Home;

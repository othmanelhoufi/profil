import React, {Component} from 'react';
import Modal from 'react-modal';
import LightBox from './LightBox';
import './CardStyle.scss';

import Fade from 'react-reveal/Fade';


// const customStyles = {
//   content : {
//     top                   : '50%',
//     left                  : '50%',
//     right                 : 'auto',
//     bottom                : 'auto',
//     marginRight           : '-50%',
//     transform             : 'translate(-50%, -50%)'
//   }
// };

Modal.setAppElement('#main')

class Card extends Component {


  constructor() {
      super();

      this.state = {
        modalIsOpen: false
      };

      this.openModal = this.openModal.bind(this);
      this.closeModal = this.closeModal.bind(this);
    }

    openModal() {
      this.setState({modalIsOpen: true});
    }


    closeModal() {
      this.setState({modalIsOpen: false});
    }



  render() {
    return (
      <div>

        <div className="card element color-11" onClick={this.openModal}>

          <div className="cardTitle"> {this.props.title} </div>
          <div className="cardDate"> {this.props.date} </div>

        </div>

        <Modal
         isOpen={this.state.modalIsOpen}
         onAfterOpen={this.afterOpenModal}
         onRequestClose={this.closeModal}
         contentLabel="Modal"
         style={{
              overlay: {
                backgroundColor: 'rgba(0, 0, 0, 0.63)'
              }
          }}
       >

        <Fade cascade>
        <div>
          <div className="modal">
            <div className="closeContainer" onClick={this.closeModal}>
              <p className="closeTag">&times;</p>
            </div>


                <div className="detailsContainer">

                  <div className="cardTitle"> {this.props.title} </div>
                  <div className="cardDate"> {this.props.date} </div>
                  <div className="cardDetails"> {this.props.details} </div>
                  <div className="cardLinks">
                    { arrayToLinks(this.props.links) }
                  </div>
                  <div className="cardImage">
                      <LightBox images={this.props.image} />
                  </div>

                </div>

          </div>
        </div>
        </Fade>

      </Modal>

      </div>
    );
  }
}

const arrayToLinks = (arr) => ( arr.map( (link, num) => {
    return (
      <div key={num}>
        <span className="linkTitle"> {link[0]} </span>
        <span className="linkAdress"> <a href={link[1]} > {link[1]} </a> </span>
      </div>
    );
  })
);


export default Card;

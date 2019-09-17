import React, { useState } from 'react';
import FsLightbox from 'fslightbox-react';
import './LightBox.scss';



function Lightbox( props ) {
// if toggler is updated when lightbox is closed it will open it
// if toggler is updated when lightbox is opened it will close it
  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    slide: 1
  });


  const arrayToImages = (arr) => ( arr.map( (path, num) => {
      return (
          <div key={num}>
            <div onClick={ () => openLightboxOnSlide(num+1) }>
              <img className="images" src={path} alt={path} />
            </div>
          </div>
        );
    })
  );

  function openLightboxOnSlide(number) {
    setLightboxController({
      toggler: !lightboxController.toggler,
      slide: number,
    });
  }

  return (
    <>
        <div className="imagesContainer">
          {
            arrayToImages( props.images )
          }
        </div>


        <FsLightbox
          toggler={ lightboxController.toggler }
          slide={ lightboxController.slide }
          sources={ props.images }

        />
    </>
  );
}




export default Lightbox;

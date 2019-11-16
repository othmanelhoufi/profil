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
      let tmp = "";
      let extension = path.substring( path.length - 4 , path.length );
      if (  extension !== ".png" && extension !==".jpg" && extension !==".gif" && extension !=="jpeg" ) {
        tmp = <img className='images' src="./images/minature.png" alt="./images/minature.png" />
      } else {
        tmp = <img className="images" src={path} alt={path} />
      }
      return (
          <div key={num}>
            <div onClick={ () => openLightboxOnSlide(num+1) }>
              {tmp}
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

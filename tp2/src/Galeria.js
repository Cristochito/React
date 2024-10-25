import React, { useEffect, useState } from 'react';
import './Style.css';

function Galeria() {
  const [image, setImage] = useState(1);
  const Paisajes = ["","Lago","Bosque","Montaña","Playa",""]
  useEffect(() => {
    const keyPress = (event) => {
      if(event.key === "ArrowRight"){ 
        if(image < 4){ //Si se presiona la fecha derecha y img es menor a 8 (maximo de imags) actualiza el estado cambiando la img.
          setImage(prevImage => prevImage + 1); 
        }
      }
      else if(event.key === "ArrowLeft"){
        if(image > 1){ // Si img es mayor a 1 (minimo de imags) actualiza el estado cambiando la img.
          setImage(prevImage => prevImage - 1); 
        }
      }
    };

    window.addEventListener('keydown', keyPress);
    return () => {
      window.removeEventListener('keydown', keyPress);
    };
  }, [image]);
  
  return (
    <div className = "container">
      <h1 className="galleryTitle">Paisajes: {Paisajes[image]}</h1>
      <div className='gallerySlide'>
          <img src={require('./media/'+image+'.jpg')} />
      </div>
    </div>
  );
}

export default Galeria;
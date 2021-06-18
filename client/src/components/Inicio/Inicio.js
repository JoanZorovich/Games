import React from "react";
import './Inicio.css';
import Image from '../../img/Homepage_image.png';

const Inicio = () => {
  return (
    <div className="background">
      <img src={Image} alt="" width="100%" height="100%" center="center"></img>
    </div>
  )
}

export default Inicio;
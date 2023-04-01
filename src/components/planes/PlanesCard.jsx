import React from "react";
import { Link } from "react-scroll";


const PlanesCard = ({ product }) => { 
  
  return (
      <div  className="productCard">
      <div className="imgC">
       <img src={product.image} alt={product.title} />
      </div>
      <div className="contentBx">  
      <h3>{product.title}</h3>
      <p className="priceP">{product.description}</p>
      <Link to="contact" smooth={true} duration={1000}>
      <button className="buyP">Consultar</button>
      </Link>
      </div> 
      </div>
  );
};

export default PlanesCard;
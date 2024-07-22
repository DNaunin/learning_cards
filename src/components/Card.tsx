import React from 'react';
import './Card.css';

interface Card {
    imgSrc: string; 
    imgAlt: string;
    title: string; 
    description: string;
}

export default function Card ({
    imgSrc,
    imgAlt, 
    title, 
    description
}: Card) {
  return (
    <div className='card-container'>
      {imgSrc && imgAlt && (<img src={imgSrc} alt={imgAlt} className='card-img'/>)}
      {title && (<h1 className='card-title'>{title}</h1> )}
      {description && (<p className='card-description'>{description}</p> )}
      <button className='card-btn'>More Info</button>
    </div>
  );
}



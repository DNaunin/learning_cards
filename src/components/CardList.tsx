import React from 'react';
import Card from './Card';
import data from '../learningcards.json'; 
import './CardList.css';
import logo from './logo.svg'; 
import nextjs from './nextjs.svg';

const CardList = () => {

  return (
    <div className="card-list">
      {data.cards.map((card, index) => (
        <Card
          key={index}
          imgSrc={card.imgSrc}
          imgAlt={card.imgAlt}
          title={card.name}
          description={card.descriptions}
        />
      ))}
    </div>
  );
};

export default CardList;
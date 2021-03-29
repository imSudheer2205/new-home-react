import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      {/* <h1>Check out these EPIC Destinations!</h1> */}
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              // src='images/img-9.jpg'
              src='images/image1.jpg'
              text='Panchakarma therapy 1'
              label='therapy'
              path='/services'
            />
            <CardItem
              src='images/image1.jpg'
              text='Panchakarma therapy 2'
              label='therapy'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/image1.jpg'
              text='Panchakarma therapy 3'
              label='therapy'
              path='/services'
            />
            <CardItem
              src='images/image1.jpg'
              text='Panchakarma therapy 4'
              label='therapy'
              path='/products'
            />
            <CardItem
              src='images/image1.jpg'
              text='Panchakarma therapy 5'
              label='therapy'
              path='/services'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;

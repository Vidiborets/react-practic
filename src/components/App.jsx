import Painting from './Painting/Painting';
import paintings from '../data/painting.json';
import React from 'react';

export const App = () => {
  return (
    <div
    // style={{
    //   height: '100vh',
    //   display: 'flex',
    //   justifyContent: 'center',
    //   alignItems: 'center',
    //   fontSize: 40,
    //   color: '#010101'
    // }}
    >
      {paintings.map(painting => (
        <Painting
          key={painting.id}
          url={painting.url}
          title={painting.title}
          price={painting.price}
          authorName={painting.author.tag}
          profile={painting.author.url}
          quantity={painting.quantity}
        />
      ))}
    </div>
  );
};

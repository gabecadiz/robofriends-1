import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
  console.log('CardList');
  //comment below is for testing error boundary 
  // if (true) {
  //   throw new Error('Noooo!');
  // }
  return (
    <div>
      {robots.map((user, i) => {
        return (
          <Card
            key={i}
            id={robots[i].id}
            name={robots[i].name}
            email={robots[i].email}
          />
        );
      })}
    </div>
  );
};

export default CardList;

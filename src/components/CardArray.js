import React from 'react';
import Card from './Card.js';

const CardArray = ({robots}) => {
    return (
        <div>
        {
            robots.map((robot, i) => {
                return (
                    <Card 
                        key={robots[i].id} 
                        id={robots[i].id} 
                        name={robots[i].name} 
                        email={robots[i].email} />
                );
            })
        }
        </div>
    );
}

export default CardArray;
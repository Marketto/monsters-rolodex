import React from 'react';

import './card.style.css';

export const Card = ({monster, set}) => (
    <div className='card'>
    <img alt="monster" src={`https://robohash.org/${monster.id}?set=set${set}&size=180x180`} />
        <h2 className='bigelow'> {monster.name} </h2>
        <p> {monster.email} </p>
    </div>
);
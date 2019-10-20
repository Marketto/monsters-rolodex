import React from 'react';
import './card-list.style.css';

import { Card } from '../card/card.component';

export const CardList = ({monsters}) => (
    <div className='card-list'>
        {monsters.map((monster, index) => (
            <Card key={monster.id} monster={monster} set='2'/>
        ))}
    </div>
);
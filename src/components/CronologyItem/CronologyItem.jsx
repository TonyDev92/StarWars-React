import React from 'react';
import './CronologyItem.css';

const CronologyItem = ({chars}) => {
  return (
    <div className='timeline-item'>
        <div className='timeline-item-content'>
            <span className='tag'>
                <img src={chars.image} alt={chars.name} />
            </span>
            <p> {chars.name} </p>
        </div>
    </div>
  )
}

export default CronologyItem;

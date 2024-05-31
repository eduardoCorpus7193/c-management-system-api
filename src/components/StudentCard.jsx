import React from 'react';

function StudentCard({ name, level, career }) {
    return (
        <div className='col-12 col-md-3'>
            <h2 className='col-12'>{name}</h2>
            <div className='col-12'>{level}</div>
            <div className='col-12'>{career}</div>
        </div>
    );
}

export default StudentCard;

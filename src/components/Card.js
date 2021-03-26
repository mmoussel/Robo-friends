import React from 'react';

const Card = ({ name, id, email, company }) => {
    return (
        <div className='tc bg-light-blue dib br3 pa3 ma2 grow shadow-5'>
            <img alt='robot' src={`https://robohash.org/${id}`}></img>
            <h2>{name}</h2>
            <p className='f4 b'>{email}</p>
            <p className='f4 b'>{company}</p>
        </div>
    );
}
export default Card
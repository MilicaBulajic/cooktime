import React from 'react';

const Summary = ({ image, minutes, ingredients, servings, healthscore }) => {
    return (
        <div>
            <p>{minutes}</p>
            <p>{ingredients}</p>
            <p>{servings}</p>
            <p>{healthscore}</p>
            <img src={image} alt="" />
        </div>
    )
}

export default Summary;
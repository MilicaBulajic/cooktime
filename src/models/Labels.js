import React from 'react';

const Labels = ({ vegan, glutenFree, vegetarian, dairyFree, cheap, veryHealthy, veryPopular, sustainable  }) => {
    return (
        <div>
            <p>{vegan}</p>
            <p>{glutenFree}</p>
            <p>{vegetarian}</p>
            <p>{dairyFree}</p>
            <p>{cheap}</p>
            <p>{veryHealthy}</p>
            <p>{veryPopular}</p>
            <p>{sustainable}</p>
        </div>
    )
}

export default Labels;
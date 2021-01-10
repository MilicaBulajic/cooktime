import React from 'react';

const RecipeCard = ({ recipe }) => {
    return (
        <div className="col s12 m4">
            <div className="card hoverable">
                <div className="card-image">
                    <img src={recipe.image.medium} alt="" />
                    <span className="btn-floating btn-large halfway-fab blue ">{recipe.rating}</span>
                </div>
                <div className="card-content">
                    <span className="card-title grey-text text-darken-4 truncate">{recipe.name}</span>
                </div>
            </div>
        </div>
    );
};

export default RecipeCard;
import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function MyRecipes({ myRecipes, removeRecipeFromMyRecipes }) {
  return (
    <div className="my-recipes">
      <h2>My Recipes</h2>
      {myRecipes.length === 0 ? (
        <p>You haven't added any recipes yet.</p>
      ) : (
        <div className="recipe-list">
          {myRecipes.map((recipe, index) => (
            <div key={index} className="recipe-item">
              <img src={recipe.img} alt={recipe.title} style={{ width: '300px', height: '200px' }} />
              <h3>{recipe.title}</h3>
              <div className="card-btn">
                <button onClick={() => removeRecipeFromMyRecipes(index)}>Remove</button>
                <Link to={`/recipe/${recipe.id}`}>
                  <button className="btn-forward">&#10140;</button>
                </Link>
              </div>
              <p>{recipe.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MyRecipes;

import React from 'react';
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
              <img 
                src={recipe.img} 
                alt={recipe.title} 
                style={{ width: '300px', height: '200px' }}
              />
              <h3>{recipe.title}</h3>
              <button onClick={() => removeRecipeFromMyRecipes(index)}>Remove</button>
              <p>{recipe.description}</p>
              <Link to={`/recipe/${index}`}>
                <button>View Details</button>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MyRecipes;

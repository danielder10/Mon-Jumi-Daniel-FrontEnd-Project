import React from 'react';

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
              <img src={recipe.img} alt={recipe.title} />
              <h3>{recipe.title}</h3>
              <p>{recipe.description}</p>
              <button onClick={() => removeRecipeFromMyRecipes(index)}>Remove</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MyRecipes;

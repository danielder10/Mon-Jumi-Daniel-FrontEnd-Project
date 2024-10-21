import React from 'react';
import { useParams } from 'react-router-dom';

function RecipeDetails({ recipes }) {

  
  const { id } = useParams();
  const recipe = recipes[parseInt(id)];

  if (!recipe) {
    return <div>Recipe not found.</div>;
  }

  return (
    <div>
      <h2>{recipe.title}</h2>
      <img src={recipe.img} alt={recipe.title} style={{ width: '400px', height: '300px' }} />
      <h3>Description:</h3>
      <p>{recipes.description}</p>
      <h3>Ingredients:</h3>
      <ul>
        {recipe.ingredients && recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{recipe.ingredients}</li>
        ))}
      </ul>
      <h3>Instructions:</h3>
      <p>{recipe.instructions}</p>
    </div>
  );
}

export default RecipeDetails;

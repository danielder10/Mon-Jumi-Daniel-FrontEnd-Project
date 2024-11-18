import React from 'react';
import { useParams } from 'react-router-dom';

function RecipeDetails({ recipes }) {
  const { id } = useParams();
  const recipe = recipes.find((recipe) => recipe.id === parseInt(id));  // Correct the ID to array index

  if (!recipe) {
    return <div>Recipe not found.</div>;
  }

  return (
    <div>
      <h2>{recipe.title}</h2>
      <img src={recipe.img} alt={recipe.title} style={{ width: '400px', height: '300px' }} />
      <h3>Description:</h3>
      <p>{recipe.description}</p>  {/* Corrected reference */}
      <h3>Ingredients:</h3>
      <ul>
        {recipe.ingredients && recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h3>Instructions:</h3>
      <p>{recipe.instructions}</p>  {/* Joining the instructions into a single paragraph */}
    </div>
  );
}

export default RecipeDetails;


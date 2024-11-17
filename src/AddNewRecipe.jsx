import React from 'react';
import AddRecipeForm from './components/AddRecipeForm';
import './App.css';

export default function AddNewRecipe({ recipes, handleAddRecipe }) {
  return (
    <div>
      <AddRecipeForm onAddRecipe={handleAddRecipe} />
      <div className="recipe-list">
        {recipes.length === 0 ? (
          <p>No recipes yet, add one right now!</p>
        ) : (
          recipes.map((recipe, index) => (
            <div key={index} className="recipe-item">
              <img
                src={URL.createObjectURL(recipe.img)}
                alt={recipe.title}
                style={{ width: '300px', height: '200px', objectFit: 'cover' }}
              />
              <h3>{recipe.title}</h3>
              <p>
                <strong>Description:</strong> {recipe.description}
              </p>
              <p>
                <strong>Ingredients:</strong> {recipe.ingredients}
              </p>
              <p>
                <strong>Instructions:</strong> {recipe.instruction}
              </p>
              <button onClick={() => addRecipeToMyRecipes(recipe)}>Add to My Recipes</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

import React from 'react';
import AddRecipeForm from './components/AddRecipeForm';
import './App.css';

export default function AddNewRecipe({ recipes, handleAddRecipe, addRecipeToMyRecipes }) {
  const userAddedRecipes = recipes.filter((recipe) => recipe.isUserAdded);

  return (
    <div>
      <AddRecipeForm onAddRecipe={(recipe) => handleAddRecipe({ ...recipe, isUserAdded: true })} />
      <div className="recipe-list">
        {userAddedRecipes.length === 0 ? (
          <p>No recipes yet, add one right now!</p>
        ) : (
          userAddedRecipes.map((recipe, index) => (
            <div key={index} className="recipe-item">
              <img
                src={recipe.img instanceof File ? URL.createObjectURL(recipe.img) : recipe.img}
                alt={recipe.title}
                style={{ width: '300px', height: '200px', objectFit: 'cover' }}
              />
              <h3>{recipe.title}</h3>
              <p>
                <strong>Description:</strong> {recipe.description || 'No description provided.'}
              </p>
              <p>
                <strong>Ingredients:</strong>
              </p>
              <ul>
                {(recipe.ingredients || []).map((ingredient, i) => (
                  <li key={i}>{ingredient}</li>
                ))}
              </ul>
              <p>
                <strong>Instructions:</strong>
              </p>
              <ol>
                {(recipe.instructions || []).map((instruction, i) => (
                  <li key={i}>{instruction}</li>
                ))}
              </ol>
              <button onClick={() => addRecipeToMyRecipes(recipe)}>Add to My Recipes</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

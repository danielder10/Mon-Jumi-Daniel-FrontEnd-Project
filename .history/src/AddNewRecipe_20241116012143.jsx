import React from 'react';
import { useState } from 'react';
import AddRecipeForm from './components/AddRecipeForm';
import './App.css'; 

export default function AddNewRecipe() {
    const [recipes, setRecipes] = useState([]);
    
    const handleAddRecipe = (newRecipe) => {
        setRecipes([...recipes, newRecipe]); 
    };
    
  return (
    <>
        <div>
            <AddRecipeForm onAddRecipe={handleAddRecipe} />
            <div>
                <h2>Recipes:</h2>
                {recipes.length === 0 ? (
                    <p>No recipes yet, add one right now!</p>
                ) : (
                    recipes.map((recipe, index) => (
                        <div key={index} className="recipe-item">
                            <h3>{recipe.title}</h3>
                            <img 
                                src={URL.createObjectURL(recipe.img)}
                                alt={recipe.title}
                                style={{ width: "150px", height: "150px", objectFit: "cover" }}
                            />
                            <p><strong>Description:</strong> {recipe.description}</p>
                            <p><strong>Ingredients:</strong> {recipe.ingredients}</p>
                            <p><strong>Instructions:</strong> {recipe.instruction}</p>
                        </div>
                    ))
                )}
            </div>
        </div>
    </>
  );
};

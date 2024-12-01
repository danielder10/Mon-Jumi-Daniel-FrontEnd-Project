import React from 'react';
import { useState } from 'react';
import './App.css'; 
import { recipes } from './Home';
import { Link } from 'react-router-dom';

function Categories({ addRecipeToMyRecipes }) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const filterRecipe = selectedCategory === 'All' 
    ? recipes 
    : recipes.filter(recipe => recipe.category === selectedCategory);

  return (
    <div className="categories">
      <h2>Explore by Dietary Preferences</h2>

      {/* Buttons for each category */}
      <button onClick={() => handleCategoryChange('All')}>All</button>
      <button onClick={() => handleCategoryChange('Vegan')}>Vegan</button>
      <button onClick={() => handleCategoryChange('Gluten-Free')}>Gluten-Free</button>
      <button onClick={() => handleCategoryChange('Keto')}>Keto</button>
      <button onClick={() => handleCategoryChange('Paleo')}>Paleo</button>

      {/* Display filtered recipes */}
      <div className="recipe-list">
        {filterRecipe.map((recipe, index) => (
          <div key={index} className="recipe-item">
            <img src={recipe.img instanceof File ? URL.createObjectURL(recipe.img) : recipe.img} alt={recipe.title} style={{ width: '300px', height: '200px' }} />
            <h3>{recipe.title}</h3>
            <div className="card-btn">
              <button onClick={() => addRecipeToMyRecipes(recipe)}>Add to My Recipes</button>
              <Link to={`/recipe/${recipe.id}`}>
                <button className="btn-forward">&#10140;</button>
              </Link>
            </div>
            <p>{recipe.description}</p>
          </div>
        ))}

      </div>

    </div>
  );
}

export default Categories;
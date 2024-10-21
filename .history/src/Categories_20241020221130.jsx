import React from 'react';
import { useState } from 'react';
import './App.css'; 

function Categories() {
  const [ selectedCategory, setSelectedCategory ] = useState('All');

  const handleCategoryChange = (category) => {
    selectedCategory(category)
  }

  return (
    <div className="categories">
      <h2>Explore by Dietary Preferences</h2>

      {/* Buttons for each category */}
      <button onClick={() => handleCategoryChange('All')}>All</button>
      <button onClick={() => handleCategoryChange('Vegan')}>Vegan</button>
      <button onClick={() => handleCategoryChange('Gluten-Free')}>Gluten-Free</button>
      <button onClick={() => handleCategoryChange('Keto')}>Keto</button>
      <button onClick={() => handleCategoryChange('Paleo')}>Paleo</button>
    </div>
  );
}

export default Categories;
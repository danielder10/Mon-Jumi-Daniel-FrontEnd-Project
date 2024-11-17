import React, { useState } from 'react';
import './AddRecipeForm.css'; 

function AddRecipeForm({ onAddRecipe }) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    ingredients: '',
    instruction: '',
    img: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    setFormData({ ...formData, img: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddRecipe(formData);
    setFormData({
      title: '',
      description: '',
      ingredients: '',
      instruction: '',
      img: null,
    });
  };

  return (
    <form className="add-recipe-form" onSubmit={handleSubmit}>
      <h2>Add a New Recipe</h2>

      <div className="form-group">
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleInputChange}
          placeholder="Recipe Title"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          placeholder="Write a short description..."
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="ingredients">Ingredients:</label>
        <textarea
          id="ingredients"
          name="ingredients"
          value={formData.ingredients}
          onChange={handleInputChange}
          placeholder="List the ingredients..."
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="instruction">Instructions:</label>
        <textarea
          id="instruction"
          name="instruction"
          value={formData.instruction}
          onChange={handleInputChange}
          placeholder="Describe the steps..."
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="img">Upload Image:</label>
        <input type="file" id="img" onChange={handleImageChange} required />
      </div>

      <button type="submit" className="submit-button">Add Recipe</button>
    </form>
  );
}

export default AddRecipeForm;

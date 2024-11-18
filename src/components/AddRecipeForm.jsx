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

  const [preview, setPreview] = useState(null); // For previewing the image

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, img: file });
      setPreview(URL.createObjectURL(file)); // Generate a preview URL
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Ensure `img` is processed correctly before passing it to `onAddRecipe`
    const newRecipe = {
      ...formData,
      ingredients: formData.ingredients.split(',').map((i) => i.trim()), // Parse ingredients
      instruction: formData.instruction.split('.').map((step) => step.trim()), // Parse instructions
    };

    onAddRecipe(newRecipe);

    // Cleanup after submission
    setFormData({
      title: '',
      description: '',
      ingredients: '',
      instruction: '',
      img: null,
    });
    setPreview(null); // Clear preview
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
        <label htmlFor="ingredients">Ingredients (comma-separated):</label>
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
        <label htmlFor="instruction">Instructions (step-separated by periods):</label>
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
        <input type="file" id="img" accept="image/*" onChange={handleImageChange} required />
        {preview && (
          <div className="image-preview">
            <img src={preview} alt="Preview" style={{ width: '300px', height: '200px', marginTop: '10px' }} />
          </div>
        )}
      </div>

      <button type="submit" className="submit-button">Add Recipe</button>
    </form>
  );
}

export default AddRecipeForm;

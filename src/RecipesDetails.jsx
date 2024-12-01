import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';


function RecipeDetails({ recipes, addRecipeToMyRecipes }) {
  const { id } = useParams();
  const recipe = recipes.find((recipe) => recipe.id === parseInt(id)); // Correct the ID to array index

  if (!recipe) {
    return <div>Recipe not found.</div>;
  }

  const styles = {
    container: {
      margin: '2rem auto',
      padding: '1.5rem',
      maxWidth: '800px',
      backgroundColor: '#f9f9f9',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      fontFamily: "'Arial', sans-serif",
    },
    image: {
      width: '100%',
      maxHeight: '400px',
      objectFit: 'cover',
      borderRadius: '8px',
      marginBottom: '1rem',
    },
    title: {
      fontSize: '2rem',
      color: '#333',
      marginBottom: '1rem',
    },
    sectionTitle: {
      fontSize: '1.5rem',
      color: '#555',
      margin: '1.5rem 0 1rem',
    },
    list: {
      listStyleType: 'disc',
      paddingLeft: '1.5rem',
      color: '#555',
    },
    paragraph: {
      lineHeight: '1.8',
      color: '#666',
    },
    button: {
      display: 'inline-block',
      padding: '0.5rem 1rem',
      margin: '1rem 0',
      backgroundColor: '#007BFF',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: '1rem',
    },
    buttonHover: {
      backgroundColor: '#0056b3',
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>{recipe.title}</h2>
      <img src={recipe.img} alt={recipe.title} style={styles.image} />
      <h3 style={styles.sectionTitle}>Description:</h3>
      <p style={styles.paragraph}>{recipe.description}</p>
      <h3 style={styles.sectionTitle}>Ingredients:</h3>
      <ul style={styles.list}>
        {recipe.ingredients &&
          recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
      </ul>
      <h3 style={styles.sectionTitle}>Instructions:</h3>
      <ul style={styles.list}>
        {recipe.instructions &&
          recipe.instructions.map((instruction, index) => (
            <li key={index}>{instruction}</li>
          ))}
      </ul>
      <button onClick={() => addRecipeToMyRecipes(recipe)}>Add to My Recipes</button>
    </div>
  );
}

export default RecipeDetails;

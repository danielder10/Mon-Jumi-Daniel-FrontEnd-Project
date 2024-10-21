import React, { useState } from 'react';

const recipes = [
  { 
    title: "Vegan Tacos", 
    img: "https://www.freshoffthegrid.com/wp-content/uploads/5-ingredient-vegan-taco-sq.jpg", 
    description: "A delicious vegan taco recipe...",
    category: "Vegan"
  },
  { 
    title: "Gluten-Free Pizza", 
    img: "https://media.istockphoto.com/id/184969517/photo/marinara-pizza.jpg?s=612x612&w=0&k=20&c=5l07HQR40k9zYZ6Sc05Er58fvd_QHIIu3INiWApn6GY=", 
    description: "Try this gluten-free pizza...",
    category: "Gluten-Free"
  },
  { 
    title: "Spaghetti Carbonara", 
    img: "https://static01.nyt.com/images/2021/02/14/dining/carbonara-horizontal/carbonara-horizontal-square640-v2.jpg", 
    description: "Classic Italian pasta dish...",
    category: "Keto"
  },
  { 
    title: "Lemon Chicken", 
    img: "https://images.getrecipekit.com/20220904014419-crispy-20lemon-20chicken.png?aspect_ratio=16:9&quality=90&", 
    description: "Tangy and savory lemon chicken..." 
  },
  { 
    title: "Chocolate Brownies", 
    img: "https://joyfoodsunshine.com/wp-content/uploads/2018/01/best-black-bean-brownies-recipe-4.jpg", 
    description: "Rich and fudgy chocolate brownies..." 
  }
];

function Home({ addRecipeToMyRecipes }) {
  return (
    <div className="home">
      <h2>Featured Recipes</h2>
      <div className="recipe-list">
        {recipes.map((recipe, index) => (
          <div key={index} className="recipe-item">
            <img 
              src={recipe.img} 
              alt={recipe.title} 
              style={{ width: '300px', height: '200px' }}
            />
            <h3>{recipe.title}</h3>
            <button onClick={() => addRecipeToMyRecipes(recipe)}>Add to My Recipes</button>
            <p>{recipe.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;

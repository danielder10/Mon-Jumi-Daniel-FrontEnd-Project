import React, { useState } from 'react';   // Imports React and the `useState` hook.

const recipes = [                         // Declares a constant `recipes`, an array of recipe objects with details such as title, image, and description.
  { 
    title: "Vegan Tacos", 
    img: "https://www.freshoffthegrid.com/wp-content/uploads/5-ingredient-vegan-taco-sq.jpg", 
    description: "A delicious vegan taco recipe..." 
  },
  { 
    title: "Gluten-Free Pizza", 
    img: "https://media.istockphoto.com/id/184969517/photo/marinara-pizza.jpg?s=612x612&w=0&k=20&c=5l07HQR40k9zYZ6Sc05Er58fvd_QHIIu3INiWApn6GY=", 
    description: "Try this gluten-free pizza..." 
  },
  { 
    title: "Spaghetti Carbonara", 
    img: "https://static01.nyt.com/images/2021/02/14/dining/carbonara-horizontal/carbonara-horizontal-square640-v2.jpg", 
    description: "Classic Italian pasta dish..." 
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
];                                          // Defines an array of 5 recipes with a title, image URL, and description.

function Home({ addRecipeToMyRecipes }) {    // Declares the functional component `Home`, which takes a prop called `addRecipeToMyRecipes` (a function for adding recipes to the user's list).

  return (
    <div className="home">                  // Defines the main container with the class "home".
      <h2>Featured Recipes</h2>             // Displays a heading "Featured Recipes".

      <div className="recipe-list">          // Wraps the recipe list in a div with the class "recipe-list".
        {recipes.map((recipe, index) => (    // Maps through the `recipes` array to render each recipe.
          <div key={index} className="recipe-item">   // Each recipe is rendered as a div with the class "recipe-item".
                                                     // The `key` attribute is set to the index to help React track elements.

            <img                              // Displays the recipe image.
              src={recipe.img}                // Sets the image source from the recipe object.
              alt={recipe.title}              // Provides an alt text for accessibility using the recipe title.
              style={{ width: '300px', height: '200px' }}  // Sets inline styles for image size.
            />
            <h3>{recipe.title}</h3>           // Displays the recipe title.

            <button onClick={() => addRecipeToMyRecipes(recipe)}>  // Adds a button that triggers the `addRecipeToMyRecipes` function.
              Add to My Recipes               // When clicked, the button adds the recipe to the user's list.
            </button>

            <p>{recipe.description}</p>       // Displays the recipe description.
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;                          // Exports the Home component for use in other parts of the app.

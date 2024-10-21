import React from 'react';         // Imports the React library to use React features like components.
import './App.css';                // Imports the CSS file for styling the component.

function MyRecipes({ myRecipes, removeRecipeFromMyRecipes }) {   // Declares a functional component called MyRecipes.
                                                                // It accepts two props: 
                                                                // `myRecipes` (an array of recipe objects) 
                                                                // and `removeRecipeFromMyRecipes` (a function to remove a recipe).
  return (
    <div className="my-recipes">   // Defines a container with the class "my-recipes" for styling purposes.
      <h2>My Recipes</h2>          // Displays a heading "My Recipes" at the top of the component.

      {myRecipes.length === 0 ? (  // Checks if the `myRecipes` array is empty.
        <p>You haven't added any recipes yet.</p>   // If there are no recipes, display this message.
      ) : (                                        // Otherwise, continue with the code below.
        <div className="recipe-list">              // Creates a div to hold the list of recipes.
          {myRecipes.map((recipe, index) => (      // Maps over the `myRecipes` array to display each recipe.
            <div key={index} className="recipe-item">  // Each recipe is wrapped in a div with the class "recipe-item".
                                                      // The `key` is a unique identifier for each recipe (using its index).

              <img                                  // Displays the recipe image.
                src={recipe.img}                    // Uses the `img` property of the recipe object for the image source.
                alt={recipe.title}                  // Sets the `alt` attribute for accessibility, using the recipe title.
                style={{ width: '300px', height: '200px' }}  // Adds inline styles to control the image size.
              />
              <h3>{recipe.title}</h3>               // Displays the title of the recipe in an h3 tag.

              <button onClick={() => removeRecipeFromMyRecipes(index)}>  // Adds a button to remove the recipe from the list.
                Remove                             // Clicking the button calls `removeRecipeFromMyRecipes` with the recipe's index.
              </button>

              <p>{recipe.description}</p>           // Displays the description of the recipe.
            </div>
          ))}                                      // Closes the map function.
        </div>
      )}
    </div>
  );
}

export default MyRecipes;     // Exports the MyRecipes component for use in other parts of the app.

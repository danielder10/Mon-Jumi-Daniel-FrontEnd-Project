import React, { useState } from 'react';
import RecipesDetails from './RecipesDetails';
import { Link } from 'react-router-dom';

const recipes = [
  { 
    id: 1,
    title: "Vegan Tacos",
    img: "https://www.freshoffthegrid.com/wp-content/uploads/5-ingredient-vegan-taco-sq.jpg",
    description: "A delicious vegan taco recipe...",
    ingredients: [
      "6 taco shells",
      "1 can black beans (drained and rinsed)",
      "1 ripe avocado (sliced)",
      "1 small red onion (chopped)",
      "1/2 cup corn kernels (optional)",
      "1/2 cup diced tomatoes",
      "Fresh cilantro (for garnish)",
      "Lime wedges (for serving)",
      "Salt and pepper to taste"
    ],
    instructions: [
      "1. Heat the taco shells in a dry skillet or in the oven until warm and slightly crispy.",
      "2. In a saucepan, heat the black beans over medium heat until warmed through. Season with salt and pepper.",
      "3. Prepare the toppings by slicing the avocado and chopping the onions, tomatoes, and cilantro.",
      "4. Fill each taco shell with black beans, then top with avocado, onions, tomatoes, and corn if using.",
      "5. Garnish with fresh cilantro and serve with lime wedges on the side for extra flavor."
    ]
  },

  { 
    id: 2,
    title: "Gluten-Free Pizza",
    img: "https://media.istockphoto.com/id/184969517/photo/marinara-pizza.jpg?s=612x612&w=0&k=20&c=5l07HQR40k9zYZ6Sc05Er58fvd_QHIIu3INiWApn6GY=",
    description: "Try this gluten-free pizza...",
    ingredients: [
      "1 gluten-free pizza base",
      "1/2 cup tomato sauce",
      "1 1/2 cups mozzarella cheese (shredded)",
      "1/4 cup olive oil",
      "1/4 cup grated Parmesan cheese",
      "Fresh basil leaves (for garnish)",
      "Salt and pepper to taste",
      "Optional toppings: pepperoni, mushrooms, bell peppers, etc."
    ],
    instructions: [
      "1. Preheat the oven to 425°F (220°C).",
      "2. Spread the tomato sauce evenly over the gluten-free pizza base.",
      "3. Sprinkle the shredded mozzarella cheese on top, followed by any optional toppings you like.",
      "4. Drizzle olive oil over the pizza and season with salt and pepper.",
      "5. Bake for 12-15 minutes, or until the crust is golden and the cheese is bubbly.",
      "6. Remove from the oven and garnish with fresh basil leaves before serving."
    ]
  },

  { id: 3,
    title: "Spaghetti Carbonara", 
    img: "https://static01.nyt.com/images/2021/02/14/dining/carbonara-horizontal/carbonara-horizontal-square640-v2.jpg",
    description: "Classic Italian pasta dish...",
    ingredients: [
      "400g spaghetti",
      "100g pancetta or bacon",
      "2 large eggs",
      "50g Pecorino cheese, grated",
      "50g Parmesan cheese, grated",
      "Freshly ground black pepper",
      "Salt to taste",
      "2 cloves garlic, minced (optional)"],
    instructions: [
      "1. Cook the spaghetti in salted boiling water according to the package instructions. Reserve some of the pasta water.",
      "2. Fry pancetta or bacon in a pan until crispy.",
      "3. Whisk eggs and mix in cheeses with black pepper.",
      "4. Combine pasta, pancetta, and egg mixture off heat, adding reserved pasta water for creaminess.",
      "5. Serve with extra cheese and pepper."
    ]
  },

  { 
    id: 4,
    title: "Lemon Chicken",
    img: "https://images.getrecipekit.com/20220904014419-crispy-20lemon-20chicken.png?aspect_ratio=16:9&quality=90&",
    description: "Tangy and savory lemon chicken...",
    ingredients: [
      "4 boneless, skinless chicken breasts",
      "1/4 cup all-purpose flour",
      "Salt and pepper to taste",
      "3 tbsp olive oil",
      "1/2 cup chicken broth",
      "1/4 cup fresh lemon juice",
      "1 lemon, thinly sliced",
      "2 cloves garlic, minced",
      "2 tbsp unsalted butter",
      "Fresh parsley for garnish"
    ],
    instructions: [
      "1. Season and dredge chicken in flour.",
      "2. Brown in olive oil.",
      "3. Sauté garlic, add broth and lemon juice.",
      "4. Simmer chicken with lemon slices until cooked.",
      "5. Stir in butter and garnish with parsley."
    ]
  },

  { id: 5,
    title: "Chocolate Brownies",
    img: "https://joyfoodsunshine.com/wp-content/uploads/2018/01/best-black-bean-brownies-recipe-4.jpg",
    description: "Rich and fudgy chocolate brownies...",
    ingredients: [
      "1/2 cup unsalted butter",
      "200g dark chocolate, chopped",
      "1 cup granulated sugar",
      "2 large eggs",
      "1 tsp vanilla extract",
      "1/2 cup all-purpose flour",
      "1/4 cup cocoa powder",
      "1/2 tsp salt",
      "1/2 cup chocolate chips (optional)"
    ],
    instructions: [
      "1. Melt butter and chocolate.", 
      "2. Mix in sugar, eggs, and vanilla.",
      "3. Stir in dry ingredients.",
      "4. Pour into a greased pan and bake at 350°F for 20-25 minutes."]
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

export default Home;

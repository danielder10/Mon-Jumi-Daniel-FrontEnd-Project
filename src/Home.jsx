import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';


export const recipes = [
  { 
    id: 0,
    title: "Vegan Tacos", 
    img: "https://www.freshoffthegrid.com/wp-content/uploads/5-ingredient-vegan-taco-sq.jpg", 
    description: "A delicious vegan taco recipe...",
    category: "Vegan",
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
    id: 1,
    title: "Gluten-Free Pizza", 
    img: "https://media.istockphoto.com/id/184969517/photo/marinara-pizza.jpg?s=612x612&w=0&k=20&c=5l07HQR40k9zYZ6Sc05Er58fvd_QHIIu3INiWApn6GY=", 
    description: "Try this gluten-free pizza...",
    category: "Gluten-Free",
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
  { 
    id: 2,
    title: "Spaghetti Carbonara", 
    img: "https://static01.nyt.com/images/2021/02/14/dining/carbonara-horizontal/carbonara-horizontal-square640-v2.jpg", 
    description: "Classic Italian pasta dish...",
    category: "Keto",
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
    id: 3,
    title: "Lemon Chicken", 
    img: "https://images.getrecipekit.com/20220904014419-crispy-20lemon-20chicken.png?aspect_ratio=16:9&quality=90&", 
    description: "Tangy and savory lemon chicken...",
    category: "Paleo",
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
  { 
    id: 4,
    title: "Chocolate Brownies", 
    img: "https://joyfoodsunshine.com/wp-content/uploads/2018/01/best-black-bean-brownies-recipe-4.jpg", 
    description: "Rich and fudgy chocolate brownies...",
    category: "Vegan",
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
  },
  { 
    id: 5,
    title: "Thai Green Curry", 
    img: "https://piquantpost.com/cdn/shop/articles/GJ16a1y2HDD3gYjmojg2t_1200x1200.jpg?v=1646021297", 
    description: "A creamy and spicy Thai dish...", 
    category: "Gluten-Free",
    ingredients: [
      "2 tbsp green curry paste",
      "1 can (400ml) coconut milk",
      "1 lb chicken breast, sliced",
      "1 cup green beans, trimmed",
      "1 cup baby corn, sliced",
      "1 red bell pepper, sliced",
      "2 tbsp fish sauce",
      "1 tsp brown sugar",
      "Fresh basil leaves",
      "Steamed rice for serving"
    ],
    instructions: [
      "1. Heat a large skillet over medium heat and cook the green curry paste for 1 minute.",
      "2. Stir in the coconut milk and bring to a gentle simmer.",
      "3. Add the chicken slices and cook for 5 minutes.",
      "4. Mix in the vegetables, fish sauce, and sugar, then simmer until vegetables are tender.",
      "5. Garnish with basil leaves and serve with steamed rice."
    ]
  },
  { 
    id: 6,
    title: "Avocado Toast", 
    img: "https://media.istockphoto.com/id/1356424215/photo/avocado-toast-on-whole-grain-sandwich-bread.jpg?s=612x612&w=0&k=20&c=eWF_FPBTvLCyNitB2o3cSeQkMPBWnlEVnJ4kkiQ4c_k=", 
    description: "Quick and healthy breakfast option...", 
    category: "Vegan",
    ingredients: [
      "2 slices of whole-grain bread",
      "1 ripe avocado",
      "1/2 tsp lemon juice",
      "Salt and pepper to taste",
      "Optional toppings: cherry tomatoes, chili flakes, or sprouts"
    ],
    instructions: [
      "1. Toast the bread slices until golden and crispy.",
      "2. Mash the avocado with lemon juice, salt, and pepper.",
      "3. Spread the avocado mixture evenly on each toast.",
      "4. Add optional toppings for extra flavor and serve immediately."
    ]
  },
  { 
    id: 7,
    title: "Grilled Salmon with Asparagus", 
    img: "https://i0.wp.com/www.letscooksomefood.com/wp-content/uploads/2016/06/Grilled-Salmon-and-Asparagus-with-Aioli-Sauce1.jpg?fit=960%2C720&ssl=1", 
    description: "A light and flavorful Paleo dish...", 
    category: "Paleo",
    ingredients: [
      "4 salmon fillets",
      "1 bunch asparagus, trimmed",
      "2 tbsp olive oil",
      "2 tbsp lemon juice",
      "2 cloves garlic, minced",
      "Salt and pepper to taste",
      "Lemon wedges for garnish"
    ],
    instructions: [
      "1. Preheat grill to medium heat.",
      "2. Season salmon and asparagus with olive oil, garlic, lemon juice, salt, and pepper.",
      "3. Grill the salmon for 4-5 minutes per side and asparagus until tender.",
      "4. Serve hot with lemon wedges."
    ]
  },
  { 
    id: 8,
    title: "Banana Smoothie", 
    img: "https://abeautifulmess.com/wp-content/uploads/2023/04/banana-smoothie-recipe.jpg", 
    description: "Refreshing and healthy smoothie...", 
    category: "Keto",
    ingredients: [
      "1 ripe banana",
      "1/2 cup unsweetened almond milk",
      "1/4 cup Greek yogurt",
      "1 tbsp peanut butter",
      "1/2 tsp vanilla extract",
      "Ice cubes (optional)"
    ],
    instructions: [
      "1. Add all ingredients to a blender.",
      "2. Blend until smooth and creamy.",
      "3. Pour into a glass and enjoy immediately."
    ]
  },
  { 
    id: 9,
    title: "Shepherd's Pie", 
    img: "https://www.simplyrecipes.com/thmb/esY4hhLlEgWMG0q9kOvbDZ24Px0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Easy-Shepherds-Pie-Lead-2_SERP-fdf8883477354e85bd05f9243f71657f.jpg", 
    description: "A hearty and comforting dish...", 
    category: "Gluten-Free",
    ingredients: [
      "1 lb ground lamb or beef",
      "1 onion, diced",
      "2 carrots, diced",
      "2 tbsp tomato paste",
      "1 cup beef broth",
      "2 cups mashed potatoes",
      "Salt and pepper to taste",
      "Fresh parsley for garnish"
    ],
    instructions: [
      "1. Preheat the oven to 375°F (190°C).",
      "2. Cook ground meat with onions and carrots in a skillet.",
      "3. Stir in tomato paste and broth, then simmer until thickened.",
      "4. Transfer to a baking dish, top with mashed potatoes, and bake for 20 minutes.",
      "5. Garnish with parsley and serve hot."
    ]
  }
];

function Home({ recipes, addRecipeToMyRecipes }) {
  return (
    <div className="home">
      <h2>Featured Recipes</h2>
      <div className="recipe-list">
        {recipes.map((recipe, index) => (
          <div key={index} className="recipe-item">
            <img src={recipe.img} alt={recipe.title} style={{ width: '300px', height: '200px' }} />
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
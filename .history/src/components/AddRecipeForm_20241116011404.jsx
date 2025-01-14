import { useState } from "react";
import '../App.css'; 

export default function AddRecipeForm( {onAddRecipe} ) {
    // form input state 
    const [title, setTitle] = useState();
    const [img, setImg] = useState();
    const [description, setDescription] = useState();
    const [ingredients, setIngredients] = useState();
    const [instruction, setInstruction] = useState();

    // submit handler 
    const handleSubmit = (e) => {
        e.preventDefault(); // prevent page refresh 

        if (!title || !ingredients || !instruction || !description) {
            alert("All fields except image are required");
            return;
        }

        // create new recipe object
        const newRecipe = {title, img, description, ingredients, instruction};

        // send new recipe
        onAddRecipe(newRecipe);

        setTitle("");
        setImg(null);
        setDescription("");
        setIngredients("");
        setInstruction("")
    };

    return (
        <>
            <form onSubmit={handleSubmit} className="add-recipe-form">
                <h2>Add a recipe</h2>
                <label className="input-field">
                    Recipe Title:
                    <input 
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </label>
                <br/>
                <label className="input-field">
                    Image:
                    <input 
                        type="file"
                        onChange={(e) => setImg(e.target.files[0])}
                        accept="image/*"
                    />
                </label>
                <label className="input-field">
                    Description:
                    <input
                        type="text"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                </label>
                <label className="input-field">
                    Ingredients:
                    <textarea
                        value={ingredients}
                        onChange={(e) => setIngredients(e.target.value)}
                        required
                    />
                </label>
                <label className="input-field">
                    Instructions:
                    <input
                        value={instruction}
                        onChange={(e) => setInstruction(e.target.value)}
                        required
                    />
                </label>
                <br/>
                <button type="submit">Add Recipe</button>
            </form>
        </>
    )
}
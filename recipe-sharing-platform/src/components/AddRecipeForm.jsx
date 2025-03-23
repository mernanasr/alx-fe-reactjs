import React, { useState } from "react";

const AddRecipeForm = ({ onAddRecipe }) => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    
    if (!title || !ingredients || !instructions) {
      setError("All fields are required.");
      return;
    }

    if (ingredients.split(",").length < 2) {
      setError("Please provide at least two ingredients.");
      return;
    }

    setError("");

    
    const newRecipe = {
      id: Date.now(),
      title,
      summary: instructions.substring(0, 100) + "...", 
      image: "https://via.placeholder.com/150", 
      ingredients: ingredients.split(",").map((ing) => ing.trim()),
      instructions,
    };


    onAddRecipe(newRecipe);

    
    setTitle("");
    setIngredients("");
    setInstructions("");
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg mt-8">
      <h2 className="text-2xl font-bold mb-4 text-center">Add a New Recipe</h2>
      {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700 font-medium">Recipe Title</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded mt-1"
            placeholder="Enter recipe title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium">Ingredients</label>
          <textarea
            className="w-full p-2 border border-gray-300 rounded mt-1"
            placeholder="Enter ingredients, separated by commas"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
          ></textarea>
        </div>

        <div>
          <label className="block text-gray-700 font-medium">Preparation Steps</label>
          <textarea
            className="w-full p-2 border border-gray-300 rounded mt-1"
            placeholder="Enter preparation steps"
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
        >
          Add Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;

// src/components/AddRecipeForm.jsx
import React, { useState } from "react";

const AddRecipeForm = ({ onAddRecipe, onCancel }) => {
  const [recipe, setRecipe] = useState({
    name: "",
    category: "",
    difficulty: "",
    prepTime: "",
    cookTime: "",
    ingredients: "",
    instructions: "",
  });

  const handleChange = (e) => {
    setRecipe({ ...recipe, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Convert ingredients and instructions into arrays
    const formattedRecipe = {
      ...recipe,
      ingredients: recipe.ingredients.split("\n").filter(Boolean),
      instructions: recipe.instructions.split("\n").filter(Boolean),
    };
    onAddRecipe(formattedRecipe);
    setRecipe({
      name: "",
      category: "",
      difficulty: "",
      prepTime: "",
      cookTime: "",
      ingredients: "",
      instructions: "",
    });
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Add New Recipe</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          value={recipe.name}
          onChange={handleChange}
          placeholder="Recipe Name"
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
        <input
          type="text"
          name="category"
          value={recipe.category}
          onChange={handleChange}
          placeholder="Category (e.g., Pasta)"
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
        <input
          type="text"
          name="difficulty"
          value={recipe.difficulty}
          onChange={handleChange}
          placeholder="Difficulty (Easy/Medium/Hard)"
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
        <div className="flex gap-2">
          <input
            type="text"
            name="prepTime"
            value={recipe.prepTime}
            onChange={handleChange}
            placeholder="Prep Time (e.g., 10 mins)"
            className="w-1/2 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            type="text"
            name="cookTime"
            value={recipe.cookTime}
            onChange={handleChange}
            placeholder="Cook Time (e.g., 15 mins)"
            className="w-1/2 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>
        <textarea
          name="ingredients"
          value={recipe.ingredients}
          onChange={handleChange}
          placeholder="Ingredients (one per line)"
          rows={4}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
        <textarea
          name="instructions"
          value={recipe.instructions}
          onChange={handleChange}
          placeholder="Instructions (one per line)"
          rows={6}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
        <div className="flex justify-between">
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Add Recipe
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddRecipeForm;
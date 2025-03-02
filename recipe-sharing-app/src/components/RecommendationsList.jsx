import React from "react";
import useRecipeStore from "./recipeStore";

const RecommendationsList = () => {
  const { recommendations } = useRecipeStore(); 

  if (!recommendations || recommendations.length === 0) {
    return <p>No recommendations available.</p>;
  }

  return (
    <div>
      <h2>Recommended Recipes</h2>
      <ul>
        {recommendations.map((recipe) => (
          <li key={recipe.id}>{recipe.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default RecommendationsList;

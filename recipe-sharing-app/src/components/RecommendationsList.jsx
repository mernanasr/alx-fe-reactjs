import React from "react";
import useStore from "./recipeStore"; 

function RecommendationsList() {
  const recommendations = useStore((state) => state.recommendations || []);

  return (
    <div>
      <h2>Recommended Recipes</h2>
      {recommendations.length > 0 ? (
        <ul>
          {recommendations.map((recipe) => (
            <li key={recipe.id}>{recipe.name}</li>
          ))}
        </ul>
      ) : (
        <p>No recommendations available.</p>
      )}
    </div>
  );
}

export default RecommendationsList;

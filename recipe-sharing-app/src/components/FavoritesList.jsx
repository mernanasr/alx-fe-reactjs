import React from "react";
import useRecipeStore from "./recipeStore";

const FavoritesList = () => {
  const { favorites, removeFavorite } = useRecipeStore((state) => ({
    favorites: state.favorites,
    removeFavorite: state.removeFavorite,
  }));

  return (
    <div>
      <h2>My Favorites</h2>
      {favorites.length === 0 ? (
        <p>No favorite recipes yet.</p>
      ) : (
        favorites.map((recipe) => (
          <div key={recipe.id}>
            <h3>{recipe.name}</h3>
            <p>{recipe.description}</p>
            <button onClick={() => removeFavorite(recipe.id)}>Remove</button>
          </div>
        ))
      )}
    </div>
  );
};

export default FavoritesList;

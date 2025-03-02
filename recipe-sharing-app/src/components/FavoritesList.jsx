import useStore from './recipeStore';

function FavoritesList() {
  const favorites = useStore((state) => state.favorites); // Ensure this is correct

  if (!favorites) return <p>Loading favorites...</p>; // Handle undefined case

  return (
    <div>
      <h2>Favorites</h2>
      {favorites.length === 0 ? (
        <p>No favorites yet.</p>
      ) : (
        <ul>
          {favorites.map((recipe) => (
            <li key={recipe.id}>{recipe.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default FavoritesList;
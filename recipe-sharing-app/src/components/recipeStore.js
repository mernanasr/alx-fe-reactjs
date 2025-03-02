import { create } from "zustand";

const useRecipeStore = create((set) => ({
  favorites: [],
  recommendations: [],
  recipes: [],
  filteredRecipes: [],

  addRecipe: (recipe) =>
    set((state) => ({ recipes: [...state.recipes, recipe] })),

  addFavorite: (recipe) =>
    set((state) => ({ favorites: [...state.favorites, recipe] })),

  removeFavorite: (id) =>
    set((state) => ({
      favorites: state.favorites.filter((recipe) => recipe.id !== id),
    })),

  setRecommendations: (newRecommendations) =>
    set({ recommendations: newRecommendations }),

  filterRecipes: (searchTerm) =>
    set((state) => ({
      filteredRecipes: state.recipes.filter((recipe) =>
        recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    })),
}));

export default useRecipeStore;

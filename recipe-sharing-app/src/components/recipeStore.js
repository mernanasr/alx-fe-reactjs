import { create } from "zustand";

const useStore = create((set) => ({
  favorites: [],
  recommendations: [],
  recipes: [],
  filteredRecipes: [],

  addFavorite: (recipe) =>
    set((state) => ({ favorites: [...state.favorites, recipe] })),

  removeFavorite: (id) =>
    set((state) => ({
      favorites: state.favorites.filter((recipe) => recipe.id !== id),
    })),

  setRecommendations: (newRecommendations) =>
    set({ recommendations: newRecommendations }),

  setRecipes: (newRecipes) =>
    set({ recipes: newRecipes, filteredRecipes: newRecipes }),

  filterRecipes: (searchTerm) =>
    set((state) => ({
      filteredRecipes: state.recipes.filter((recipe) =>
        recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    })),
}));

export default useStore;

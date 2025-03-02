import { create } from "zustand";

const useRecipeStore = create((set) => ({
  favorites: [],
  recommendations: [],
  recipes: [],
  filteredRecipes: [],
  searchTerm: "",

  setRecipes: (newRecipes) => set({ recipes: newRecipes }),

  addRecipe: (recipe) =>
    set((state) => ({ recipes: [...state.recipes, recipe] })),

  updateRecipe: (updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      ),
    })),

  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== id),
    })),

  addFavorite: (recipe) =>
    set((state) => ({ favorites: [...state.favorites, recipe] })),

  removeFavorite: (id) =>
    set((state) => ({
      favorites: state.favorites.filter((recipe) => recipe.id !== id),
    })),

  setRecommendations: (newRecommendations) =>
    set({ recommendations: newRecommendations }),

  setSearchTerm: (term) => set({ searchTerm: term }),

  filterRecipes: () =>
    set((state) => ({
      filteredRecipes: state.recipes.filter((recipe) =>
        recipe.name.toLowerCase().includes(state.searchTerm.toLowerCase())
      ),
    })),
}));

export default useRecipeStore;


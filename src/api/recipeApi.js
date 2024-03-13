import { recipes, authors, newRecipe } from "../tools/mockData";

export async function getRecipes() {
  // Simulating an async operation with Promise.resolve
  return Promise.resolve(recipes);
}

export async function saveRecipe(recipe) {
  const savedRecipe = {
    ...recipe,
    // Assign an ID if the recipe is new. This is a simplistic approach.
    id: recipe.id || Math.max(...recipes.map((r) => r.id)) + 1,
    authorId: parseInt(recipe.authorId, 10), // Ensure authorId is a number
  };

  if (recipe.id) {
    // Simulate updating the recipe by replacing the old item
    const index = recipes.findIndex((r) => r.id === recipe.id);
    recipes[index] = savedRecipe;
  } else {
    // Simulate adding a new recipe
    recipes.push(savedRecipe);
  }

  // Simulating an async operation with Promise.resolve
  return Promise.resolve(savedRecipe);
}

export async function deleteRecipe(recipeId) {
  // Simulate deleting the recipe by filtering it out
  const index = recipes.findIndex(
    (recipe) => recipe.id === parseInt(recipeId, 10)
  );
  if (index > -1) {
    recipes.splice(index, 1);
  }

  // Simulating an async operation with Promise.resolve
  // Normally, you might return some status or the deleted object
  return Promise.resolve();
}

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchRecipes,
  deleteRecipeAction,
} from '../redux/actions/recipeActions';
import { fetchAuthors } from '../redux/actions/authorActions';
import RecipeList from './RecipeList';
import { useNavigate } from 'react-router-dom';
import Spinner from './common/Spinner';
import { toast } from 'react-toastify';

function RecipesPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const recipes = useSelector((state) => state.recipes);
  const authors = useSelector((state) => state.authors);
  const apiCallsInProgress = useSelector((state) => state.apiCallsInProgress);
  useEffect(() => {
    dispatch(fetchRecipes());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchAuthors());
  }, [dispatch]);

  function handleAddArticle() {
    navigate('/recipe');
  }

  function handleDeleteRecipe(recipeId) {
    toast.success('Article deleted!');
    dispatch(deleteRecipeAction(recipeId));
  }

  return (
    <>
      <h2 className="text-light">Articles</h2>
      {apiCallsInProgress > 0 ? (
        <Spinner />
      ) : (
        <>
          {' '}
          <button
            className="btn btn-lg btn-dark custom-width"
            onClick={handleAddArticle}
          >
            Add New
          </button>
          <RecipeList
            recipes={recipes}
            authors={authors}
            onDeleteRecipe={handleDeleteRecipe}
          />
        </>
      )}
    </>
  );
}

export default RecipesPage;

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRecipes, saveRecipeAction } from '../redux/actions/recipeActions';
import { fetchAuthors } from '../redux/actions/authorActions';
import ArticleForm from './ArticleForm';
import { useParams, useNavigate } from 'react-router-dom';

function ManageArticlePage() {
  const navigate = useNavigate();
  const { slug } = useParams();

  const recipes = useSelector((state) => state.recipes);
  const authors = useSelector((state) => state.authors);

  const [recipe, setRecipe] = useState({});
  const [errors, setErrors] = useState({});
  const [saving, setSaving] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    if (recipes.length === 0) {
      dispatch(fetchRecipes());
    }
  }, [recipes.length, dispatch]);

  useEffect(() => {
    if (authors.length === 0) {
      dispatch(fetchAuthors());
    }
  }, [authors.length, dispatch]);

  useEffect(() => {
    const existingRecipe = recipes.find((r) => r.slug === slug);
    setRecipe(existingRecipe || {});
  }, [slug, recipes]);

  function handleChange(e) {
    const { name, value } = e.target;
    setRecipe((prevRecipe) => ({
      ...prevRecipe,
      [name]: name === 'authorId' ? parseInt(value, 10) : value,
    }));
  }

  function handleSave(e) {
    e.preventDefault();
    setSaving(true);
    if (recipe) {
      // Dispatch the saveRecipeAction and then navigate on success
      dispatch(saveRecipeAction(recipe)).then(() => {
        setSaving(false); // Set saving to false once the action is completed
        navigate('/recipes');
      });
    }
  }

  return (
    <div>
      {recipe && (
        <ArticleForm
          recipe={recipe}
          authors={authors}
          errors={errors}
          onChange={handleChange}
          onSave={handleSave}
          saving={saving}
        />
      )}
    </div>
  );
}

export default ManageArticlePage;

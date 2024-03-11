import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRecipes, saveRecipeAction } from '../redux/actions/recipeActions';
import { fetchAuthors } from '../redux/actions/authorActions';
import ArticleForm from './ArticleForm';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

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
  function formIsValid() {
    const { title, authorId, category } = recipe;
    const errors = {};

    if (!title) errors.title = 'Title is required.';
    if (!authorId) errors.author = 'Author is required';
    if (!category) errors.category = 'Category is required';

    setErrors(errors);
    console.log('ERRORS  ', errors);
    return Object.keys(errors).length === 0;
  }
  function handleSave(e) {
    e.preventDefault();

    if (!formIsValid()) return;

    setSaving(true);
    dispatch(saveRecipeAction(recipe))
      .then(() => {
        toast.success('Article saved');
        navigate('/recipes');
      })
      .catch((error) => {
        setSaving(false);
        setErrors({ onSave: error.message || 'Saving failed' });
      })
      .finally(() => {
        setSaving(false);
      });
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

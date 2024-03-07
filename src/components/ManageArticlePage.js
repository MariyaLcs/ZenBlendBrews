import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchRecipes, saveRecipeAction } from '../redux/actions/recipeActions';
import { fetchAuthors } from '../redux/actions/authorActions';
import ArticleForm from './ArticleForm';
import { useParams, useNavigate } from 'react-router-dom';

function ManageArticlePage() {
    const navigate = useNavigate();
    const { slug } = useParams();

    const recipes = useSelector(state => state.recipes);
    const authors = useSelector(state => state.authors);

    const [recipe, setRecipe] = useState(null);
    const [errors, setErrors] = useState({});

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
      if (slug && recipes.length > 0) {
        const existingRecipe = recipes.find(r => r.slug === slug);
        setRecipe(existingRecipe || {});
      }
    }, [slug, recipes]);

    function handleChange(e) {
        const { name, value } = e.target;
        setRecipe(prevRecipe => ({
          ...prevRecipe, 
          [name]: name === 'authorId' ? parseInt(value, 10) : value
        }));
    }

    function handleSave(e) {
        e.preventDefault(); 
        if (recipe) {
          dispatch(saveRecipeAction(recipe));
          navigate('/recipes');
        }
    }

    if (slug && !recipe) {
      return <div>Loading data...</div>;
    }

    return (
        <div>
            {recipe && <ArticleForm recipe={recipe} authors={authors} errors={errors} onChange={handleChange} onSave={handleSave}/>}
        </div>
    );
}

export default ManageArticlePage;

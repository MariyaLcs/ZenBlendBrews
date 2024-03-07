import React, {useEffect, useState} from "react";
import {useDispatch, useSelector } from 'react-redux';
import { fetchRecipes, saveRecipeAction } from '../redux/actions/recipeActions'
import { fetchAuthors } from '../redux/actions/authorActions'
import ArticleForm from './ArticleForm'
import { useParams, useNavigate } from 'react-router-dom';

function ManageArticlePage() {
    const navigate = useNavigate()
    const { slug } = useParams()

    const recipes = useSelector(state => state.recipes);
    const authors = useSelector(state => state.authors)

    const [recipe, setRecipe] = useState({})
    const [errors, setErrors] = useState({})

    const dispatch = useDispatch()

 useEffect(() => {
      if (recipes.length === 0) {
        dispatch(fetchRecipes());
      } else if (slug) {
        const existingRecipe = recipes.find(r => r.slug === slug) || null;
        setRecipe(existingRecipe);
      }
    }, [dispatch, recipes, slug]);

    useEffect(() => {
        dispatch(fetchAuthors())
      }, [dispatch]);

    function handleChange(e){
        const { name, value } = e.target
        setRecipe(prevRecipe => ({
          ...prevRecipe, 
          [name]: name === 'authorId' ? parseInt(value, 10) : value
        }));
    }

    function handleSave(e) {
        e.preventDefault(); 
        dispatch(saveRecipeAction(recipe))
        navigate('/recipes')
      }
      

    
    // console.log('Recipes from manage', recipes );
    // console.log('Authors from manage', authors );


  return (
    <div>
        <ArticleForm recipe={recipe} authors={authors} errors={errors} onChange={handleChange} onSave={handleSave}/>
           
    </div>
  )
}

export default ManageArticlePage

import React, {useEffect, useState} from "react";
import {useDispatch, useSelector } from 'react-redux';
import { fetchRecipes } from '../redux/actions/recipeActions'
import { fetchAuthors } from '../redux/actions/authorActions'
import RecipeList from "./RecipeList";
import { useNavigate } from 'react-router-dom';


function RecipesPage () {
 
  const [redirectToAddRecipePage, setRedirectToAddRecipePage] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const recipes = useSelector(state => state.recipes)
    const authors = useSelector(state => state.authors)
    useEffect(() => {
      dispatch(fetchRecipes());
    }, [dispatch]);

    useEffect(() => {
        dispatch(fetchAuthors());
      }, [dispatch]);
  

    function handleAddArticle() {
      navigate("/recipe"); 
    }

    return (
        <>

            <h2 className="text-light">Articles</h2>

            <button
          className="btn btn-lg btn-dark custom-width"
          onClick={handleAddArticle}
        >
          Add New
        </button>

            <RecipeList recipes={recipes} authors={authors}/>
        </>
    )
}

export default RecipesPage;

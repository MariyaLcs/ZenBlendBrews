import React, {useEffect} from "react";
import {useDispatch, useSelector } from 'react-redux';
import { fetchRecipes } from '../redux/actions/recipeActions'
import { fetchAuthors } from '../redux/actions/authorActions'
import RecipeList from "./RecipeList";


function RecipesPage () {
 

    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(fetchRecipes());
    }, [dispatch]);

    useEffect(() => {
        dispatch(fetchAuthors());
      }, [dispatch]);
  

    const recipes = useSelector(state => state.recipes);
    const authors = useSelector(state => state.authors)
    console.log('Recipes', recipes );
    console.log('Authors', authors );

    return (
        <>
            <h2>Articles</h2>
            <RecipeList recipes={recipes} authors={authors}/>
        </>
    )
}

export default RecipesPage;

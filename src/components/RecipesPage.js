import React, {useEffect} from "react";
import {useDispatch, useSelector } from 'react-redux';
import { fetchRecipes } from '../redux/actions/recipeActions'
import RecipeList from "./RecipeList";


function RecipesPage () {
 

    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(fetchRecipes());
    }, [dispatch]);

    const recipes = useSelector(state => state.recipes);
    console.log('Recipes', recipes );
    return (

        <>
            <h2>Articles</h2>

            <RecipeList recipes={recipes}/>

        </>

    )

}

export default RecipesPage;

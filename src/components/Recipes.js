import React, {useEffect} from "react";
import {useDispatch, useSelector } from 'react-redux';
import { fetchRecipes } from '../redux/actions/recipeActions'


function Recipes () {
 

    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(fetchRecipes());
    }, [dispatch]);

    const recipes = useSelector(state => state.recipes);
    console.log('Recipes', recipes );
    return (

        <>
            <h2>Recipes</h2>
            <h3>Add recipe</h3>
   
            <ul>
                {recipes.map(recipe=>(
                    <li key={recipe.id}>{recipe.title}</li>
                ))}
            </ul>
        </>

    )

}

export default Recipes;

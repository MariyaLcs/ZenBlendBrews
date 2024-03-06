import React, {useState} from "react";
import {connect } from 'react-redux';
import * as recipeActions from '../redux/actions/recipeActions'
import PropTypes from 'prop-types'

function Recipes ({recipes, createRecipe}) {
    console.log('Recipes, createRecipe:', { recipes, createRecipe });



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
Recipes.propTypes={
    recipes: PropTypes.array.isRequired,
    createRecipe: PropTypes.func.isRequired
}

function mapStateToProps(state){
    console.log('STATE', state);
    return {
        recipes: state.recipes.recipe
    }
}
const mapDispatchToProps = {
    createRecipe: recipeActions.createRecipe 
};

export default connect(mapStateToProps, mapDispatchToProps)(Recipes);

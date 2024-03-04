import React, {useState} from "react";
import {connect } from 'react-redux';
import * as recipeActions from '../redux/actions/recipeActions'
import PropTypes from 'prop-types'

function Recipes ({recipes, createRecipe}) {
    console.log('Recipes, createRecipe:', { recipes, createRecipe });

const [recipeTitle, setRecipeTitle] = useState('')

function handleChange(e){
    setRecipeTitle(e.target.value)
}
function handleSubmit(e){
    console.log('recipeTitle', recipeTitle);
    e.preventDefault()
    if (recipeTitle) {
        createRecipe({ id: Date.now(), title: recipeTitle });
        setRecipeTitle('');
    }
}
    return (

        <form onSubmit={handleSubmit}>
            <h2>Recipes</h2>
            <h3>Add recipe</h3>
            <input type="text" onChange={handleChange} value={recipeTitle} />
            <input type="submit" value='Save' />
            <ul>
                {recipes.map(recipe=>(
                    <li key={recipe.id}>{recipe.title}</li>
                ))}
            </ul>
        </form>

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

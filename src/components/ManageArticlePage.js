import React, {useEffect, useState} from "react";
import {useDispatch, useSelector } from 'react-redux';
import { fetchRecipes } from '../redux/actions/recipeActions'
import { fetchAuthors } from '../redux/actions/authorActions'
import ArticleForm from './ArticleForm'

function ManageArticlePage() {
    const recipes = useSelector(state => state.recipes)
    const recipe = useSelector(state => state.recipe)
    const authors = useSelector(state => state.authors)


    const [errors, setErrors] = useState({})

    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(fetchRecipes());
    }, [dispatch]);

    useEffect(() => {
        dispatch(fetchAuthors());
      }, [dispatch]);


    
    console.log('Recipes from manage', recipes );
    console.log('Authors from manage', authors );
    console.log('Recipe from manage', recipe );

  return (
    <div>
        <ArticleForm recipes={recipes} authors={authors} errors={errors}/>
           
    </div>
  )
}

export default ManageArticlePage

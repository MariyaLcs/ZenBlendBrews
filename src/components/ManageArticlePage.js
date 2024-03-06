import React, {useEffect} from "react";
import {useDispatch, useSelector } from 'react-redux';
import { fetchRecipes } from '../redux/actions/recipeActions'
import { fetchAuthors } from '../redux/actions/authorActions'

function ManageArticlePage() {

    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(fetchRecipes());
    }, [dispatch]);

    useEffect(() => {
        dispatch(fetchAuthors());
      }, [dispatch]);

    const recipes = useSelector(state => state.recipes)
    const authors = useSelector(state => state.authors)
    console.log('Recipes form manage', recipes );
    console.log('Authors form manage', authors );

  return (
    <div>
        <h2 className="text-light">Manage Article</h2>
           
    </div>
  )
}

export default ManageArticlePage

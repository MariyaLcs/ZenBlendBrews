import React from "react";
import { Link } from "react-router-dom";

function RecipeList ({ recipes }){
  console.log('RecipeList recipes' , recipes);
  return (
    <>
    <table className="table">
    <thead>
      <tr>
        <th>Title</th>
        <th>Author</th>
        <th>Category</th>
      </tr>
    </thead>
    <tbody>
      {recipes.map(recipe => {
        return (
          <tr key={recipe.id}>
          
            <td>
              <Link to={"/recipe/" + recipe.slug}>{recipe.title}</Link>
            </td>
            <td>{recipe.authorId}</td>
            <td>{recipe.category}</td>
          </tr>
        );
      })}
    </tbody>
  </table>
  </>)
}
  




export default RecipeList;

import React from "react";
import { Link } from "react-router-dom";

function RecipeList({ recipes, authors }) {
  return (
    <div className="recipe-grid">
      {recipes.map(recipe => {
        // Find the author by id
        const author = authors.find(author => author.id === recipe.authorId);
        
        return (
          <div className="recipe-card" key={recipe.id}>
            <div className="recipe-content">
              <h3><Link to={"/recipe/" + recipe.slug}>{recipe.title}</Link></h3>
              <p>Author: {author ? author.name : 'Unknown Author'}</p>
              <p>Category: {recipe.category}</p>
            </div>
     
            <div
              className="recipe-image"
              style={{
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundImage: `url(${process.env.PUBLIC_URL}/images/ice-tea.png)`
              }}
            ></div>
          </div>
        );
      })}
    </div>
  );
}

export default RecipeList;

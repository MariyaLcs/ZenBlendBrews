import React from 'react';
import { Link } from 'react-router-dom';

function RecipeList({ recipes, authors, onDeleteRecipe }) {
  return (
    <div className="recipe-grid">
      {recipes.map((recipe) => {
        const author = authors.find((author) => author.id === recipe.authorId);

        return (
          <div className="recipe-card" key={recipe.id}>
            <div className="recipe-content">
              <h3>{recipe.title}</h3>
              <p>Author: {author ? author.name : 'Unknown Author'}</p>
              <p>Category: {recipe.category}</p>
              <div className="d-flex justify-content-between">
                <button
                  className="btn btn-outline-danger"
                  onClick={() => onDeleteRecipe(recipe.id)}
                >
                  Delete
                </button>
                <button className="btn btn-outline-dark">
                  <Link to={'/recipe/' + recipe.slug}>Edit</Link>
                </button>
              </div>
            </div>

            <div
              className="recipe-image"
              style={{
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundImage: `url(${process.env.PUBLIC_URL}/images/ice-tea.png)`,
              }}
            ></div>
          </div>
        );
      })}
    </div>
  );
}

export default RecipeList;

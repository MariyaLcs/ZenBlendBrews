import React from 'react';
import PropTypes from 'prop-types';
import TextInput from './common/TextInput';
import SelectInput from './common/SelectInput';

const ArticleForm = ({
  recipe,
  authors,
  onSave,
  onChange,
  saving,
  errors = {},
}) => {
  console.log('saving', saving);
  return (
    <form onSubmit={onSave} className="text-light">
      <h2>{recipe.id ? 'Edit' : 'Add'} Article</h2>
      {errors.onSave && (
        <div className="alert alert-danger" role="alert">
          {errors.onSave}
        </div>
      )}
      <TextInput
        name="title"
        label="Title"
        value={recipe.title}
        onChange={onChange}
        error={errors.title}
      />

      <SelectInput
        name="authorId"
        label="Author"
        value={recipe.authorId || ''}
        defaultOption="Select Author"
        options={authors.map((author) => ({
          value: author.id,
          text: author.name,
        }))}
        onChange={onChange}
        error={errors.author}
      />

      <TextInput
        name="category"
        label="Category"
        value={recipe.category}
        onChange={onChange}
        error={errors.category}
      />

      <button type="submit" disabled={saving} className="btn btn-dark my-3">
        {saving ? 'Saving...' : 'Save'}
      </button>
    </form>
  );
};

ArticleForm.propTypes = {
  authors: PropTypes.array.isRequired,
  recipe: PropTypes.object.isRequired,
  errors: PropTypes.object,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  saving: PropTypes.bool,
};

export default ArticleForm;

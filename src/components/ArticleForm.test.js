import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ArticleForm from './ArticleForm';
import { recipes, authors } from '../../tools/mockData';

describe('ArticleForm interactions', () => {
  it('calls onSave when the form is submitted', async () => {
    const handleSave = jest.fn();
    render(
      <ArticleForm
        recipe={recipes[0]}
        authors={authors}
        onSave={handleSave}
        onChange={jest.fn()}
        saving={true}
      />
    );

    await userEvent.click(screen.getByRole('button', { name: /save/i }));

    expect(handleSave).toHaveBeenCalled();
  });
});

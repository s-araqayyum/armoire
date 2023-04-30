import { render, screen } from '@testing-library/react';
import EditProduct from './EditProduct'
import '@testing-library/jest-dom';

describe('Edit Product', () => {
  test('Successfully Edited Product page should have an image with the URL `updating.png`', () => {
    render(<EditProduct/>);
    const logo = screen.getByRole('img');
    expect(logo).toHaveAttribute('src', 'updating.png');
  });
});
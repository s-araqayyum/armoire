import { render, screen } from '@testing-library/react';
import DeleteProduct from './DeleteProduct'
import '@testing-library/jest-dom';

describe('Delete Product', () => {
  test('Delete Product page should have an image with the URL `404.png`', () => {
    render(<DeleteProduct/>);
    const logo = screen.getByRole('img');
    expect(logo).toHaveAttribute('src', '404.png');
  });
});
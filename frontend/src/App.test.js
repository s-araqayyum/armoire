import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import App from './App';

test('Rendering landing page', () => {
  render(<App />);
  const linkElement = screen.getByTestId("checkingLandingPageRender");
  expect(linkElement).toBeInTheDocument();
});


test('Checking Add Product Button', () => {
  render(<App />);
  const button = screen.getByText(/Add New Product/i)
  expect(button).toBeInTheDocument();
});

test('Rendering atleast one product', () => {
  render(<App />);
  const linkElement = screen.getByTestId("renderProductList");
  expect(linkElement).toBeInTheDocument();
});
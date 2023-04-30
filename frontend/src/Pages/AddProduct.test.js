import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import AddProduct from './AddProduct'

test('Entire `Add Product` Form is rendered', () => {
    render(<AddProduct />);
    const linkElement = screen.getByTestId("addForm");
    expect(linkElement).toBeInTheDocument();
  });

  test('Displaying significant heading', () => {
    render(<AddProduct />);

    const productName = screen.getByTestId("nameHeading")
    expect(productName).toHaveTextContent("Product Name")
  });

  test('Displaying larger text boxes', () => {
    render(<AddProduct />);
    const productDescription = screen.getByTestId("descHeading")
    expect(productDescription).toHaveTextContent("Description")
  });


  test('Validating URL input box', () => {
    render(<AddProduct />);
    const productURL = screen.getByTestId("urlHeading")
    expect(productURL).toHaveTextContent("Product Image URL")
  });

describe('Mocking useNavigate()', () => {
  test('Testing useNavigate() by mocking', () => {
    const mockedUsedNavigate = jest.fn();
    jest.mock('react-router-dom', () => ({
        ...jest.requireActual('react-router-dom'),
      useNavigate: () => mockedUsedNavigate,
    }));
  });
});

  
 
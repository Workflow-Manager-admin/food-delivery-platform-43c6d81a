import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the Foodly brand', () => {
  render(<App />);
  const brand = screen.getByText(/foodly/i);
  expect(brand).toBeInTheDocument();
});

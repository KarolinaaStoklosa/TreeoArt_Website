import { render, screen } from '@testing-library/react';
import App from './App';

test('renders treeo art', () => {
  render(<App />);
  const linkElement = screen.getByText(/treeo art/i);
  expect(linkElement).toBeInTheDocument();
});

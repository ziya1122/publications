import { render, screen } from '@testing-library/react';
import App from '.C:/Users/Admin/Desktop/research-paper-repo/frontend/src/App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

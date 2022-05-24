import { render, screen } from '@testing-library/react';
import HeadingTag from '../HeadingTag';

test('testing heading tag -> props', async() => {
  render(<HeadingTag name="my name" />);
  const linkElement = screen.getByText(/my name/i);
  expect(linkElement).toBeInTheDocument();
});

test('testing heading tag -> role heading tag ', async() => {
  render(<HeadingTag  />);
  const linkElement = screen.getByRole("heading")
  expect(linkElement).toBeInTheDocument();
});


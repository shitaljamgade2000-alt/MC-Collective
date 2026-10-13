import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the testimonial and contact form', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /every detail, thoughtfully managed/i })).toBeInTheDocument();
  expect(screen.getByRole('img', { name: /ff&e & os&e procurement/i })).toBeInTheDocument();
  expect(screen.getByRole('img', { name: /snagging & handover/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /let's talk about your project/i })).toBeInTheDocument();
  expect(screen.getByLabelText(/name/i)).toBeRequired();
  expect(screen.getByLabelText(/email/i)).toBeRequired();
  expect(screen.getByLabelText(/project details/i)).toBeRequired();
  expect(screen.getByText(/replace this sample with an approved client testimonial/i)).toBeInTheDocument();
});

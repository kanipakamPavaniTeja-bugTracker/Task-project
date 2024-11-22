import { render, screen } from '@testing-library/react';
import FormGenerator from '../components/FormGenerator';

const mockSchema = {
  formTitle: "Test Form",
  formDescription: "Fill out the form below",
  fields: [
    { id: "name", type: "text", label: "Full Name", required: true }
  ]
};

test('renders FormGenerator with form fields', () => {
  render(<FormGenerator schema={mockSchema} />);
  
  expect(screen.getByText(/Test Form/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Full Name/i)).toBeInTheDocument();
});

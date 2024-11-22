import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { useFormSubmit } from '../hooks/useFormSubmit';
import { FormContextProvider } from '../context/FormContext';
import FormGenerator from '../components/FormGenerator';

const mockSchema = {
  formTitle: "Test Form",
  fields: [{ id: "name", type: "text", label: "Full Name", required: true }]
};

test('form submission and success message', async () => {
  const { handleSubmit, isSubmitting, submissionResult } = useFormSubmit();
  
  render(
    <FormContextProvider>
      <FormGenerator schema={mockSchema} />
    </FormContextProvider>
  );
  
  const nameInput = screen.getByLabelText(/Full Name/i);
  fireEvent.change(nameInput, { target: { value: 'John Doe' } });

  const submitButton = screen.getByText(/Submit/i);
  fireEvent.click(submitButton);
  
  await waitFor(() => expect(screen.getByText('Form submitted successfully!')).toBeInTheDocument());
  expect(isSubmitting).toBe(false);
  expect(submissionResult).toBe('Form submitted successfully!');
});

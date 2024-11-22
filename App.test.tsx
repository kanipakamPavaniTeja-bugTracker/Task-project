import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';
import { FormContextProvider } from '../context/FormContext';

test('renders App component', () => {
  render(
    <FormContextProvider>
      <App />
    </FormContextProvider>
  );
  
  // Check if the left side editor and right side form are rendered
  expect(screen.getByPlaceholderText(/Enter your JSON schema here.../i)).toBeInTheDocument();
  expect(screen.getByText(/Submit/i)).toBeInTheDocument();
});

test('real-time form rendering', () => {
  render(
    <FormContextProvider>
      <App />
    </FormContextProvider>
  );

  // Simulate JSON input change
  const jsonInput = screen.getByPlaceholderText(/Enter your JSON schema here.../i);
  fireEvent.change(jsonInput, { target: { value: '{"formTitle": "Test Form", "fields": [{"id": "name", "type": "text", "label": "Full Name", "required": true}]}' } });

  // Check if the form field is dynamically rendered
  expect(screen.getByLabelText(/Full Name/i)).toBeInTheDocument();
});

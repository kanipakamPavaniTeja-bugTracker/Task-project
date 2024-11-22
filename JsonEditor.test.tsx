import { render, screen, fireEvent } from '@testing-library/react';
import JsonEditor from '../components/JsonEditor';

test('renders JsonEditor and handles input change', () => {
  const setSchemaMock = jest.fn();
  
  render(<JsonEditor schema={null} setSchema={setSchemaMock} />);
  
  const textarea = screen.getByPlaceholderText(/Enter your JSON schema here.../i);
  
  fireEvent.change(textarea, { target: { value: '{"formTitle": "Test Form"}' } });

  // Expect the mock function to be called
  expect(setSchemaMock).toHaveBeenCalledWith({ formTitle: 'Test Form' });
});

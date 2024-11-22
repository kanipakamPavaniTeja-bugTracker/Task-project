import { validateSchema } from '../utils/validateSchema';

describe('validateSchema function', () => {
  it('should validate valid JSON schema correctly', () => {
    const validSchema = {
      formTitle: "Test Form",
      fields: [{ id: "name", type: "text", label: "Full Name", required: true }]
    };
    expect(validateSchema(validSchema).isValid).toBe(true);  // This should now work
  });

  it('should invalidate invalid JSON schema', () => {
    const invalidSchema = { formTitle: "", fields: [] };
    expect(validateSchema(invalidSchema).isValid).toBe(false);  // This should now work
  });
});

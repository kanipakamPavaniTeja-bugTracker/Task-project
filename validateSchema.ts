// utils/validateSchema.ts
export const validateSchema = (schema: any) => {
    // Simple validation for the schema (you can expand this as needed)
    if (!schema.formTitle || !Array.isArray(schema.fields) || schema.fields.length === 0) {
      return { isValid: false, error: 'Invalid schema structure' };
    }
  
    // Additional checks for fields can be added here
    for (const field of schema.fields) {
      if (!field.id || !field.type || !field.label) {
        return { isValid: false, error: `Field with id ${field.id} is invalid` };
      }
    }
  
    return { isValid: true };
  };
  
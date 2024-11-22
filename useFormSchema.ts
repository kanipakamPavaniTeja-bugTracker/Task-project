import { useState } from 'react';

const useFormSchema = () => {
  const [schema, setSchema] = useState<any>(null);

  const updateSchema = (newSchema: any) => {
    setSchema(newSchema);
  };

  return { schema, updateSchema };
};

export default useFormSchema;

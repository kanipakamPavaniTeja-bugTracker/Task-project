import React from 'react';

interface FormEditorProps {
  jsonSchema: string;
  setJsonSchema: React.Dispatch<React.SetStateAction<string>>;
}

const FormEditor: React.FC<FormEditorProps> = ({ jsonSchema, setJsonSchema }) => {
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setJsonSchema(event.target.value);
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">JSON Schema Editor</h2>
      <textarea
        value={jsonSchema}
        onChange={handleChange}
        rows={20}
        className="w-full p-4 border border-gray-300 rounded-md"
      />
    </div>
  );
};

export { FormEditor };

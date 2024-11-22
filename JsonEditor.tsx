import React, { useState, useEffect } from 'react';
import { useFormContext } from 'react-hook-form';

interface JsonEditorProps {
  schema: any;
  setSchema: (schema: any) => void;
}

const JsonEditor: React.FC<JsonEditorProps> = ({ schema, setSchema }) => {
  const [jsonInput, setJsonInput] = useState<string>('');

  const handleJsonChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setJsonInput(e.target.value);
    try {
      const parsedSchema = JSON.parse(e.target.value);
      setSchema(parsedSchema);
    } catch (error) {
      console.error("Invalid JSON", error);
    }
  };

  useEffect(() => {
    if (schema) {
      setJsonInput(JSON.stringify(schema, null, 2));
    }
  }, [schema]);

  return (
    <div>
      <textarea
        value={jsonInput}
        onChange={handleJsonChange}
        className="w-full h-full p-4 border rounded-md"
        placeholder="Enter your JSON schema here..."
      />
    </div>
  );
};

export default JsonEditor;

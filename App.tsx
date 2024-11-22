import React from 'react';
import FormGenerator from './components/FormGenerator'; // Import FormGenerator component

const App: React.FC = () => {
  // Define your JSON schema
  const schema = {
    "$schema": "http://json-schema.org/draft-07/schema#",
    "type": "object",
    "properties": {
      "name": { "type": "string" },
      "email": { "type": "string", "format": "email" }
    },
    "required": ["name", "email"]
  };

  return (
    <div>
      <h1>Dynamic Form</h1>
      {/* Pass the schema to FormGenerator as a prop */}
      <FormGenerator schema={schema} />
    </div>
  );
};

export default App;


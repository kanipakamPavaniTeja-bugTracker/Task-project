import React, { useState } from "react";

// Define the structure of the form data
interface FormData {
  [key: string]: string;
}

interface FormGeneratorProps {
  schema: any;
}

const FormGenerator: React.FC<FormGeneratorProps> = ({ schema }) => {
  const [formData, setFormData] = useState<FormData>({});
  const [errors, setErrors] = useState<FormData>({});

  // Handle field value changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Basic form validation (can be extended)
  const validateForm = (): boolean => {
    let formErrors: FormData = {};
    if (!formData.name) {
      formErrors.name = "Name is required";
    }
    if (!formData.email) {
      formErrors.email = "Email is required";
    }
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = "Email is invalid";
    }
    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      alert("Form submitted successfully!");
      // Here you can process the form data (e.g., send it to a server)
      console.log("Form Data: ", formData);
    } else {
      alert("Please correct the errors and submit again.");
    }
  };

  // Render the form fields based on the schema
  const renderField = (fieldName: string, fieldSchema: any, index: number) => {
    return (
      <div key={index}>
        <label>{fieldName.charAt(0).toUpperCase() + fieldName.slice(1)}</label>
        <input
          type="text"
          name={fieldName}
          value={formData[fieldName] || ""}
          onChange={handleChange}
        />
        {errors[fieldName] && <p style={{ color: "red" }}>{errors[fieldName]}</p>}
      </div>
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      {Object.keys(schema.properties).map((fieldName, index) =>
        renderField(fieldName, schema.properties[fieldName], index)
      )}

      <button type="submit">Submit</button>
    </form>
  );
};

export default FormGenerator;

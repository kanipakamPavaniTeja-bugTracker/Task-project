import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

interface Field {
  id: string;
  type: string;
  label: string;
  required: boolean;
  placeholder?: string;
  options?: { value: string; label: string }[];
}

interface FormSchema {
  formTitle: string;
  formDescription: string;
  fields: Field[];
}

interface FormPreviewProps {
  jsonSchema: string;
}

const FormPreview: React.FC<FormPreviewProps> = ({ jsonSchema }) => {
  const [schema, setSchema] = useState<FormSchema | null>(null);
  const { register, handleSubmit, formState: { errors } } = useForm();

  useEffect(() => {
    try {
      const parsedSchema = JSON.parse(jsonSchema);
      setSchema(parsedSchema);
    } catch (error) {
      setSchema(null); // Invalid JSON will set schema to null
    }
  }, [jsonSchema]);

  const onSubmit = (data: any) => {
    console.log("Form submitted:", data);
    alert("Form submitted successfully!");
  };

  if (!schema) {
    return <div>Invalid JSON schema</div>;
  }

  return (
    <div>
      <h1 className="text-2xl font-bold">{schema.formTitle}</h1>
      <p>{schema.formDescription}</p>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {schema.fields.map((field) => {
          return (
            <div key={field.id} className="flex flex-col">
              <label htmlFor={field.id} className="font-semibold">
                {field.label}
              </label>
              {field.type === 'text' && (
                <input
                  type="text"
                  id={field.id}
                  placeholder={field.placeholder}
                  {...register(field.id, { required: field.required })}
                  className="p-2 border border-gray-300 rounded-md"
                />
              )}
              {field.type === 'email' && (
                <input
                  type="email"
                  id={field.id}
                  placeholder={field.placeholder}
                  {...register(field.id, { required: field.required, pattern: /\S+@\S+\.\S+/ })}
                  className="p-2 border border-gray-300 rounded-md"
                />
              )}
              {field.type === 'select' && (
                <select
                  id={field.id}
                  {...register(field.id, { required: field.required })}
                  className="p-2 border border-gray-300 rounded-md"
                >
                  {field.options?.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              )}
              {field.type === 'radio' && field.options && (
                <div className="space-x-4">
                  {field.options.map((option) => (
                    <label key={option.value}>
                      <input
                        type="radio"
                        value={option.value}
                        {...register(field.id, { required: field.required })}
                        className="mr-2"
                      />
                      {option.label}
                    </label>
                  ))}
                </div>
              )}
              {field.type === 'textarea' && (
                <textarea
                  id={field.id}
                  placeholder={field.placeholder}
                  {...register(field.id, { required: field.required })}
                  className="p-2 border border-gray-300 rounded-md"
                />
              )}
              {errors[field.id] && (
                <span className="text-red-500 text-sm">
                  This field is required
                </span>
              )}
            </div>
          );
        })}
        <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">
          Submit
        </button>
      </form>
    </div>
  );
};

export { FormPreview };

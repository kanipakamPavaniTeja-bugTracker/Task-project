import React from 'react';
import { useFormContext } from 'react-hook-form';

interface FormFieldProps {
  id: string;
  type: 'text' | 'email' | 'select' | 'radio' | 'textarea';
  label: string;
  options?: { value: string; label: string }[];
  placeholder?: string;
  required: boolean;
}

const FormField: React.FC<FormFieldProps> = ({ id, label, type, options, placeholder, required }) => {
  const { register, formState: { errors } } = useFormContext();

  switch (type) {
    case 'text':
    case 'email':
      return (
        <div className="mb-4">
          <label htmlFor={id} className="block text-sm font-semibold">{label}</label>
          <input 
            type={type} 
            id={id} 
            placeholder={placeholder}
            {...register(id, { required })}
            className="w-full px-4 py-2 border rounded-md mt-1"
          />
          {errors[id] && <p className="text-red-500 text-xs">This field is required</p>}
        </div>
      );

    case 'select':
      return (
        <div className="mb-4">
          <label htmlFor={id} className="block text-sm font-semibold">{label}</label>
          <select id={id} {...register(id, { required })} className="w-full px-4 py-2 border rounded-md mt-1">
            {options?.map(option => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </select>
          {errors[id] && <p className="text-red-500 text-xs">This field is required</p>}
        </div>
      );

    case 'radio':
      return (
        <div className="mb-4">
          <label className="block text-sm font-semibold">{label}</label>
          {options?.map(option => (
            <div key={option.value} className="inline-block mr-4">
              <input 
                type="radio" 
                id={option.value} 
                value={option.value} 
                {...register(id, { required })}
                className="mr-2"
              />
              <label htmlFor={option.value}>{option.label}</label>
            </div>
          ))}
          {errors[id] && <p className="text-red-500 text-xs">This field is required</p>}
        </div>
      );

    case 'textarea':
      return (
        <div className="mb-4">
          <label htmlFor={id} className="block text-sm font-semibold">{label}</label>
          <textarea
            id={id} 
            placeholder={placeholder} 
            {...register(id, { required })}
            className="w-full px-4 py-2 border rounded-md mt-1"
          />
          {errors[id] && <p className="text-red-500 text-xs">This field is required</p>}
        </div>
      );

    default:
      return null;
  }
};

export default FormField;

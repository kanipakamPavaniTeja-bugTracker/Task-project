import React, { createContext, useContext, useState, ReactNode } from 'react';

interface FormContextType {
  schema: any;
  setSchema: (schema: any) => void;
}

const FormContext = createContext<FormContextType | undefined>(undefined);

export const FormContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [schema, setSchema] = useState<any>(null);

  return (
    <FormContext.Provider value={{ schema, setSchema }}>
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = (): FormContextType => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error('useFormContext must be used within a FormContextProvider');
  }
  return context;
};

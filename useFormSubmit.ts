import { useState } from 'react';

export const useFormSubmit = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionResult, setSubmissionResult] = useState<string | null>(null);

  const handleSubmit = (data: any) => {
    setIsSubmitting(true);
    
    // Simulate a form submission (this could be an API call)
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmissionResult('Form submitted successfully!');
      console.log(data);
    }, 1000);
  };

  return {
    isSubmitting,
    submissionResult,
    handleSubmit,
  };
};

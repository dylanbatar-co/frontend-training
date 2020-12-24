import { useState } from 'react';

export const useForm = inputs => {
  const [values, setValues] = useState(inputs);

  const handleInputChange = ({ target }) => {
    setValues({ ...values, [target.name]: target.value });
  };

  const reset = () => {
    setValues(inputs);
  };

  return [values, handleInputChange, reset];
};
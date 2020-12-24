import React, { useState } from 'react';
import TextField from 'emerald-ui/lib/TextField';
import Col from 'emerald-ui/lib/Col';

export const Input = ({
  onChange,
  value,
  name,
  label,
  fullCol,
  textarea,
  validator,
  ...otherProps
}) => {
  const [error, setError] = useState('');

  return (
    <Col xs={12} lg={textarea ? 12 : 6} md={textarea ? 12 : 6}>
      <label htmlFor={`${name}`}>{label}</label>
      <TextField
        id={`${name}`}
        required
        name={name}
        onBlur={() => setError(er => setError(validator(value, label)))}
        onChange={onChange}
        value={value}
        textarea={textarea}
        errorMessage={error}
        {...otherProps}
      />
    </Col>
  );
};

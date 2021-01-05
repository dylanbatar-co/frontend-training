import React from 'react';
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
  isSubmit,
  ...otherProps
}) => {
  return (
    <Col
      xs={12}
      lg={textarea ? 12 : 6}
      md={textarea ? 12 : 6}
      className="input-wrapper"
    >
      <label htmlFor={`${name}`}>{label}</label>
      <TextField
        id={`${name}`}
        name={name}
        onChange={onChange}
        value={value}
        textarea={textarea}
        errorMessage={isSubmit && validator(value, label)}
        {...otherProps}
      />
    </Col>
  );
};

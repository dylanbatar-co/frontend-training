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
  ...otherProps
}) => {
  return (
    <Col xs={12} lg={textarea ? 12 : 6} md={textarea ? 12 : 6}>
      <label>{label}</label>
      <TextField
        name={name}
        onChange={onChange}
        value={value}
        textarea={textarea}
        {...otherProps}
      />
    </Col>
  );
};

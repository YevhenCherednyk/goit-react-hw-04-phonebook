import React from 'react';
import PropTypes from 'prop-types';
import { Label, Span, Input } from './Filter.styled';

const Filter = ({ value, onChange }) => {
  return (
    <Label>
      <Span>Find contacts by name</Span>
      <Input type="text" value={value} onChange={onChange} />
    </Label>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;

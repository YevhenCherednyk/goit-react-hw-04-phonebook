import React from 'react';
import PropTypes from 'prop-types';
import { Conteiner, Title } from './Section.styled';

const Section = ({ title, children }) => {
  return (
    <Conteiner>
      <Title>{title}</Title>
      {children}
    </Conteiner>
  );
};

Section.propTypes = {
  title: PropTypes.string,
};

export default Section;

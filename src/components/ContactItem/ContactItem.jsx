import React from 'react';
import PropTypes from 'prop-types';
import { Item, ContactInfo, NameBox, Button } from './ContactItem.styled';

const ContactItem = ({ contact: { id, name, number }, onDeleteContact }) => {
  return (
    <Item key={id}>
      <ContactInfo>
        <NameBox>{name}</NameBox> : {number}
      </ContactInfo>
      <Button type="button" onClick={() => onDeleteContact(id)}>
        Delete
      </Button>
    </Item>
  );
};

ContactItem.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

export default ContactItem;

import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import Button from '@mui/material/Button';

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    if (window.confirm(`Are you sure you want to delete ${name}?`)) {
      dispatch(deleteContact(id));
    }
  };

  return (
    <li>
      <p>{name}: {number}</p>
      <Button variant="contained" color="secondary" onClick={handleDelete}>
        Delete
      </Button>
    </li>
  );
};

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default Contact;
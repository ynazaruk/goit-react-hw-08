

import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import css from './ContactForm.module.css';

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();

    const name = event.target.elements.name.value;
    const number = event.target.elements.number.value;

    if (name && number) {
      dispatch(addContact({ name, number }));
      event.target.reset(); 
    } else {
      console.error('Name and number are required');
    }
  };

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <input type="text" name="name" placeholder="Name" required />
      <input type="tel" name="number" placeholder="Phone Number" required />
      <button type="submit">Add Contact</button>
    </form>
  );
};

export default ContactForm;
import PropTypes from 'prop-types';
import styles from './ContactList.module.css';

export default function ContactList({ contacts, onDeleteContact }) {
  return (
    <ul className={styles.list}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={styles.item}>
          <p className={styles.text}>
            {name}: {number}
          </p>
          <button
            type="button"
            onClick={() => onDeleteContact(id)}
            className={styles.button}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  onDeleteContact: PropTypes.func.isRequired,
};
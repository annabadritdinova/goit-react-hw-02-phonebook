import { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './ContactForm.module.css';

export default class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      }),
    ),
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;

    this.setState({ [name]: value });
  };

  contactValidation = () => {
    const { name, number } = this.state;
    const { contacts } = this.props;

    if (contacts.find(contact => name === contact.name)) {
      alert(`${name} is already in contacts`);
      return true;
    }

    if (name === '' || number === '') {
      alert('Please enter contact information');
      return true;
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;

    if (this.contactValidation()) {
      return;
    }

    this.props.onSubmit(name, number);
    this.reset();
  };

  reset = () => {
    this.setState({name: '', number: ''});
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className={styles.form}>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={this.state.name}
            placeholder="Name of contact"
            onChange={this.handleChange}
            className={styles.input}
          />
        </label>

        <label className={styles.label}>
          Number
          <input
            type="tel"
            name="number"
            value={this.state.number}
            placeholder="Number of contact"
            onChange={this.handleChange}
            className={styles.input}
          />
        </label>
        <button type="submit" className={styles.button}>
          Add contact
        </button>
      </form>
    );
  }
}
import { Component } from 'react';
import { Section } from './Section/Section';
import { Form } from './Form/Form';
import { Contacts } from './Contacts/Contacts';
import { Box } from './Box';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
    name: '',
    number: '',
  };

  resetForm = () => {
    this.setState({ name: '' });
    this.setState({ number: '' });
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleFilter = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase().trim();
    return contacts.filter(contact =>
      contact.toLowerCase().includes(normalizedFilter)
    );
  };

  handleSubmit = e => {
    e.preventDefault();
    const contact = `${this.state.name.trim()}: ${this.state.number.trim()}`;
    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
    this.resetForm();
  };

  render() {
    return (
      <Box width="400px">
        <Section title="Phonebook">
          <Form
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            nameValue={this.state.name}
            numberValue={this.state.number}
          ></Form>
        </Section>
        <Section title="Contacts">
          <Contacts
            handleChange={this.handleChange}
            handleFilter={this.handleFilter}
            contacts={this.state.contacts}
            filterValue={this.state.filter}
          ></Contacts>
        </Section>
      </Box>
    );
  }
}

import {
  ContactsList,
  ContactsItem,
  FilterLabel,
  FilterInput,
} from './Contacts.styled';
import { nanoid } from 'nanoid';

export const Contacts = ({ contacts, handleChange }) => {
  return (
    <>
      <FilterLabel htmlFor="filter">Find contacts by name</FilterLabel>
      <FilterInput
        type="text"
        id="filter"
        name="filter"
        onChange={handleChange}
      />
      <ContactsList>
        {contacts.map(contactItem => {
          return <ContactsItem key={nanoid(4)}>{contactItem}</ContactsItem>;
        })}
      </ContactsList>
    </>
  );
};

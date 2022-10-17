import {
  ContactsList,
  ContactsItem,
  FilterLabel,
  FilterInput,
} from './Contacts.styled';
import { nanoid } from 'nanoid';

export const Contacts = ({
  contacts,
  filterValue,
  handleChange,
  handleFilter,
}) => {
  const filteredContacts = handleFilter();
  return (
    <>
      <FilterLabel htmlFor="filter">Find contacts by name</FilterLabel>
      <FilterInput
        type="text"
        id="filter"
        name="filter"
        value={filterValue}
        onChange={handleChange}
      />
      {filterValue ? (
        <ContactsList>
          {filteredContacts.map(contactItem => {
            return <ContactsItem key={nanoid(4)}>{contactItem}</ContactsItem>;
          })}
        </ContactsList>
      ) : (
        <ContactsList>
          {contacts.map(contactItem => {
            return <ContactsItem key={nanoid(4)}>{contactItem}</ContactsItem>;
          })}
        </ContactsList>
      )}
    </>
  );
};

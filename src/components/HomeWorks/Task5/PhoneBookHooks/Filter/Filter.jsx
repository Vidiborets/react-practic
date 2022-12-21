import { FilterItem } from '../../../Task3/Filter/Filter.styled';
import React from 'react';
export const Filter = ({ value, onChange }) => {
  return (
    <>
      <label>
        <FilterItem
          value={value}
          onChange={onChange}
          type="text"
          placeholder={'Найти контакт'}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        />
      </label>
    </>
  );
};

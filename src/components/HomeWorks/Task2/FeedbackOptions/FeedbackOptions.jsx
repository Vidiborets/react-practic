import React from 'react';
import { List, Item } from './FeedbackOptions.styled';
export const FeedbackOptions = ({ options, onClick }) => {
  return (
    <List>
      {options.map(item => (
        <Item key={item}>
          <button
            type="button"
            onClick={() => {
              onClick(item);
            }}
          >
            {item}
          </button>
        </Item>
      ))}
    </List>
  );
};

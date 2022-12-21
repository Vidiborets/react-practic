import React from 'react';
import {
  List,
  Item,
} from '../../../Task2/FeedbackOptions/FeedbackOptions.styled';
export const FeedbackOptions = ({ options, onClick }) => {
  console.log(options);
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

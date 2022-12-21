import React from 'react';
import { LoadButton } from './LoadMore.styled';
export const LoadMore = ({ onClick }) => {
  return (
    <LoadButton type="submit" onClick={onClick}>
      Load more
    </LoadButton>
  );
};

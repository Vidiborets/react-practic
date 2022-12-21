import React from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageDataView } from './ImageDataView/ImageDataView';
import { Box } from 'components/Box/Box';
import styled from '@emotion/styled';
const BoxS = styled(Box)`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 16px;
  padding-bottom: 24px;
`;
export class Task4 extends React.Component {
  state = {
    value: '',
  };
  handleSubmit = value => {
    this.setState({
      value,
    });
  };
  render() {
    const { value } = this.state;
    return (
      <BoxS>
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageDataView value={value} />
      </BoxS>
    );
  }
}

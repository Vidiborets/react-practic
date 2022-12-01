import React from 'react';
import { Box } from 'components/Box/Box';
import { Text } from './Counter.styled';
import Controls from './Controls';
export class Counter extends React.Component {
  static defaultProps = {
    initialstate: 0,
  };
  state = {
    value: this.props.initialstate,
  };
  handleInrement = event => {
    this.setState(prevState => ({
      value: prevState.value + 1,
    }));
  };
  handleDicrement = event => {
    this.setState(prevState => ({
      value: prevState.value - 1,
    }));
  };
  render() {
    return (
      <Box p={30} width={400} m="0 auto" textAlign="center" border="1px solid">
        <Text>{this.state.value}</Text>
        <Controls
          onDecrement={this.handleDicrement}
          onIncrement={this.handleInrement}
        />
      </Box>
    );
  }
}

import { Box } from 'components/Box/Box';
import React from 'react';
import { ButtonColor } from './ColorPicker.styled';
import '../ColorPicker/ColorPicker.css';

export class ColorPicker extends React.Component {
  state = {
    activOptionIdx: 3,
  };
  setActiveIndex = index => {
    this.setState({
      activOptionIdx: index,
    });
  };
  makeOptionCalssName = index => {
    const optionsColor = ['ColorPicker__option'];
    if (index === this.state.activOptionIdx) {
      optionsColor.push('ColorPicker__option--active');
    }
    return optionsColor.join(' ');
  };

  render() {
    const { activOptionIdx } = this.state;
    const { options } = this.props;
    const { label } = options[activOptionIdx];
    return (
      <Box
        margin={'0 auto'}
        width={400}
        mb={40}
        mt={40}
        border={'1px solid'}
        p={15}
      >
        <h1>ColorPicker</h1>
        <p>Выбран цвет :{label}</p>
        {options.map(({ label, color }, index) => (
          <ButtonColor
            onClick={() => this.setActiveIndex(index)}
            className={this.makeOptionCalssName(index)}
            key={label}
            style={{
              backgroundColor: color,
            }}
          ></ButtonColor>
        ))}
      </Box>
    );
  }
}

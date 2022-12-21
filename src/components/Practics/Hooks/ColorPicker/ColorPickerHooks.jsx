import { ButtonColor } from '../../State/ColorPicker/ColorPicker.styled';
import { Box } from 'components/Box/Box';
import { useState, memo } from 'react';
export const ColorPickerHooks = memo(({ options }) => {
  const [activeOptions, setActiveOptons] = useState(0);
  const { label } = options[activeOptions];
  const makeOptionCalssName = index => {
    const optionsColor = ['ColorPicker__option'];
    if (index === activeOptions) {
      optionsColor.push('ColorPicker__option--active');
    }
    return optionsColor.join(' ');
  };
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
          onClick={() => setActiveOptons(index)}
          className={makeOptionCalssName(index)}
          key={label}
          style={{
            backgroundColor: color,
          }}
        ></ButtonColor>
      ))}
    </Box>
  );
});

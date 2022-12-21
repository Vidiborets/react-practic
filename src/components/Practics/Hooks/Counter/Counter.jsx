import { Box } from '../../../Box/Box';
// import { useEffect, useState } from 'react';
import { useReducer } from 'react';
const countReducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + action.payload };
    case 'decrement':
      return { ...state, count: state.count - action.payload };
    default:
      throw new Error(`Unsuported action ${action.type}`);
  }
};
export const Counter = () => {
  const [state, dispatch] = useReducer(countReducer, {
    count: 0,
  });
  // const [counterA, setCounterA] = useState(0);
  // const [counterB, setCounterB] = useState(0);
  // const [title, setTitle] = useState('');
  // const handleCounterIncrement = () => {
  //   setCounterA(prevCounter => prevCounter + 1);
  // };
  // const handleCounterDecrement = () => {
  //   setCounterB(prevCounter => prevCounter + 1);
  // };
  // useEffect(() => {
  //   const total = counterA + counterB;
  //   setTitle(`Всего кинули ${total} раз`);
  // }, [counterA, counterB]);
  return (
    <Box>
      <button
        type="button"
        onClick={() => {
          dispatch({
            type: 'increment',
            payload: 1,
          });
        }}
      >
        Увеличить
      </button>
      <h2>{state.count}</h2>
      <button
        type="button"
        onClick={() => {
          dispatch({ type: 'decrement', payload: 1 });
        }}
      >
        Уменьшить
      </button>
    </Box>
  );
};

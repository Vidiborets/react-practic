import { Box } from 'components/Box/Box';
import { SingupForm } from './SingupForm/SingupForm';
import { Counter } from './Counter/Counter';
import { ClockHooks } from './Clock/ClockHooks';
import { PokemonHooks } from './PokemonHooks/PokemonHooks';
import { Friends } from './Friends/Friends';
import { News } from './News/News';
import { LoadMoreHooks } from './LoadMoreHooks/LoadMoreHooks';
export const Hooks = () => {
  return (
    <Box>
      <SingupForm />
      <Counter />
      <ClockHooks />
      <PokemonHooks />
      <Friends />
      <News />
      <LoadMoreHooks />
    </Box>
  );
};

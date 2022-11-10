import { MyButoon } from './MyButton/Mybutton';
import {
  GiAirplaneDeparture,
  GiBabyBottle,
  GiAnticlockwiseRotation,
} from 'react-icons/gi';
export const Button = () => {
  return (
    <>
      <MyButoon icon={GiAirplaneDeparture}>Search</MyButoon>
      <MyButoon icon={GiBabyBottle}>Filter</MyButoon>
      <MyButoon icon={GiAnticlockwiseRotation}>LogIn</MyButoon>
      <MyButoon type="submit">LogIn</MyButoon>
    </>
  );
};

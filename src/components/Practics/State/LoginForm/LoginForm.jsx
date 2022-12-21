import { Box } from 'components/Box/Box';

export const LoginForm = () => {
  const handleSubmit = e => {
    e.preventDefault();
    const { login, password } = e.target.elements;
    console.log(login.value, password.value);
    console.log(e.target);
    login.value = '';
    password.value = '';
  };

  return (
    <Box width={600} mb={40} mt={40} border={'1px solid'} p={15}>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <label htmlFor="login">
          Login
          <input type="text" name="login" />
        </label>
        <label htmlFor="password">
          Password
          <input type="password" name="password" />
        </label>

        <button type="submit">Submit</button>
      </form>
    </Box>
  );
};

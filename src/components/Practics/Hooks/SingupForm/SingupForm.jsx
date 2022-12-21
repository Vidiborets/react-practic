import { useLocaleStorage } from 'hooks/useLocaleStorage';
import { useEffect, useRef } from 'react';
export const SingupForm = () => {
  const [email, setEmail] = useLocaleStorage('email', '');
  const [password, setPassword] = useLocaleStorage('password', '');
  const isFirstRender = useRef(false);
  //   const handleEmailChange = e => {
  //     console.log(e.target.value);
  //     setEmail(e.currentTarget.value);
  //   };
  //   const handlePasswordChange = e => {
  //     setPassword(e.currentTarget.value);
  //   };
  // const handleChange = e => {};
  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        return;
    }
  };
  const submitingForm = e => {
    e.preventDefault();

    console.log(email);
    console.log(password);
  };
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current(false);
      return;
    }
    console.log(Date.now());
  });

  return (
    <div>
      <form onSubmit={submitingForm} autoComplete="off">
        <label>
          <span>Почта</span>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>
        <label>
          <span>Пароль</span>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Отправить</button>
      </form>
    </div>
  );
};

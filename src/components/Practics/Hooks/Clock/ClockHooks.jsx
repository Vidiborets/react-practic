import { useEffect } from 'react';
import { useState, useRef } from 'react';

export const ClockHooks = () => {
  const [time, setTime] = useState(() => {
    new Date().toLocaleTimeString();
  });
  const intervalId = useRef(null);

  useEffect(() => {
    intervalId.current = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => {
      stop();
    };
  }, [time]);
  const stop = () => {
    clearInterval(intervalId.current);
  };
  return (
    <div>
      {time}
      <button type="button" onClick={stop}>
        Остановить
      </button>
    </div>
  );
};

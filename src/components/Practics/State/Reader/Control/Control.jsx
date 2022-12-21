export const Controls = ({ onChange, current, total }) => {
  return (
    <section>
      <button
        type="button"
        disabled={current === 1}
        onClick={() => onChange(-1)}
      >
        Назад
      </button>
      <button
        type="button"
        onClick={() => onChange(1)}
        disabled={current === total}
      >
        Вперёд
      </button>
    </section>
  );
};

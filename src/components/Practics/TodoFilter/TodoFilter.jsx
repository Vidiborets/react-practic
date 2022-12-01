export const TodoFilter = ({ value, onChange }) => {
  return (
    <label>
      <input value={value} onChange={onChange} type="text" />
    </label>
  );
};

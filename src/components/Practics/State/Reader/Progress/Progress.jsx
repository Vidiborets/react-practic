export const Progress = ({ itemsLength, value }) => {
  return (
    <>
      <p>
        {value}/{itemsLength}
      </p>
    </>
  );
};

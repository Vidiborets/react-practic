export const PokemonErrorView = ({ ErrorImage, message }) => {
  return (
    <div>
      <img src={ErrorImage} width={240} alt="ErrorImage" />
      <p>{message}</p>
    </div>
  );
};

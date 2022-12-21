import ErrorImage from '../../../../data/images/depositphotos_11085415-stock-photo-error-icon.jpeg';
export const PokemonErrorView = ({ message }) => {
  return (
    <div>
      <img src={ErrorImage} width={240} alt="ErrorImage" />
      <p>{message}</p>
    </div>
  );
};

export const PokemonDataView = ({ pokemon: { sprites, name, stats } }) => {
  return (
    <div>
      <img
        src={sprites.other['official-artwork'].front_default}
        width="240"
        alt={name}
      />
      <span>{name}</span>
      <ul>
        {stats.map(entry => (
          <li key={entry.stat.name}>
            {entry.stat.name}:{entry.base_stat}
          </li>
        ))}
      </ul>
    </div>
  );
};

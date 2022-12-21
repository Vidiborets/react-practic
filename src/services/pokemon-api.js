async function fetchPokemon(name) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  if (res.ok) {
    return res.json();
  }
  return await Promise.reject(new Error(`Нет покемона с именем ${name}`));
}
const api = {
  fetchPokemon,
};
export default api;

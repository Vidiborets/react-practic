async function fetchPictures(name, page) {
  const KEY = '23511418-9a5fcf3a7b36a31c6f256788e';
  console.log(page);
  const res = await fetch(
    `https://pixabay.com/api/?q=${name}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`,
  );
  if (res.ok) {
    return res.json();
  }
  return await Promise.reject(new Error(`Такого запроса с именем ${name} нет`));
}
const api = {
  fetchPictures,
};
export default api;
// async function fetchPokemon(name) {
//     const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
//     if (res.ok) {
//       return res.json();
//     }
//     return await Promise.reject(new Error(`Нет покемона с именем ${name}`));
//   }
//   const api = {
//     fetchPokemon,
//   };
//   export default api;

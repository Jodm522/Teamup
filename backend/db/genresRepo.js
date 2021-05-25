async function genresList() {
  return await genres.findAll;
}

module.exports = {
  genresList,
};

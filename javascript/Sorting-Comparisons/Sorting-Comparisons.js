let movieList = [
  {
    title: "A Oppenheimer",
    year: 2023,
    genres: ["Action", "Adventure"],
  },
  {
    title: "The HunterXHunter",
    year: 2001,
    genres: ["Animation", "Horror"],
  },
  {
    title: "The island",
    year: 2020,
    genres: ["Science Fiction", "Horror", "Animation"],
  },
  {
    title: "The Killer",
    year: 2018,
    genres: ["Horror"],
  },
  {
    title: "A life",
    year: 2022,
    genres: ["Animation", "Family"],
  },
  {
    title: "An Fantasy",
    year: 2017,
    genres: ["Fantasy", "Adventure"],
  },
];

function sortByYear(movieList) {
  return movieList.sort((a, b) => a.year - b.year);
}
function sortByTitle(movieList) {
  let regx = /\b(?:A|An|The)\b/gi;
  let result = movieList.map((movie) => ({
    title: movie.title.replace(regx, "").trim(),
    year: movie.year,
    genres: movie.genres,
  }));

  return result.sort((a, b) => a.title.localeCompare(b.title));
}

console.log(sortByYear(movieList));
console.log("___________________________________");
console.log(sortByTitle(movieList));

module.exports = {
  sortByYear,
  sortByTitle,
  movieList
};

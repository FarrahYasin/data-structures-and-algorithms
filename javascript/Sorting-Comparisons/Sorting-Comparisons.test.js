const { sortByYear, sortByTitle, movieList } = require("./Sorting-Comparisons");
let finalTitel = [
  { title: "Fantasy", year: 2017, genres: ["Fantasy", "Adventure"] },
  {
    title: "HunterXHunter",
    year: 2001,
    genres: ["Animation", "Horror"],
  },
  {
    title: "island",
    year: 2020,
    genres: ["Science Fiction", "Horror", "Animation"],
  },
  { title: "Killer", year: 2018, genres: ["Horror"] },
  { title: "life", year: 2022, genres: ["Animation", "Family"] },
  {
    title: "Oppenheimer",
    year: 2023,
    genres: ["Action", "Adventure"],
  },
];

let finalYear = [
  {
    title: "The HunterXHunter",
    year: 2001,
    genres: ["Animation", "Horror"],
  },
  {
    title: "An Fantasy",
    year: 2017,
    genres: ["Fantasy", "Adventure"],
  },
  { title: "The Killer", year: 2018, genres: ["Horror"] },
  {
    title: "The island",
    year: 2020,
    genres: ["Science Fiction", "Horror", "Animation"],
  },
  { title: "A life", year: 2022, genres: ["Animation", "Family"] },
  {
    title: "A Oppenheimer",
    year: 2023,
    genres: ["Action", "Adventure"],
  },
];
describe("Sorting Functions", () => {
  test("sortByYear sorts movies by year", () => {
    const result = sortByYear(movieList);
    expect(result[0].year).toBe(2001);
    expect(result[result.length - 1].year).toBe(2023);
    expect(sortByYear(movieList)).toEqual(finalYear);
  });
  it("sorted array by most recent year first", () => {
    expect(sortByTitle(movieList)).toEqual(finalTitel);
  });
});

const movies = [
  {
    title: "Doctor Strange",
    time: 115,
    genres: ["Action", "Adventure", "Fantasy"],
  },
  {
    title: "Trolls",
    time: 92,
    genres: ["Animation", "Adventure", "Comedy", "Family", "Fantasy"],
  },
  {
    title: "Jack Reacher: Never Go Back",
    time: 118,
    genres: ["Action", "Adventure", "Crime", "Mystery", "Thriller"],
  },
];

const actors = [
  {
    name: "Benedict Cumberbatch",
    movies: ["Doctor Strange", "The Imitation Game", "Black Mass"],
  },
  {
    name: "Justin Timberlake",
    movies: ["Trolls", "Friends with Benefits", "The Social Network"],
  },
  {
    name: "Anna Kendrick",
    movies: ["Pitch Perfect", "Into The Wood"],
  },
  {
    name: "Evan Peters",
    movies: [
      "Kick Ass",
      "X-Men: Days of Future Past",
      "X-Men: Apocalypse",
    ],
  },
];

const directors = [
  {
    name: "Scott Derrickson",
    movies: ["Doctor Strange", "Sinister", "The Exorcism of Emily Rose"],
  },
  {
    name: "Mike Mitchell",
    movies: ["Trolls", "Alvin and the Chipmunks: Chipwrecked", "Sky High"],
  },
  {
    name: "Edward Zwick",
    movies: ["Jack Reacher: Never Go Back", "Blood Diamon", "The Siege"],
  },
];

export { movies, actors, directors };

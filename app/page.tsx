// import styles from "./page.module.css";

const getMovies = async () => {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");

  return response.json;
};

const Movies = () => {
  return <h1>Movies</h1>;
};

export default Movies;

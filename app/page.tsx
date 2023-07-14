// "use client";

import Movie from "@/components/Movie";
import { getMovies } from "@/api/getMovies";
import { IMovie } from "@/types/HomeTypes";
import styles from "./Movies.module.css";

const Movies = async () => {
  const data = await getMovies();

  return (
    <>
      <h1 className={styles.title}>Movies</h1>
      <ul className={styles.list}>
        {data.results.map((result: IMovie) => {
          return <Movie data={result} key={result.id} />;
        })}
      </ul>
    </>
  );
};

export default Movies;

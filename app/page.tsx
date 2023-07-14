// import styles from "./page.module.css";
// "use client";

import { IMG_API } from "@/api/Api";
import { getMovies } from "@/api/getMovies";
import Movie from "@/components/Movie";
import { IMovie } from "@/types/HomeTypes";

const Movies = async () => {
  const data = await getMovies();

  return (
    <>
      <h1>Movies</h1>
      {data.results.map((result: IMovie) => {
        return <Movie data={result} key={result.id} />;
      })}
    </>
  );
};

export default Movies;

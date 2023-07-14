// import styles from "./page.module.css";
// "use client";

import { IMG_API } from "@/api/Api";
import { IMovie } from "@/types/HomeTypes";

const Movie = ({ data }: IMovie) => {
  const {
    title,
    poster_path,
    overview,
    release_date,
    vote_average,
    original_language,
  } = data;

  return (
    <>
      <h2>{title}</h2>
      <img src={IMG_API + poster_path} alt={title} />
      <p>Rating: {vote_average}</p>
      <p>Release date: {release_date}</p>
      <p>Language: {original_language}</p>
      <p>{overview}</p>
    </>
  );
};

export default Movie;

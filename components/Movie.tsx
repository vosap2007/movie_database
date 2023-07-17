// "use client";
import Link from "next/link";
import { IMG_API } from "@/api/Api";
import { IMovie } from "@/types/HomeTypes";
import styles from "./Movie.module.css";

const Movie = ({ data }: any) => {
  const {
    title,
    poster_path,
    overview,
    release_date,
    vote_average,
    original_language,
    id,
  } = data;

  return (
    <li className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.main_block}>
        <img src={IMG_API + poster_path} alt={title} />
        <div className={styles.params}>
          <p>Rating: {vote_average}</p>
          <p>Release date: {release_date}</p>
          <p>Language: {original_language}</p>
          <p>{overview}</p>
        </div>
      </div>
      <Link href={`/${id}`}>see more</Link>
    </li>
  );
};

export default Movie;

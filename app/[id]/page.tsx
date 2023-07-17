// import styles from "./page.module.css";

import { getMovie } from "@/api/getMovies";
import { Metadata } from "next";

type Props = {
  params: { id: number };
};

export const generateMetadata = async ({
  params: { id },
}: Props): Promise<Metadata> => {
  return {
    title: id.toString(),
  };
};

const Movie = async ({ params: { id } }: Props) => {
  const data = await getMovie(id);
  const {
    backdrop_path,
    original_language,
    title,
    overview,
    vote_average,
    vote_count,
  } = data;

  console.log("data", data);

  return (
    <>
      <h1>Movie {title}</h1>
    </>
  );
};

export default Movie;

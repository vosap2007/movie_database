// import styles from "./page.module.css";

import { Metadata } from "next";

type Props = {
  params: { name: string };
};

export const generateMetadata = async ({
  params: { name },
}: Props): Promise<Metadata> => {
  return {
    title: name,
  };
};

const Movie = ({ params: { name } }: Props) => {
  return <h1>Movie {name}</h1>;
};

export default Movie;

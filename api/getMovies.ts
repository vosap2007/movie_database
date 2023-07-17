import { API, API_MOVIE_ID } from "./Api";

export const getMovies = async () => {
  const response = await fetch(
    API
    //     {
    //     next: { revalidate: 60 },
    //   }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  return response.json();
};

export const getMovie = async (id: number) => {
  const response = await fetch(API_MOVIE_ID(id));

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  return response.json();
};

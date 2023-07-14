import { API } from "./Api";

export const getMovies = async () => {
  const response = await fetch(API);

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  return response.json();
};

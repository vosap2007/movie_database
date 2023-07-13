// import styles from "./page.module.css";
"use client";

const API_KEY = "bb5e0d9156d1e4a8c96f5f13497bf1d5";
const API_Read_Access_Token =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYjVlMGQ5MTU2ZDFlNGE4Yzk2ZjVmMTM0OTdiZjFkNSIsInN1YiI6IjY0YjAwOTIzZTI0YjkzNWIzMGEyZjUxMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.51FRsKAllK9N5ftGWYyq0JcZdZxPOTC3qRXvLJv9tVA";

const getMovies = async () => {
  const response = await fetch(
    "https://api.themoviedb.org/3/movie/550?api_key=bb5e0d9156d1e4a8c96f5f13497bf1d5"
  );

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  return response.json();
};

const Movies = async () => {
  const data = await getMovies();
  console.log("data", data);

  return <h1>Movies</h1>;
};

export default Movies;

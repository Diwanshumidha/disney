"use client";
import { Movie, MovieListResponse } from "@/lib/types";
import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import { useInView } from "react-intersection-observer";

const Movies = () => {
  const [movies, setMovies] = useState<Movie[] | []>([]);
  const [error, setError] = useState("");
  const [isFetching, setIsFetching] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const { ref, inView } = useInView({
    rootMargin: "200px",
  });

  const BASE_URL = "https://api.themoviedb.org/3";

  const getData = async (page: number) => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOWUxY2Q0ZTI1MDhhOGE5MGQ2YmI0MmFhNjVmODhhMiIsInN1YiI6IjY0YzhjMmU2MWZhMWM4MDBiMGMxODQ4NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DzcG0yj-kAk0W0FITT2ueckU8oJFfXb1xhS0VNnEvZA",
      },
    };

    setIsFetching(true);
    setError("");
    try {
      const res = await fetch(
        `${BASE_URL}/movie/popular?language=en-US&page=${page}`,
        options
      );

      if (!res.ok) throw new Error("Could not fetch data");
      const result = (await res.json()) as MovieListResponse;
      setMovies((prevMovies) => [...prevMovies, ...result.results]);
      setCurrentPage(page);
    } catch (error) {
      setError("Could not Fetch Data");
    } finally {
      setIsFetching(false);
    }
  };

  useEffect(() => {
    // Get first page of movies when component mounts
    if (inView) {
      getData(currentPage + 1);
    }
  }, [inView]);

  return (
    <div className="wrapper">
      <div className=" fixed bottom-5 right-5 bg-red-950 text-white p-4 z-50">
        {inView ? "In View" : "Not in View"}
      </div>
      <div className=" grid-auto grid gap-4 justify-items-center ">
        {movies.map((movie) => {
          return <MovieCard movie={movie} key={movie.id} />;
        })}
      </div>

      <div
        ref={ref}
        className=" w-full flex justify-center flex-col gap-3 items-center my-4"
      >
        {!!error && <p>{error}</p>}

        {!isFetching && (
          <button
            onClick={() => getData(currentPage + 1)}
            disabled={isFetching}
          >
            {error ? "Try Again" : "Load More"}
          </button>
        )}

        {!!isFetching && <LoadingSpinner />}
      </div>
    </div>
  );
};

export default Movies;

const LoadingSpinner = () => {
  return (
    <div className=" w-7 aspect-square rounded-full border-t-transparent animate-spin border-2 border-solid border-white"></div>
  );
};

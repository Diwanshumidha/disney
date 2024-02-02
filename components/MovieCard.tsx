import { Movie } from "@/lib/types";
import Image from "next/image";
import React from "react";

const MovieCard = ({ movie }: { movie: Movie }) => {
  const { title, overview, release_date, poster_path, vote_average } = movie;

  return (
    <div className="rounded overflow-hidden shadow-lg max-w-[300px]  ">
      <div className="w-full h-[400px] overflow-hidden ">
        <Image
          width={300}
          placeholder={`blur`}
          height={400}
          blurDataURL={`https://image.tmdb.org/t/p/w200${poster_path}`}
          className="hover:scale-95 transition-all   object-cover bg-blue-950 "
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={title}
          loading="lazy"
        />
      </div>

      <div className="px-6 py-4">
        <h2 className="font-bold text-xl mb-1">{title}</h2>
        <p className="text-gray-500 text-base line-clamp-2">{overview}</p>
      </div>
    </div>
  );
};

export default MovieCard;

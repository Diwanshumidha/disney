import React from "react";
import PlayIcon from "./Icons/Play";
import HeartIcon from "./Icons/Heart";
const MOVIE = {
  adult: false,
  backdrop_path: "/jOzrELAzFxtMx2I4uDGHOotdfsS.jpg",
  belongs_to_collection: {
    id: 10,
    name: "Star Wars Collection",
    poster_path: "/r8Ph5MYXL04Qzu4QBbq2KjqwtkQ.jpg",
    backdrop_path: "/zZDkgOmFMVYpGAkR9Tkxw0CRnxX.jpg",
  },
  budget: 250000000,
  genres: [
    {
      id: 12,
      name: "Adventure",
    },
    {
      id: 28,
      name: "Action",
    },
    {
      id: 878,
      name: "Science Fiction",
    },
  ],
  homepage:
    "https://www.starwars.com/films/star-wars-episode-ix-the-rise-of-skywalker",
  id: 181812,
  imdb_id: "tt2527338",
  original_language: "en",
  original_title: "Star Wars: The Rise of Skywalker",
  overview:
    "The surviving Resistance faces the First Order once again as the journey of Rey, Finn and Poe Dameron continues. With the power and knowledge of generations behind them, the final battle begins.",
  popularity: 56.834,
  poster_path: "/db32LaOibwEliAmSL2jjDF6oDdj.jpg",
  production_companies: [
    {
      id: 1,
      logo_path: "/tlVSws0RvvtPBwViUyOFAO0vcQS.png",
      name: "Lucasfilm Ltd.",
      origin_country: "US",
    },
    {
      id: 11461,
      logo_path: "/p9FoEt5shEKRWRKVIlvFaEmRnun.png",
      name: "Bad Robot",
      origin_country: "US",
    },
  ],
  production_countries: [
    {
      iso_3166_1: "US",
      name: "United States of America",
    },
  ],
  release_date: "2019-12-18",
  revenue: 1074144248,
  runtime: 142,
  spoken_languages: [
    {
      english_name: "English",
      iso_639_1: "en",
      name: "English",
    },
  ],
  status: "Released",
  tagline: "The saga will end. The story lives forever.",
  title: "Star Wars: The Rise of Skywalker",
  video: false,
  vote_average: 6.3,
  vote_count: 9310,
};
const HeroSection = () => {
  return (
    <section
      className=" pt-[100px]  w-full min-h-svh flex hero_background  "
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/w1280${MOVIE.belongs_to_collection.backdrop_path}")`,
      }}
    >
      <div className="w-[120px] z-50 relative flex flex-col justify-around items-center py-6  ">
        <img
          className="-rotate-90 w-[90px]"
          width="96"
          height="96"
          src="https://img.icons8.com/fluency-systems-filled/96/FFFFFF/disney-1.png"
          alt="disney-1"
        />
        <img className="-rotate-90 w-[90px]" src="/Pixar.svg" alt="" />
        <img
          className="-rotate-90 w-[90px]"
          width="50"
          height="50"
          src="https://img.icons8.com/ios/96/FFFFFF/marvel.png"
          alt="marvel"
        />
        <img
          className="-rotate-90 w-[90px]"
          width="32"
          height="32"
          src="https://img.icons8.com/windows/96/FFFFFF/star-wars.png"
          alt="star-wars"
        />
      </div>
      <div className=" wrapper  flex-1 flex justify-center px-4 flex-col gap-4 ">
        <h1 className=" text-4xl lg:text-5xl max-w-[15ch] font-bold">
          {MOVIE.title}
        </h1>
        <p className=" max-w-[60ch] text-gray-500 ">{MOVIE.overview}</p>
        <div className=" flex gap-5">
          <button className=" px-5 py-2 border border-white hover:bg-white hover:text-black rounded-full flex gap-1">
            <PlayIcon /> Watch Now
          </button>
          <button className=" px-5 py-2  rounded-full flex gap-3">
            <HeartIcon /> Add to Favorites
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

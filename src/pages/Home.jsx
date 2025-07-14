// pages/Home.jsx

import { useEffect, useState } from "react";
import { getNowPlaying } from "../services/api";

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getNowPlaying().then(setMovies);
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4 text-white">Filmes em Cartaz</h2>
      <div className="flex overflow-x-auto space-x-4 snap-x snap-mandatory scrollbar-hide">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="flex-shrink-0 w-48 snap-start bg-gray-800 p-2 rounded text-white"
          >
            <img
              src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
              alt={movie.title}
              className="rounded mb-2"
            />
            <h2 className="text-sm font-bold">{movie.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Home;

import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { searchMovies } from "../services/api";

function SearchResults() {
  const [params] = useSearchParams();
  const query = params.get("q");
  const [results, setResults] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (query) {
      searchMovies(query).then(setResults);
    }
  }, [query]);

  return (
    <div className="text-white py-4 px-4 sm:px-6 md:px-12 lg:px-24 xl:px-36 2xl:px-48">
      <h2 className="text-2xl font-bold mb-4">
        Resultados para: <span className="text-blue-400">{query}</span>
      </h2>

      {results.length === 0 ? (
        <p>Nenhum resultado encontrado.</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {results.map((movie) => (
            <div
              key={movie.id}
              className="bg-gray-800 p-2 rounded shadow text-white flex flex-col h-full"
            >
              {movie.poster_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                  alt={movie.title}
                  className="rounded mb-2"
                />
              ) : (
                <div className="h-[450px] bg-gray-600 flex items-center justify-center text-sm text-gray-200 mb-2">
                  Sem imagem
                </div>
              )}

              <div className="flex flex-col justify-between flex-grow text-center">
                <h2 className="text-sm font-bold mb-2 line-clamp-2">{movie.title}</h2>
                <button
                  className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-2 py-1 rounded-2xl mt-auto cursor-pointer"
                  onClick={() => navigate(`/movie/${movie.id}`)}
                >
                  Detalhes
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchResults;

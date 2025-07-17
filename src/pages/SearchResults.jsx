import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { searchMovies } from "../services/api";

function SearchResults() {
  const [params] = useSearchParams();
  const query = params.get("q");
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (query) {
      searchMovies(query).then((data) => {
        // filtra apenas movies e tv shows (ignora 'person')
        const filtered = data.filter(item =>
          item.media_type === "movie" || item.media_type === "tv"
        );
        setResults(filtered);
      });
    }
  }, [query]);

  return (
    <div className="text-white py-6 px-4 sm:px-6 md:px-12 lg:px-24 xl:px-36 2xl:px-48">
      <h2 className="text-2xl font-bold mb-4">
        Resultados para: <span className="text-blue-400">{query}</span>
      </h2>

      {results.length === 0 ? (
        <p>Nenhum resultado encontrado.</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {results.map((item) => {
            const isMovie = item.media_type === "movie";
            const title = isMovie ? item.title : item.name;
            const linkPath = isMovie ? `/movie/${item.id}` : `/tv/${item.id}`;

            return (
              <div
                key={`${item.media_type}-${item.id}`}
                className="bg-gray-900 rounded overflow-hidden shadow text-white flex flex-col h-full"
              >
                <Link to={linkPath}>
                  <div className="group relative bg-gray-900 rounded text-white overflow-hidden cursor-pointer">
                    {item.poster_path ? (
                      <img
                        src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                        alt={title}
                        className="w-full aspect-[2/3] object-cover"
                      />
                    ) : (
                      <div className="w-full aspect-[2/3] bg-gray-700 flex items-center justify-center text-sm text-gray-400">
                        Sem imagem
                      </div>
                    )}

                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-70 transition duration-300 z-10"></div>

                    <div className="absolute inset-0 flex flex-col justify-center text-left opacity-0 translate-y-20 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 p-4 z-20">
                      <p className="text-xs mb-2 text-yellow-400 line-clamp-4">
                        {item.overview || "Sem descrição disponível."}
                      </p>
                      <p className="text-sm">
                        <strong>Nota média:</strong> ⭐{" "}
                        {item.vote_average?.toFixed(1) ?? "N/A"} / 10
                      </p>
                    </div>

                    <div className="bg-gray-800 px-2 py-2 text-center">
                      <h2 className="text-sm font-bold truncate">{title}</h2>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default SearchResults;

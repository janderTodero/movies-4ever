// pages/MovieDetails.jsx
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetails } from "../services/api";

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    getMovieDetails(id).then(setMovie);
  }, [id]);

  if (!movie) return <p className="text-white p-4">Carregando...</p>;

  return (
    <div className="min-h-screen bg-gray-900 text-white py-4 px-4 sm:px-6 md:px-12 lg:px-24 xl:px-36 2xl:px-48">
      <div className="relative w-full h-[300px] md:h-[450px] mb-8">
        {movie.backdrop_path && (
          <img
            src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
            alt="banner"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent rounded-lg"></div>
      </div>

      <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
        {movie.poster_path && (
          <img
            src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
            alt={movie.title}
            className="w-64 rounded-lg shadow-md mx-auto md:mx-0"
          />
        )}

        <div className="flex-1">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">{movie.title}</h1>
          {movie.tagline && <p className="text-gray-400 italic mb-4">{movie.tagline}</p>}
          <p className="mb-4">{movie.overview}</p>

          <div className="text-sm space-y-1">
            <p><strong>Título original:</strong> {movie.original_title}</p>
            <p><strong>Data de lançamento:</strong> {movie.release_date}</p>
            <p><strong>Duração:</strong> {movie.runtime} minutos</p>
            <p><strong>Nota média:</strong> ⭐ {movie.vote_average.toFixed(1)} / 10</p>
            <p><strong>Orçamento:</strong> ${movie.budget?.toLocaleString()}</p>
            <p><strong>Receita:</strong> ${movie.revenue?.toLocaleString()}</p>
            <p>
              <strong>Gêneros:</strong>{" "}
              {movie.genres.map((g) => g.name).join(", ")}
            </p>
            <p>
              <strong>Idiomas:</strong>{" "}
              {movie.spoken_languages.map((l) => l.name).join(", ")}
            </p>
            {movie.homepage && (
              <p>
                <strong>Site oficial:</strong>{" "}
                <a
                  href={movie.homepage}
                  className="text-blue-400 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {movie.homepage}
                </a>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTvDetails } from "../services/api";

function TvDetails() {
  const { id } = useParams();
  const [tv, setTv] = useState(null);

  useEffect(() => {
    getTvDetails(id).then(setTv);
  }, [id]);

  if (!tv) return <p className="text-white p-4">Carregando...</p>;

  return (
    <div className="min-h-screen bg-gray-900 text-white py-4 px-4 sm:px-6 md:px-12 lg:px-24 xl:px-36 2xl:px-48">
      <div className="relative w-full h-[300px] md:h-[450px] mb-8">
        {tv.backdrop_path && (
          <img
            src={`https://image.tmdb.org/t/p/original${tv.backdrop_path}`}
            alt="banner"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent rounded-lg"></div>
      </div>

      <div className="flex flex-col md:flex-row items-start gap-8">
        {tv.poster_path && (
          <img
            src={`https://image.tmdb.org/t/p/w300${tv.poster_path}`}
            alt={tv.name}
            className="w-64 rounded-lg shadow-md"
          />
        )}

        <div className="flex-1">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">{tv.name}</h1>
          {tv.tagline && <p className="text-gray-400 italic mb-4">{tv.tagline}</p>}
          <p className="mb-4">{tv.overview}</p>

          <div className="text-sm space-y-1">
            <p><strong>Nome original:</strong> {tv.original_name}</p>
            <p><strong>Primeira exibição:</strong> {tv.first_air_date}</p>
            <p><strong>Última exibição:</strong> {tv.last_air_date}</p>
            <p><strong>Temporadas:</strong> {tv.number_of_seasons}</p>
            <p><strong>Episódios:</strong> {tv.number_of_episodes}</p>
            <p><strong>Nota média:</strong> ⭐ {tv.vote_average.toFixed(1)} / 10</p>
            <p>
              <strong>Gêneros:</strong>{" "}
              {tv.genres.map((g) => g.name).join(", ")}
            </p>
            <p>
              <strong>Idiomas:</strong>{" "}
              {tv.spoken_languages.map((l) => l.name).join(", ")}
            </p>
            {tv.homepage && (
              <p>
                <strong>Site oficial:</strong>{" "}
                <a
                  href={tv.homepage}
                  className="text-blue-400 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {tv.homepage}
                </a>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TvDetails;

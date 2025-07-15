import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { getPopularMovies } from "../services/api";

function PopularMovies() {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getPopularMovies().then(setMovies);
  }, []);
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 mt-4 text-yellow-500">Em destaque</h2>

      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={5}
        navigation
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 5 },
        }}
        className="mySwiper"
      >
        {movies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <Link to={`/movie/${movie.id}`}>
            <div className="group relative bg-gray-900 rounded text-white overflow-hidden cursor-pointer">
              <img
                src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                alt={movie.title}
                className="rounded w-full z-0"
              />

              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-70 transition duration-300 z-10"></div>

              <div className="absolute inset-0 flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition duration-300 flex p-4 z-20">
                <p className="text-sm mb-2 text-white">{movie.overview}</p>
                <p className="text-yellow-300"><strong>Nota média:</strong> ⭐ {movie.vote_average.toFixed(1)} / 10</p>
              </div>

              <h2 className="text-sm font-bold text-center mt-2 px-2 z-30 mb-3">
                {movie.title}
              </h2>
            </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default PopularMovies;

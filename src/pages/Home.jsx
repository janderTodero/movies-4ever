import { useState } from "react";
import { getNowPlaying } from "../services/api";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Home() {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getNowPlaying().then(setMovies);
  }, []);

  return (
    <div className="py-4 px-4 sm:px-6 md:px-12 lg:px-24 xl:px-36 2xl:px-48">

      <h2 className="text-2xl font-bold mb-4 text-white">Filmes em Cartaz</h2>

      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={16}
        navigation
        autoplay={{ delay: 3000, disableOnInteraction: true }}
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
            <div className="bg-gray-800 p-2 rounded text-white">
              <img
                src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                alt={movie.title}
                className="rounded mb-2"
              />
              <div className="flex justify-center flex-col text-center">
                <h2 className="text-sm font-bold">{movie.title}</h2>
                <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-2 py-1 rounded-2xl mt-3 cursor-pointer" type="submit"
                onClick={() => navigate(`/movie/${movie.id}`)}
                >
                  Detalhes
                </button>
              </div>
              
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
export default Home;
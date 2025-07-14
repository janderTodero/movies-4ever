// pages/Home.jsx

import { useEffect, useState } from "react";
import { getNowPlaying } from "../services/api";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getNowPlaying().then(setMovies);
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4 text-white">Filmes em Cartaz</h2>

      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={16}
        slidesPerView={5}
        navigation
        autoplay={{ delay: 3000, disableOnInteraction: true }}
        loop={true}
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
              <h2 className="text-sm font-bold">{movie.title}</h2>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
export default Home;

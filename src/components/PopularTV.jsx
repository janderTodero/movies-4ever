import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { getPopularSeries } from "../services/api";
import "swiper/css";
import "swiper/css/navigation";

function PopularTV() {
  const [series, setSeries] = useState([]);

  useEffect(() => {
    getPopularSeries().then(setSeries);
  }, []);

  return (
    <div className="px-4">
      <h2 className="text-2xl font-bold mb-4 mt-4 text-yellow-500">Popular na TV</h2>

      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={10}
        navigation
        autoplay={{ delay: 4000, disableOnInteraction: true }}
        loop={true}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 5 },
        }}
        className="mySwiper"
      >
        {series.map((serie) => (
          <SwiperSlide key={serie.id}>
            <Link to={`/tv/${serie.id}`}>
              <div className="group relative bg-gray-900 rounded text-white overflow-hidden cursor-pointer">
                {serie.poster_path ? (
                  <img
                    src={`https://image.tmdb.org/t/p/w300${serie.poster_path}`}
                    alt={serie.name}
                    className="w-full aspect-[2/3] object-cover rounded"
                  />
                ) : (
                  <div className="w-full aspect-[2/3] bg-gray-700 flex items-center justify-center text-sm text-gray-400">
                    Sem imagem
                  </div>
                )}

                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-70 transition duration-300 z-10"></div>

                <div className="absolute inset-0 flex flex-col justify-center text-left opacity-0 translate-y-20 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 p-4 z-20">
                  <p className="text-xs mb-2 text-yellow-400 line-clamp-4">
                    {serie.overview || "Sem descrição disponível."}
                  </p>
                  <p className="text-sm">
                    <strong>Nota média:</strong> ⭐ {serie.vote_average.toFixed(1)} / 10
                  </p>
                </div>

                <div className="bg-gray-800 px-2 py-2 text-center">
                  <h2 className="text-sm font-bold truncate">{serie.name}</h2>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default PopularTV;

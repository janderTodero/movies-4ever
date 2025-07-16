import "swiper/css";
import "swiper/css/navigation";
import NowPlaying from "../components/NowPlaying";
import PopularMovies from "../components/PopularMovies";
import UpcomingMovies from "../components/UpcomingMovies";
import TopRatedMovies from "../components/TopRatedMovies";

function Home() {
  

  return (
    <div className="py-4 px-4 sm:px-6 md:px-12 lg:px-24 xl:px-36 2xl:px-48">
      <NowPlaying />
      <PopularMovies />
      <TopRatedMovies />
      <UpcomingMovies />
    </div>
  );
}
export default Home;
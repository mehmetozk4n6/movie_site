import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { getNowPlayingMovies, selectNowPlaying } from "../redux/moviesSlice";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Navigation, Pagination, Autoplay } from "swiper";

const Slider: React.FC = () => {
  const nowPlaying = useAppSelector(selectNowPlaying);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (nowPlaying.length < 1) {
      dispatch(getNowPlayingMovies());
    }
  }, []);

  return (
    <div>
      <h2 style={{ margin: "0.8em 0 0.3em 1em" }}>In Theaters</h2>
      <Swiper
        cssMode={true}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {nowPlaying?.map((movie: any) => (
          <SwiperSlide key={movie.id}>
            <Link to={`/movie/${movie.id}`}>
              <img
                loading="lazy"
                src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                alt={movie.original_title}
                style={{ width: "100%" }}
              />
              <h2
                style={{
                  color: "white",
                  position: "absolute",
                  bottom: "3em",
                  left: "6em",
                  opacity: "0.5",
                }}
              >
                {movie.original_title}
              </h2>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;

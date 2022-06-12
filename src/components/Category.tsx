import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { getMoviesWithCategory, selectMovies } from "../redux/moviesSlice";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Navigation, Mousewheel, Keyboard } from "swiper";
import { Card, Info } from "./styled/Card.styled";
import { StyledH3, StyledHr } from "./styled/Category.styled";

interface CategoryProps {
  id: number;
  name: string;
}

const Category: React.FC<CategoryProps> = ({ id, name }) => {
  const movies = useAppSelector(selectMovies);
  const dispatch = useAppDispatch();

  const categoryMovies = movies.find((items: any) => items.id === id);

  useEffect(() => {
    if (!categoryMovies?.data) {
      dispatch(getMoviesWithCategory(id));
    }
  }, []);

  return (
    <div>
      <StyledH3>{name}</StyledH3>
      <StyledHr />
      <Swiper
        breakpoints={{
          300: {
            width: 300,
            slidesPerView: 2,
          },
          450: {
            width: 450,
            slidesPerView: 3,
          },
          600: {
            width: 600,
            slidesPerView: 4,
          },
          900: {
            width: 900,
            slidesPerView: 6,
          },
          1200: {
            width: 1200,
            slidesPerView: 8,
          },
        }}
        spaceBetween={20}
        navigation={true}
        mousewheel={true}
        keyboard={true}
        pagination={true}
        modules={[Navigation, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        {categoryMovies?.data.map((movie: any) => (
          <SwiperSlide key={movie.id}>
            <Card>
              <img
                loading="lazy"
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.original_title}
                style={{ width: "100%", borderRadius: "0.5em" }}
              />
              <Info className="info">
                <p>{movie.original_title}</p>
                <p>{movie.vote_average}</p>
                <Link to={`/movie/${movie.id}`}>
                  <button>Read More!</button>
                </Link>
              </Info>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
      <ul></ul>
    </div>
  );
};

export default Category;

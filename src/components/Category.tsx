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
      <h3 style={{ margin: "0.8em 0 0 0.8em " }}>{name}</h3>
      <hr
        style={{
          borderTop: "1px solid rgb(0,0,0,0.8)",
          width: "30%",
          marginBottom: "0.8em",
        }}
      />
      <Swiper
        slidesPerView={6}
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

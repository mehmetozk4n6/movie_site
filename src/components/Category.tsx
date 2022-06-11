import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { getMoviesWithCategory, selectMovies } from "../redux/moviesSlice";
import { Link } from "react-router-dom";

interface CategoryProps {
  id: number;
  name: string;
}

const Category: React.FC<CategoryProps> = ({ id, name }) => {
  const movies = useAppSelector(selectMovies);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getMoviesWithCategory(id));
  }, []);

  const categoryMovies = movies.find((items: any) => items.id === id);

  return (
    <div>
      <h3>{name}</h3>
      <ul>
        {categoryMovies?.data.map((movie: any, index: number) => (
          <Link key={index} to={`/movie/${movie.id}`}>
            <li key={index}>{movie.original_title}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Category;

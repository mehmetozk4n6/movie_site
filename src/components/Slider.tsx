import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { getNowPlayingMovies, selectNowPlaying } from "../redux/moviesSlice";
import { Link } from "react-router-dom";

const Slider: React.FC = () => {
  const nowPlaying = useAppSelector(selectNowPlaying);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getNowPlayingMovies());
  }, []);

  return (
    <div>
      <h3>Slider</h3>
      <ul>
        {nowPlaying?.map((movie: any, index: number) => (
          <Link key={index} to={`/movie/${movie.id}`}>
            <li key={index}>{movie.original_title}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Slider;

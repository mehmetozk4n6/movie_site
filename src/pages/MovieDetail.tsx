import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const MovieDetail: React.FC = () => {
  const [movieDetails, setMovieDetails] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const { movieId } = useParams();

  useEffect(() => {
    axios(
      `${process.env.REACT_APP_API_BASE_ENDPOINT}movie/${movieId}${process.env.REACT_APP_API_BASE_ENDPOINT_QUERY}`
    )
      .then((res) => res.data)
      .then((data) => setMovieDetails(data))
      .finally(() => setLoading(false));
  }, [movieId]);

  return (
    <div>
      {movieDetails && (
        <>
          <h1>{movieDetails.original_title}</h1>
          <img
            loading="lazy"
            src={`https://image.tmdb.org/t/p/w500${movieDetails.backdrop_path}`}
            alt={movieDetails.original_title}
          />
          <br />
          <pre>{JSON.stringify(movieDetails, null, 2)}</pre>
        </>
      )}
    </div>
  );
};

export default MovieDetail;

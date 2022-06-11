import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { StyledBody } from "../components/styled/Body.styled";
import { Container } from "../components/styled/Container.styled";

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
    <StyledBody>
      <Container>
        {movieDetails && (
          <>
            <h1>{movieDetails.original_title}</h1>
            <img
              loading="lazy"
              src={`https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`}
              alt={movieDetails.original_title}
            />
            <br />
            <pre>{JSON.stringify(movieDetails, null, 2)}</pre>
          </>
        )}
      </Container>
    </StyledBody>
  );
};

export default MovieDetail;

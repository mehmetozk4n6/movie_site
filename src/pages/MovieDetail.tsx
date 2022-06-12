import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { StyledBody } from "../components/styled/Body.styled";
import { Container } from "../components/styled/Container.styled";
import { DetailWrapper } from "../components/styled/DetailWrapper";
import Swal from "sweetalert2";

const MovieDetail: React.FC = () => {
  const [movieDetails, setMovieDetails] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const { movieId } = useParams();

  useEffect(() => {
    Swal.showLoading();

    axios(
      `${process.env.REACT_APP_API_BASE_ENDPOINT}movie/${movieId}${process.env.REACT_APP_API_BASE_ENDPOINT_QUERY}`
    )
      .then((res) => res.data)
      .then((data) => setMovieDetails(data))
      .then(() => Swal.close())
      .finally(() => setLoading(false));
  }, [movieId]);

  return (
    <StyledBody>
      <Container>
        {movieDetails && (
          <DetailWrapper>
            <div className="poster">
              <img
                loading="lazy"
                src={`https://image.tmdb.org/t/p/original${movieDetails.poster_path}`}
                alt={movieDetails.original_title}
              />
            </div>
            <div className="description desc-wrap">
              <img
                loading="lazy"
                src={`https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`}
                alt={movieDetails.original_title}
                className="desc-bg"
              />
              <div className="desc-content">
                <div style={{ margin: "0 1.5em" }}>
                  <tr>
                    <th></th>
                    <th>
                      <h3>{movieDetails.original_title}</h3>
                    </th>
                  </tr>
                  <tr>
                    <td>Vote : </td>
                    <td>{movieDetails.vote_average}</td>
                  </tr>
                  <tr>
                    <td>Budget : </td>
                    <td>{movieDetails.budget} $</td>
                  </tr>
                  <tr>
                    <td>Genres : </td>
                    <td>
                      {movieDetails.genres
                        .map((genre: any) => genre.name)
                        .join(",")}
                    </td>
                  </tr>
                  <tr>
                    <td>Original Language : </td>
                    <td>{movieDetails.original_language}</td>
                  </tr>
                  <tr>
                    <td>Release Date : </td>
                    <td>{movieDetails.release_date}</td>
                  </tr>
                  <tr>
                    <td>Runtime</td>
                    <td>{movieDetails.runtime} min</td>
                  </tr>
                  <tr>
                    <td>Overview : </td>
                    <td>{movieDetails.overview} min</td>
                  </tr>
                  <tr>
                    <td> </td>
                    <td>{movieDetails.tagline}</td>
                  </tr>
                </div>
              </div>
            </div>
          </DetailWrapper>
        )}
      </Container>
    </StyledBody>
  );
};

export default MovieDetail;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
import axios from "axios";

export interface GenreState {
  id: number;
  name: string;
}
export interface MoviesState {
  genres: Array<GenreState>;
  movies: Array<any>;
  nowPlaying: Array<any>;
  status: "idle" | "loading" | "failed" | "succeeded";
  error?: string | null;
}

const initialState: MoviesState = {
  genres: [],
  movies: [],
  nowPlaying: [],
  status: "idle",
  error: "",
};

export const getGenres = createAsyncThunk("movies/getGenres", async () => {
  const res = await axios(
    `${process.env.REACT_APP_API_BASE_ENDPOINT}genre/movie/list${process.env.REACT_APP_API_BASE_ENDPOINT_QUERY}`
  );
  return res.data.genres;
});
export const getMoviesWithCategory = createAsyncThunk(
  "movies/getMoviesWithCategory",
  async (id: number) => {
    const res = await axios(
      `${process.env.REACT_APP_API_BASE_ENDPOINT}movie/popular${process.env.REACT_APP_API_BASE_ENDPOINT_QUERY}&region=TR&with_genres=${id}`
    );
    return { id, data: res.data.results };
  }
);
export const getNowPlayingMovies = createAsyncThunk(
  "movies/getNowPlayingMovies",
  async () => {
    const res = await axios(
      `${process.env.REACT_APP_API_BASE_ENDPOINT}movie/now_playing${process.env.REACT_APP_API_BASE_ENDPOINT_QUERY}&page=1`
    );
    return res.data.results;
  }
);

export const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getGenres.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getGenres.fulfilled, (state, action) => {
        state.genres = action.payload;
        state.status = "succeeded";
      })
      .addCase(getGenres.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(getMoviesWithCategory.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getMoviesWithCategory.fulfilled, (state, action) => {
        state.movies = [...state.movies, action.payload];
        state.status = "succeeded";
      })
      .addCase(getMoviesWithCategory.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(getNowPlayingMovies.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getNowPlayingMovies.fulfilled, (state, action) => {
        state.nowPlaying = action.payload;
        state.status = "succeeded";
      })
      .addCase(getNowPlayingMovies.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const selectGenres = (state: RootState) => state.movies.genres;
export const selectMovies = (state: RootState) => state.movies.movies;
export const selectNowPlaying = (state: RootState) => state.movies.nowPlaying;
export const selectStatus = (state: RootState) => state.movies.status;
export const selectError = (state: RootState) => state.movies.error;

export default moviesSlice.reducer;

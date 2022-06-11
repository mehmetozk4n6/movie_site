import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "./store";
import axios from "axios";

export interface GenreState {
  id: number;
  name: string;
}
export interface MoviesState {
  genres: GenreState[] | null;
  movies: any;
  nowPlaying: any;
  status: "idle" | "loading" | "failed" | "succeeded";
  error?: string;
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

  reducers: {
    increment: (state: any) => {
      state.value += 1;
    },
    decrement: (state: any) => {
      state.value -= 1;
    },

    incrementByAmount: (state: any, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },

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

export const { increment, decrement, incrementByAmount } = moviesSlice.actions;

export const selectGenres = (state: RootState) => state.movies.genres;
export const selectMovies = (state: RootState) => state.movies.movies;
export const selectNowPlaying = (state: RootState) => state.movies.nowPlaying;

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.
// export const incrementIfOdd =
//   (amount: number): AppThunk =>
//   (dispatch, getState) => {
//     const currentValue = selectCount(getState());
//     if (currentValue % 2 === 1) {
//       dispatch(incrementByAmount(amount));
//     }
//   };

export default moviesSlice.reducer;

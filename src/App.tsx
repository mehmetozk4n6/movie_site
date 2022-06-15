import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { myTheme } from "./components/styled/Theme";
import GlobalStyles from "./components/styled/Global";
import { Helmet } from "react-helmet";
import { useAppSelector } from "./redux/hooks";
import { selectIsLight } from "./redux/moviesSlice";
import { StyledBody } from "./components/styled/Body.styled";
import Header from "./components/Header";
import Footer from "./components/Footer";
const HomePage = lazy(() => import("./pages/HomePage"));
const MovieDetail = lazy(() => import("./pages/MovieDetail"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Loading: React.FC = () => {
  return <h1>Loading...</h1>;
};

function App() {
  const isLight = useAppSelector(selectIsLight);
  return (
    <>
      <Helmet>
        <title>BeMyConnect</title>
        <meta name="bemyconnect" content="Movies,TvShows" />
      </Helmet>
      <ThemeProvider theme={myTheme}>
        <GlobalStyles />
        <BrowserRouter>
          <Header isLight={isLight} />
          <StyledBody isLight={isLight}>
            <Suspense fallback={<Loading />}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="movie/:movieId" element={<MovieDetail />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </StyledBody>
        </BrowserRouter>
        <Footer isLight={isLight} />
      </ThemeProvider>
    </>
  );
}

export default App;

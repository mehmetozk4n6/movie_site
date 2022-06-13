import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MovieDetail from "./pages/MovieDetail";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ThemeProvider } from "styled-components";
import { myTheme } from "./components/styled/Theme";
import GlobalStyles from "./components/styled/Global";
import NotFound from "./pages/NotFound";
import { Helmet } from "react-helmet";
import { useAppSelector } from "./redux/hooks";
import { selectIsLight } from "./redux/moviesSlice";
import { StyledBody } from "./components/styled/Body.styled";

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
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="movie/:movieId" element={<MovieDetail />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </StyledBody>
        </BrowserRouter>
        <Footer isLight={isLight} />
      </ThemeProvider>
    </>
  );
}

export default App;

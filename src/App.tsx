import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MovieDetail from "./pages/MovieDetail";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ThemeProvider } from "styled-components";
import { myTheme } from "./components/styled/Theme";
import GlobalStyles from "./components/styled/Global";

function App() {
  return (
    <>
      <ThemeProvider theme={myTheme}>
        <GlobalStyles />
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="movie/:movieId" element={<MovieDetail />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;

import React, { useEffect } from "react";
import Categories from "../components/Categories";
import Slider from "../components/Slider";
import { Container } from "../components/styled/Container.styled";
import Swal from "sweetalert2";
import { useAppSelector } from "../redux/hooks";
import { selectStatus } from "../redux/moviesSlice";

const HomePage: React.FC = () => {
  const status = useAppSelector(selectStatus);
  useEffect(() => {
    if (!(status === "succeeded" || status === "failed")) {
      Swal.showLoading();
    } else {
      Swal.close();
    }
  }, [status]);
  return (
    <Container>
      <Slider />
      <Categories />
    </Container>
  );
};

export default HomePage;

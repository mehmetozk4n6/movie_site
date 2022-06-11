import React from "react";
import Categories from "../components/Categories";
import Slider from "../components/Slider";
import { StyledBody } from "../components/styled/Body.styled";
import { Container } from "../components/styled/Container.styled";

const HomePage: React.FC = () => {
  return (
    <StyledBody>
      <Container>
        <Slider />
        <Categories />
      </Container>
    </StyledBody>
  );
};

export default HomePage;

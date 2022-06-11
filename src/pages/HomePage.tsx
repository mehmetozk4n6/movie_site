import React from "react";
import Categories from "../components/Categories";
import Slider from "../components/Slider";

const HomePage: React.FC = () => {
  return (
    <div>
      <Slider />
      <Categories />
    </div>
  );
};

export default HomePage;

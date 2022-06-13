import React from "react";
import { Container } from "./styled/Container.styled";
import { StyledHeader } from "./styled/Header.styled";
import { TbMovie } from "react-icons/tb";
import { FaRegLightbulb } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../redux/hooks";
import { lighten } from "../redux/moviesSlice";

interface HeaderProps {
  readonly isLight: boolean;
}

const Header: React.FC<HeaderProps> = ({ isLight }) => {
  const dispatch = useAppDispatch();
  return (
    <StyledHeader isLight={isLight}>
      <Container style={{ display: "flex", justifyContent: "space-between" }}>
        <Link to="/">
          <TbMovie size="2.5em" />
        </Link>
        <FaRegLightbulb
          style={{ cursor: "pointer" }}
          size="2.5em"
          onClick={() => dispatch(lighten())}
        />
      </Container>
    </StyledHeader>
  );
};

export default React.memo(Header);

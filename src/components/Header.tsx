import React from "react";
import { Container } from "./styled/Container.styled";
import { StyledHeader } from "./styled/Header.styled";
import { TbMovie } from "react-icons/tb";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <Container>
        <Link to="/">
          <TbMovie size="2em" />
        </Link>
      </Container>
    </StyledHeader>
  );
};

export default Header;

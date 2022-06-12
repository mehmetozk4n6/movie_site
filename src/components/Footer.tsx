import React from "react";
import { Container } from "./styled/Container.styled";
import { StyledFooter } from "./styled/Footer.styled";
import { AiFillGithub } from "react-icons/ai";

const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <Container>
        <div className="footerwrapper">
          <div className="footer1">
            <div className="footer11">
              <p>FAQ</p>
              <p>Terms of Use</p>
              <p>Contact Us</p>
            </div>
            <div className="footer12">
              <p>Help Center</p>
              <p>Privacy</p>
            </div>
            <div className="footer13">
              <p>Account</p>
            </div>
          </div>
          <div className="footer2">
            <p>
              <b>Discover</b>
            </p>
            <p>Movies</p>
            <p>TV Shows</p>
            <p>Live Channels</p>
          </div>
          <div className="footer3">
            <hr />
            <p>Used The Movie Database API</p>
          </div>
          <div className="footer4">
            <a href="https://github.com/mehmetozk4n6">
              <AiFillGithub size="1.5em" />
            </a>
          </div>
        </div>
      </Container>
    </StyledFooter>
  );
};

export default React.memo(Footer);

import styled from "styled-components";

export const DetailWrapper = styled.div`
  @media (grid: 0) {
    @media (min-width: 450px) {
      display: grid;
      grid-template-columns: 1fr 3fr;
      grid-template-areas: "poster description";
      .poster {
        grid-area: poster;
      }
      .description {
        grid-area: description;
      }
    }
  }
  .desc-wrap {
    overflow: hidden;
    position: relative;
  }

  .desc-bg {
    opacity: 0.3;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: auto;
  }

  .desc-content {
    position: relative;
    left: 1em;
  }
`;

import styled from "styled-components";

export const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.background_colors?.footer};
  color: ${({ theme }) => theme.colors?.footer};
  padding: 2em 0;
  p {
    padding: 1em 0;
  }
  @media (grid: 0) {
    @media (min-width: 450px) {
      .footerwrapper {
        display: grid;
        grid-template-rows: 4fr 1fr;
        grid-template-columns: 3fr 2fr;
        gap: 0;
        grid-template-areas:
          "footer1 footer2"
          "footer3 footer4";
      }

      .footer1 {
        grid-area: footer1;
        display: grid;
        gap: 0;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-areas: "footer11 footer12 footer13";
      }
      .footer11 {
        grid-area: footer11;
      }
      .footer12 {
        grid-area: footer12;
      }
      .footer13 {
        grid-area: footer13;
      }
      .footer2 {
        grid-area: footer2;
        margin: auto;
      }
      .footer3 {
        grid-area: footer3;
      }
      .footer4 {
        grid-area: footer4;
        margin-left: auto;
      }
    }
  }
`;

import styled from "styled-components";

export const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.background_colors?.footer};
  color: ${({ theme }) => theme.colors?.footer};
`;

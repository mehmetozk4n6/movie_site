import styled from "styled-components";

export const StyledBody = styled.main`
  background-color: ${({ theme }) => theme.background_colors?.body};
  color: ${({ theme }) => theme.colors?.body};
  padding-bottom: 2em;
`;

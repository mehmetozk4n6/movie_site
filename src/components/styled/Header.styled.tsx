import styled from "styled-components";

interface StyledHeaderProps {
  readonly isLight: boolean;
}

export const StyledHeader = styled.header<StyledHeaderProps>`
  background-image: ${({ theme, isLight }) =>
    !isLight
      ? theme.background_colors?.header
      : theme.background_colors?.headerlight};
  color: ${({ theme, isLight }) =>
    !isLight ? theme.colors?.header : theme.colors?.headerlight};
  padding: 0.5em 0;
`;

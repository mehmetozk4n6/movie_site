import styled from "styled-components";

interface BodyProps {
  readonly isLight: boolean;
}

export const StyledBody = styled.main<BodyProps>`
  background-color: ${({ theme, isLight }) =>
    !isLight
      ? theme.background_colors?.bodylight
      : theme.background_colors?.body};
  color: ${({ theme, isLight }) =>
    !isLight ? theme.colors?.bodylight : theme.colors?.body};
  padding-bottom: 2em;
`;

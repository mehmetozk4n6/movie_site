import styled from "styled-components";

export const StyledHeader = styled.header`
  background-image: ${({ theme }) => theme.background_colors?.header};
  color: ${({ theme }) => theme.colors?.header};
  padding: 0.5em 0;
`;

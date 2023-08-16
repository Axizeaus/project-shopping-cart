import styled from "styled-components";

export const LayoutContainer = styled.div`
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  min-height: 100vh;
`;

export const Heading = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

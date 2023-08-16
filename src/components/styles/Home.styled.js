import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
`;

export const Heading = styled.h1`
  font-size: 36px;
  margin-bottom: 20px;
`;

export const Subheading = styled.p`
  font-size: 18px;
  text-align: center;
`;

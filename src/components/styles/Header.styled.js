import styled from "styled-components";
import { NavLink } from "react-router-dom";

const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.secondary};
  padding: 30px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  h1 {
    margin-left: 10px;
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

const StyledNavLink = styled(NavLink)`
  background-color: ${({ theme }) => theme.colors.secondary};
  margin: 10px;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1em;
  padding: 10px;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: 10px;
  text-decoration: none;
  transition: background-color 0.3s, color 0.3s, transform 0.3s,
    border-color 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.secondary};
    border-color: ${({ theme }) => theme.colors.secondary};
    transform: scale(1.05);
  }

  &.active {
    background-color: #27ae60; /* New active link background color (green) */
    color: white;
    border-color: transparent;
  }
`;

export { StyledHeader, StyledNavLink };

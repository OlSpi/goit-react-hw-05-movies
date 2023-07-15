import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
`;

export const NavStyledLink = styled(NavLink)`
  color: black;
  margin-right: 10px;
  text-decoration: none;
  color: #000;
  padding: 5px;
  font-weight: bold;
  font-size: 16px;

  &.active {
    color: rgb(48, 65, 178);
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #333;
  font-size: 16px;

  &:hover {
    color: rgb(48, 65, 178);
  }
`;

export const ButtonLink = styled(Link)`
  padding: 7px 10px;
  background-color: aliceblue;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border: none;
  border-radius: 5px;
  color: black;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    background-color: rgb(48, 65, 178);
    color: white;
  }
`;

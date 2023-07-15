import { StyledLink } from 'components/styled';

const { Outlet } = require('react-router-dom');

const NavMoviedetails = ({ movieId }) => {
  return (
    <>
      <h3>Additional information</h3>
      <ul>
        <li>
          <StyledLink to={`/movies/${movieId}/cast`}>Cast</StyledLink>
        </li>
        <li>
          <StyledLink to={`/movies/${movieId}/reviews`}>Reviews</StyledLink>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default NavMoviedetails;
